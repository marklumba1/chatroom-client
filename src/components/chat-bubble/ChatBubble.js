import "./chat-bubble.css"
const ChatBubble = ({chat}) => { 
    const chatClass = localStorage.getItem('username') === chat.username ? 'chat-bubble-container me' : 'chat-bubble-container'
    return (
        <div className={chatClass}>
            <div className="chat-bubble-inner">
                <p>{chat.message}</p>
                <p><small>-{chat.username}</small></p>
            </div>
        </div> 
    );
}
 
export default ChatBubble;