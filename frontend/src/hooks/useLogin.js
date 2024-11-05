import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

function useLogin() {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async ({ username, password }) => {
        // const success = handleInputErrors({ username, password });
        // if (!success) return;

        try {
            setLoading(true);
            const { data } = await axios.post('/api/auth/login', {
                username,
                password
            });

            if (!data.success) throw new Error(data.message || "Login failed");

            //localstorage
            localStorage.setItem("chat-user", JSON.stringify(data));
            //Context
            setAuthUser(data.user);



            toast.success("Success");

        }catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred";
            toast.error(errorMessage);
            console.error("Error:", error.response);  // Log for debugging
        }
        finally{
            setLoading(false);
        }
    }

    return({loading, login});
}

export default useLogin;

// function handleInputErrors({ username, password }) {
//     if (!username || !password) {
//         toast.error("Please fill in all fields");
//         return false;
//     }
// }