import React, { useState } from "react";
import ProgressCard from "./progressCard";
import NotesModal from "../modals/AddNotesModal";
import {toast} from "react-toastify"

const Progress = () => {

  const [formValues, setFormValues] = useState({
    title: "THE COLDEST SUNSET",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  });



  const handleAddNotes = (event) => {
    event.preventDefault();
    toast.success("Notes Added successfully.")
  };

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <div></div>
        <div>
          <NotesModal
            setFormValues={setFormValues}
            formValues={formValues}
            handleAddNotes={handleAddNotes}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {[{id:1,title:"THE COLDEST SUNSET",notes:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."},{id:2,title:"THE COLDEST SUNSET",notes:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."},{id:3,title:"THE COLDEST SUNSET",notes:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."}].map((notes)=>(
          <ProgressCard key={notes.id} title={notes.title} notes={notes.notes}/>
        ))
          
        }
        
      </div>
    </div>
  );
};

export default Progress;
