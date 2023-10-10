import React from "react";
import Layout from "./../Layouts/menteeLayout";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { NavLink } from "react-router-dom";
import SendIcon from "./../../assets/send.png";
import MenteeTimeline from "../timeLine";
import Calendar from "../calendar";

const Profile = () => {
  return (
    <Layout>
      <div className="">
        <div className="shadow-sm  rounded-lg">
          <div className="flex  bg-[#E6F0FF] sm:px-2 w-full">
            <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
              <img
                src="https://images.pexels.com/photos/12128751/pexels-photo-12128751.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </div>
          </div>

          <div className="p-5 bg-white">
            <div className="flex flex-col justify-between items-center sm:flex-row sm:mt-10 px-4">
              <div className="">
                <h4 className="">Nada Teta Kirezi</h4>
                <NavLink hre="#" className="text-[#2467F6]">
                  myportfolio.com
                </NavLink>
                <div className="flex justify-between mt-2 mb-2 gap-4">
                  <div>
                    <LocationOnOutlinedIcon /> <span>Kigali, Rwanda</span>
                  </div>

                  <div>
                    <CalendarTodayOutlinedIcon /> <span>Joined June 2023</span>
                  </div>
                </div>

                <div className="flex gap-5">
                  <span>
                    <strong>464</strong>Sessions
                  </span>
                  <span>
                    <strong>310</strong>Reviews
                  </span>
                </div>
                <div className="flex justify-between gap-4 mt-2 ">
                  <div class="flex mb-5 -space-x-4">
                    <img
                      class="w-8 h-8   rounded-full "
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                    <img
                      class="w-8 h-8   rounded-full "
                      src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    <img
                      class="w-8 h-8   rounded-full "
                      src="https://images.pexels.com/photos/18078282/pexels-photo-18078282/free-photo-of-portrait-of-a-man-sitting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                      alt=""
                    />
                    <img
                      class="w-8 h-8   rounded-full "
                      src="https://images.pexels.com/photos/13330444/pexels-photo-13330444.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                      alt=""
                    />
                  </div>
                  <span>Mentored Nada,Isaac and 90 others</span>
                </div>
                <button className="bg-[#2467F6] px-8 py-2 rounded-full text-white flex justify-center items-center gap-2">
                  <img src={SendIcon} alt="" />
                  Message
                </button>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Product Designer</h2>
                <h5>Bank of Kigali</h5>
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-between">
            <div className="flex flex-col gap-4 ">
              <div className="w-[510px] bg-white p-5">
                <h5 className="text-[#2467F6] ">About</h5>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </p>
              </div>
              <div className="w-[510px] bg-white p-5">
                <h5 className="text-[#2467F6] mb-4">Experience</h5>
                <MenteeTimeline />
              </div>
            </div>
            <div className="w-full">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
