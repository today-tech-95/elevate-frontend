import React,{useState} from 'react'

const Tabs = ({filterStatus,setStatus}) => {

    const [activeTab,setActiveTab] = useState(1)

    const tabData=[
        {
            id:1,
            tab:"Upcoming Sessions",
            status:'pending'
        },
        {
            id:2,
            tab:"Past Sessions",
            status:"past"
        },
        {
            id:3,
            tab:"Cancelled Sessions",
            status:"cancelled"
        },

    ]

    const handleUpdateTab = (tab,status)=>{
        setActiveTab(tab);
        setStatus(status)
    }


  return (
    <div className="bg-[#E8EDF2] w-full flex mt-4 mb-4 rounded-md">
     {tabData.map((item)=>(
        <button className={activeTab===item.id? "px-8 py-2 bg-white border border-gray-200 rounded-md":"px-8 py-2"} key={item.id} onClick={()=>handleUpdateTab(item.id,item.status)}>{item.tab}</button>
     ))}
    </div>
  )
}

export default Tabs