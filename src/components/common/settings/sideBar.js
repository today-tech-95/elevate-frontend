import React from "react";

const SideBar = ({ activateTab, setActiveTab }) => {
  const tabs = [
    {
      id: 1,
      label: "My Profile",
    },
    {
      id: 2,
      label: "Proffessional background",
    },
    {
      id: 3,
      label: "Mentoring goal",
    },
    {
      id: 4,
      label: "Security",
    },
    {
      id: 5,
      label: "Delete account",
    },
  ];
  const handleActiveTab = (activeTab) => {
    setActiveTab(activeTab);
  };

  return (
    <div className="w-[248px] flex flex-col gap-[16px] border-r border-gray-300">
      {tabs.map((tab) => (
        <button
          className={
            activateTab === tab.id
              ? tab.label === "Delete account"
                ? "bg-[#E8F0FE] text-red-500 py-2 px-2 rounded-full"
                : "bg-[#E8F0FE] text-[#2467F6] py-2 px-2 rounded-full"
              : "py-2 px-2 rounded-full"
          }
          key={tab.id}
          onClick={() => handleActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SideBar;
