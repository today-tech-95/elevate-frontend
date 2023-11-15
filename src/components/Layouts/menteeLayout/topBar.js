import React,{useEffect} from "react";
import Search from "../../common/search";
import AvatarChips from "./../../common/chip";
import { io } from "socket.io-client";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

const TopBar = ({setOpen,openNotifications,count}) => {
  const [cookie]=useCookies(["user"]);


  const handleNotificationAlert=()=>{
    const token = cookie.user.token;

    const newSocket = io('https://elevate-backend.vercel.app/api/v1/elevate',{
      auth: {
        token,
      },
    });

    newSocket.on('onlineUsers', (users) => {
      // toast(newMessage._id)
      console.log(users);

    });
    return () => {
      newSocket.disconnect();
    };
    
  }

  useEffect(() => {
    handleNotificationAlert();
  }, []);
  return (
    <div className="w-full flex justify-between items-center h-[75px] px-[38px]">
      <div>
        <h4 className="text-white font-bold text-xl">elevate</h4>
      </div>
      <div className="w-1/3">
        <Search />
      </div>
      <div>
        <AvatarChips
          setOpen={setOpen}
          count={count}
          openNotifications={openNotifications}
          imagrUrl={
            cookie?.user?.user?.picture
          }
          name={cookie?.user?.user?.firstName +" " + cookie?.user?.user?.lastName}
        />
      </div>
    </div>
  );
};

export default TopBar;
