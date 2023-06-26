import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { CiDeliveryTruck } from "react-icons/ci"
import { FcCustomerSupport } from "react-icons/fc"
import { RiSecurePaymentFill } from "react-icons/ri"

export default function HeaderSection() {
  return (
     <>
     {/* <div className="bg-dark">
     <div style={{width:"90vh" , height:"90vh" }} className="d-flex justify-content-center align-items-center">
       <div>
        <img className="img-fluid" src="https://cdn.dribbble.com/users/261966/screenshots/8301697/gocomm_prancheta_1.png" alt=""/>
       </div>
       <div className='container'>
          <h1 className='text-white'>
            Lorem ipsum Dolor
          </h1>
          <p className='text-info'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora soluta ut numqu . Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nemo, reiciendis facere modi illo nihil veritatis a?</p>
       </div>
      </div>
      </div> */}

    < div className='containerm'>
       <div className='grid grid-two-column'>
         <div className='hero-sec-img'  style={{width:"100%" , height:"auto" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
           <img className="img-style" style={{minWidth:"10rem" , height:"29rem"}} src="https://cdn.dribbble.com/users/261966/screenshots/8301697/gocomm_prancheta_1.png" alt="imgHappy" />
         </div>

        <div className="hero-sec-data">
            <h1 style={{paddingTop:"155px"}}><b>Welcome to SmartMart!</b></h1>
            <p><strong>Shopping made easier, anywhere anytime</strong></p>
           <NavLink className="btnn" to="/Login">
            <Button variant="secondary" style={{color:'#e67b7b', backgroundColor:'white'}}><b>Get Started</b></Button>{' '}
            </NavLink> 
        </div>
       </div>
    </div>


<div className="cont">
  <div className="gridd grid-three-column">
     <div className="services1">
         <div>
          <CiDeliveryTruck className="icon1" /> 
          <h3><b>Quick delivery</b></h3>
         </div>
     </div>

       <div className="services2">
         <div>
          <FcCustomerSupport className="icon2" />
          <h3><b>Customer support</b></h3>
         </div>
       </div>

       <div className="services3">
         <div>
          <RiSecurePaymentFill className="icon3" />
          <h3><b>Secure payment options</b></h3>
         </div>
       </div>

  </div>
</div>

     </>

     
  )
}
