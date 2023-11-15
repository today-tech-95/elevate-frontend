import React, { useEffect, useState } from 'react'
import Tabs from "./../tabs"
import SessionCard from '../sessionCard';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { Loading } from '../../loading';
import { ErrorResponse } from '../../errorResponse';

const Appointment = () => {

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
 ];


  const renderDate = (separator=" ")=>{
    let newDate =  new Date()
    const month =  newDate.getMonth()
    const year = newDate.getFullYear()

    return `${monthNames[month]}${separator}${year}`
  }


  const [cookie] =useCookies();
  const [appointments,setAppointments]=useState([]);
  const [loading,setLoading] =useState(false);
  const [error,setError]=useState({
    status:false,
    errorMsg:""
  });

  const [filterStatus,setStatus]=useState("pending")

  const fetchAppointments=async()=>{
    setError({...error,status:false,errorMsg:""})
    try {
      setLoading(true)
      const res=await axios({
        url:`https://elevate-backend.vercel.app/api/v1/elevate/appointment?menter=${cookie?.user?.user?._id}`,
        method:"GET",
        params:{
          authToken: cookie?.user?.token,
          menter:cookie?.user?.user?._id,
        }
      })
      setAppointments(res?.data?.data);
      setLoading(false)
    } catch (error) {
      setError({...error,status:true,errorMsg:error})
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchAppointments();
  },[])

  const filteredData =appointments?.filter(item=>(item?.participants?.some(item=>item._id ==cookie?.user?.user?._id) || item.menter._id ==cookie?.user?.user?._id) && filterStatus ==='pending'?new Date(item.day) > new Date():filterStatus ==='past'?new Date(item.day) < new Date():item?.status?.toLowerCase() ===filterStatus.toLowerCase() )?.sort((a, b) => new Date(a.day) - new Date(b.day));



  return (
    <div className="w-full">
      <h4> Your Bookings</h4>
      <Tabs setStatus={setStatus} filterStatus={filterStatus}/>
      {loading?<Loading/>
      :!error.status?
        filteredData.length <=0?<p className="text-center p-2 text-gray-500">Appointment list is empty</p>
        :
        filteredData?.map((item,index)=>(
          <div key={index}>
            <h4>{new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "long",}).format(new Date(item.day))}</h4>
            <SessionCard item={item}/>
          </div>
        ))
        :
        <ErrorResponse errorMsg={error.errorMsg} retryHandler={fetchAppointments}/>

      }

      {/* <div>
        <h4 className="mt-2">{renderDate()}</h4>
        <SessionCard/>
        <SessionCard/>
      </div> */}
   
    </div>
  )
}

export default Appointment