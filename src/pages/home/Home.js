import { useNavigate } from "react-router";
import "./home.css"
import { useState } from "react";

const Home = ({socket}) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
   
    const handleClick = (event)  => {
        if (username){
            socket.emit("newUser", {
                username: username,
                socketID: socket.id
            })
            localStorage.setItem('username', username)
            navigate("/chatroom")
        }else{
            alert("Please set a username")
        }
      
    }
 
    return ( 
        <div className="home-container">
            <div className="home-inner">
                <p>Welcome to chat app.</p>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter name" />
                <button onClick={handleClick}>Enter</button>
            </div>
        </div>
     );
}
 
export default Home;