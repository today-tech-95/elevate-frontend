import React from "react";
import DriveFileRenameOutlineOutlined from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import EducationTimeLine from "./settingTimeline";
import TimeLineChildren from "./timeLineContent";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";

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

const Specific = () => {
  return (
    <div className="w-full p-[24px] rounded-[12px] border border-[#B1B8C5] ">
      <div className="flex justify-between items-center mb-10">
        <h4 className="text-[#484D56] text-2xl">Specific</h4>
        <button className="flex px-5 gap-2 py-2 border border-gray-300 justify-center items-center rounded-full">
          <span className="block text-[#565C67]">Edit</span>{" "}
          <span className="block">
            <DriveFileRenameOutlineOutlined className="text-[14px] text-[#9AA3B4]" />
          </span>
        </button>
      </div>

      <EducationTimeLine data={EductionTimelineData} />
    </div>
  );
};

export default Specific;
