import React from "react";
import DriveFileRenameOutlineOutlined from "@mui/icons-material/DriveFileRenameOutlineOutlined";

const PersonalInformation = () => {
  return (
    <div className="w-full p-[24px] rounded-[12px] border border-[#B1B8C5]">

      <div className="flex justify-between items-center">
        <h4 className="text-[#484D56]">Personal Information</h4>
        <button className="flex px-5 gap-2 py-2 border border-gray-300 justify-center items-center rounded-full">
          <span className="block text-[#565C67]">Edit</span>{" "}
          <span className="block">
            <DriveFileRenameOutlineOutlined className="text-[14px] text-[#9AA3B4]" />
          </span>
        </button>
      </div>

      <div className="flex justify-between w-[480px] ">
        
      <div>
          <div className="flex flex-col">
            <div className="text-[#646B79]">First Name</div>
            <div>Nada Teta</div>
            <div className="text-[#646B79]">Email</div>
            <div>teta.teta@gmail.com</div>
          </div>
        </div>

        <div>
          <div className="flex flex-col">
            <div className="text-[#646B79]">Last Name</div>
            <div>Kirezi</div>
            <div className="text-[#646B79]">Phone</div>
            <div>+250 000 000 000</div>
          </div>
        </div>

      </div>
    <div className="mt-[24px]">
     <h4 className="mb-4 text-[#646B79]">Bio</h4>
     <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
    </div>
    </div>
  );
};

export default PersonalInformation;
