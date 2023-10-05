import React from 'react'
import TopBar from './topBar'
import SideBar from './sideBar'

const MenteeLayout = ({children}) => {
  return (
    <div className="bg-[#F4F5F8] h-screen">
    <div className="w-full relative ">
    <div className="bg-[#2467F6]">
    <TopBar/>
    </div>
    <div className="w-[210px] absolute top-20 left-0 bottom-0 h-[550px] bg-white px-2">
    <SideBar/>
    </div>
    <main className="absolute top-20 left-[220px] bg-white w-4/5">
    {children}
    </main>
    </div>
    </div>
    
  )
}

export default MenteeLayout