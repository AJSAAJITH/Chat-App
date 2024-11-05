import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

function useGetConversation() {
  const [loading, setLoadig] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(()=>{
    const getConversation = async()=>{
        setLoadig(true);
        try {

            const {data} = await axios.get("/api/users");

            setConversations(data);
            
        } catch (error) {
            // const errorMessage = error.response?.data?.massage || "An Error Occured getConversation";
            // toast.error(errorMessage);
            // console.log(errorMessage);
            toast.error(error.message);
            console.log(error.message);
        }
    }

    getConversation();

  },[]);

  return {loading, conversations}
}

export default useGetConversation;