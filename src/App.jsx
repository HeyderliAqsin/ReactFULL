import React, { useEffect } from "react";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MyRoutes from "./config/MyRoutes";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
        <Header/>
        <MyRoutes/>
        <Footer/>
    </div>
  );
}

export default App;
