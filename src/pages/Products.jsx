import React, { useEffect, useState } from "react";
import { BASE_URL } from "../api/ApiConfig";
import ProductList from "../components/product-list/ProductList";
import { useLanguage } from "../contexts/LanguageContext";

const Products = () => {
    const [products,setProducts]=useState([]);
    const [searchText,setSearchText]=useState("");
    const [filteredProducts,setfilteredProducts]=useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      const getProductList = () => {
        fetch(`${BASE_URL}/api/products/${useLanguage}`)
          .then((c) => c.json())
          .then((c) => {
            setProducts(c);
            setLoading(true);
          });
      };
      getProductList();
    }, []);
    const submitHandle=(e)=>{
        e.preventDefault()
        let productNews=products.filter(c=>c.title.toLowerCase().includes(searchText.toLowerCase()));
        setfilteredProducts(productNews)
    }
  return (
    <section id="product-filter">
      <div className="container">
        <div className="search-input my-4">
        <form onSubmit={submitHandle}>
          <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="search title..."
                aria-label="search title..."
                aria-describedby="basic-addon2"
                value={searchText}
                onChange={e=>setSearchText(e.target.value)}
            />
            <span className="input-group-text" id="basic-addon2">
              <i className="fas fa-search"></i>
            </span>
          </div>
          </form>
        </div>
        <ProductList loading={loading} data={filteredProducts.length>0?filteredProducts:products}/>
      </div>
    </section>
  );
};

export default Products;
