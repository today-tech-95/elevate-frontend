import React from "react";
import DriveFileRenameOutlineOutlined from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import EducationTimeLine from "./settingTimeline";
import TimeLineChildren from "./timeLineContent";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import AddIcon from '@mui/icons-material/Add';


const TimeBound = ({data,setDataToAdd,openAddModal,getProfile}) => {

  const EductionTimelineData = data.map(item=> ({
    children:<TimeLineChildren 
      name={item.name}
      from={item.from}
      to={item.to}
      description={item.description}
      data={data}
      getProfile={getProfile}
      belongsTo="TimeBound"
      id={item._id}
      />,
    dot:<ApartmentOutlinedIcon/>
  }))

  return (
    <div className="w-full p-[24px] rounded-[12px] border border-[#B1B8C5] relative ">
      <div className="flex justify-between items-center mb-10">
        <h4 className="text-[#484D56] text-2xl">Time Bound</h4>
        <button className="flex px-5 gap-2 py-2 border border-gray-300 justify-center items-center rounded-full"
        onClick={()=>{openAddModal(true); setDataToAdd("timeBound")}}>
          <span className="block text-[#565C67]">Add</span>{" "}
          <span className="block">

            <AddIcon className="text-[14px] text-[#9AA3B4]"/>
          </span>
        </button>
      </div>

      {data?.length <= 0?
      <p className="text-center p-2 text-gray-500">No time bound data is added yet</p>
      :
      <EducationTimeLine 
      data={EductionTimelineData}
      />}
    </div>
  );
};

export default TimeBound;
