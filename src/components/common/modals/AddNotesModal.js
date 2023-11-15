import React, { useState } from 'react';
import { Modal } from 'antd';
import { SyncOutlined} from '@ant-design/icons';


const NotesModal = ({setFormValues,formValues,handleAddNotes,loading}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <button className="text-center py-2 px-4  bg-[#2467F6] text-white rounded-md mt-4 " onClick={showModal}>Add Note</button>
      <Modal title={<h2 className="text-center text-[#2467F6]">Add Note</h2>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        
      <form onSubmit={handleAddNotes}>
      <div className="mb-2">
      <input placeholder='Title' 
      type="text"
      required 
      className="w-full border border-gray-500 rounded-md p-2 focus:outline-none"
      value={formValues.title}
      onChange={(event)=>setFormValues({
        ...formValues,
        title:event.target.value
      })}
      />
      </div>
        <div>
         <textarea
           value={formValues.description}
           onChange={(event)=>setFormValues({
            ...formValues,
            description:event.target.value
          })}
          required
           rows={5}  placeholder='Your note here' className="w-full border border-gray-500 rounded-md p-2 focus:outline-none"/>
           </div>
        <div>
         <button disabled={formValues.description===""||formValues.title===""} type='submit' className={(formValues.description==="" ||formValues.title==="")?"text-center py-3 w-full bg-[#2467F6] opacity-20 text-white rounded-md mt-2 mb-2":"text-center py-3 w-full bg-[#2467F6] text-white rounded-md mt-2 mb-2"}>
           {loading?<SyncOutlined spin/>:"Add Note"} 
          </button>
        </div>
        <div><span onClick={handleCancel} className="text-[#2467F6] font-bold text-center block cursor-pointer">No, go back</span></div>
        </form>
      </Modal>
    </>
  );

};
export default NotesModal;