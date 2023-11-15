import React from "react";
import { NavLink } from "react-router-dom";

const MentorsHomeCard = ({mentor}) => {
  return (
    <div className="w-full max-w-sm bg-[#aec0f7] rounded-lg">
      <NavLink to={`/mentee/profile/${mentor._id}`}>
        <img
          className="rounded-lg h-[194px] w-full object-cover"
          src={mentor.picture}
          alt="mentor"
        />
      </NavLink>
      <div className="pb-5">
        <div className="flex justify-between items-center px-2">
          <div >
            <NavLink to="/mentee/profile">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 flex gap-4">
               <span>{mentor.firstName}</span> <span>{mentor.lastName}</span>
              </h5>
            </NavLink>

            <NavLink to="/mentee/profile">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
              {mentor.role}
              </h5>
            </NavLink>
          </div>

          <div className="flex items-center  mb-5">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <span className="text-xs font-semibold">
              4.5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorsHomeCard;
