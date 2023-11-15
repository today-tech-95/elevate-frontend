import React, { useState } from 'react';
import { Modal } from 'antd';
import { SyncOutlined} from '@ant-design/icons';

const AppointmentModal = ({handleSubmit,loading,hours,selectedDates,handleReset}) => {

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
      <div className='grid lg:grid-cols-2 gap-4'>
        <button className={`${!hours.hourId || !selectedDates?"opacity-20 cursor-not-allowed":"cursor-pointer"}text-center py-2 w-full bg-[#2467F6] text-white rounded-md mt-2 mb-2`} disabled={!hours.hourId || !selectedDates} onClick={showModal}>Book Section</button>
        <button className={`text-center py-2 w-full border border-[#2467F6] text-[#2467F6] rounded-md mt-2 mb-2`} onClick={handleReset}>Reset</button>
      </div>
      <Modal title={<h2 className="text-center text-[#2467F6]">Schedule appointment</h2>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <p className="mt-2 mb-2 text-center">You are going to set an appointment with this mentor</p>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div>
         <textarea
           value={message}
           onChange={(event)=>setMessage(event.target.value)}
           rows={5}  placeholder='Introduce yourself for the mentor' className="w-full border border-gray-500 rounded-md p-2 focus:outline-none"/>
           </div>
        <div>
         <button disabled={message===""} type='submit' className={message===""?"text-center py-3 w-full bg-[#2467F6] opacity-20 text-white rounded-md mt-2 mb-2":"text-center py-3 w-full bg-[#2467F6] text-white rounded-md mt-2 mb-2"}>
         {loading? <SyncOutlined  spin/>:"Schedule appointment"}
          </button>
        </div>
        <div><span onClick={handleCancel} className="text-[#2467F6] font-bold text-center block cursor-pointer">No, go back</span></div>
        </form>
      </Modal>
    </>
  );

};
export default AppointmentModal;