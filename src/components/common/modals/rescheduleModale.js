import React, { useState } from 'react';
import { Space,Modal,TimePicker  } from 'antd';
// import { DatePicker, Space,Modal,TimePicker  } from 'antd';
import {toast} from "react-toastify"
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const RescheduleModal = () => {

  const now = new Date()
  const day = now.getDay()
  const date = now.getDate()
  const year = now.getFullYear()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message,setMessage] = useState("")
  const [formValues,setFormValues]= useState({
    date:dayjs(`${day}/${date}/${year}`),
    startTime:"",
    endTime:"",
    message:""
  })

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (date, dateString) => {
    console.log("dateString", dateString);
    setFormValues({
      ...formValues,
      date:date
    })
};
  
const handleRescheduleAppointment = (event)=>{
  event.preventDefault();
  toast.success("Appointment rescheduled successfully");
}

console.log("formValues",formValues)
  return (
    <>
      <button className="text-center py-1 w-full bg-transparent" onClick={showModal}>Reschedule appointment</button>
      <Modal 
      title={<h2 className="text-center text-[#2467F6]">Schedule appointment</h2>} 
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel} 
      footer={null}
      width={"80%"}
      >
        <p className="mt-2 mb-4 text-center">Why are you rescheduling the appointment?</p>
      <form onSubmit={handleRescheduleAppointment}>
      <div className="flex justify-between mb-4">

      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label="Controlled picker"
          value={formValues.date}
          onChange={(newValue) => setFormValues({
            ...formValues,
            date:dayjs(newValue)
          })}
        />
        
      </DemoContainer>
    </LocalizationProvider>

    <Space>
    <TimePicker size='large' 
    value={formValues.startTime} 
    onChange={(value) =>setFormValues({
      ...formValues,
      startTime:value
    })} 
    placeholder='Start time'
    />
    </Space>

    <Space>
    <TimePicker size='large'  
    value={formValues.endTime}  
    onChange={(value) =>setFormValues({
      ...formValues,
      endTime:value
    })} 
    placeholder='End time'
    />
    </Space>

      </div>
        <div>
         <textarea
           value={formValues.message}
           onChange={(event)=>setMessage({
            ...formValues,
            message:event.target.value
           })}
           rows={5}  placeholder='Why are you rescheduling the appointment?' className="w-full border border-gray-500 rounded-md p-2 focus:outline-none"/>
          </div>
        <div>
         <button disabled={message===""} type='submit' className={message===""?"text-center py-3 w-full bg-[#2467F6] opacity-20 text-white rounded-md mt-2 mb-2":"text-center py-3 w-full bg-[#2467F6] text-white rounded-md mt-2 mb-2"}>Reschedule appointment</button>
        </div>
        <div><span onClick={handleCancel} className="text-[#2467F6] font-bold text-center block cursor-pointer">No, go back</span></div>
        </form>
      </Modal>
    </>
  );

};
export default RescheduleModal;