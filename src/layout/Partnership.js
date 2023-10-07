import React from 'react';
import PartnershipImg from "../assest/partnership-img.webp";
import {GiHeartWings} from "react-icons/gi";
import {MdTouchApp} from "react-icons/md";
const Partnership = () => {
  return (
    <>
    <div className="row mt-4">
        <div className="col-lg-6 ">
        <div className='part-text'>
           <h3><GiHeartWings style={{color:"red", fontSize:"59px"}}/>  PARTNERSHIPS</h3> 
           <h2>Empower Your Clients With Industry-Leading Technology Solution</h2>
           <p>Collaborate with us to earn more by selling, customizing or <br /> integrating our products</p>
           <button class="custom-btn btn-15 px-4" ><MdTouchApp />Explore More</button>
</div>
        </div>
       <div className="col-lg-6">
         <img src={PartnershipImg} alt='' className='part-img' />
       </div> 
    </div>
    
    
    </>
  )
}

export default Partnership