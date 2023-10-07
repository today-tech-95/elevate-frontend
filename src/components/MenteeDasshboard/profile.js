import React from "react";
import Layout from "./../Layouts/menteeLayout";

const Profile = () => {
  return (
    <Layout>
      <div className="bg-white ">
        <div className="shadow-sm  rounded-lg">
          <div className="flex  bg-[#E6F0FF] sm:px-2 w-full">
            <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
              <img
                src="https://images.pexels.com/photos/12128751/pexels-photo-12128751.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
              />
            </div>
          </div>

          <div className="p-5">
            <div className="flex flex-col sm:flex-row sm:mt-10">
              <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
               
                <div className="py-3">
                  <div className="flex flex-col">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
