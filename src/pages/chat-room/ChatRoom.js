import { useEffect, useState } from "react";
import ChatBody from "../../components/chat-body/ChatBody";
import ChatInput from "../../components/chat-input/ChatInput";
import UsersList from "../../components/userslist/UsersList";
import "./chatroom.css"
import { useNavigate } from "react-router";
const ChatRoom = ({socket}) => {
    const navigate = useNavigate()
    const [messages, setMessages] = useState([])
   
 
    useEffect(() => {
        socket.on("messageResponse", data => setMessages([...messages, data]))
    },[socket, messages])

    useEffect(() => {
        if (!localStorage.getItem('username')) navigate("/")
    },[navigate])
  
    return ( 
        <div className="chatroom-container">
            <div className="chatroom-inner">
                <div className="chat-users-list">
                    <UsersList socket={socket}/>
                </div>
                <div className="chat-body">
                    <ChatBody messages={messages}/>
                </div>
                <div className="chat-message">
                    <ChatInput socket={socket}/>
                </div>
            </div>
        </div>
     );
}
 
export default ChatRoom;