import ChatBubble from "../chat-bubble/ChatBubble";
import "./chat-body.css"
const ChatBody = ({messages}) => {
    return ( 
        <div className="chat-body-container">
            {
                messages.map((message,index) => <ChatBubble key={index} chat={message} />)
            }
           
        </div>
     );
}
 
export default ChatBody;