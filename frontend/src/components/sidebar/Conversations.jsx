import useGetConversation from "../../hooks/useGetConversation";
import Conversation from "./Conversation";
import { getRandomEmoji } from "../../utils/emojis";

const Conversations = () => {
	const {loading, conversations} = useGetConversation();
	console.log("CONVERSATIONS", conversations);
	return (
		<div className='flex flex-col py-2 overflow-auto'>

			{conversations.map((conversation, idx)=>(

			<Conversation
			key={conversation._id}
			conversation={conversation}
			emoji={getRandomEmoji()}
			lastIdx={idx === conversations.length -1}  // for heide last conversation devider
			 />
			))}

		</div>
	);
};
export default Conversations;


// STARTER CODE THIS CONVERSATIONS
// import Conversation from "./Conversation";

// const Conversations = () => {
// 	return (
// 		<div className='flex flex-col py-2 overflow-auto'>
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 		</div>
// 	);
// };
