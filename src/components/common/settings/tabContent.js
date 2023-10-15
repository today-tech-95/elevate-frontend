import React from 'react'
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

const TabContent = ({tab}) => {

 switch(tab){
    case 1:
        return (
            <div className="w-full flex flex-col gap-[16px]">
            <ProfileHeader/>
            <PersonalInformation/>
            <Address/>
            </div>
        )
    case 2:
        return (
            <div className="w-full flex flex-col gap-[16px]">
            <Education/>
            <Experience/>
            </div>
        )
    case 3:
        return (
            <div className="w-full flex flex-col gap-[16px]">
             <Specific/>
             <Measurable/>
             <Achievable/>
             <Relevant/>
             <TimeBound/>
            </div>
        )
    case 4:
        return (
            <div className="w-full flex flex-col gap-[16px]">
            <Security/>
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