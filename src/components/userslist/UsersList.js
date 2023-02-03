import { useEffect, useState } from "react";
import "./users-list.css"
const UsersList = ({socket}) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        socket.on("emitUsers", data => setUsers(data))
    },[socket,users])
    return ( 
        <div className="users-list-container">
            
                <p>User List</p>
                <ul>
                {users.map(user => 
                    <li key={user.socketID}>{user.username}</li>
                )}
                </ul>
        
        </div>
     );
}
 
export default UsersList;