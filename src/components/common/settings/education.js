import React from 'react'
import DriveFileRenameOutlineOutlined from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import EducationTimeLine from "./settingTimeline"
import TimeLineChildren from "./timeLineContent"
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AddIcon from '@mui/icons-material/Add';


const Education = ({data,openAddEducation,getProfile}) => {


  const EductionTimelineData =data.map(item=> ({
    children:<TimeLineChildren 
      school={item.schoolName}
      from={item.from}
      to={item.to}
      degree={item.degree}
      data={data}
      getProfile={getProfile}
      belongsTo="Education"
      id={item._id}
      />,
    dot:<SchoolOutlinedIcon/>
  }))


  return (
    <div className="w-full p-[24px] rounded-[12px] border border-[#B1B8C5] ">

    <div className="flex justify-between items-center mb-10">
      <h4 className="text-[#484D56] text-2xl">Education</h4>
      <button className="flex px-5 gap-2 py-2 border border-gray-300 justify-center items-center rounded-full"  onClick={()=>openAddEducation(true)}>
        <span className="block text-[#565C67]">Add</span>{" "}
        <span className="block">

          <AddIcon className="text-[14px] text-[#9AA3B4]"/>
        </span>
      </button>
    </div>
    {data.length <= 0?
    <p className="text-center p-2 text-gray-500">No education background data is added yet</p>
    :
    <EducationTimeLine 
    data={EductionTimelineData}
    />}
  </div>
  )
}

export default Education