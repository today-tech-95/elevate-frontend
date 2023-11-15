import React from "react";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { SyncOutlined} from '@ant-design/icons';

const ProgressCard = ({ title, notes,loading,handleDelete }) => {
  return (
    <div class="max-w-sm rounded-md overflow-hidden bg-white">
      {/* <div className='opacity-50 text-[10px] mx-2 absolute top-0 right-0 cursor-pointer hover:opacity-40'>
        {loading?<SyncOutlined  spin/>:<DeleteIcon onClick={()=>handleDelete()}/>}
      </div> */}
      <div class="px-6 py-4">
        <div class="font-medium text-xl mb-2 flex justify-between uppercase"><h3 className="text-[#2A2F4E]">{title}</h3><MoreHorizOutlinedIcon className="cursor-pointer text-[#656B80]"/></div>
        <p class="text-gray-700 text-base">
          {notes}
        </p>
      </div>
    </div>
  );
};

export default ProgressCard;
