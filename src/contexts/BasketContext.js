import React, { createContext, useContext, useEffect, useState } from 'react'

const BasketContext=createContext();
  const defaultBasketItems=JSON.parse(localStorage.getItem("cartItems")) || []
 const BasketProvider = ({children}) => {
   const [items,setItems]=useState(defaultBasketItems);
    useEffect(()=>{
      localStorage.setItem("cartItems",JSON.stringify(items))
    },[items])

   const addToCart=(data,findBasketItem)=>{
      if(!findBasketItem){
        return setItems(items=>[data,...items])
      }
      const filtered=items.filter(item=>item.id!==findBasketItem.id)
      setItems(filtered)
   }
   const data={items,setItems,addToCart}
  return (
    <BasketContext.Provider value={data}>
        {children}
    </BasketContext.Provider>
  )
}
 const  useBasket =()=> useContext(BasketContext)

 export {useBasket,BasketProvider}