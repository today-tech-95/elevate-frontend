import React from 'react'
import DriveFileRenameOutlineOutlined from '@mui/icons-material/DriveFileRenameOutlineOutlined';


const ProfileHeader = () => {
  return (
    <div className="w-full flex justify-between items-center rounded-[12px] border border-[#B1B8C5] p-[24px]">

    <div className="flex gap-[16px] justify-center items-center">
     <div>
     <img className=" w-[100px] h-[100px] rounded-full object-cover" src="https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
     </div>
     <div>
      <h4 className="font-bold text-[#484D56]">Nada Teta Kirezi</h4>
      <h3 className="text-[#565C67]">Product Designer</h3>
      <h3 className="font-thin text-[#737A89]">Intern at Klab</h3>
     </div>
    </div>

    <div>
    <button className="flex px-5 gap-2 py-2 border border-gray-300 justify-center items-center rounded-full"><span className="block text-[#565C67]">Edit</span> <span className="block"><DriveFileRenameOutlineOutlined className="text-[14px] text-[#9AA3B4]"/></span></button>
    </div>
    </div>
  )
}

export default ProfileHeader