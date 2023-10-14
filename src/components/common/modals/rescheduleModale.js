import React, { useState } from 'react';
import { DatePicker, Space,Modal,TimePicker  } from 'antd';
import {toast} from "react-toastify"

const RescheduleModal = () => {

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message,setMessage] = useState("")

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
    console.log(date, dateString);
};
  
const handleRescheduleAppointment = (event)=>{
  event.preventDefault();
  toast.success("Appointment rescheduled successfully");
}

  return (
    <>
      <button className="text-center py-1 w-full bg-transparent" onClick={showModal}>Reschedule appointment</button>
      <Modal title={<h2 className="text-center text-[#2467F6]">Schedule appointment</h2>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <p className="mt-2 mb-4 text-center">Why are you rescheduling the appointment?</p>
      <form onSubmit={handleRescheduleAppointment}>
      <div className="flex justify-between mb-4">
      <Space direction="vertical">
      <DatePicker size='large' onChange={onChange} />
    </Space>
    <Space>
    <TimePicker size='large' onChange={(value) => console.log(value)}  />
    </Space>
      </div>
        <div>
         <textarea
           value={message}
           onChange={(event)=>setMessage(event.target.value)}
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