import { useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";
import { BrowserRouter, useLocation } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import RouterApp from "./components/RouterApp";
import Api from "./api/baseApi";

function App() {
  return (
    <div>
      <>
        <Header />
        <RouterApp />
        <Footer />
      </>
    </div>
  );
}

export default App;
