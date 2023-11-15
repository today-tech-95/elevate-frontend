import React, { useEffect, useState } from 'react'
import { Cancel } from "@mui/icons-material";
import { universities } from '../../../utils/universities';
import { toast } from 'react-toastify';
import axios from 'axios';
import { SyncOutlined} from '@ant-design/icons';
import { useCookies } from 'react-cookie';
import { BACKEND_URL } from '../../../utils/url';

const AddOtherUserData = ({addData,current,getProfile,dataToAdd,openAddModal}) => {
    const [userData,setUserData] = useState(
        {
            name: "",
            from: "",
            to: "",
            description: "",
        }
    );


    const [loading,setLoading]=useState(false);

    const [cookie] = useCookies();

    const handleAdd=async(event)=>{
        event.preventDefault();

        const getDataToAdd=dataToAdd==='specific'?current?.specific:dataToAdd==='relevant'?current?.relavant:dataToAdd==='achievable'?current.achievable:current.timeBound

        if(userData.name ==="" || userData.description==="" || userData.from==="" || userData.to===""){
            toast.error("All fields are required")
        }else if(getDataToAdd.some(item=>item.name ===userData.name)){
            toast.error("You already have this experience")
        }else{
            try {
                let combineUserData=[];

                combineUserData.push(userData);
                getDataToAdd.length>0 && getDataToAdd.map(item=>combineUserData.push(item));

                setLoading(true)
                const {data} = await axios({
                    url:`${BACKEND_URL}/user/one/${cookie.user.user._id}`,
                    method:"PATCH",
                    params: {
                        authToken: cookie?.user?.token,
                    },
                    data:dataToAdd==='specific'?
                    {
                        "specific":combineUserData
                    }
                    :
                    dataToAdd==='relevant'?
                    {
                        "relavant":combineUserData
                    }
                    :
                    dataToAdd==='achievable'?
                    {
                        "achievable":combineUserData
                    }
                    :
                    {
                        "timeBound":combineUserData
                    }

                })
            
                toast.success(`New ${dataToAdd} added successfully`)
                setLoading(false)
                openAddModal(false);
                getProfile();
              } catch (err) {
                toast.error(err?.response?.data.error?err?.response?.data.error:err.message);
                setLoading(false)
              }              
        }
    }

  return (
    <div className='absolute bg-white w-full min-h-full max-h-full z-40  flex items-center bg-opacity-50 top-0  overflow-hidden py-2 px-4'>
        <div className='bg-[#F4F5F8] overflow-y-auto max-h-full w-11/12 mx-auto shadow-lg rounded-lg'>
            <div className="sticky px-4 py-4 top-0 bg-[#F4F5F8] flex justify-between">
                <h1>Add {dataToAdd} goal</h1>
                <button
                    className="flex justify-center rounded-full items-center gap-4 w-8 h-8 px-2 py-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#1C1F23] border border-transparent drop-shadow active:bg-[#1C1F23] hover:bg-[#1C1F23] hover:drop-shadow hover:shadow-xl focus:outline-none"
                    href="#"
                    onClick={()=>openAddModal(false)}
                >
                    <Cancel/>
                </button>
            </div>

            <form className='px-4 py-4' onSubmit={(e)=>handleAdd(e)}>
                <div className='mb-3'>
                    <label className="mb-3">Name</label>
                    <input
                        type='text'
                        value={userData.name}
                        onChange={(e)=>{
                            setUserData({...userData,name:e.target.value});

                        }}
                        required
                        placeholder='Name'  
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                </div>
                <div className='flex w-full justify-between gap-2'>
                    <div className="mb-3 w-full">
                        <label className="mb-3">Start date</label>
                        <input
                            type="month"
                            value={userData.from===""?"":new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",}).format(new Date(userData.from))}
                            onChange={(e)=>{
                                setUserData({
                                    ...userData,
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
                            value={userData.to===""?"":new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",}).format(new Date(userData.to))}
                            onChange={(e)=>{
                                setUserData({
                                    ...userData,
                                    to:new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "long",}).format(new Date(e.target.value))
                                })
                            }}
                            type="month"
                            required
                            min={userData.from===""?
                                new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",}).format(new Date()):new Intl.DateTimeFormat("en-CA", {year: "numeric",month: "2-digit",}).format(new Date(userData.from))
                            }
                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            placeholder="to"
                        />
                    </div>
                </div>
                <div className="mb-3 w-full">

                    <label className="mb-3">Description</label>
                    <textarea
                        value={userData.description}
                        onChange={(e)=>{
                            setUserData({...userData,description:e.target.value});
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
                    {loading? <SyncOutlined  spin/>:`Save ${dataToAdd} goal`}
                </button>
            </form>
        </div>
    </div>
  )
}

export default AddOtherUserData