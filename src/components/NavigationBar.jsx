import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Link } from 'react-router-dom';
// import { CgShoppingCart } from "react-icons/cg";

function NavigationBar() {
  return (
    <>
    
      <Navbar bg="info" data-bs-theme="light">
        <Container>
        <Link to="/" > <img src="https://seeklogo.com/images/M/mini-market-logo-BF4A1CB5E0-seeklogo.com.png"
              width="90" height="50"
              className="d-inline-block align-top"
              alt="Mart"
            /></Link>
         <Link className='nav-link  text-black fs-4 ms-4 mr-5' style={{color:'white'}} to="/">SmartMart</Link>
          <Nav className="ms-auto" >
            <Link className='nav-link' to="/"><b>Home</b></Link>
            <Link className='nav-link' to="/Categories"><b>Categories</b></Link>
            <Link className='nav-link' to="/Products"><b>Products</b></Link>
            <Link className='ms-3 btn btn-secondary' style={{color:'#e67b7b', backgroundColor:'white'}} to="/Login"><b>Login</b></Link>
            <Link className='ms-4 btn btn-secondary' style={{color:'#e67b7b', backgroundColor:'white'}} to="/SignUp"><b>SignUp</b></Link>
            <Link className='nav-link' to="/">
              {/* <CgShoppingCart className="cart-troll" />
              <span className="cart-troll--item"> 0 </span> */}
            </Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavigationBar;

