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
import {Protected,ProtectedMentee} from "./utils/ProtectedRoutes";


const ElevateRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mentee" element={
      <ProtectedMentee route="/">
        <MenteeHome />
      </ProtectedMentee>} />
      <Route path="/mentee/profile/:id" element={<ProtectedMentee route="/"><Profile /></ProtectedMentee>} />
      <Route path="/mentee/messages" element={<ProtectedMentee route="/"><MenteeMessages /></ProtectedMentee>} />
      <Route path="/mentee/progress" element={<ProtectedMentee route="/"><MenteeProgress /></ProtectedMentee>} />
      <Route path="/mentee/settings" element={<ProtectedMentee route="/"><MenteeSettings /></ProtectedMentee>} />
      <Route path="/mentee/appointments" element={<ProtectedMentee route="/"><MenteeAppointment /></ProtectedMentee>} />

      <Route path="/mentor" element={
        <Protected  route="/">              
          <MentorHome />
        </Protected>} 
      />
      <Route path="/mentor/mentee/profile/:id" element={
        <Protected  route="/">              
          <MentorProfile />
        </Protected>} 
      />
      <Route path="/mentor/messages" element={
        <Protected  route="/">              
          <MentorMessages />
        </Protected>} 
      />
      <Route path="/mentor/progress" element={
        <Protected  route="/">              
          <MentorProgress />
        </Protected>} 
      />
      <Route path="/mentor/settings" element={
        <Protected  route="/">              
          <MentorSettings />
        </Protected>} 
      />
      <Route path="/mentor/appointments" element={
        <Protected  route="/">              
          <MentorAppointment />
        </Protected>} />

    </Routes>
  );
};

export default ElevateRoutes;
