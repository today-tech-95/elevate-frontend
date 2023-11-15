import React,{useState,useEffect} from "react";
import Layout from "./../Layouts/menteeLayout";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { NavLink,useNavigate,useParams } from "react-router-dom";
import SendIcon from "./../../assets/send.png";
import MenteeTimeline from "../timeLine";
import Calendar from "../calendar";
import axios from "axios";
import { toast } from "react-toastify";
import { useCookies } from 'react-cookie';
import { Loading } from "../loading";
import { ErrorResponse } from "../errorResponse";

const Profile = () => {

  const navigate = useNavigate()
  const [mentee,setMentee] = useState({})
  const [loading,setLoading] = useState(false)
  const [cookies] = useCookies(['user']);
  const params=useParams();
  const [error,setError]=useState({
    status:false,
    errorMsg:""
  });

  const goToMessages = ()=>{
    navigate("/mentor/messages")
  }


  useEffect(()=>{
      getMentee()
  },[])


  const getMentee = async () => {
    try {
      setLoading(true);
      const { data } = await axios({
        url: `https://elevate-backend.vercel.app/api/v1/elevate/user/one/${params.id}`,
        method: "GET",
        params: {
          authToken: cookies?.user?.token,
        },
      });
      setMentee(data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError({...error,status:true,errorMsg:err})
    }
  };

  return (
    <Layout>
      <div className="">
        {loading?<Loading/>
        :!error.status?
        <div className="shadow-sm  rounded-lg">
          <div className="flex  bg-[#E6F0FF] sm:px-2 w-full">
            <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
              <img
                src={mentee?.picture}
                alt=""
              />
            </div>
          </div>

          <div className="p-5 bg-white">
            <div className="flex flex-col justify-between items-center sm:flex-row sm:mt-10 px-4">
              <div className="">
                <h4 className="">{mentee?.firstName} {mentee?.lastName}</h4>
                <NavLink hre="#" className="text-[#2467F6]">
                  myportfolio.com
                </NavLink>
                <div className="flex justify-between mt-2 mb-2 gap-4">
                  <div>
                    <LocationOnOutlinedIcon /> <span>Kigali, Rwanda</span>
                  </div>

                  <div>
                    <CalendarTodayOutlinedIcon /> <span>Joined {new Date(mentee?.createdAt).toLocaleString('en-US', { year: 'numeric', month: 'long' })}</span>
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
                  <div className="flex mb-5 -space-x-4">
                    <img
                      className="w-8 h-8   rounded-full object-cover"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt=""
                    />
                    <img
                      className="w-8 h-8   rounded-full object-cover"
                      src="https://images.pexels.com/photos/6274712/pexels-photo-6274712.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                    />
                    <img
                      className="w-8 h-8   rounded-full object-cover"
                      src="https://images.pexels.com/photos/18078282/pexels-photo-18078282/free-photo-of-portrait-of-a-man-sitting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                      alt=""
                    />
                    <img
                      className="w-8 h-8   rounded-full object-cover"
                      src="https://images.pexels.com/photos/13330444/pexels-photo-13330444.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                      alt=""
                    />
                  </div>
                  <span>Mentored Nada,Isaac and 90 others</span>
                </div>
                <button className="bg-[#2467F6] px-8 py-2 rounded-full text-white flex justify-center items-center gap-2" onClick={goToMessages}>
                  <img src={SendIcon} alt="" />
                  Message
                </button>
              </div>
              <div>
                <h2 className="text-2xl font-bold capitalize">{mentee?.role}</h2>
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
                {mentee.experience<=0?<p className="text-center p-2 text-gray-500">No experience data is added yet</p>
                :
                <MenteeTimeline />
                }
              </div>
            </div>
            <div className="w-full">
              <Calendar />
            </div>
          </div>
        </div>
        :
        <ErrorResponse errorMsg={error.errorMsg} retryHandler={getMentee}/>
        }

      </div>
    </Layout>
  );
};

export default Profile;
