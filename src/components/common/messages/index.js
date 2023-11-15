/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from "react";
import {
  MainContainer,
  ChatContainer,
  Sidebar,
  ConversationList,
  Conversation,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  Status,
  InfoButton,
  ConversationHeader,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import axios from "axios";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { Loading } from "../../loading";
import { ErrorResponse } from "../../errorResponse";
import { Cancel } from "@mui/icons-material";
import { io } from "socket.io-client";

const UsersList=({data,setOpen,keyword,setKeyword,loading,handleMessages,errorUsers,retryUsers})=>{
  const [cookies] = useCookies(["user"]);
  const initializeChat=async(receiver)=>{
    try{
      const res = await axios({
        url:"https://elevate-backend.vercel.app/api/v1/elevate/chat",
        method:'POST',
        params: {
          authToken: cookies?.user?.token,
        },
        headers:{
          "Content-Type":"application/json"
        },
        data:{
          "participants":[cookies?.user?.user?._id,receiver]

        },
      })
      setOpen(false);
      handleMessages()
    }catch(error){
      toast.error(error.message);
    }
  }



  return(
    <div className="z-40 bg-white flex items-center bg-opacity-50 absolute top-0 w-full min-h-screen max-h-screen overflow-hidden py-2 px-4">
      <button onClick={()=>setOpen(false)}
        className="absolute z-20 right-2 top-2 flex justify-center rounded-full items-center gap-4 w-12 h-12 px-2 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#1C1F23] border border-transparent drop-shadow active:bg-[#1C1F23] hover:bg-[#1C1F23] hover:drop-shadow hover:shadow-xl focus:outline-none"
        href="#"
      >
        <Cancel/>
      </button>
      <div className="bg-[#F4F5F8] max-h-screen min-h-screen px-4 py-4 overflow-y-auto mt-4 w-1/2 mx-auto shadow-lg rounded-lg ">
        <form className="mb-2">
          <label
          htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              value={keyword}
              onChange={(e)=>setKeyword(e.target.value)}
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:placeholder-gray-400 focus:outline-none"
              placeholder="Search users"
              required
            />
          </div>
        </form>
        {loading? <Loading/>
        :!errorUsers.status?(
          data?.length <= 0?<p className="text-center p-2 text-gray-500">No user found</p>
          :
          <ConversationList>
            {data.map(user=>(
              <Conversation
                key={user._id}
                onClick={()=>initializeChat(user._id)}
                name={user.firstName + " " + user.lastName}
                info={user.role}
              >
                <Avatar src={user.picture} />
              </Conversation>
            ))}
            
          </ConversationList>
        ):(<ErrorResponse errorMsg={errorUsers.errorMsg} retryHandler={retryUsers}/>)
        }


      </div>
    </div>
  )
}

const Messages = () => {

  const [cookies] = useCookies(["user"]);
  const [loading, setLoading] = useState(false);
  const [users,setUsers] = useState([]);
  const [keyword,setKeyword]=useState("")
  const [msgKeyword,setMsgKeyword]=useState("")
  const [open,setOpen]=useState(false);
  const [chatId,setChatId] = useState("");
  const [formData,setFormData]=useState({
    body:"",
    link:"",
  })

  const [messageData,setMessageData]= useState([]);
  const [cookie,setCookie]=useCookies();
  const [msg,setMsg]=useState([]);
  const [oneMsgLoading,setOneMessageLoading]=useState(false)
  const [messageLoading,setMessageLoading]=useState(false)

  const [error,setError]=useState({
    status:false,
    errorMsg:""
  });

  const [errorUsers,setErrorUsers]=useState({
    status:false,
    errorMsg:""
  });

  const handleMessages=async()=>{
    try {
      setMessageLoading(true)
      const res=await axios.get('https://elevate-backend.vercel.app/api/v1/elevate/chat',{
        params: {
          authToken: cookie?.user?.token,
        },
      })

      setMessageData(res.data);
      setMessageLoading(false);
    } catch (error) {
      setError({...error,status:true,errorMsg:error})
      setMessageLoading(false);
    }
  }
  const getOneMessage=async(id)=>{
    try{
      setOneMessageLoading(true);
      const { data } = await axios({
        url: `https://elevate-backend.vercel.app/api/v1/elevate/chat/one/${id}`,
        method: "GET",
        params: {
          authToken: cookies?.user?.token,
        },
      });
      setMsg(data);
      setOneMessageLoading(false)
    } catch (err) {
      toast.error(err.message);
      setOneMessageLoading(false)
    }
  }

  const socket = io('https://elevate-backend.vercel.app/api/v1/elevate'); // Replace with your server URL


  const sendMessage = async(data) => {
    try{
      const res = await axios({
        url:`https://elevate-backend.vercel.app/api/v1/elevate/chat/one/${data.chatId}`,
        method:'PATCH',
        params: {
          authToken: cookies?.user?.token,
        },
        headers:{
          "Content-Type":"application/json"
        },
        data:{
          body:formData.body,
          link:formData.link,
          isNotify:true,
          notification:{
          title:"...",
          action: `New message from ${data.names}`,
          message: "You have a new message",
          receiverIds:`${data.receiver}`
          }
        }
      })
      toast.success(res.data.message);

      getOneMessage(chatId);
      handleMessages();

      socket.on('server-message', (data) => {
        console.log('Received message from server:', data);
      });
    
      return () => {
        // Clean up event listeners when the component unmounts
        socket.off('server-message');
      };
    }catch(error){
      toast.error(error.message);
    }
  };


  const getAllUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios({
        url: "https://elevate-backend.vercel.app/api/v1/elevate/user/users",
        method: "GET",
      });
      setUsers(data.data);
      setLoading(false);
    } catch (err) {
      setErrorUsers({...errorUsers,status:true,errorMsg:error})
      setLoading(false)
    }
  };

  const handleOpenModal=()=>{
    setOpen(!open);
    getAllUsers();
  }


  useEffect(()=>{
    handleMessages();
  },[])
  
  
  const filterData=users.filter((item)=>(item.lastName.toLowerCase().includes(keyword.toLowerCase()) || item.firstName.toLowerCase().includes(keyword.toLowerCase())) && item?._id.toLowerCase() !== cookies?.user?.user?._id?.toLowerCase())

  const userName=(data)=>{
    const filteredUser=data.filter(item=>item?._id !==cookies?.user?.user?._id )
    return filteredUser
  }
  return (
    <div style={{ position: "relative", height: "500px",overflow:"hidden" }}>
      <MainContainer>
        <Sidebar position="left">
          <button onClick={()=>handleOpenModal()}
            className=" absolute z-20 right-2 bottom-4 flex justify-center items-center gap-4 w-2/5 h-12 px-2 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-[#007bff] border border-transparent rounded-lg drop-shadow active:bg-[#007bff] hover:bg-[#007bff] hover:drop-shadow hover:shadow-xl focus:outline-none"
            href="#"
          >
            New chat
          </button>
          <form className="mb-2 px-4 py-4">
            <label
            htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                value={msgKeyword}
                onChange={(e)=>setMsgKeyword(e.target.value)}
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:placeholder-gray-400 focus:outline-none"
                placeholder="Search message"
                required
              />
            </div>
          </form>
          {messageLoading && messageData?.length ===0?<Loading/>
          :!error.status?(
            messageData?.data?.length <=0?<p className="text-center p-2 text-gray-500">Chat list is empty</p>
            :
            <ConversationList>
              {messageData?.data?.map((chat)=>(
                <Conversation
                  key={chat._id}
                  onClick={()=>{setChatId(chat._id);getOneMessage(chat._id)}}
                  name={userName(chat.participants)[0].firstName +" "+userName(chat.participants)[0].lastName }
                  lastSenderName={
                    chat?.lastMessage ===null?
                    chat?.participants[0]?._id === cookies?.user?.user?._id?'You':chat?.participants[1]?.firstName + " " + chat?.participants[1]?.lastName
                    :
                    chat?.participants[0]?._id === cookies?.user?.user?._id?'You':chat?.lastMessage?.sender?.firstName +" "+chat?.lastMessage?.sender?.lastName
                  }
                  info={chat?.lastMessage ===null?"initialized this chat":chat?.lastMessage?.body}
                  active={chatId === chat?._id?true:false}
                >
                  <Avatar src={chat?.participants[1]?.picture} />
                </Conversation>
              ))}
             
            </ConversationList>):(<ErrorResponse errorMsg={error.errorMsg} retryHandler={handleMessages}/>)
          }
          
        </Sidebar>
        {chatId ===""?<div className="w-full flex items-center justify-center"><p className="text-center p-2 text-gray-500">Click message to view its details</p></div>
        :
          oneMsgLoading && msg.length===0?<Loading/>
          :
          <ChatContainer>
            <ConversationHeader>
              <Avatar src={msg?.data?.participants[1]?.picture} />
              <ConversationHeader.Content
                userName={msg?.data?.participants[1]?.firstName + " " + msg?.data?.participants[1]?.lastName }
                info="last active 10 min. ago"
              ></ConversationHeader.Content>
            </ConversationHeader>  
            <InfoButton className="w-full" disabled>initialized this chat</InfoButton>           
            <MessageList>
              {msg?.data?.messages?.map(item=>(
                <Message
                  model={{
                    message: item?.body,
                    sentTime: item?.date,
                    sender: item?.sender.firstName +" "+item?.sender.lastName,
                    direction:item?.sender._id ===cookies?.user?.user?._id? "outgoing":"incoming",
                    position: "single",
                  }}
                  avatarSpacer
                >
                  <Avatar src={item?.sender.picture} />
                </Message>
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here"  attachButton={false}
            onChange={(e)=>{
              setFormData({
                ...formData,
                body:e
              })}} 
            onSend={()=>sendMessage({names:`${msg?.data?.participants[0]?.firstName + " " + msg?.data?.participants[0]?.lastName}`,chatId:msg?.data?._id,receiver:msg?.data?.participants[1]?._id})} />

          </ChatContainer>
        }
      </MainContainer>
      {open && <UsersList 
      handleMessages={handleMessages} 
      loading={loading} 
      data={filterData} 
      setOpen={setOpen} 
      keyword={keyword} 
      setKeyword={setKeyword}
      errorUsers={errorUsers}
      retryUsers={getAllUsers}
      />}
    </div>
  );
};

export default Messages;
