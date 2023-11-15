import React,{Fragment,useEffect,useState} from 'react'
import SideBard from "./sideBar"
import TabContent from "./tabContent"
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { ErrorResponse } from '../../errorResponse'
import { Loading } from '../../loading'

const Settings = () => {

  const [activateTab,setActiveTab] = useState(1)

  const [cookies] = useCookies();

  const [userData,setUserData] = useState([]);
  const [error,setError]=useState({
    status:false,
    errorMsg:""
  });
  const [loading,setLoading] = useState(false) 

  async function getProfile(){
    try {
      setLoading(true)
      const res = await axios({
        url: `https://elevate-backend.vercel.app/api/v1/elevate/user/one/${cookies?.user?.user._id}`,
        method: "GET",
        params: {
          authToken: cookies?.user?.token,
        },
      });
      setUserData(res.data);
      setLoading(false)
    } catch (error) {
      setError({...error,status:true,errorMsg:error})
      setLoading(false)
    }
  }

  useEffect(()=>{
    getProfile();
  },[])


  return (
    <Fragment>
    <div className="mt-10">
      {loading && userData.length<=0?<Loading/>
      :
      <>
        <h4 className="mb-[24px] text-[#484D56] text-2xl font-bold">Profile and Settings</h4>
        <div className="w-full flex bg-white p-4 gap-[16px]">
        <SideBard setActiveTab={setActiveTab} activateTab={activateTab}/>
        
        <TabContent tab={activateTab} userData={userData} getProfile={getProfile}/>
        </div>
      </>
      }
      {error.status && <ErrorResponse errorMsg={error.errorMsg} retryHandler={getProfile}/>}

    </div>
    </Fragment>
  )
}

export default Settings