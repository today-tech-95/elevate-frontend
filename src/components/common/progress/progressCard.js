import React from "react";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const ProgressCard = ({ title, notes }) => {
  return (
    <div class="max-w-sm rounded-md overflow-hidden bg-white">
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
