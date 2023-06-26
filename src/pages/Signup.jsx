import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function Signup() {

  const SignedUp = () => {

    Swal.fire({
      title: 'Welcome to SmartMart',
      text: 'Succesfully signedup',
      icon: 'success',
      confirmButtonText: 'Start Shopping'
    })
    
    } 

  return (
    <>


    {/* <div className='signup' style={{textAlign:"center"}}><b>Signup</b></div> */}

     <div> 
         <div className="titles" style={{textAlign:"center" , color:"#e67b7b" , fontWeight:"bold"}}>
        <h1>Create Your Account</h1>
        <p>Enter credentials below to setup your account</p> 
        </div>

        <Form className="mb-3">
      <Row>
        <Col>

        <Form.Floating>
          <Form.Control 
           id="floatingFNameCustom"
          type="fname" 
          placeholder="first name" />
           <label htmlFor="floatingFNameCustom">First Name</label>
           </Form.Floating>

        </Col>
        <Col>

        <Form.Floating>
          <Form.Control 
          id="floatingLNameCustom"
          type="lname"
          placeholder="last name" />
          <label htmlFor="floatingLNameCustom">Last Name</label>
          </Form.Floating>

        </Col>
      </Row>
    </Form>

    <Form.Floating className="mb-3">
        <Form.Control
          id="floatingContactNoCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingContactNoCustom">Phone Number</label>
      </Form.Floating>

        <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>

      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
        <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-15 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
      </Form.Floating>

  

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Control placeholder="Address" />
      </Form.Group>
      
      <Form.Select aria-label="Default select example">
      <option>Gender</option> 
      <option value="1">Male</option>
      <option value="2">Female</option>
    </Form.Select>
   
    <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Terms & Conditions agreed" />
      </Form.Group>
    
    <NavLink to="/Categories">
      <Button variant="info" type="submit" className="tosubmit" style={{alignContent:"center" , marginLeft:"610px" ,
        textAlign:"center" , padding:"10px 30px" , fontSize:"20px" , fontWeight:"bold" }} onClick={SignedUp}>
        Sign Up
      </Button>
      </NavLink>
    
      <div className="titlebott" style={{textAlign:"center" , color:"#e67b7b" , paddingTop:"8px" ,  fontWeight:"bold"}}>
        <p>Already have an account? <NavLink style={{color:"#e67b7b"}} to="/Login">Login</NavLink> here .</p> 
        </div>

         <div className="titleb" style={{textAlign:"center" , color:"#e67b7b" ,  fontWeight:"bold" , fontSize:"17px"}}>
        <p>Or, signup with </p> 

           <div>
            <Button variant="info" type="submit" className="tosubmit1" 
              style={{  
              textAlign:"center" , 
              padding:"10px 30px" , 
              fontSize:"20px" , fontWeight:"bold"}}> <FaFacebook className='fbbtn'/> FaceBook</Button>
             
            <Button variant="info" type="submit" className="tosubmit2" 
              style={{
              textAlign:"center" ,
               padding:"10px 30px"  , 
               fontSize:"20px" , fontWeight:"bold"}}><FaGoogle className='gbtn'/> Google</Button>
           </div>

        </div>

     </div>

    </>

  )
}


