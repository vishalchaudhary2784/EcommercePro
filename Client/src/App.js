import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Components/Footer";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";


const myContext = createContext();

function App() {

  const [countryList,setCountryList] = useState([]);
  const [isHeaderFooterShow,setisHeaderFooterShow] = useState(true);
  const [isLogin,setisLogin] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      const url = "https://countriesnow.space/api/v0.1/countries/";
      try {
        const response = await axios.get(url);
        setCountryList(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountries();
  }, []);
  

  const values = {
    countryList,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setisLogin  
  };
  
  return (
    <BrowserRouter>
    <myContext.Provider value={values}>
      {
        isHeaderFooterShow=== true && <Header/>
      }
      
      <Routes>
        <Route path="/" exact={true} element={<Home/>} />
        <Route path="/cat/:id" exact={true} element={<Listing/>} />
        <Route path="/product/:id" exact={true} element={<ProductDetails/>} />
        <Route path="/cart" exact={true} element={<Cart/>} />
        <Route path="/signin" exact={true} element={<SignIn/>} />
        <Route path="/signup" exact={true} element={<SignUp/>} />
      </Routes>
      <Footer/>
      </myContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {myContext}
