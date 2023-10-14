import React,{useState} from 'react'

const Tabs = () => {

    const [activeTab,setActiveTab] = useState(1)

    const tabData=[
        {
            id:1,
            tab:"Upcoming Sessions"
        },
        {
            id:2,
            tab:"Past Sessions"
        },
        {
            id:3,
            tab:"Cancelled Sessions"
        },

    ]

    const handleUpdateTab = (tab)=>{
        setActiveTab(tab)
    }

  return (
    <div className="bg-[#E8EDF2] w-full flex mt-4 mb-4 rounded-md">
     {tabData.map((item)=>(
        <button className={activeTab===item.id? "px-8 py-2 bg-white border border-gray-200 rounded-md":"px-8 py-2"} key={item.id} onClick={()=>handleUpdateTab(item.id)}>{item.tab}</button>
     ))}
    </div>
  )
}

export default Tabs