import React, { useState } from 'react'
import ProfileHeader from './profileHeader'
import PersonalInformation from './personalInformation'
import Address from './addresses'
import Education from './education'
import Experience from "./experience"
import Security from './security'
import Specific from './specific'
import Measurable from './measurable'
import Achievable from './achievable'
import Relevant from './relevant'
import TimeBound from './timeBound'
import Availability from './availability'
import { Cancel } from "@mui/icons-material";
import AddEducation from '../modals/AddEducation'
import AddExperience from '../modals/AddExperience'
import AddOtherUserData from '../modals/AddOtherUserData'

const TabContent = ({tab,userData,getProfile}) => {
    const [addEducation,openAddEducation] =useState(false);
    const [addExperience,openAddExperience] =useState(false);
    const [dataToAdd,setDataToAdd]=useState("");
    const [addModal,openAddModal]=useState(false);
    

 switch(tab){
    case 1:
        return (
            <div className="w-full flex flex-col gap-[16px]">
            <ProfileHeader data={userData?.data}/>
            <PersonalInformation data={userData?.data}/>
            <Address data={userData?.data}/>
            <Availability/>
            </div>
        )
    case 2:
        return (
            <div className="w-full flex flex-col gap-[16px] relative">
            <Education data={userData?.data?.education} addEducation={addEducation} openAddEducation={openAddEducation} getProfile={getProfile}/>
            <Experience data={userData?.data?.experience} addExperience={addExperience} openAddExperience={openAddExperience} getProfile={getProfile}/>
            {addEducation && <AddEducation current={userData?.data?.education} addEducation={addEducation} openAddEducation={openAddEducation} getProfile={getProfile}/>}
            {addExperience && <AddExperience current={userData?.data?.experience} addExperience={addExperience} openAddExperience={openAddExperience} getProfile={getProfile}/>}

            </div>
        )
    case 3:
        return (
            <div className="w-full flex flex-col gap-[16px] relative">
             <Specific 
             data={userData?.data?.specific}
             setDataToAdd={setDataToAdd}
             openAddModal={openAddModal}
             getProfile={getProfile}/>
             <Achievable 
             data={userData?.data?.achievable}
             setDataToAdd={setDataToAdd}
             openAddModal={openAddModal}
             getProfile={getProfile}/>

             <Relevant 
             data={userData?.data?.relavant}
             setDataToAdd={setDataToAdd}
             openAddModal={openAddModal}
             getProfile={getProfile}/>

             <TimeBound 
             data={userData?.data?.timeBound}
             setDataToAdd={setDataToAdd}
             openAddModal={openAddModal}
             getProfile={getProfile}/>

             {addModal &&<AddOtherUserData 
             current={userData?.data}
             dataToAdd={dataToAdd}
             openAddModal={openAddModal}
             getProfile={getProfile}/>}

             <Measurable data={userData?.data?.measureble} getProfile={getProfile}/>

            </div>
        )
    case 4:
        return (
            <div className="w-full flex flex-col gap-[16px]">
            <Security data={userData?.data.email}/>
            </div>
        )
    case 5:
        return (
            <div className="w-full flex flex-col gap-[16px]">
            Delete account
            </div>
        )
    default:
        return (
            <div className="w-full flex flex-col gap-[16px]">
            <ProfileHeader/>
            <PersonalInformation/>
            <Address/>
            </div>
        )
 }

}

export default TabContent