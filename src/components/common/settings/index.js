import React,{Fragment} from 'react'
import SideBard from "./sideBar"
import ProfileHeader from './profileHeader'
import PersonalInformation from './personalInformation'
import Address from './addresses'

const Settings = () => {
  return (
    <Fragment>
    <div className="mt-10">
    <h4 className="mb-[24px] text-[#484D56] text-2xl font-bold">Profile and Settings</h4>
    <div className="w-full flex bg-white p-4 gap-[16px]">
    <SideBard/>
    <div className="w-full flex flex-col gap-[16px]">
    <ProfileHeader/>
    <PersonalInformation/>
    <Address/>
    </div>
    </div>
    </div>
    </Fragment>
  )
}

export default Settings