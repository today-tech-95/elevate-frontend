import React from "react";
import DriveFileRenameOutlineOutlined from "@mui/icons-material/DriveFileRenameOutlineOutlined";

const Address = ({data}) => {

  return (
    <div className="w-full p-[24px] rounded-[12px] border border-[#B1B8C5]">
      
    <div className="flex justify-between items-center">
        <h4 className="text-[#484D56]">Address</h4>
        <button className="flex px-5 gap-2 py-2 border border-gray-300 justify-center items-center rounded-full">
          <span className="block text-[#565C67]">Edit</span>{" "}
          <span className="block">
            <DriveFileRenameOutlineOutlined className="text-[14px] text-[#9AA3B4]" />
          </span>
        </button>
      </div>
      {!data?.address?<p className="text-center p-2 text-gray-500">You have no address yet</p>
      :
      <div className="flex justify-between w-[480px] ">
        <div>
          <div className="flex flex-col">
            <div className="text-[#646B79]">Country</div>
            <div className="capitalize">{data?.address?.country}</div>
            <div className="text-[#646B79]">Postal code</div>
            <div>{data?.address?.postalCode}</div>
          </div>
        </div>

        <div>
          <div className="flex flex-col">
            <div className="text-[#646B79]">City / Province</div>
            <div className="capitalize">{data?.address?.provence}</div>
            <div className="text-[#646B79]">Phone</div>
            <div>{data?.address?.phone}</div>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Address;
