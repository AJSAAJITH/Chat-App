
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = ()=>{
    return useContext(AuthContext);
}

export const AuthContextProvider =({children})=>{
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
    
    return <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</AuthContext.Provider>
}

// import { createContext, useContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const useAuthContext = () => useContext(AuthContext);

// export const AuthContextProvider = ({ children }) => {
//     const [authUser, setAuthUser] = useState(() => JSON.parse(localStorage.getItem("chat-user")));

//     // Update local storage whenever `authUser` changes
//     useEffect(() => {
//         if (authUser) {
//             localStorage.setItem("chat-user", JSON.stringify(authUser));
//         } else {
//             localStorage.removeItem("chat-user");
//         }
//     }, [authUser]);

//     return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
// };
