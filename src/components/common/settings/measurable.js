import React from "react";
import DriveFileRenameOutlineOutlined from "@mui/icons-material/DriveFileRenameOutlineOutlined";

const data = [
  {
    id: 1,
    label: "User research",
  },
  {
    id: 2,
    label: "Wireframing",
  },
  {
    id: 3,
    label: "Prototype",
  },
  {
    id: 4,
    label: "User interface",
  },
  {
    id: 5,
    label: "User experience",
  },
  {
    id: 6,
    label: "Sketching",
  },
  {
    id: 7,
    label: "Interaction ",
  },
  {
    id: 8,
    label: "User research",
  },
  {
    id: 9,
    label: "Wireframing",
  },
  {
    id: 10,
    label: "Prototype",
  },
  {
    id: 11,
    label: "User interface",
  },
  {
    id: 12,
    label: "User experience",
  },
];

const Measurable = () => {
  return (
    <div className="w-full p-[24px] rounded-[12px] border border-[#B1B8C5]">
      <div className="flex justify-between items-center mb-9">
        <h4 className="text-[#484D56]">Measurable</h4>
        <button className="flex px-5 gap-2 py-2 border border-gray-300 justify-center items-center rounded-full">
          <span className="block text-[#565C67]">Edit</span>{" "}
          <span className="block">
            <DriveFileRenameOutlineOutlined className="text-[14px] text-[#9AA3B4]" />
          </span>
        </button>
      </div>

      <div className="flex gap-4 flex-wrap">
        {data.map((item) => (
          <button
            className="bg-[#8FCB85] text-white py-2 px-8 rounded-full"
            key={item.id}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Measurable;
