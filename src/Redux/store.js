import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducers } from "./Reducers/CartReducers";
import { userLoginReducers, userRegisterReducers } from "./Reducers/UserReducers";

//middleware (redux-thunk)

const reducer=combineReducers({
    cart:cartReducers,
    userLogin:userLoginReducers,
    userRegister:userRegisterReducers
});

const cartItemsFromLocalStorage=localStorage.getItem("cartItems") ?
JSON.parse(localStorage.getItem("cartItems"))
:[]
const userInfoFromLS=localStorage.getItem("userInfo") ?
JSON.parse(localStorage.getItem("userInfo"))
:null

const initalState={
    cart:{
        cartItems:cartItemsFromLocalStorage,
    },
    userLogin:{userInfo:userInfoFromLS}
}

const middleware=[thunk]

const store=createStore(
    reducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;


