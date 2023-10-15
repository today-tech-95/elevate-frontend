import React from "react";
import Search from "../../common/search";
import AvatarChips from "./../../common/chip";

const TopBar = () => {
  return (
    <div className="w-full flex justify-between items-center h-[75px] px-[38px]">
      <div>
        <h4 className="text-white font-bold text-xl">elevate</h4>
      </div>
      <div className="w-1/3">
        <Search />
      </div>
      <div>
        <AvatarChips
          imagrUrl={
            "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          name="Jeane Doe"
        />
      </div>
    </div>
  );
};

export default TopBar;
