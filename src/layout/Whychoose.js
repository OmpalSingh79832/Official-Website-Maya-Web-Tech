import React from 'react'
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { MdTouchApp } from "react-icons/md";
import LetterA from "../assest/small-a-img.webp";
import PartImg2 from "../assest/chooseus-logo2.webp";
import PartImg3 from "../assest/chooseus-logo3.webp";
import PartImg4 from "../assest/chooseus-logo4.webp";
import { GiVote } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import { GiWorld } from "react-icons/gi";
import { RiDashboardFill } from "react-icons/ri"
const Whychoose = () => {
    return (
        <>
            <div className='chooseus-text'>
                <h3><BsFillQuestionOctagonFill style={{ color: "red", fontSize: "30px" }} /> WHY CHOOSE US</h3>
                <h2>Why Choose Our Digital Solution Brewery?</h2>
                <p>We have a suite of revolutionizing technologies to create unparalleled future
                    mobile experiences for your business.</p>
                <div className="row">
                    <div className="col-lg-6" >
                        <div className="bg-img1 d-flex justify-content-between">
                            <div className='letter-a'><img src={LetterA} alt="" /></div>
                            <div>
                                <h4>Build Interactive Designs</h4>
                                <p>Our in-house designer suite, Allurive, follows a unique approach to
                                    create outstanding customer experience for your business</p>
                                <button class="custom-btn btn-15 px-4" ><MdTouchApp />Get in Touch</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-img2 d-flex justify-content-between">
                            <div className='letter-2'><img src={PartImg2} alt="" /></div>
                            <div>
                                <span>Take Better Business Decisions</span>
                                <p>A secret tool, Retainlytics, to gather accurate data and drive personalized,
                                    customer-focused marketing for your brand</p>
                                <button class="custom-btn btn-15 px-4" ><MdTouchApp />Get in Touch</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6" >
                        <div className="bg-img3 d-flex justify-content-between">
                            <div className='letter-3'><img src={PartImg3} alt="" /></div>
                            <div>
                                <h4>Enjoy Flexibility To Customize</h4>
                                <p>Create extraordinary value for business with an app which is tailored
                                    specifically for your business needs</p>
                                <button class="custom-btn btn-15 px-4" ><MdTouchApp />Get in Touch</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-img4 d-flex justify-content-between">
                            <div className='letter-4'><img src={PartImg4} alt="" /></div>
                            <div>
                                <h4>A Robust & Scalable App</h4>
                                <p>Greater scope of scalability help attract & manage new opportunities
                                    arising for your business in the future</p>
                                <button class="custom-btn btn-15 px-4" ><MdTouchApp />Get in Touch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <div className="all-box">
          <div className="row mt-5 d-flex ">
                <div className="col-lg-3"><button className='box-btn1'><h1>650+ <hr /> <p><GiVote className='vote-btn' /> Top Vetted Developers</p></h1></button></div>
                <div className="col-lg-3"><button className='box-btn2'><h1>3,000+ <hr /><p><IoMdContact className='vote-btn' /> Global Businesses</p></h1></button></div>
                <div className="col-lg-3"><button className='box-btn3'><h1>35+<hr /><p><GiWorld className='vote-btn' /> Industries Covered</p></h1></button></div>
                <div className="col-lg-3"><button className='box-btn4'><h1>150+<hr /><p><RiDashboardFill className='vote-btn' /> Countries Served</p></h1></button></div>
                
            </div>
            <div className='d-flex'>
                <h2 className='chooseus-last-text'>Setup A Free Consultation To Know How To Take <br />Your Ideas From Concept To Reality</h2>
                <button class="custom-btn btn-15 chooseus-last-btn" ><MdTouchApp />  Schedule A Call</button>

                </div>
          </div>
        </>
    )
}

export default Whychoose