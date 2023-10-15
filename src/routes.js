import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Sgnup";
import MenteeHome from "./components/MenteeDasshboard/home";
import Profile from "./components/MenteeDasshboard/profile";
import MenteeMessages from "./components/MenteeDasshboard/menteeMessages";
import MenteeAppointment from "./components/MenteeDasshboard/menteeAppointment";
import MenteeProgress from "./components/MenteeDasshboard/menteeProgress";
import MenteeSettings from "./components/MenteeDasshboard/menteeSettings";

import MentorHome from "./components/mentorDashboard/home";
import MentorProfile from "./components/mentorDashboard/profile";
import MentorMessages from "./components/mentorDashboard/mentorMessages";
import MentorAppointment from "./components/mentorDashboard/mentorAppointment";
import MentorProgress from "./components/mentorDashboard/mentorProgress";
import MentorSettings from "./components/mentorDashboard/mentorSettings";


const ElevateRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mentee" element={<MenteeHome />} />
      <Route path="/mentee/Profile" element={<Profile />} />
      <Route path="/mentee/messages" element={<MenteeMessages />} />
      <Route path="/mentee/progress" element={<MenteeProgress />} />
      <Route path="/mentee/settings" element={<MenteeSettings />} />
      <Route path="/mentee/appointments" element={<MenteeAppointment />} />

      <Route path="/mentor" element={<MentorHome />} />
      <Route path="/mentor/Profile" element={<MentorProfile />} />
      <Route path="/mentor/messages" element={<MentorMessages />} />
      <Route path="/mentor/progress" element={<MentorProgress />} />
      <Route path="/mentor/settings" element={<MentorSettings />} />
      <Route path="/mentor/appointments" element={<MentorAppointment />} />

    </Routes>
  );
};

export default ElevateRoutes;
