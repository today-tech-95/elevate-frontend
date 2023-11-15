import React,{useState} from "react";
import DriveFileRenameOutlineOutlined from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import AddIcon from '@mui/icons-material/Add';
import AddMesurable from "../modals/AddMesurable";
import { Cancel } from "@mui/icons-material";
import axios from "axios";
import { useCookies } from "react-cookie";
import { BACKEND_URL } from "../../../utils/url";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";

const Goal=({item,getProfile,data})=>{
  const [cookie]=useCookies();
  const [loading,setLoading]=useState(false);

  const handleDelete=async(goal)=>{
    try{
      setLoading(true)
      const res = await axios({
        url:`${BACKEND_URL}/user/one/${cookie.user.user._id}`,
        method:"PATCH",
        params: {
          authToken: cookie?.user?.token,
        },
        data:{
          "measureble":data.filter(item=>item!==goal)
          }
        
      })

      toast.success(`Goal deleted succesfully`)
      setLoading(false)
      getProfile();
    } catch (err) {
      toast.error(`Unable to delete  goal`);
      setLoading(false)
    }  
  }

  return(
    <button
      className="bg-[#8FCB85] text-white py-2 pl-2 pr-8 rounded-full relative"
      key={item._id}
    >
      {item}
      {loading? <SyncOutlined className="absolute right-2 top-3 hover:opacity-50" spin/>:<Cancel className="absolute right-1 hover:opacity-50" onClick={()=>handleDelete(item)}/>}

    </button>
  )
}

const Measurable = ({data,getProfile}) => {
  const [add,openAddMeasurable]=useState(false)


  return (
    <div className="w-full p-[24px] rounded-[12px] border border-[#B1B8C5] relative">
      <div className="flex justify-between items-center mb-9">
        <h4 className="text-[#484D56]">Measurable</h4>
        <button className="flex px-5 gap-2 py-2 border border-gray-300 justify-center items-center rounded-full" onClick={()=>openAddMeasurable(true)}>
          <span className="block text-[#565C67]">Add</span>{" "}
          <span className="block">

            <AddIcon className="text-[14px] text-[#9AA3B4]"/>
          </span>
        </button>
      </div>

      {data?.length <=0?
      <p className="text-center p-2 text-gray-500">No measurable data is added yet</p>
      :
      <div className="flex gap-4 flex-wrap">
        {data?.map((item) => (
          <Goal item={item} getProfile={getProfile} data={data}/>
        ))}
      </div>
      }

      {add &&<AddMesurable data={data} openAddMeasurable={openAddMeasurable} getProfile={getProfile}/>}
    </div>
    
  );
};

export default Measurable;
