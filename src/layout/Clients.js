import React from 'react'
import { IoIosContact } from "react-icons/io"
import VodafoneLogo from "../assest/vodafone-logo.webp";
import TawlaLogo from "../assest/tawla-logo.webp";
import MinervaLogo from "../assest/minerva-logo.webp";
import IdeaLogo from "../assest/idea-logo.webp";
import AcwaLogo from "../assest/acwa-power-logo.webp";
import { MdTouchApp } from "react-icons/md"
const Clients = () => {
    return (
        <>
            <div className='client-heading'>
                <h3 ><IoIosContact style={{ color: "red", fontSize: "40px", marginBottom: "10px" }} />  CLIENTS</h3>
                <h2>We Have Made Them Taste Success</h2>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-2 logo1"><img src={VodafoneLogo} alt="" /></div>
                        <div className="col-lg-2 logo1"><img src={TawlaLogo} alt="" /></div>
                        <div className="col-lg-2 logo1"><img src={MinervaLogo} alt="" /></div>
                        <div className="col-lg-2 logo1"><img src={IdeaLogo} alt="" /></div>
                        <div className="col-lg-2 logo1"><img src={AcwaLogo} alt="" /></div>
                    </div>
                </div>
            </div>
            <>
                <div className="container">
                    <div className='clients-main-img'>
                        <div data-aos="fade-left"
                          data-aos-easing="linear"
                          data-aos-duration="1500">
                        <div className='row align-tems-center'>
                            <div className="col-lg-6"></div>
                            <div className="col-lg-6 shadow clients-empower">
                                <h3>Get An Exclusively Brewed <br /> Digital Solution For Your <br /> Business</h3>
                                <button class="custom-btn btn-15 client-btn" ><MdTouchApp /> Get in Touch </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Clients