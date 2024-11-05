import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversation from "../../hooks/useGetConversation";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
const SearchInput = () => {
    const [search, setSearch] = useState("");
    const {conversations} = useGetConversation();
    const {setSelectedConversation} = useConversation();

    const handleSubmit = (e)=>{
        e.preventDefault();
		if (!search) return;
		if (search.length < 1) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
    }

    return (
        <form className='flex items-center gap-2' onSubmit={handleSubmit}>
            <input
             type='text' 
             placeholder='Search…' 
             className='rounded-full input input-bordered'
             value={search}
             onChange={(e)=>setSearch(e.target.value)}
            />
             
            <button type='submit' className='text-white btn btn-circle bg-sky-500'>
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>
        </form>
    );
};

export default SearchInput;