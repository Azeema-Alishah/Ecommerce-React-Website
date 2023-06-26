import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import { useState } from "react";
import Categories from './pages/Categories'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/products'
import Signup from './pages/Signup'
import NavigationBar from './components/NavigationBar'
import ErrorPage404 from './pages/ErrorPage404'
import FooterSection from './components/FooterSection'


function App() {

const [user,setUser] = useState(false)

  return (
    <>
    <NavigationBar />

{
  user
  ?
  ( 
  <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/Categories" element={<Categories />} />  
    <Route path="/Products" element={<Products />} /> 
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
    <Route path="/Products" element={<Products />} /> 
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
  
<FooterSection />

    </>
  )
}

export default App