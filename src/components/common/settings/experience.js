import React from 'react'
import DriveFileRenameOutlineOutlined from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import TimeLineChildren from "./timeLineContent"
import EducationTimeLine from "./settingTimeline"
import AddIcon from '@mui/icons-material/Add';


const Experience = ({data,openAddExperience,getProfile}) => {
  
  const EductionTimelineData = data.map(item=> ({
    children:<TimeLineChildren 
      comapny={item.comapny}
      from={item.from}
      to={item.to}
      address={item.address}
      position={item.position}
      data={data}
      getProfile={getProfile}
      belongsTo="Experience"
      id={item._id}
      />,
    dot:<ApartmentOutlinedIcon/>
}))

  return (
    <div className="w-full p-[24px] rounded-[12px] border border-[#B1B8C5]">
    
    <div className="flex justify-between items-center mb-10">
      <h4 className="text-[#484D56] text-2xl">Experience</h4>
      <button className="flex px-5 gap-2 py-2 border border-gray-300 justify-center items-center rounded-full" onClick={()=>openAddExperience(true)}>
      <span className="block text-[#565C67]">Add</span>{" "}
          <span className="block">

            <AddIcon className="text-[14px] text-[#9AA3B4]"/>
          </span>
      </button>
    </div>

    {data?.length <= 0?
    <p className="text-center p-2 text-gray-500">No experience data is added yet</p>
    :
    <EducationTimeLine 
    data={EductionTimelineData}
    />}
  </div>
  )
}

export default Experience