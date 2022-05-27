import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { useBasket } from "../../contexts/BasketContext";
import { useLanguage } from "../../contexts/LanguageContext";
const Header = ({num}) => {

  // const basket=useBasket()
  const {changeLanguage}=useLanguage()
  const [bgColor, setBgColor] = useState("");
  
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      setBgColor("active-header");
    } else {
      setBgColor("");
    }
  });
  return (
    <header className={`header ${bgColor}`}>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <Link to="/" className="text-white">
                <h2>Logo</h2>
              </Link>
            </div>
            <ul className="d-flex list-unstyled">
              <li>
                <button onClick={() => changeLanguage("AZ")}>Az</button>
                <button onClick={() => changeLanguage("EN")}>En</button>
              </li>
              <li>
                <Link to="/">
                  Home
                  <i className="far fa-circle-user" />
                </Link>
              </li>
              <li>
                <Link to="/products">
                  <i className="fas fa-shopping-basket" /> Shop {num}
                </Link>
              </li>
              <li>
                <Link to="/haqqimizda">About</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
    </header>
  );
};

export default React.memo(Header);
