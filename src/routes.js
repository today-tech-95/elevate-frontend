import {Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Sgnup"

const ElevateRoutes = ()=>{

    return (
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
     </Routes>
    )
}

export default ElevateRoutes