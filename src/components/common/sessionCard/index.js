import React,{useState,useEffect} from 'react'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Button, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import RescheduleModal from '../modals/rescheduleModale';
import CancelAppointmentModal from '../modals/cancelAppointment';
import { NavLink } from 'react-router-dom';

const items = [
    {
      key: '1',
      label: (
        <RescheduleModal/>
      ),
    },
    {
      key: '2',
      label: (
       <CancelAppointmentModal/>
      ),
    },
    {
      key: '3',
      label: (
        <NavLink to="/mentee/messages" >
         Chat with mentor
        </NavLink>
      ),
    },
  ];

const SessionCard = ({item}) => {

 

    const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
    "Sun"
   ];
  
   let newDate = new Date()
   const day = newDate.getDay()
   const date = newDate.getDate()
   const hour  = newDate.getHours()
   const minutes = newDate.getMinutes()
   
   const [properDay,setProperDay] = useState(day)

   useEffect(()=>{
     if(day===0){
      setProperDay(6)
     }
   },[day])
   
  return (
    <div className="mt-3 bg-white w-full rounded-md p-[32px] ">
    <div className="flex gap-[54px] items-center">

      <div className="w-[60px] flex flex-col border-r border-gray-200">
      <div><h1 className="font-black text-2xl text-[#2467F6]">{new Intl.DateTimeFormat("en-CA", {weekday: "short",}).format(new Date(item.day))}</h1></div>
      <div><h1 className="font-black text-2xl text-[#2467F6]">{new Intl.DateTimeFormat("en-CA", {day:"numeric",}).format(new Date(item.day))}</h1></div>
      </div>
      
      <div className="w-[136px] flex flex-col  gap-3">
        <div className="flex items-center gap-2">
        <div className="flex gap-2">
        <AccessTimeOutlinedIcon className="text-sm text-[#646B79]"/><span>{item.start_date}</span>
        </div>
        <div>-</div>
        <div className="flex gap-2">
        <span>{item.end_date}</span>
        </div>
        </div>
        <div className="flex gap-2"><FmdGoodOutlinedIcon className="text-sm text-[#646B79]"/><span>Online</span></div>
      </div>

      <div className="flex flex-col gap-3">
        <p className='truncate'>{item.title} with {item.participants?.map(item=>(<span>{item.firstName +" "+item.lastName}</span>))}</p>
        <div className="flex -space-x-2">
        <img
          className="w-8 h-8   rounded-full object-cover"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <img
          className="w-8 h-8   rounded-full object-cover"
          src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        
      </div>
      </div>

      <div className="flex justify-center gap-10">
      <button className="px-8 py-1 bg-[#2467F6] h-10 text-white rounded-md">Join Meeting</button>
      <Dropdown
      className="px-8"
      arrow
      menu={{
        items,
       
      }}
      placement="bottomLeft"
      
    >
    <Button className="flex justify-center items-center bg-[#D0DFFC] text-[#2467F6] "  size="large"> Edit <DownOutlined /></Button>
    </Dropdown>
      </div>
    </div>
    </div>
  )
}

export default SessionCard