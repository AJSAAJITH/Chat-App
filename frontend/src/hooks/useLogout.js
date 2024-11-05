import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';

function useLogout() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('/api/auth/logout');

            if (!data.success) throw new Error(data.message || "Logout failed");

            // Clear local storage and context
            localStorage.removeItem("chat-user");
            setAuthUser(null);

            toast.success("Successfully logged out");
            
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred";
            toast.error(errorMessage);
            console.error("Error:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
}

export default useLogout;
