import { useEffect, useState } from "react";
import { BASE_URL } from "../api/ApiConfig";
import ProductList from "../components/product-list/ProductList";
import { useLanguage } from "../contexts/LanguageContext";

const Home = () => {
  const [products,setProducts]=useState([]);
  const [loading, setLoading] = useState(false);
  const {language}=useLanguage()
  useEffect(() => {
    const getProductList = () => {
      fetch(`${BASE_URL}/api/products/${language}`)
        .then((c) => c.json())
        .then((c) => {
          setProducts(c);
          setLoading(true);
        });
    };
    getProductList();
  }, [language]);
  return (
    <ProductList loading={loading} data={products}/>
    );
};
export default Home;
