import React, { useState } from 'react';
import { Modal } from 'antd';

const AppointmentModal = () => {

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
  
  return (
    <>
      <button className="text-center py-3 w-full bg-[#2467F6] text-white rounded-md mt-2 mb-2" onClick={showModal}>Book Section</button>
      <Modal title={<h2 className="text-center text-[#2467F6]">Schedule appointment</h2>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <p className="mt-2 mb-2 text-center">You are going to set an appointment with this mentor</p>
      <form>
        <div>
         <textarea
           value={message}
           onChange={(event)=>setMessage(event.target.value)}
           rows={5}  placeholder='Introduce yourself for the mentor' className="w-full border border-gray-500 rounded-md p-2 focus:outline-none"/>
           </div>
        <div>
         <button disabled={message===""} type='submit' className={message===""?"text-center py-3 w-full bg-[#2467F6] opacity-20 text-white rounded-md mt-2 mb-2":"text-center py-3 w-full bg-[#2467F6] text-white rounded-md mt-2 mb-2"}>Schedule appointment</button>
        </div>
        <div><span onClick={handleCancel} className="text-[#2467F6] font-bold text-center block cursor-pointer">No, go back</span></div>
        </form>
      </Modal>
    </>
  );

};
export default AppointmentModal;