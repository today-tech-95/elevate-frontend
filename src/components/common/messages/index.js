import React from "react";
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
  ConversationHeader,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

const Messages = () => {
  const sendMessage = (event) => {
    console.log(event);
  };

  return (
    <div style={{ position: "relative", height: "500px" }}>
      <MainContainer>
        <Sidebar position="left">
          <ConversationList>
            <Conversation
              name="John"
              lastSenderName="John"
              info="Hello my friend"
            >
              <Avatar src="https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </Conversation>
            <Conversation name="Anna" lastSenderName="Anna" info="Hello">
              <Avatar src="https://cdn.pixabay.com/photo/2021/07/19/04/36/woman-6477171_640.jpg" />
            </Conversation>
            <Conversation name="David" lastSenderName="David" info="Hi Jean!">
              <Avatar src="https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_640.jpg" />
            </Conversation>
            <Conversation name="Schmitt" lastSenderName="Schmitt" info="Hi bro">
              <Avatar src="https://cdn.pixabay.com/photo/2022/08/20/06/44/personal-pic-7398400_640.jpg" />
            </Conversation>
            <Conversation
              name="John"
              lastSenderName="John"
              info="How are you ?"
              active={true}
            >
              <Avatar src="https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </Conversation>
          </ConversationList>
        </Sidebar>
        <ChatContainer>
          <ConversationHeader>
            <Avatar src="https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <ConversationHeader.Content
              userName="John"
              info="last active 10 min. ago"
            ></ConversationHeader.Content>
          </ConversationHeader>
          <MessageList>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "just now",
                sender: "Jeanndo",
                direction: "outgoing",
                position: "single",
              }}
              avatarSpacer
            >
              <Avatar src="https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </Message>
            <Message
              model={{
                message: "Hello Jean!",
                sentTime: "5 min. ago",
                sender: "John",
                direction: "incoming",
                position: "single",
              }}
              avatarSpacer
            >
              <Avatar src="https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </Message>
            <Message
              model={{
                message: "How are you ?",
                sentTime: "7 min. ago",
                sender: "John",
                direction: "incoming",
                position: "single",
              }}
              avatarSpacer
            >
              <Avatar src="https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </Message>
            <Message
              model={{
                message: "I am good.",
                sentTime: "Just now.",
                sender: "Jeanndo",
                direction: "outgoing",
                position: "single",
              }}
              avatarSpacer
            >
              <Avatar src="https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </Message>
            <Message
              model={{
                message: "How about you ?",
                sentTime: "Just now.",
                sender: "Jeanndo",
                direction: "outgoing",
                position: "single",
              }}
              avatarSpacer
            >
              <Avatar src="https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </Message>
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={sendMessage} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Messages;
