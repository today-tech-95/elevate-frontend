/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from "react";
import TimeSlotBox from "./timeSlots";
import AppointmentModal from "./../common/modals/appointmentModal"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import "./calendar.css"
import axios from "axios";
import {toast} from "react-toastify"
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import { Loading } from "../loading";
import { ErrorResponse } from "../errorResponse";


const MyCalendar = () => {
  const [cookies] = useCookies(["user"]);
  const [selectedDates,setSelectedDates] = useState("")
  const [loading,setLoading] = useState(false);
  const [loading2,setLoading2] = useState(false)

  const [availabilityData,setAvailabilityData]=useState([]);
  const params=useParams();

  const [error,setError]=useState({
    status:false,
    errorMsg:""
  });

  const [hours,setHours]=useState({
    from:"",
    to:"",
    hourId:""
  });

  const getAvailability=async()=>{
    setError({...error,status:false,errorMsg:""})
    try{
      setLoading2(false);
      const res=await axios({
          url:`https://elevate-backend.vercel.app/api/v1/elevate/menter/availability`,
          method:"GET",
          params:{
              authToken: cookies?.user?.token,
              menter:cookies?.user?.user?._id,
          }
      })

      setAvailabilityData(res.data.data);
      setLoading2(false)

    }catch(err){
      setLoading2(false)
      setError({...error,status:true,errorMsg:err})
    }
  }

  const filteredData =availabilityData?.filter(item=>item?.menter?._id == params.id);


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

  const enabledDates=Object.keys(dataSorted);


  const tileDisabled = ({ date, view }) => {
    // Disable dates if they are in the enabledDatess array
    return enabledDates?.every(enabledDates =>
      date.getFullYear() !== new Date(enabledDates)?.getFullYear() ||
      date.getMonth() !== new Date(enabledDates)?.getMonth() ||
      date.getDate() !== new Date(enabledDates)?.getDate()
    );
  };

  const tileClassName = ({ date, view }) => {
    const isDisabled = enabledDates.every(enabledDate =>
      date.getFullYear() !== new Date(enabledDate)?.getFullYear() ||
      date.getMonth() !== new Date(enabledDate)?.getMonth() ||
      date.getDate() !== new Date(enabledDate)?.getDate()
    );

    const isActiveView = new Date(selectedDates)?.toDateString() === date.toDateString();


    return isDisabled ? 'disabled' : isActiveView ? 'selected' : 'enabled';
  };

    

  useEffect(()=>{
    getAvailability()
  },[])
  

  const handleDateChange = (date) => {
    setSelectedDates(
      new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",day: "2-digit",}).format(new Date(date))
    );
    setHours({...hours,from:'',to:'',hourId:''})
  };



  const handleSubmit = async(event)=>{
    event.preventDefault();
    if(selectedDates ==""){
      toast.error("Please select date");
    }else if(hours.hourId ==""){
      toast.error("Please specify time of oppointment");
    }else{
      try {
        setLoading(true)
        const {data} = await axios({
          url:"https://elevate-backend.vercel.app/api/v1/elevate/appointment",
          method:"POST",
          data:{
            day:selectedDates,
            start_date:hours.from,
            end_date:hours.to,
            title:"Meeting",
            menter:params.id,
            participants:[cookies?.user?.user?._id],
            type:"meeting",
            hourId:hours.hourId,
            isNotify:true,
            notification:{
              title:"Appointment",
              day:selectedDates,
              start_date:hours.from,
              end_date:hours.to,
              receiverIds:params.id
          }
          },
          headers:{
            authToken: cookies?.user?.token,
          }

        })
        toast.success(data.message);
        setLoading(false);
        console.log(data);

      } catch (err) {
        toast.error(err?.response?.data?.error)
        setLoading(false);
      }
    }
  }

  const handleReset=(event)=>{
    event.preventDefault();
    setHours({...hours,from:'',to:'',hourId:''})
    setSelectedDates("");
  }


 

  return (
    <>
      <div className="flex items-center justify-center px-2">
        {loading2?<Loading/>
        :!error.status?
        <div className="w-full">
          <div className="p-5 bg-white ">
            <h1 className="text-sm font-bold  text-[#2467F6] mb-3">
              Available Slots<span className="text-[#646B79] text-sm">(select date to see available slots)</span>
            </h1>
            <div className="flex justify-center items-center">
              <Calendar
              value={selectedDates}  
              onChange={handleDateChange}
              // tileContent={tileContent}
              tileDisabled={tileDisabled}
              tileClassName={tileClassName}
              />
            </div>
            <div>
              <h1 className="text-sm font-bold  text-[#2467F6] mt-2 mb-2">Time Slots available<span className="text-[#646B79] text-sm">({!selectedDates?"No date selected":selectedDates===""?      new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",day: "2-digit",}).format(new Date(enabledDates[0])):`${selectedDates}`})</span></h1>
              <div className="flex justify-between items-center gap-2">
                {!selectedDates?
                <p className="text-center p-2 text-gray-500">Please choose date to get sessions time</p>
                :
                <div className={`grid lg:grid-cols-3 w-full grid-cols-2 gap-2 my-4 overflow-y-auto px-2 py-2`}>
                  {dataSorted[`${selectedDates}T00:00:00.000Z`][0]?.availability[0]?.hours?.map((item,index)=>{
                    return(
                      <TimeSlotBox item={item} key={index} hours={hours} setHours={setHours} selectedDates={selectedDates}/>
                    )
                  })}
                </div>
                }
              </div>
           <AppointmentModal handleReset={handleReset} handleSubmit={handleSubmit} loading={loading} hours={hours} selectedDates={selectedDates}/>
            </div>
          </div>
        </div>
        :
        <ErrorResponse errorMsg={error.errorMsg} retryHandler={getAvailability}/>
        }
        

      </div>
    </>
  );
};

export default MyCalendar;
