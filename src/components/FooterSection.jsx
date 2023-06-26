import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function FooterSection() {
  return (
    <>
     <div className=' fs-4 text-center text-black py-3 ' data-bs-theme="light" 
     style={{margin:"10px" , backgroundColor:"rgb(85, 200, 238)"}} >
      {/* <b>FooterSection</b> */}
       <div className='foott'>
      <div className='gridd grid-three-column'>
          <div className='footLogo'>
             <img src="https://seeklogo.com/images/M/mini-market-logo-BF4A1CB5E0-seeklogo.com.png" width={"290px"} height={"50px"} 
             style={{paddingLeft:"120px"}} />
             <p style={{fontSize:"15px" , textAlign:"center"}}>Lorem, ipsum dolor sit amet consectetur adipisicing. </p>
          </div>
               
          <div className='footAb'>
          <h5><b>Terms & Conditions</b></h5>
            <h5><b>About Us</b></h5>
            <h5><b>Contact Us</b></h5>
            <h5><b>Support</b></h5>
          </div>

         <div className='footSocial'>
            <h4><b>Follow Us</b></h4>
            <div className='footicons'>
               <div >
               <FaFacebook className="iconfb" />
               </div>

               <div >
               <FaInstagram className="iconinsta" />
               </div>

               <div >
               <FaYoutube className="iconyt" />
               </div>

               <div >
               <FaTwitter className="icontwitt" />
               </div>

            </div>
         </div>

      </div>
      </div>
     </div>
       </>
  )
}

