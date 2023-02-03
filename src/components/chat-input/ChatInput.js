import { useState } from "react";
import "./chat-input.css"
import { useNavigate } from "react-router";
const ChatInput = ({socket}) => {
    const navigate = useNavigate()
    const [message,setMessage] = useState("")
    const sendMessage = (e) => {
        socket.emit('message', {
            message: message,
            username: localStorage.getItem('username'),
            socketID: socket.id
        })
        setMessage("")
    }
    const logout = () => {
        socket.emit(`logout`,socket.id)
        navigate("/")
    }

    const handleKeyUp = (e) => {
        if (e.key === "Enter") sendMessage()
    }
    return ( 
        <div className="chat-input-container">
            <div className="">
                <input type="text" value={message} onKeyUp={handleKeyUp} onChange={e => setMessage(e.target.value)} placeholder="Enter message." />
                <button onClick={sendMessage}>Send</button>
            </div>
            <p>This chat-app was created on React using NodeJS and WebSockets.</p>
            <button onClick={logout}>Logout</button>
        </div>
     );
}
 
export default ChatInput;