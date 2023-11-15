import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DeleteIcon from '@mui/icons-material/Delete';
import { SyncOutlined} from '@ant-design/icons';
import { useState } from "react";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { toast } from 'react-toastify';

export function calculateAge(startDate, endDate) {
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  const yearsDiff = endDateObj.getFullYear() - startDateObj.getFullYear();
  const monthsDiff = endDateObj.getMonth() - startDateObj.getMonth();

  const adjustedYearsDiff = monthsDiff < 0 ? yearsDiff - 1 : yearsDiff;

  const remainingMonths = monthsDiff < 0 ? 12 + monthsDiff : monthsDiff;

  return {
    years: adjustedYearsDiff,
    months: remainingMonths,
  };
}

const ChildrenHolder = ({
  school,to,from,degree,data,getProfile,belongsTo,
  comapny,address,position,id,name,description
}) => {


  const [loading,setLoading]=useState(false);

  const [loadingExp,setLoadingExp]=useState(false);

  const [cookie] = useCookies();

  const handleDelete=async()=>{
    
    try {
      belongsTo==="Education"?setLoading(true):setLoadingExp(true)
      const res = await axios({
        url:`https://elevate-backend.vercel.app/api/v1/elevate/user/one/${cookie.user.user._id}`,
        method:"PATCH",
        params: {
          authToken: cookie?.user?.token,
        },
        data:belongsTo==="Education"?
        {
         "education":data.filter(item=>item._id !== id)
        }
        :
        belongsTo==="Experience"?
        {
          "experience":data.filter(item=>item._id !== id)
        }
        :
        belongsTo==="Specific"?
        {
          "specific":data.filter(item=>item._id !== id)
        }
        :
        belongsTo==="Relevant"?
        {
          "relavant":data.filter(item=>item._id !== id)
        }:
        belongsTo==="Achievable"?
        {
          "achievable":data.filter(item=>item._id !== id)
        }
        :
        {
          "timeBound":data.filter(item=>item._id !== id)
        }
      })
  
      toast.success(`${belongsTo} goal deleted succesfully`)
      belongsTo==="Education"?setLoading(false):setLoadingExp(false)
      getProfile();
    } catch (err) {
      toast.error(`Unable to delete  ${belongsTo} goal`);
      belongsTo==="Education"?setLoading(false):setLoadingExp(false)
    }              
  }  
  const age = calculateAge(from,to.toLowerCase()==='present'?new Date():to);


  return (
    <div className="flex flex-col relative">
    <div className='opacity-50 text-[10px] mx-2 absolute top-0 right-0 cursor-pointer hover:opacity-40'>
      {loading?<SyncOutlined  spin/>:loadingExp?<SyncOutlined  spin/>:<DeleteIcon onClick={()=>handleDelete()}/>}
    </div>
    <h4 className="font-bold">
      {belongsTo==="Education"?
      school
      :
      belongsTo==="Experience"?
      comapny
      :(belongsTo==="Specific" ||belongsTo==="Relevant"||belongsTo==="Achievable" || belongsTo==="TimeBound")&& name
      }
      </h4>
    <label className='opacity-50'>{belongsTo==="Education"?degree:belongsTo==="Experience"?position:""}</label>
    <p>{from +" - "+to}<FiberManualRecordIcon fontSize='1px' className='opacity-50 text-[10px] mx-2'/><span>{age.years===0?`${age.months} month${age.months>1? 's':""}`:age.months===0?`${age.years} year${age.years>1 ? 's':""}`:`${age.years} year${age.years>1 ? 's':""},${age.months} month${age.months>1 ? 's':""}`}</span></p>
    {address && <p>{address}</p>}
    {description && <p>{description}</p>}
    </div>
  )
}

export default ChildrenHolder