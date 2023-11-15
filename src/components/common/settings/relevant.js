import React from "react";
import DriveFileRenameOutlineOutlined from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import EducationTimeLine from "./settingTimeline";
import TimeLineChildren from "./timeLineContent";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import AddIcon from '@mui/icons-material/Add';

const EductionTimelineData = [
  {
    children: (
      <TimeLineChildren
        title="Adventist university of central Africa"
        dateTime="Aug 2022 - Present - 1 yr"
      />
    ),
    dot: <ApartmentOutlinedIcon />,
  },
  {
    children: (
      <TimeLineChildren
        title="Adventist university of central Africa"
        dateTime="Aug 2022 - Present - 1 yr"
      />
    ),
    dot: <ApartmentOutlinedIcon />,
  },
  {
    children: (
      <TimeLineChildren
        title="Adventist university of central Africa"
        dateTime="Aug 2022 - Present - 1 yr"
      />
    ),
    dot: <ApartmentOutlinedIcon />,
  },
];

const Relevant = ({data,setDataToAdd,openAddModal,getProfile}) => {

  const EductionTimelineData = data.map(item=> ({
    children:<TimeLineChildren 
      name={item.name}
      from={item.from}
      to={item.to}
      description={item.description}
      data={data}
      getProfile={getProfile}
      belongsTo="Relevant"
      id={item._id}
      />,
    dot:<ApartmentOutlinedIcon/>
  }))

  return (
    <div className="w-full p-[24px] rounded-[12px] border border-[#B1B8C5] ">
      <div className="flex justify-between items-center mb-10">
        <h4 className="text-[#484D56] text-2xl">Relevant</h4>
        <button className="flex px-5 gap-2 py-2 border border-gray-300 justify-center items-center rounded-full"
        onClick={()=>{openAddModal(true); setDataToAdd("relevant")}}>
          <span className="block text-[#565C67]">Add</span>{" "}
          <span className="block">

            <AddIcon className="text-[14px] text-[#9AA3B4]"/>
          </span>
        </button>
      </div>
      {data?.length <= 0?
      <p className="text-center p-2 text-gray-500">No relevant data is added yet</p>
      :
      <EducationTimeLine 
      data={EductionTimelineData}
      />}

    </div>
  );
};

export default Relevant;
