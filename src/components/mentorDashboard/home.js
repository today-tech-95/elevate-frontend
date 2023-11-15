import React,{useState,useEffect} from "react";
import Layout from "./../Layouts/mentorLayout";
import { NavLink } from "react-router-dom";
import MenteeHomeCard from "./menteeHomeCard";
import axios from "axios";
import { toast } from "react-toastify";
import { BounceLoader } from "react-spinners";
import { searchEngine } from "../../utils/searchEngine";
import { useCookies } from "react-cookie";
import SyncIcon from '@mui/icons-material/Sync';
import { Loading } from "../loading";
import { ErrorResponse } from "../errorResponse";

const MentorHome = () => {

  const [cookies] = useCookies(["user"]);
  const [loading, setLoading] = useState(false);
  const [mentee, setMentees] = useState([]);
  const [error,setError]=useState({
    status:false,
    errorMsg:""
  });
  const [searchResults, setSearchResults] = useState([]);
  const [keyword, setKeyword] = useState("");
  let timeOfDay = "";


  useEffect(() => {
    if (keyword === "" && mentee.length === 0) {
      getAllMentees();
    }
  }, [keyword]);

  const getAllMentees = async () => {
    try {
      setLoading(true);
      const { data } = await axios({
        url: "https://elevate-backend.vercel.app/api/v1/elevate/user/users",
        method: "GET",
        params: {
          role: "mentee",
        },
      });
      setMentees(data.data);
      setLoading(false);
    } catch (err) {
      setError({...error,status:true,errorMsg:err})
      setLoading(false)
    }
  };

  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour >= 0 && currentHour < 12) {
    timeOfDay = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    timeOfDay = "Good Afternoon";
  } else if (currentHour >= 17 && currentHour < 20) {
    timeOfDay = "Good Evening";
  } else {
    timeOfDay = "Good Night";
  }

  const [appointments,setAppointments]=useState([]);

  const [error2,setError2]=useState({
    status:false,
    errorMsg:""
  });

  const fetchAppointments=async()=>{
    try {
      setLoading(true)
      const res=await axios({
        url:`https://elevate-backend.vercel.app/api/v1/elevate/appointment?menter=${cookies?.user?.user?._id}`,
        method:"GET",
        params:{
          authToken: cookies?.user?.token,
          menter:cookies?.user?.user?._id,
        }
      })
      setAppointments(res?.data?.data);
    } catch (error) {
      setError2({...error,status:true,errorMsg:error})
    }
  }

  useEffect(()=>{
    if (keyword === "" && mentee.length === 0) {
      getAllMentees();
    }

    fetchAppointments();
  },[keyword])

  const filteredData =appointments?.filter(item=>(item?.participants?.some(item=>item._id ==cookies?.user?.user?._id) || item.menter._id ==cookies?.user?.user?._id) && new Date(item.day) > new Date());




  return (
    <Layout>
      <div>
        <div className="block max-w-sm p-6 bg-white  rounded-lg shadow-sm">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {timeOfDay}, {cookies?.user?.user?.firstName} 👋
          </h5>
          <p className="font-normal">
            You have{" "}
            <NavLink to="/mentor/appointments" className="text-[#2467F6]">
              {filteredData.length} upcoming appointments
            </NavLink>
          </p>
        </div>
        <div className="mt-4">
          <form>
            <label
             htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50  dark:bg-white dark:white dark:placeholder-gray-400 focus:outline-none"
                placeholder="Type to search"
                required
              />
            </div>
          </form>
        </div>
        {loading? <Loading/>
        :
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
          {mentee.map((mentee)=>(
            <MenteeHomeCard key={mentee._id} mentee={mentee}/>
          ))}
        </div>
        }
        {error.status && <ErrorResponse errorMsg={error.errorMsg} retryHandler={getAllMentees}/>}
      </div>
    </Layout>
  );
};

export default MentorHome;
