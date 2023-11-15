import React, { useEffect, useState } from 'react'
import { Cancel } from "@mui/icons-material";
import { universities } from '../../../utils/universities';
import { toast } from 'react-toastify';
import axios from 'axios';
import { SyncOutlined} from '@ant-design/icons';
import { useCookies } from 'react-cookie';
import { BACKEND_URL } from '../../../utils/url';

const AddEducation = ({addEducation,openAddEducation,current,getProfile}) => {
    const [education,setEducation] = useState(
        {
            schoolName:"",
            description:"",
            degree:"",
            from:"",
            to:""
        }
    );

    

    const getPrograms=universities.filter(item=>item.name===education.schoolName);

    const [loading,setLoading]=useState(false);

    const [cookie] = useCookies();

    const handleAdd=async(event)=>{
        event.preventDefault();

        if(education.schoolName ==="" || education.degree==="" || education.from==="" || education.to===""){
            toast.error("All fields are required")
        }else if(current.some(item=>item.schoolName ===education.schoolName && item.degree ===education.degree)){
            toast.error("You already have this educational background")
        }else{
            try {
                let combineEducation=[]
                combineEducation.push(education);
                current.length>0 && current.map(item=>combineEducation.push(item));
                setLoading(true)
                const {data} = await axios({
                  url:`${BACKEND_URL}/user/one/${cookie.user.user._id}`,
                  method:"PATCH",
                  params: {
                    authToken: cookie?.user?.token,
                  },
                  data:{
                   "education":combineEducation
                  }
                })
            
                toast.success(data.message)
                setLoading(false)
                openAddEducation(false);
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
                <h1>Add educational background</h1>
                <button
                    className="flex justify-center rounded-full items-center gap-4 w-8 h-8 px-2 py-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#1C1F23] border border-transparent drop-shadow active:bg-[#1C1F23] hover:bg-[#1C1F23] hover:drop-shadow hover:shadow-xl focus:outline-none"
                    href="#"
                    onClick={()=>openAddEducation(false)}
                >
                    <Cancel/>
                </button>
            </div>

            <form className='px-4 py-4' onSubmit={(e)=>handleAdd(e)}>
                <div className='mb-3'>
                    <label className="mb-3">SchoolName/college</label>
                    <select
                        value={education.schoolName}
                        onChange={(e)=>{
                            setEducation({...education,schoolName:e.target.value});

                        }}
                        required  
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    >
                        <option className='opacity-20' value="">schoolName/college</option>
                        {universities.map(element=>(
                            <option key={element.name} value={element.name}>{element.name}</option>
                        ))}
                    </select>
                </div>

                <div className='mb-3'>
                    <label className="mb-3">Degree/diploma</label>
                    <select
                        value={education.degree}
                        onChange={(e)=>{
                            setEducation({...education,degree:e.target.value});
                        }} 
                        required
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    >
                        <option className='opacity-20' value="">Degree/diploma</option>
                        {getPrograms[0]?.programs?.map(element=>(
                            <option key={element} value={element}>{element}</option>

                        ))}
                    </select>
                </div>
                <div className='flex w-full justify-between gap-2'>
                    <div className="mb-3 w-full">
                        <label className="mb-3">Start date</label>
                        <input
                            type="month"
                            value={education.from===""?"":new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",}).format(new Date(education.from))}
                            onChange={(e)=>{
                                setEducation({
                                    ...education,
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
                            value={education.to===""?"":new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",}).format(new Date(education.to))}
                            onChange={(e)=>{
                                setEducation({
                                    ...education,
                                    to:new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "long",}).format(new Date(e.target.value))
                                })
                            }}
                            type="month"
                            required
                            min={education.from===""?
                                new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",}).format(new Date()):new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",}).format(new Date(education.from))
                            }
                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            placeholder="to"
                        />
                    </div>
                </div>

                <div className="mb-3 w-full">
                    <label className="mb-3">Description</label>
                    <textarea
                        value={education.description}
                        onChange={(e)=>{
                            setEducation({...education,description:e.target.value});
                        }}
                        type="text"
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                        placeholder="Description"
                    />
                </div>

                <button
                className="flex justify-center items-center gap-4 w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#007bff] border border-transparent rounded-lg focus:outline-none"
                href="#"
                >
                    {loading? <SyncOutlined  spin/>:"Save Education"}
                </button>
            </form>
        </div>
    </div>
  )
}

export default AddEducation