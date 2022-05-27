import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import { useBasket } from "../../contexts/BasketContext";
import { useLanguage } from "../../contexts/LanguageContext";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../Redux/Actions/UserActions";
const Header = ({ num }) => {
  const { userInfo } = useSelector((st) => st.userLogin);
  // const basket=useBasket()
  const { changeLanguage } = useLanguage();
  const [bgColor, setBgColor] = useState("");
  const dispatch=useDispatch();
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
            {userInfo && userInfo.token ? (
              <>
                <li><Link to={"#"}>{userInfo.email}</Link></li>
                <li> <button onClick={()=>dispatch(logoutAction())} className="btn btn-warning">Logout</button></li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
