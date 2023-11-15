import React, { useEffect, useState } from 'react'
import { Cancel } from "@mui/icons-material";
import { universities } from '../../../utils/universities';
import { toast } from 'react-toastify';
import axios from 'axios';
import { SyncOutlined} from '@ant-design/icons';
import { useCookies } from 'react-cookie';
import { BACKEND_URL } from '../../../utils/url';

const AddExperience = ({openAddExperience,current,getProfile}) => {
    const [experience,setExperience] = useState(
        {
            comapny:"",
            address:"",
            position:"",
            from:"",
            to:""
        }
    );

    const [currentWorking,setCurrentWorking] =useState(false)
    const [loading,setLoading]=useState(false);

    const [cookie] = useCookies();

    const handleAdd=async(event)=>{
        event.preventDefault();

        if(experience.comapny ==="" || experience.position==="" || experience.from==="" || (experience.to==="" && !currentWorking) || experience.address===""){
            toast.error("All fields are required")
        }else if(current.some(item=>item.comapny ===experience.comapny && item.position ===experience.position)){
            toast.error("You already have this experience")
        }else{
            try {
                let combineExperience=[];

                combineExperience.push({
                    comapny:experience.comapny,
                    address:experience.address,
                    position:experience.position,
                    from:experience.from,
                    to:currentWorking?"Present":experience.to
                });
                current.length>0 && current.map(item=>combineExperience.push(item));

                setLoading(true)
                const {data} = await axios({
                  url:`${BACKEND_URL}/user/one/${cookie.user.user._id}`,
                  method:"PATCH",
                  params: {
                    authToken: cookie?.user?.token,
                  },
                  data:{
                   "experience":combineExperience
                  }
                })
            
                toast.success(data.message)
                setLoading(false)
                openAddExperience(false);
                console.log(data);
                getProfile();
              } catch (err) {
                toast.error(err?.response?.data.error?err?.response?.data.error:err.message);
                setLoading(false)
              }              
        }
    }

  return (
    <div className='absolute bg-white w-full min-h-full max-h-full z-40  flex bg-opacity-50 top-0  overflow-hidden py-2 px-4'>
        <div className='bg-[#F4F5F8] min-h-full overflow-y-auto max-h-full w-11/12 mx-auto shadow-lg rounded-lg'>
            <div className="sticky px-4 py-4 top-0 bg-[#F4F5F8] flex justify-between">
                <h1>Add experience</h1>
                <button
                    className="flex justify-center rounded-full items-center gap-4 w-8 h-8 px-2 py-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#1C1F23] border border-transparent drop-shadow active:bg-[#1C1F23] hover:bg-[#1C1F23] hover:drop-shadow hover:shadow-xl focus:outline-none"
                    href="#"
                    onClick={()=>openAddExperience(false)}
                >
                    <Cancel/>
                </button>
            </div>

            <form className='px-4 py-4' onSubmit={(e)=>handleAdd(e)}>
                <div className='mb-3'>
                    <label className="mb-3">Company name</label>
                    <input
                        type='text'
                        value={experience.comapny}
                        onChange={(e)=>{
                            setExperience({...experience,comapny:e.target.value});

                        }}
                        required
                        placeholder='Company name'  
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                </div>

                <div className="mb-3 w-full">
                    <label className="mb-3">Address</label>
                    <input
                        value={experience.address}
                        onChange={(e)=>{
                            setExperience({...experience,address:e.target.value});
                        }}
                        type="text"
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Address"
                    />
                </div>

                <div className='mb-3'>
                    <label className="mb-3">Position/Role</label>
                    <input
                        type='text'
                        value={experience.position}
                        onChange={(e)=>{
                            setExperience({...experience,position:e.target.value});
                        }} 
                        required
                        placeholder='Position/Role'
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                        
                </div>
                <div className='flex w-full justify-between gap-2'>
                    <div className="mb-3 w-full">
                        <label className="mb-3">Start date</label>
                        <input
                            type="month"
                            value={experience.from===""?"":new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",}).format(new Date(experience.from))}
                            onChange={(e)=>{
                                setExperience({
                                    ...experience,
                                    from:new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "long",}).format(new Date(e.target.value))

                                })
                            }}
                            required
                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            placeholder="From"
                        />
                    </div>
                    <div className="mb-3 w-full">
                        <label className="mb-3">End date</label>
                        <input
                            value={experience.to===""?"":new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",}).format(new Date(experience.to))}
                            onChange={(e)=>{
                                setExperience({
                                    ...experience,
                                    to:new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "long",}).format(new Date(e.target.value))
                                })
                            }}
                            type="month"
                            required
                            min={experience.from===""?
                                new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",}).format(new Date()):new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",}).format(new Date(experience.from))
                            }
                            disabled={currentWorking}
                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            placeholder="to"
                        />
                        <input type='checkbox' 
                        onChange={(e)=>{
                            setCurrentWorking(!currentWorking);
                            setExperience({
                                ...experience,
                                to:""
                            })
                        }} 
                        checked={currentWorking}
                        /><label className='ml-2 text-sm'>Still working here</label>
                    </div>
                </div>

                <button
                className="flex justify-center items-center gap-4 w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#007bff] border border-transparent rounded-lg focus:outline-none"
                href="#"
                >
                    {loading? <SyncOutlined  spin/>:"Save Experience"}
                </button>
            </form>
        </div>
    </div>
  )
}

export default AddExperience