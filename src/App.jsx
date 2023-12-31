import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import { useState } from "react";
import Categories from './pages/Categories'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import Signup from './pages/Signup'
//import NavigationBar from './Components/NavigationBar'

import NavigationBar from "./components/NavigationBar";
import ErrorPage404 from './pages/ErrorPage404'
import FooterSection from './components/FooterSection'
import CategoryPage from './pages/CategoryPage';
// import ProductPage from ' ./pages/ProductPage';

import ProductPage from "./pages/ProductPage";


function App() {

const [user,setUser] = useState(false)

  return (
    <>
    <NavigationBar/>

{
  user
  ?
  ( 
  <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/Categories" element={<Categories />} />  
     <Route path="/products/:productID" element={<ProductPage />} /> 
     <Route path="/products" element={<Products />} />
    
     < Route path="/products/category/:categoryName" element={<CategoryPage />} />  
    <Route path="*" element={<ErrorPage404 />} /> 
  </Routes>
  ) 
  :
  (
     <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/Categories" element={<Categories />} /> 
    <Route path="/Login" element={<Login />} /> 
    <Route path="/Signup" element={<Signup />} /> 
    <Route path="/products" element={<Products />} />
    <Route path="/products/:productID" element={<ProductPage />} /> 

     < Route path="/products/category/:categoryName" element={<CategoryPage />} />   
    <Route path="*" element={ <Navigate to="/login" replace={true} />} />
  </Routes>
  )
} 



    {/* <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Categories" element={<Categories />} /> 
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Products" element={<Products />} /> 
        <Route path="/Signup" element={<Signup />} /> 
        <Route path="*" element={<ErrorPage404 />} /> 
      </Routes> */}
  
<FooterSection/>

    </>
  )
}

export default App