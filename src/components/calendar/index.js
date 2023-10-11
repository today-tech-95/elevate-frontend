import React from "react";
import TimeSlotBox from "./timeSlots";
import AppointmentModal from "./../common/modals/appointmentModal"

const Calendar = () => {
  return (
    <>
      <div className="flex items-center justify-center px-2">
        <div className="w-full">
          <div className="p-5 bg-white ">
            <h1 className="text-sm font-bold  text-[#2467F6]">
              Available Slots
            </h1>
            <div className="px-2 flex items-center justify-between">
              <h1 className="text-sm font-bold  text-gray-800">July 2023</h1>

              <div className="flex items-center text-gray-800 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler ml-3 icon-tabler-chevron-right"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between pt-12 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-sm font-medium text-center text-gray-800 ">
                          Mo
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-sm font-medium text-center text-gray-800 ">
                          Tu
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-sm font-medium text-center text-gray-800 ">
                          We
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-sm font-medium text-center text-gray-800 ">
                          Th
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-sm font-medium text-center text-gray-800 ">
                          Fr
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-sm font-medium text-center text-gray-800 ">
                          Sa
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-sm font-medium text-center text-gray-800 ">
                          Su
                        </p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pt-6">
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center" />
                    </td>
                    <td className="pt-6">
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center" />
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center" />
                    </td>
                    <td className="pt-6">
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">1</p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">2</p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500 ">3</p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500 ">4</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">5</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">6</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">7</p>
                      </div>
                    </td>
                    <td>
                      <div className="w-full h-full">
                        <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                          <p className="text-sm w-14 h-14 flex items-center justify-center font-medium text-white bg-[#039855] rounded-full">
                            8
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">9</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500 ">10</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500 ">11</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">12</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">13</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">14</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">15</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">16</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500 ">17</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500 ">18</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">19</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">20</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">21</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">22</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">23</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500 ">24</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500 ">25</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">26</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">27</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">28</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">29</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-sm text-gray-500  font-medium">30</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h1 className="text-sm font-bold  text-[#2467F6] mt-2 mb-2">Time Slots</h1>
         
            <div className="flex justify-between items-center gap-2">
              <TimeSlotBox />
              <TimeSlotBox />
              <TimeSlotBox />
              <TimeSlotBox />
            </div>
           <AppointmentModal/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
