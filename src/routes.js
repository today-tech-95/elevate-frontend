import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Sgnup";
import MenteeHome from "./components/MenteeDasshboard/home";
import Profile from "./components/MenteeDasshboard/profile";
import MenteeMessages from "./components/MenteeDasshboard/menteeMessages";
import MenteeAppointment from "./components/MenteeDasshboard/menteeAppointment";
import MenteeProgress from "./components/MenteeDasshboard/menteeProgress";
import MenteeSettings from "./components/MenteeDasshboard/menteeSettings";

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
    </Routes>
  );
};

export default ElevateRoutes;
