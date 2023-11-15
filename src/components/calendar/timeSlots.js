import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import moment from 'moment';

const TimeSlotBox = ({item,hours,setHours,selectedDates}) => {
  const [minutes,setMinutes]=useState(0);

  const [validSlots,setValidSlots]=useState([]);

  const getMinutes=async (item)=>{
    const minute= await item?.from?.split(" ")[0]?.split(":")[1] -item?.to?.split(" ")[0]?.split(":")[1];
    setMinutes(minute);

  }

  async function generateTimeSlots(minutes,selectedDates) {
    const start = await moment().startOf('day').startOf('day').hours(
      new Intl.DateTimeFormat("en-CA", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(new Date()) == selectedDates?new Date().getHours()+1:8
      );
    const end = await moment().endOf('day').startOf('day').hours(23);
    const timeSlots = [];
  
    while (start.isBefore(end)) {
      timeSlots.push(start.format('h:mm A'));
      start.add(minutes||30, 'minutes');
    }
  
    setValidSlots(timeSlots);
  }
  

  useEffect(()=>{
    getMinutes(item)
  },[]);
  
  return (

    <div className={`px-2 group py-2 relative rounded-lg border text-primary cursor-pointer focus:ring-primary focus:ring-2 border-l-4 ${new Date(selectedDates) <=new Date() && !validSlots.some(element=>element == item.from)?"border-l-red-500":item.isBooked?"border-l-[#2467F6]":""} ${hours.from ==item.from && hours.to ==item.to?"bg-[#2467F6] text-white border-l-[#F4F5F8]":"hover:bg-white"}`}
    onClick={()=>{
      new Date(selectedDates) <=new Date() && !validSlots.some(element=>element == item.from)?toast.error("This time is expired"):item.isBooked?toast.error("This time is taken"):setHours({...hours,from:item.from,to:item.to,hourId:item._id})
    }}>
      <p  className="text-xs text-center">{item.from}-{item.to}</p>
      <div className={`px-2 justify-center items-center text-xs absolute z-20 -top-2 border  text-white hidden ${new Date(selectedDates) <=new Date() && !validSlots.some(element=>element == item.from)? "border-red-500 bg-red-500 group-hover:flex":item.isBooked?"border-[#2467F6] bg-[#2467F6] group-hover:flex":""}`}>
        <p>{new Date(selectedDates) <=new Date() && !validSlots.some(element=>element == item.from)?"Expired":item.isBooked &&"Booked"}</p>
        </div>
    </div>
   
    
  )
}

export default TimeSlotBox