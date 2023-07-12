import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { NavLink , Link , useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

export default function Login() {

  // const navigate = useNavigate()


  // const [userName, setUserName] = useState('')
  // const [password, setPassword] = useState('')
  // // const [type, setType] = useState('')

  // const LoggedIn = () => {

  //   console.log(userName, password)

  //   Swal.fire({
  //     title: 'Successfully logged in!',
  //     icon: 'success',
  //     confirmButtonText: 'Continue Shopping'
  //   })
    
  //   } 
  

  //     const data = { name: userName, password: password }
  //     // axios.postt('htp://localhost:3001/signup', data)
  //         .then((res) => {
  //             console.log(res.data, 17)
  //             if (res.data.code == 200) {
  //                 navigate('/login')
  //             }
  //         })
  //         .catch((err) => {
  //             console.log(err, 20)
  //         })
  // }


const LoggedIn = () => {

Swal.fire({
  title: 'Successfully logged in!',
  icon: 'success',
  confirmButtonText: 'Continue Shopping'
})

} 

  return (
    <>
    {/* <div>Login</div> */}
    <div className="my-3" style={{backgroundColor:"#caf0f8"}}  >
    
        <h2 style={{textAlign:"center" , color:"#0077b6" , fontWeight:"bold" ,}}>Log In</h2>

        <div className='formms' >
        <Form style={{display:"flex" , flexDirection:"column"}}>
          {/* <Input placeholder="username" />
          <Input placeholder="password" /> */}

<Row>
        <Col>

        <Form.Floating  >
          <Form.Control  style={{flex:"1" , minWidth:"40%" , margin:"10px 0px" , padding:"10px"}}
           id="floatinguNameCustom"
          type="uname" 
          placeholder="user name"
          />
           <label htmlFor="floatinguNameCustom">User Name</label>
           </Form.Floating>

        </Col>
        <Col>

        <Form.Floating>
          <Form.Control  style={{flex:"1" , minWidth:"40%" , margin:"10px 0px" , padding:"10px"}}
          id="floatingPwdCustom"
          type="pwds"
          placeholder="pwd" 
          />
          <label htmlFor="floatingPwdCustom">Password</label>
          </Form.Floating>

        </Col>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
          
      <NavLink to="/Categories">
      <Button variant="info" type="submit" className="tosubmit" style={{alignContent:"center" , marginLeft:"610px" ,
        textAlign:"center" , padding:"10px 30px" , fontSize:"20px" , fontWeight:"bold" }} onClick={LoggedIn}>
        Log In
      </Button>
      </NavLink>

          <div className="titlebott" style={{textAlign:"center" , color:"#e67b7b" , paddingTop:"8px" ,  fontWeight:"bold"}}>
        <p>Create a new account <NavLink style={{color:"#e67b7b"}} to="/Signup">Signup</NavLink> here .</p> 
        </div>

        <div className="titlebott" style={{textAlign:"center" , color:"#e67b7b" , paddingTop:"8px" ,  fontWeight:"bold"}}>
        <p>Forgot password? <NavLink style={{color:"#e67b7b"}} to="/Signup">Click here</NavLink></p> 
        </div>

        </Form>
        </div>
        </div>
    </>
  )

      }
