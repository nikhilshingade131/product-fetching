import React from "react";
import './App.css'
import {Routes, Route} from "react-router-dom";
import Product from "./Product";
import ProductInfo from "./ProductInfo";
import Home from "./Home";
import Login from "./Login";
import Layout from "./Layout";


const App = () => {
  return (
    <>
    <Routes>
      
      <Route path="/" element={<Login />} />       
      
      <Route path="/navbar" element={<Layout/>}>
        <Route path="home" element={<Home/>} />
        <Route path="product" element={<Product />} />
        <Route path="product/:id" element={<ProductInfo />} />
      </Route>

    </Routes>
  </>   
  );
}


export default App;



