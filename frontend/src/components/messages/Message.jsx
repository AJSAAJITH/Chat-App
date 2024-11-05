import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();

    // Determine if the message is from the logged-in user
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);

    // console.log("authUser", authUser._id)
    // console.log("SendID", message.senderId)
    
    // Set CSS class based on message origin
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic || "https://via.placeholder.com/40";
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";
    const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Profile" src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>
                {message.message}
            </div>
            <div className="flex items-center gap-1 text-xs opacity-50 chat-footer">
                {formattedTime}
            </div>
        </div>
    );
};

export default Message;


// STARTER CODE
// const Message = () => {
//     return (
//         <div className={`chat chat-end`}>
//             <div className="chat-image avatar">
//                 <div className="w-10 rounded-full">
//                     <img alt="Profile" src="https://avatar.iran.liara.run/public/boy"/>
//                 </div>
//             </div>
//             <div className={`chat-bubble text-white bg-blue-500 `}>
//                 Hello Dear
//             </div>
//             <div className="flex items-center gap-1 text-xs opacity-50 chat-footer">
//                 12.43
//             </div>
//         </div>
//     );
// };

// export default Message;