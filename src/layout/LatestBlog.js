import React from 'react'
import { FaBook } from "react-icons/fa";
import { PiNumberCircleZero } from "react-icons/pi"
import MeeshoImg from "../assest/Meesho-img-blog.webp";
import BlogImage2 from "../assest/blog-img-2.webp";
import BlogImage3 from "../assest/blog-img-3.webp";
const LatestBlog = () => {
    return (
        <>
            <div className='blog-heading'>
                <h3><FaBook style={{ color: "red", fontSize: "35px" }} />  LATEST BLOGS</h3>
                <h2>The Brewer’s Guide</h2>
                <div className='d-flex justify-content-between blog-see-more'>
                    <p>A simple way to stay tuned with the latest digital solutions and updates.</p>
                    <h5> <PiNumberCircleZero style={{ color: "red", fontSize: "25px" }} />  See All Blog</h5>
                </div>
                <div className="row d-flex">
                    <div className="col-lg-4">
                        <img src={MeeshoImg} alt="" className='meesho-img' />
                    </div>
                    <div className="col-lg-4 Meesho-text">
                        <h5>Meesho's IPO Race 2024: What <br /> Entrepreneurs Need to Know! </h5>
                        <button><PiNumberCircleZero style={{ color: "white", fontSize: "25px" }} /> Read More</button>
                    </div>
                    <div className="col-lg-4 blog-img2">
                        <img src={BlogImage2} alt="" />
                    </div>
                </div>
                <div className="row ">
                <div className="col-lg-4 Meesho-text2">
                        <h5>How to Create a Social Media <br /> App Like MeWe? </h5>
                        <button><PiNumberCircleZero style={{ color: "white", fontSize: "25px" }} /> Read More</button>
                    </div>
                    <div className="col-lg-4">
                        <img src={BlogImage3} alt="" style={{marginLeft:"-12px"}} className='blog-img3' />
                    </div>
                    <div className="col-lg-4 blog-img4">
                        <h5>Must-Have  eatures in Your Property <br /> Rental App for a Successful Luaunch</h5>
                        <button><PiNumberCircleZero style={{ color: "white", fontSize: "25px" }} /> Read More</button>
                
                    </div>
                    </div>
            </div>
        </>
    )
}

export default LatestBlog