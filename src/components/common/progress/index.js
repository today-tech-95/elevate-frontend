import React, { useEffect, useState } from "react";
import ProgressCard from "./progressCard";
import NotesModal from "../modals/AddNotesModal";
import {toast} from "react-toastify"
import axios from "axios";
import { useCookies } from "react-cookie";
import { BACKEND_URL } from "../../../utils/url";
import { BounceLoader } from "react-spinners";
import { ErrorResponse } from "../../errorResponse";

const Progress = () => {

  const [formValues, setFormValues] = useState({
    title: "",
    description:"",
  });

  const [loading,setLoading]=useState(false);
  const [cookie]=useCookies();


  const handleAddNotes = async(event) => {
    event.preventDefault();
    if(formValues.title==="" || formValues.description===""){
      toast.error("All fields are required.")

    }else{
      try {
        setLoading(true);
        const res=await axios({
          url:`${BACKEND_URL}/tracking`,
          method:"POST",
          params:{
            authToken:cookie.user.token
          },
          data:{
            ...formValues
          }
        })

        toast.success(res.data.message)
        setLoading(false)
      } catch (err) {
        setLoading(false);
        toast.error(err?.response?.data.error?err?.response?.data.error:err.message);
      }
    }
  };

  const [notes,setNotes]=useState([]);
  const [getLoading,setGetLoading]=useState(false);
  const [error,setError]=useState({
    status:false,
    errorMsg:""
  });

  const getNotes=async()=>{
    try {
      setGetLoading(true);

      const res=await axios({
        url:`${BACKEND_URL}/tracking`,
        method:"GET",
        params:{
          authToken:cookie.user.token
        },
      }) 
      setGetLoading(false)
      setNotes(res.data.data);
    } catch (error) {
      setError({...error,status:true,errorMsg:error})
      setGetLoading(false)
    }
  }

  const [loadingDel,setLoadingDel]=useState(false);

  const handleDelete=async(id)=>{
    try {
      setLoadingDel(true);

      const res=await axios({
        url:`${BACKEND_URL}/tracking`,
        method:"DELETE",
        params:{
          authToken:cookie.user.token
        },
      })

    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getNotes()
  },[])

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div></div>
        <div>
          <NotesModal
            setFormValues={setFormValues}
            formValues={formValues}
            loading={loading}
            handleAddNotes={handleAddNotes}
          />
        </div>
      </div>
      {getLoading ? (
        <div className="flex justify-center items-center mt-20">
          <BounceLoader color="#2467F6" />
        </div>
      ) : (
        notes.length<=0?<p className="text-center p-2 text-gray-500">Notes list is empty</p>
        :
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {notes.map((notes)=>(
            <ProgressCard key={notes.id} title={notes.title} notes={notes.description}/>
          ))
            
          }
          
        </div>
      )}
      {error.status && <ErrorResponse errorMsg={error.errorMsg} retryHandler={getNotes}/>}

    </div>
  );
};

export default Progress;
