import {createContext, useState} from "react"

export const TokenContext = createContext()

export const TokenContextProvider =({children})=>{

    const [token,setToken]=useState("")

    const handleToken = (s)=>{
        setToken(s)
    }
 return <TokenContext.Provider value={{token,handleToken}}>{children}</TokenContext.Provider>
}