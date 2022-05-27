import { BASE_URL } from "../../api/ApiConfig"
import { ADD_TO_CART } from "../Constants/CartConstants";

export const AddToCart=(id,qty,lang)=>async (dispatch,getState)=>{
    const data= await ((await fetch(`${BASE_URL}/api/products/${id}/${lang}`)).json())
    dispatch({
        type:ADD_TO_CART,
        payload:{
            id:data.id,
            price:data.price,
            qty
        }
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}   