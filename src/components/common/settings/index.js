import React,{Fragment,useState} from 'react'
import SideBard from "./sideBar"
import TabContent from "./tabContent"

const Settings = () => {

  const [activateTab,setActiveTab] = useState(1)

  return (
    <Fragment>
    <div className="mt-10">
    <h4 className="mb-[24px] text-[#484D56] text-2xl font-bold">Profile and Settings</h4>
    <div className="w-full flex bg-white p-4 gap-[16px]">
    <SideBard setActiveTab={setActiveTab} activateTab={activateTab}/>
    
    <TabContent tab={activateTab}/>
    </div>
    </div>
    </Fragment>
  )
}

export default Settings