import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
	const {onlineUser} = useSocketContext();
	const isOnline = onlineUser.includes(conversation._id);

	return (
		<>
			<div
			className={`flex items-center gap-2 p-2 py-1 rounded cursor-pointer hover:bg-sky-500
			 ${isSelected ? "bg-sky-500" : ""}`}
			 onClick={()=>setSelectedConversation(conversation)}
			>

				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full'>
						<img
							src={conversation.profilePic}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex justify-between gap-3'>
						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='h-1 py-0 my-0 divider' />}

		</>
	);
};
export default Conversation;


// STARTER CODE THIS CONVERSATION
// const Conversation = () => {
// 	return (
// 		<>
// 			<div className='flex items-center gap-2 p-2 py-1 rounded cursor-pointer hover:bg-sky-500'>
// 				<div className='avatar online'>
// 					<div className='w-12 rounded-full'>
// 						<img
// 							src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
// 							alt='user avatar'
// 						/>
// 					</div>
// 				</div>

// 				<div className='flex flex-col flex-1'>
// 					<div className='flex justify-between gap-3'>
// 						<p className='font-bold text-gray-200'>AJA Saajith</p>
// 						<span className='text-xl'>🎃</span>
// 					</div>
// 				</div>
// 			</div>

// 			<div className='h-1 py-0 my-0 divider' />
// 		</>
// 	);
// };