import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "./skeleton/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
    const { messages, loading } = useGetMessages();
    // console.log("MESSAGES: ",messages);

    // message listen with socket
    useListenMessages();
    
    const lastMessageRef = useRef(null);

    // Scroll to the last message when new messages arrive
    useEffect(() => {
        if (messages.length > 0) {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div className="flex-1 px-4 overflow-auto">
            {/* Render messages */}
            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>
            ))}

            {/* Show skeleton loader while loading */}
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {/* Display a message if no messages are available */}
            {!loading && messages.length === 0 && (
                <p className="text-center">Send a message to start the conversation</p>
            )}
        </div>
    );
};
export default Messages;


// STARTER CODE SNIPPET
// import Message from "./Message";

// const Messages = () => {
// 	return (
// 		<div className='flex-1 px-4 overflow-auto'>
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 		</div>
// 	);
// };
// export default Messages;


