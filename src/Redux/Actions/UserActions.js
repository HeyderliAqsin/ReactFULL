import axios from "axios"
import { BASE_URL } from "../../api/ApiConfig"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../Constants/UserConstants";

export const loginAction=(email,password)=>(dispatch,getState)=>{
    try {
        console.log(email)
        console.log(password)
        dispatch({type:USER_LOGIN_REQUEST})
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        const {data}=axios.post(`${BASE_URL}/api/account/login`,
        {email,password},config);
        console.log(data)
        dispatch({type:USER_LOGIN_SUCCESS,payload:data})
        localStorage.setItem("userInfo",JSON.stringify(data))
    } catch (error) {
        dispatch({type:USER_LOGIN_FAIL,payload:error})
    }
}

export const registerAction=
 (firstName,lastName,email,password,confirmPassword)=>(dispatch,getState)=>{
    try {
        
    } catch (error) {
        
    }
}

export const logoutAction=(email,password)=>(dispatch,getState)=>{

}