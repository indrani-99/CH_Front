import { createContext, useState } from "react";

const AuthContext=createContext();

function AuthContextProvider({children}){

    const [token,setToken]=useState(null);
    
}