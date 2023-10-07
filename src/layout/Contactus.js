import React from 'react'
import {FaEarthAmericas} from "react-icons/fa6";
import DubaiImg from "../assest/dubai.webp";
import LogoTContact from "../assest/logo.png";
import {AiOutlineMail} from "react-icons/ai";
import {BiSolidPhoneCall} from "react-icons/bi";
const Contactus = () => {
  return (
    <>    <div className='contact-us-main'>

 <div className="image-fixed">
 <h3> <FaEarthAmericas  style={{ color: "red", fontSize: "35px" }}/>  CONTACT US</h3>
    <h2>Let’s Fire Up Your Business!</h2>
    <p>Team Up With Us Today For An Unforgettable Service Experience</p>
    <img src={LogoTContact} alt="" style={{width:"15%"}} />
    <div className='contact-us-maya'>
    <h2>Noida</h2>
    <span>A-44, Sector -2, Noida-201301 Uttar Pradesh</span><br />
    <span className='contact-icon'><AiOutlineMail style={{fontSize:"25px", cursor:"pointer"}}/> info@mayawebtech.com</span><br />
    <span><BiSolidPhoneCall style={{fontSize:"25px"}}/> +0120-4158051 </span>
 </div>
 </div>
    <div className="dubai-img">
  <img src={DubaiImg} alt="" />
    </div>
    </div>
    </>
  )
}

export default Contactus