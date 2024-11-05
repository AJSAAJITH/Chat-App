import { useState } from "react";
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {

    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        setLoading(true); // Moved here
    
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
        if (!success) return;
    
        try {
            const { data } = await axios.post("http://localhost:5000/api/auth/signup", {
                fullName,
                username,
                password,
                confirmPassword,
                gender
            });


            //localstorage
            localStorage.setItem("chat-user", JSON.stringify(data));
            // context
            setAuthUser(data.user);


            if (data.error) {
                throw new Error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    

    return {loading,signup};
}

export default useSignUp;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()/\\])[A-Za-z\d!@#$%^&*()/\\]{6,}$/;


    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Password do not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters")
        return false;
    }

    // if(!passwordRegex.test(password)){
    //     toast.error("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
    //     return false;
    // }

    return true;
}

