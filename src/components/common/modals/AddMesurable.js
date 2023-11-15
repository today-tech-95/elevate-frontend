import React, { useState } from 'react'
import { Cancel } from "@mui/icons-material";
import { universities } from '../../../utils/universities';
import { toast } from 'react-toastify';
import axios from 'axios';
import { SyncOutlined} from '@ant-design/icons';
import { useCookies } from 'react-cookie';
import { BACKEND_URL } from '../../../utils/url';

const AddMesurable = ({openAddMeasurable,data,getProfile}) => {
    const [measurable,setMeasurable]=useState("");
    const [loading,setLoading]=useState(false);
    const [cookie]=useCookies();
    

    const handleAdd=async(event)=>{
        event.preventDefault();

        if(measurable===""){
            toast.error("measurable goal is required")
        }else if(data.some(item=>item.toLowerCase()===measurable.toLowerCase)){
            toast.error("Goal already exists")

        }else{
            try {
                setLoading(true);

                let combine=[];

                combine.push(measurable);
                data.length>0 && data.map(item=>combine.push(item));
                const res=await axios({
                    url:`${BACKEND_URL}/user/one/${cookie.user.user._id}`,
                    method:"PATCH",
                    params: {
                    authToken: cookie?.user?.token,
                    },
                    data:{
                    "measureble":combine
                    }
                })
                toast.success(res.data.message)
                setLoading(false);
                getProfile();
                openAddMeasurable(false)
            } catch (err) {
                toast.error(err?.response?.data.error?err?.response?.data.error:err.message);
                setLoading(false)
            }
        }
    }

  return (
     <div className='absolute bg-white w-full z-40  flex bg-opacity-50 top-0   py-2 px-4'>
        <div className='bg-[#F4F5F8] w-11/12 mx-auto shadow-lg rounded-lg'>
            <div className="sticky px-4 py-4 top-0 bg-[#F4F5F8] flex justify-between">
                <h1>Add Measurable goal</h1>
                <button
                    className="flex justify-center rounded-full items-center gap-4 w-8 h-8 px-2 py-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#1C1F23] border border-transparent drop-shadow active:bg-[#1C1F23] hover:bg-[#1C1F23] hover:drop-shadow hover:shadow-xl focus:outline-none"
                    href="#"
                    onClick={()=>openAddMeasurable(false)}
                >
                    <Cancel/>
                </button>
            </div>

            <form className='px-4 py-4' onSubmit={(e)=>handleAdd(e)}>
                <div className='mb-3'>
                    <label className="mb-3">Measurable goal</label>
                    <input
                        type='text'
                        value={measurable}
                        onChange={(e)=>{
                            setMeasurable(e.target.value);

                        }}
                        required
                        placeholder='Measurable goal'  
                        className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                </div>



                <button
                className="flex justify-center items-center gap-4 w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#007bff] border border-transparent rounded-lg focus:outline-none"
                href="#"
                >
                    {loading? <SyncOutlined  spin/>:"Save"}
                </button>
            </form>
        </div>
    </div>
  )
}

export default AddMesurable