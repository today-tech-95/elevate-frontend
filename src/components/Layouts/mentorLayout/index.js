import React, { useEffect, useState } from 'react'
import TopBar from './topBar'
import SideBar from './sideBar'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { ErrorResponse } from '../../errorResponse';
import { Loading } from '../../loading';
import { Notifications } from '../menteeLayout';

const MenteeLayout = ({children}) => {
  const [openNotifications,setOpen] = useState(false);

  const [notification,setNotification] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError]=useState({
    status:false,
    errorMsg:""
  })

  const [cookie]=useCookies();


  const getNotifications=async()=>{
    setError({...error,status:false,errorMsg:""});
    try {
      setLoading(true)
      const res=await axios({
        url:"https://elevate-backend.vercel.app/api/v1/elevate/notification",
        method:'GET',
        params:{
          authToken:cookie?.user?.token
        }
      })
      setLoading(false)
      setNotification(res.data.data)
    } catch (error) {
      setError({...error,status:true,errorMsg:error});
      setLoading(false);
    }
  }

  useEffect(()=>{
    getNotifications();
  },[])


  const filterNotifications=notification?.filter(item=> item.sentTo?.some(item=> item.user == cookie?.user?.user?._id))
  return (
    <div className="bg-[#F4F5F8] h-screen mx-auto ">
    <div className="w-full relative ">
    <div className="bg-[#2467F6]">
    <TopBar setOpen={setOpen} openNotifications={openNotifications} count={filterNotifications.length}/>
    </div>
    <div className="w-[210px] absolute top-20 left-0 bottom-0 h-[550px] bg-white px-2">
    <SideBar/>
    </div>
    <main className={`absolute top-20 left-[220px] w-10/12 px-5 ${openNotifications?"overflow-hidden":"overflow-y-auto"} h-[550px]`}>
    {children}
    {openNotifications && <Notifications 
    error={error}
    loading={loading}
    filterNotifications={filterNotifications}
    getNotifications={getNotifications}
    />}
    </main>
    </div>
    </div>
    
  )
}

export default MenteeLayout