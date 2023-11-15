import React from "react";
import DriveFileRenameOutlineOutlined from "@mui/icons-material/DriveFileRenameOutlineOutlined";

const Security = ({data}) => {
  return (
    <div className="w-full p-[24px] rounded-[12px] border border-[#B1B8C5]">
      <div className="flex justify-between items-center">
        <h4 className="text-[#484D56]">Security</h4>
        <button className="flex px-5 gap-2 py-2 border border-gray-300 justify-center items-center rounded-full">
          <span className="block text-[#565C67]">Update</span>{" "}
          <span className="block">
            <DriveFileRenameOutlineOutlined className="text-[14px] text-[#9AA3B4]" />
          </span>
        </button>
      </div>

      <div className="flex justify-between w-[480px] ">
        <div>
          <div className="flex flex-col">
            <div className="text-[#646B79]">Email</div>
            <div>{data}</div>
          </div>
        </div>

        <div>
          <div className="flex flex-col">
            <div className="text-[#646B79]">Password</div>
            <div>**********</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
