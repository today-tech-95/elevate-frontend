import React from "react";
import Layout from "./../Layouts/menteeLayout";
import { NavLink } from "react-router-dom";
import MenteeHomeCards from "./menteeHomeCards";

const MenteeHome = () => {
  return (
    <Layout>
      <div>
        <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Good Morning, Nada 👋
          </h5>
          <p class="font-normal">
            You have{" "}
            <NavLink to="appointment" className="text-[#2467F6]">
              3 upcoming appointments
            </NavLink>
          </p>
        </div>
        <div className="mt-4">
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-white dark:white dark:placeholder-gray-400 focus:outline-none"
                placeholder="Type to search"
                required
              />
            </div>
          </form>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
        <MenteeHomeCards/>
        <MenteeHomeCards/>
        <MenteeHomeCards/>
        <MenteeHomeCards/>
        <MenteeHomeCards/>
        <MenteeHomeCards/>
        <MenteeHomeCards/>
        <MenteeHomeCards/>
        </div>
      </div>
    </Layout>
  );
};

export default MenteeHome;
