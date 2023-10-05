import {Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Sgnup"
import MenteeHome from "./components/MenteeDasshboard/home";

const ElevateRoutes = ()=>{

    return (
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/mentee" element={<MenteeHome/>}/>
     </Routes>
    )
}

export default ElevateRoutes