import React from 'react'
import {BsFacebook} from "react-icons/bs";
import {AiFillTwitterCircle} from "react-icons/ai";
import {BsPinterest} from "react-icons/bs";
import {BiLogoInstagramAlt} from "react-icons/bi";
import {BsLinkedin} from "react-icons/bs";
import {GrYoutube} from "react-icons/gr";
const Footer = () => {
  return (
    <>   
     <div className='row'>
     <div className="col-lg-3">
         <div className="footer-heading1">
        <h5>Industries</h5>
          <p>Food Depvery</p>
          <p>Healthcare</p>
          <p>Pickup & Depvery</p>
          <p>E- Commerce Depvery</p>
          <p>Taxi and Transportation</p>
          <p>Home Services</p>
          <p>Fitness</p>
          <p>Education</p>
          <p>Real Estate</p>
          </div>
     </div>
     <div className="col-lg-3">
     <div className="footer-heading2">
        <h5>Services</h5>
         <p>Premium App Development Studio</p>
         <p>Mobile App Development Dubai</p>
         <p>Enterprise Software Development</p>
         <p>Blockchain Development</p>
         <p>Fintech Development</p>
         <p>On Demand Development</p>
         <p>UI/UX Design - Allurive</p>
         <p>Web Development</p>
         <p>Growth & Marketing</p>
     </div>
     </div>
     <div className="col-lg-2">
     <div className="footer-heading3">
        <h5>Marketplace </h5>
         <p>Service</p>
         <p>Freelancer</p>
         <p>E-Commerce</p>
         <p>Peer-to-Peer</p>
         <p>Rental</p>
         <h5>Quick Links</h5>
         <p>Portfolio</p>
         <p>Why Choose us</p>
         <p>How we work</p>
    </div>
     </div>
     <div className="col-lg-4">
        <div className="footer-heading4">
          <h5>Whatsapp Updates</h5>
          <input type="tel" placeholder='Enter Phone No' name='whatsAppNumber'
           minLength={'6'} maxLength={'16'} required autoComplete='off'/> 
           <button type="button" class="btn btn-danger">Submit</button> <br />
           <p>Whatsapp Updates</p>
        </div>
        <div className="footer-heading41">
         <h5>Foolow us on</h5>
         <p><BsFacebook  style={{color:'#036d99', fontSize:"30px", cursor:"pointer"}}/> <AiFillTwitterCircle style={{color:'skyblue', fontSize:"35px", cursor:"pointer"}}/> <BsPinterest style={{color:'red', fontSize:"30px", cursor:"pointer"}}/> <BiLogoInstagramAlt style={{color:'#d33f32', fontSize:"35px", cursor:"pointer"}}/> <BsLinkedin style={{color:'skyblue', fontSize:"25px", cursor:"pointer"}}/> <GrYoutube style={{color:'red', fontSize:"35px", cursor:"pointer"}}/></p>
        </div>
        </div>
     </div>
     
     <div className="row justify-content-between copyright-footer">
     <div className="col-lg-6 ">
      <p>&copy;  Copyright 2023 Code Brew Labs | All Rights Reserved |  </p>
      </div>
      <div className="col-lg-6">
         <p style={{marginLeft:"220px", cursor:"pointer"}}>Privacy Policy | Return Policy | Terms & conditions</p>
      </div>
     </div>
    </>
  )
}

export default Footer
