import { createContext, useState } from "react";
import AuthService from "../services/AuthService";



const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const [isAuthenticated,setAuthenticated]=useState(JSON.parse(localStorage.getItem("userToken")));

    const login=async(username,password)=>{
        try{
            const response=await AuthService.login(username,password);
            if(response.access_token){
                setAuthenticated(JSON.parse(localStorage.getItem("userToken")));
            }
        }
        catch(error){
            setAuthenticated(JSON.parse(localStorage.getItem("userToken")));
            throw new Error(error);
        }
    }

    const logout=()=>{
        AuthService.logout();
        setAuthenticated(JSON.parse(localStorage.getItem("userToken")));
    }




    return <AuthContext.Provider value={{isAuthenticated,login,logout}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext;