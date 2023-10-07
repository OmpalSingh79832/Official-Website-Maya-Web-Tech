import React from 'react'
import "./MbSolution.css"
import Slider from '../../layout/Slider';
import Platform1 from "../../assest/platform1.png";
import Plateform2 from "../../assest/platform2.png";
import Plateform3 from "../../assest/platform3.webp";
import Plateform4 from "../../assest/platform4.png";
import MasLogo1 from "../../assest/maslogo1.webp";
import MasLogo2 from "../../assest/maslogo2.webp";
import MasLogo3 from "../../assest/maslogo3.webp";
import { BsFillStarFill } from "react-icons/bs"
import BussinessAppImg from "../../assest/bussiness-app-img.webp";
import NycImg from "../../assest/nyc-img.webp";
import BitcoinImg from "../../assest/bitcoin-img.png";


import OnDemandImg1 from "../../assest/on-demand-img.webp";
import OnDemandLogo1 from "../../assest/on-demand-logo.png";
import OnDemandImg2 from "../../assest/on-demand2-img.webp";
import OnDemandLogo2 from "../../assest/on-demand2-logo.png";
import OnDemandImg3 from "../../assest/on-demand3-img.webp";
import OnDemandLogo3 from "../../assest/on-demad3-logo.png";
import OnDemandImg4 from "../../assest/on-demad4-img.webp";
import OnDemandLogo4 from "../../assest/on-demad4-logo.png";
import OnDemandImg5 from "../../assest/on-demad5-img.webp";
import OnDemandLogo5 from "../../assest/on-demad5-logo.png";
import OnDemandImg6 from "../../assest/on-demad6-img.webp";
import OnDemandLogo6 from "../../assest/on-demad6-logo.png"
import OnDemandImg7 from "../../assest/on-demad7-img.webp";
import OnDemandLogo7 from "../../assest/on-demad7-logo.png";
import OnDemandImg8 from "../../assest/on-demad8-img.webp";
import OnDemandLogo8 from "../../assest/on-demad8-logo.png";
import OnDemandImg9 from "../../assest/on-demad9-img.webp";
import OnDemandLogo9 from "../../assest/on-demad9-logo.png";
import OnDemandImg10 from "../../assest/on-demad10-img.webp";
import OnDemandLogo10 from "../../assest/on-demad10-logo.png";
import OnDemandImg11 from "../../assest/on-demad11-img.webp";
import OnDemandLogo11 from "../../assest/on-demad11-logo.png";
import OnDemandImg12 from "../../assest/on-demad12-img.webp";
import OnDemandLogo12 from "../../assest/on-demad12-logo.png";
import OnDemandImg13 from "../../assest/on-demad13-img.jpg";
import OnDemandLogo13 from "../../assest/on-demad13-logo.png";
import OnDemandImg14 from "../../assest/on-demad14-img.jpg";
import OnDemandLogo14 from "../../assest/on-demad14-logo.png";
import OnDemandImg15 from "../../assest/on-demand15-img.jpg";
import OnDemandLogo15 from "../../assest/on-demand15-logo.png";
import GoodFirmLogo from "../../assest/goodfirm@2x.png";
import AppFutraLogo from "../../assest/appfutura@2x.png";
import UpWorkLogo from "../../assest/upwork@2x.png";


const MbSolution = () => {
  return (
    <>
      <div>
        <div className='mbs-home-img'>
          <section class="vh-100">
            <div className="container py-5 h-100">
              <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                  <div className='mb-home-text'>
                    <h3>Experience A World-Class</h3>
                    <h2>Mobile App Development Service</h2>
                    <p>Build Affordable, Easy-to-use & Feature-Rich Mobile Apps For <br /> Your Business</p>
                    <button> Book A Free Demo</button>
                  </div>
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                  <form className='bg-white  rounded p-4 '>
                    {/* <!-- Email input --> */}
                    <div>
                      <div className="form-outline mb-4 overview-heading">
                        <h2>Let’s Build Your <span> Dream App!</span></h2>

                        <input type="name" id="form1Example13" placeholder='First Name' className="form-control form-control" />
                      </div>
                      <div className="form-outline mb-4">
                        <input type="lastname" id="form1Example23" placeholder='Last Name' className="form-control form-control" />
                      </div><div className="form-outline mb-4">
                        <input type="lastname" id="form1Example23" placeholder='Phone No.' className="form-control form-control" />
                      </div>
                      <div className="form-outline mb-4">
                        <textarea id="w3review" name="w3review" placeholder='Whats your Project About' className="form-control form-control" />
                      </div>
                      <button type="button" class="btn  btn-lg rounded  button-homepage">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Vast Mobile App Development Services We Offer */}

        <div className='services-mobile-app rounded'>
          <div className='row'>
            <div className="col-lg-5 mobile-app-solution">
              <h3>Vast Mobile App Development</h3>
              <h2>Services We Offer</h2>
            </div>
            <div className="col-lg-1 icon-mobile-app1">
              <img src={Platform1} alt="" />
              <p>iOS App Development</p>
            </div>
            <div className="col-lg-1 icon-mobile-app2">
              <img src={Plateform2} alt="" />
              <p>Android App Development</p>
            </div>
            <div className="col-lg-1 icon-mobile-app3">
              <img src={Plateform3} alt="" />
              <p>Web App Development</p>
            </div>
            <div className="col-lg-1 icon-mobile-app4">
              <img src={Plateform4} alt="" />
              <p>Hybrid-Native App Development</p>
            </div>
          </div>
        </div>

        {/* Full Customization White Label Complete Source Code */}
        <div className="container d-flex images-mobileappsol" style={{ marginRight: "88px" }}>
          <div className='col-lg-4 image-mas1'>
            <img src={MasLogo1} alt="" />
            <p>Full Customization</p>
          </div>
          <div className='col-lg-4 image-mas2'>
            <img src={MasLogo2} alt="" />
            <p>White Label</p>
          </div>
          <div className='col-lg-4 image-mas3'>
            <img src={MasLogo3} alt="" />
            <p>Complete Source Code</p>
          </div>
        </div>


        {/* Take Your Business to Next Level With Our Mobile App Development Service */}

        <div className='service-mobileapp-solution'>
          <h3>Take Your Business to Next Level With Our Mobile App Development Service</h3>
          <button>Get Started</button>
        </div>


        {/* Fully Customized Mobile App Development Services For Your Business */}
        <div className='fully-customized'>
          <h3>Fully Customized Mobile App Development Services For Your Business</h3>
        </div>
        <div className="container " >
          <div className="row">
            <div className="col-lg-3">
              <div className="on-demand1">
                <img src={OnDemandImg1} alt="" className='on-demand1-img' />
                <img src={OnDemandLogo1} alt="" className='on-demand1-logo' />
                <h4>On-Demand App Solution</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="on-demand1">
                <img src={OnDemandImg2} alt="" className='on-demand1-img' />
                <img src={OnDemandLogo2} alt="" className='on-demand1-logo' />
                <h4>Ecommerce & Marketplace Solution</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="on-demand1">
                <img src={OnDemandImg3} alt="" className='on-demand1-img' />
                <img src={OnDemandLogo3} alt="" className='on-demand1-logo' />
                <h4>Food & Beverage Solution</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-lg-6">
              <div className="on-demand1">
                <img src={OnDemandImg4} alt="" className='on-demand1-img' />
                <img src={OnDemandLogo4} alt="" className='on-demand1-logo' />
                <h4>Pickup & Delivery Solution</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="on-demand1">
                <img src={OnDemandImg5} alt="" className='on-demand1-img' />
                <img src={OnDemandLogo5} alt="" className='on-demand1-logo' />
                <h4>Blockchain Development</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="on-demand1">
                <img src={OnDemandImg6} alt="" className='on-demand1-img' />
                <img src={OnDemandLogo6} alt="" className='on-demand1-logo' />
                <h4>Internet of Things (IOT)</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-lg-3">
              <div className="on-demand1">
                <img src={OnDemandImg7} alt="" className='on-demand1-img' />
                <img src={OnDemandLogo7} alt="" className='on-demand1-logo' />
                <h4>Social Networking Solution</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="on-demand1">
                <img src={OnDemandImg8} alt="" className='on-demand1-img' />
                <img src={OnDemandLogo8} alt="" className='on-demand1-logo' />
                <h4>Healthcare & Medical Solution</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="on-demand1">
                <img src={OnDemandImg9} alt="" className='on-demand1-img' />
                <img src={OnDemandLogo9} alt="" className='on-demand1-logo' />
                <h4>Laundry & Home Services</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-lg-6">
              <div className="on-demand1">
                <img src={OnDemandImg10} alt="" className='on-demand1-img' />
                <img src={OnDemandLogo10} alt="" className='on-demand1-logo' />
                <h4>Transportation Solution</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="on-demand1">
                <img src={OnDemandImg11} alt="" className='on-demand1-img' />
                <img src={OnDemandLogo11} alt="" className='on-demand1-logo' />
                <h4>Real Estate Solution</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="on-demand1">
                <img src={OnDemandImg12} alt="" className='on-demand1-img' />
                <img src={OnDemandLogo12} alt="" className='on-demand1-logo' />
                <h4>Banking & Finance</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row" style={{ paddingBottom: "78px" }}>
            <div className="col-lg-3">
              <div className="on-demand1">
                <img src={OnDemandImg13} alt="" className='on-demand1-img' />
                <img src={OnDemandLogo13} alt="" className='on-demand1-logo' />
                <h4>Education & Learning</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="on-demand1">
                <img src={OnDemandImg14} alt="" className='on-demand1-img' />
                <img src={OnDemandLogo14} alt="" className='on-demand1-logo' />
                <h4>Manufacturing Business Solution</h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="on-demand1" >
                <img src={OnDemandImg15} alt="" className='on-demand1-img' />
                <img src={OnDemandLogo15} alt="" className='on-demand1-logo' />
                <h4>Enterprise Mobility Solution</h4>
              </div>
            </div>
          </div>
        </div>

        <div className='industry-solution'>
          <h3>Didn’t find your industry solution?</h3>
          <span>Discuss your mobile app development requirements with our team
            & get the finest fit for your business</span>
          <button>Get Started</button>
        </div>
        <div >
          <h3 style={{ margin: "70px 0px 37px 500px" }}>Portfolio</h3>

        </div>
        <Slider />
      </div>
      {/* An Award-Winning Mobile App Development Company */}


      <div className='bg-blue-winning'>
        <h3>An Award-Winning Mobile App Development Company</h3>
        <h4>Leverage Our Industry Expertise To Create Delivery Mobile Apps For Your Business</h4>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className='award-winning1 card pb-5 mx-3'>
                <h5><span><BsFillStarFill /></span>  4.9/5</h5>
                <img src={GoodFirmLogo} alt="" />
                <span>Reviewed by Goodfirms with <br /> 4.9/5 ratings based upon client <br /> reviews</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className='award-winning1 app-futura card pb-5 mx-3'>
                <h5><span><BsFillStarFill /></span>  4.7/5</h5>
                <img src={AppFutraLogo} alt="" />
                <span>Platinum certified with a 4.7/5 <br /> ratings. Interviewed by <br /> AppFutura</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className='award-winning1 card pb-4 mx-3'>
                <h5> <span><BsFillStarFill /></span>  5/5</h5>
                <img src={UpWorkLogo} alt="" />
                <span>With astounding 5/5 rating, <br /> we’re amongst the top <br /> companies on Upwork</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='service-mobileapp-solution'>
        <h3>Trust the global leaders in mobile solution for transforming your ideas</h3>
        <button>Get Started</button>
      </div>
      <div className='work-quality'>
        <h3>Our Quality Works Get Featured</h3>
        <h5>We Have Been Acknowledged A Number Of Times For Top-Notch Digital Solution</h5>
      </div>
      <div className="container mb-5 ms-5">
        <div className="row ">
          <div className="col-lg-4 bussiness-app ">
            <img src={BussinessAppImg} alt="" />
          </div>
          <div className="col-lg-4 business-app-text" >
            <h2> Business of Apps</h2>
            <h5><b>"Code Brew Labs </b>is a mobile focused <br />software development company which <br />
              has served startups and enterprises all<br />across the globe" </h5>
          </div>
          <div className="col-lg-4 nyc-details">
            <img src={NycImg} alt="" />
          </div>
          <div className="container d-flex" style={{ marginLeft: "-31px", width: "96%" }} >
            <div className="col-lg-4 mt-4  business-app-text" style={{ marginLeft: "30px", backgroundColor: "#e5eef2" }}>
              <h2 style={{ color: "black" }}> Bitcoin Insider</h2>
              <h5 style={{ color: "black" }}> "Offers continuous delivery of Android <b />development services. Hence, still <br />
                growing in the market" </h5>
            </div>
            <div className="col-lg-4 mt-4   bussiness-app " >
              <img src={BitcoinImg} alt="" />
            </div>
            <div className="col-lg-4 digital-nyc-text">
              <h2>Digital NYC</h2>
              <h5>"<span>Code Brew Labs,</span> a best mobile app development company in the USA
                has is proficient and effective in handling all the development problems"</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MbSolution




