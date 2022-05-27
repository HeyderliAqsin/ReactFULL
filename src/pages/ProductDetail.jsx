import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { BASE_URL } from "../api/ApiConfig";
import { useLanguage } from "../contexts/LanguageContext";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../Redux/Actions/CartActions";
import { cartReducers } from "../Redux/Reducers/CartReducers";
const ProductDetail = () => {
  const { id } = useParams();
  const [singlePro, setSinglePro] = useState();
  const [loading, setLoading] = useState(true);
  const cartItems=useSelector(state=>state.cart.cartItems);
  const addToCartHandle=(id)=>{
    let qty=1;
    let item=cartItems.find(c=>c.id===id);
    if(item){
      qty+=item.qty;
    }
    dispatch(AddToCart(id,qty,language))
  }
  const {language}=useLanguage()
const dispatch=useDispatch()
console.log(language)
console.log(id)

useEffect(() => {
    fetch(`${BASE_URL}/api/products/detail/${Number(id)}/${language}`)
      .then((c) => c.json())
      .then((c) => setSinglePro(c));
    setLoading(false);
  }, [id, language]);
  return (
    <section className="product-detail py-5">
      <div className="container">
        {loading && <p>loading...</p>}
        {singlePro != null ? (
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="pro-img">
              </div>
            </div>
            <div className="col-lg-5">
              <div className="pro-info">
                <span>{singlePro.categoryName}</span>
                  <div key={singlePro.id}>
                    <h2>{singlePro.name}</h2>
                    <p>{singlePro.description}</p>
                  </div>
                <p>Price:{singlePro.price} AZN</p>
                <button className={`btn btn-outline-success`}
                  onClick={()=>{
                    addToCartHandle(Number(id))
                  }}
                >
                 Add To Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="row align-items-center">
            <div className="col-lg-5">
              <Skeleton count={5} />
            </div>
            <div className="col-lg-7">
              <Skeleton count={1} width={"40%"} />
              <Skeleton count={2} width={"80%"} />
              <Skeleton count={3} width={"60%"} />
              <Skeleton count={1} width={"20%"} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
