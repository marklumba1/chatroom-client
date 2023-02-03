import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./global.css"
import ChatRoom from "./pages/chat-room/ChatRoom";
import socketIO from "socket.io-client";
const socket = socketIO.connect('http://localhost:4000')

const App = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home socket={socket}/>} />
                <Route path={"/chatroom"} element={<ChatRoom socket={socket}/>} />
                
            </Routes>
        </BrowserRouter>
     );
}
 
export default App;