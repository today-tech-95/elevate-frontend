/* eslint-disable no-unused-vars */
import React,{useEffect} from "react";
import DriveFileRenameOutlineOutlined from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import EducationTimeLine from "./settingTimeline";
import TimeLineChildren from "./timeLineContent";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import AddIcon from '@mui/icons-material/Add';
import { Cancel } from "@mui/icons-material";
import moment from 'moment';
import { useState } from "react";
import axios from "axios"
import { useCookies } from 'react-cookie'
import { toast } from "react-toastify";
import { SyncOutlined} from '@ant-design/icons';

const EductionTimelineData = [
  {
    children: (
      <TimeLineChildren
        title="Adventist university of central Africa"
        dateTime="Aug 2022 - Present - 1 yr"
      />
    ),
    dot: <ApartmentOutlinedIcon />,
  },
  {
    children: (
      <TimeLineChildren
        title="Adventist university of central Africa"
        dateTime="Aug 2022 - Present - 1 yr"
      />
    ),
    dot: <ApartmentOutlinedIcon />,
  },
  {
    children: (
      <TimeLineChildren
        title="Adventist university of central Africa"
        dateTime="Aug 2022 - Present - 1 yr"
      />
    ),
    dot: <ApartmentOutlinedIcon />,
  },
];

function generateTimeSlots(minutes,day) {
  const start = moment().startOf('day').startOf('day').hours(
    new Intl.DateTimeFormat("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date()) === day?new Date().getHours()+1:8
    );
  const end = moment().endOf('day').startOf('day').hours(23);
  const timeSlots = [];

  while (start.isBefore(end)) {
    timeSlots.push(start.format('h:mm A'));
    start.add(minutes||30, 'minutes');
  }

  return timeSlots;
}


const AddAvailability=({open,handler})=>{
  const [minutes,setMinutes]=useState(30);

  const [day,setDay]=useState("");
  const [hours,setHours]=useState([]);
  const [timeError,setTimeError]=useState({
    error:false,
    errorName:""
  })
  const [loading,setLoading]=useState(false)
  const [cookies]=useCookies();


  const timeSlots = generateTimeSlots(minutes,day);  

  const handleSend=async(e)=>{
    e.preventDefault();

    if (hours.length<=0) {
      setTimeError({
        ...timeError,
        error:true,
        errorName:"Please choose time"
      })
    
    }else{
      try{
        setLoading(true)
        const res = await axios({
          url:"https://elevate-backend.vercel.app/api/v1/elevate/menter/availability",
          method:'POST',
          params: {
            authToken: cookies?.user?.token,
          },
          headers:{
            "Content-Type":"application/json"
          },
          data:{
            "menter":`${cookies?.user?.user?._id}`,
            "availability":[
              {
              "day":day,
              "hours":hours
              }
            ]
          },
        })
        toast.success(res?.data.message);
        setLoading(false);
      }catch(error){
        toast.error(error.message);
        setLoading(false);
      }
    }
}

  return(
    <div className="z-40 bg-white flex bg-opacity-50 absolute top-0 w-full overflow-hidden py-2 px-4">
      <button
        className="absolute z-20 right-2 top-2 flex justify-center rounded-full items-center gap-4 w-8 h-8 px-2 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#1C1F23] border border-transparent drop-shadow active:bg-[#1C1F23] hover:bg-[#1C1F23] hover:drop-shadow hover:shadow-xl focus:outline-none"
        href="#"
        onClick={()=>handler(!open)}
      >
        <Cancel/>
      </button>
      <div className="bg-[#F4F5F8] px-4 py-4 overflow-y-auto mt-4 w-11/12 mx-auto shadow-lg rounded-lg h-[500px] ">
        <form className="mb-2" onSubmit={(e)=>handleSend(e)}>
          <div className="py-2 mb-2">
            <label className="">Choose date</label>
            <input type='date' value={day} name="search" className='w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600' required
            min={new Intl.DateTimeFormat("en-CA", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }).format(new Date())}
            onChange={(e)=>{
                setDay(e.target.value)
            }}
            />
          </div>

          <div className="py-2 mb-2">
            <label className="">Type session duration in minutes</label>
            <input type='number' value={minutes} name="search" className='w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600' required
            onChange={(e)=>{
              setMinutes(e.target.value)
            }}
            />
          </div>

          <div className={`py-2 mb-2`}>
            <label>Choose time(clicks all apply)</label>
            <p className="text-xs text-red-500">{timeError.error?"Please choose time":""}</p>
            <div className={`grid lg:grid-cols-4 grid-cols-2 gap-2 my-4 overflow-y-auto px-2 py-2 border ${timeError.error?"border-red-500":"border-[#F4F5F8]"}`}>
              {timeSlots.map((slot,index)=>(
                index+1>timeSlots.length-1?""
                :
                <div className="flex items-center" key={index}>
                    <div className={`px-2 py-2 cursor-pointer  rounded-lg border text-primary  border-primary focus:ring-primary focus:ring-2 ${hours.some(item=>item.from ==slot && item.to ==timeSlots[index+1])?"bg-[#2467F6] text-white":"hover:bg-white"}`}
                    onClick={()=>{
                      if(hours.some(item=>item.from ===slot && item.to ===timeSlots[index+1])){
                        setHours((state) => state.filter(item=>item.from !==slot && item.to !==timeSlots[index+1]))
                      }else
                        setHours((state)=>[...state,{"from":`${slot}`, "to":`${timeSlots[index+1]}`}]);
                    }}
                    >
                      <span  className="text-sm font-medium">{slot}-{timeSlots[index+1]}</span>
                    </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="flex justify-center items-center gap-4 w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#007bff] border border-transparent rounded-lg  focus:outline-none"
            href="#"
          >
            {loading? <SyncOutlined  spin/>:"Save"}
          </button>
        </form>



      </div>
    </div>
  )
}

const Availability = ({data}) => {
  const [openModal,setOpenModal] = useState(false);  
  const [cookies]=useCookies();
  const [availabilityData,setAvailabilityData]=useState([]);
  const [loading,setLoading]=useState(false)


    const getAvailability=async()=>{
        try{
            setLoading(false);
            const res=await axios({
                url:`https://elevate-backend.vercel.app/api/v1/elevate/menter/availability`,
                method:"GET",
                params:{
                    authToken: cookies?.user?.token,
                    menter:cookies?.user?.user?._id,
                }
            })

            setAvailabilityData(res.data.data);
            setLoading(false)

        }catch(err){
            setLoading(false)
            console.log(err);
        }
    }

    const filteredData =availabilityData?.filter(item=>item?.menter?._id == cookies?.user?.user?._id);


    const groupedData = filteredData?.reduce((acc, item) => {
        const { availability, ...rest } = item;
        
        if (!acc[availability[0].day]) {
          acc[availability[0].day] = [];
        }
        
        acc[availability[0].day].push(item);
        
        return acc;
      }, {});

    const dataSorted=Object.keys(groupedData).sort()
    .reduce((accumulator, key) => {
      accumulator[key] = groupedData[key];
  
      return accumulator;
    }, {});

    const [filterStatus,setStatus]=useState("upcoming");

    const filteredDataBydate =Object.keys(dataSorted)?.filter(item=>filterStatus ==='upcoming'?new Date(item) > new Date():new Date(item) < new Date());
    

  useEffect(()=>{
    getAvailability()
  },[])

  return (
    <div className="w-full rounded-[12px] border border-[#B1B8C5] relative h-[500px] overflow-hidden ">
      <div className="mb-3 sticky top-0 bg-white px-4 py-2 drop-shadow-lg">
        <div className="flex justify-between items-center">
          <h4 className="text-[#484D56] text-2xl">Your schedules</h4>
          <button className="flex px-5 gap-2 py-2 border border-gray-300 justify-center items-center rounded-full" onClick={()=>setOpenModal(!openModal)}>
            <span className="block text-[#565C67]">Add</span>{" "}
            <span className="block">
              <AddIcon className="text-[14px] text-[#9AA3B4]"/>
            </span>
          </button>
        </div>
        <div>
          
          <button className={filterStatus==="recent"? "px-2 py-1 bg-[#2467F6] border text-white border-gray-200 rounded-md":"px-2 py-1"} onClick={()=>setStatus('recent')}>Recent</button>
          <button className={filterStatus==="upcoming"? "px-2 py-1 bg-[#2467F6] border text-white border-gray-200 rounded-md":"px-2 py-1"} onClick={()=>setStatus('upcoming')}>Upcoming</button>

        </div>
      </div>
      

      {filteredDataBydate?.length <=0?
      <p className="text-center p-2 text-gray-500">No schedules data is added yet</p>
      :
      <div className="h-[300px] overflow-auto">
        {filteredDataBydate?.map(item=>{
          return(
            <div className="text-[#646B79] px-4 py-2">
                <label className="bg-[#007bff] px-4 py-2 rounded-lg text-white  font-bold">{new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",day: "2-digit",}).format(new Date(item))}</label>
                <div className={`grid lg:grid-cols-5 grid-cols-3 gap-2 my-4 overflow-y-auto px-2 py-2`}>
                  {dataSorted[item][0]?.availability[0]?.hours?.map((item)=>(
                    <div className={`px-2 py-2 cursor-pointer  rounded-lg border text-primary focus:ring-primary focus:ring-2 border-l-4 ${item.isBooked?"border-l-[#2467F6]":""}`}>
                      <p  className="text-sm text-center">{item.from}-{item.to}</p>
                    </div>
                  ))}
                </div>
            </div>
            )
            
        })}
      </div>
      }
      {openModal && <AddAvailability open={openModal} handler={setOpenModal}/>}
    </div>
  );
};

export default Availability;
