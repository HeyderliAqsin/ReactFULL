import {  createContext, useContext, useEffect, useState } from "react"


const LanguageContext=createContext();
const defaultLanguage=localStorage.getItem("langCode")  || "AZ";

const LanguageProvider=({children})=>{
    const [language, setLanguage] = useState(defaultLanguage)

    const changeLanguage=(lang)=>{
        setLanguage(lang)
    }
    useEffect(()=>{
        localStorage.setItem("langCode",language)
    },[language])
    
    const data={language,changeLanguage}
    return(
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )
}


const useLanguage=()=>useContext(LanguageContext)

export {useLanguage,LanguageProvider}