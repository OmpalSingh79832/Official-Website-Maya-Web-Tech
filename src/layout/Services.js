import React from 'react'
import { IoSettingsSharp } from "react-icons/io5"
import { FiArrowRightCircle } from "react-icons/fi"
import { AiOutlineFileSearch } from "react-icons/ai"
import { MdOutlineBusiness } from "react-icons/md"
import { BsFillSendCheckFill } from "react-icons/bs"
import { FaCalculator } from "react-icons/fa"
const Services = () => {
    return (
        <>
            <div className='service-page'>
                <h4 className='mt-4 service-heading-main'><IoSettingsSharp style={{ color: "red" }} />  Services</h4>
                <h3 className='mb-3'>What’s Brewing In The Code Brew Labs?</h3>
                <p className='service-p'>Discover the digital possibilities for your brand with our comprehensive suite of services.</p>
                {/* <div className='services-box'>
                    <ul className='services-box-ul'>
                        <li className='services-box-li'>Validate &<br /> Prototype <span className='number'>01</span></li>
                        <li className='services-box-li'>Validate &<br /> Prototype <span className='number'>01</span></li>
                        <li className='services-box-li'>Validate &<br /> Prototype <span className='number'>01</span></li>
                        <li className='services-box-li'>Validate &<br /> Prototype <span className='number'>01</span></li>
                    </ul>
                </div> */}
                <div className='validdate-sevices'>
                    <div className='heading-serv'>
                        <h1>Validate & Prototype</h1>
                        <h4>Get A Visual Model Of Your Idea Before You Launch It</h4>
                        <p>We help you put the first step right with our extensive experience & <span> our in-house design <br /> studio- Allurive.</span> From conducting industry research to laying your
                            business roadmap and <br /> delivering a fully-functional & interactive prototype- we’ve got you covered.</p>
                        <a href=" #"> Explore </a>
                        <FiArrowRightCircle className='explore-arrow' />
                        <div className="d-flex service-last-icon">
                            <div> <AiOutlineFileSearch className='service-icon1' /><br /><span>Industry Research</span></div>
                            <div><MdOutlineBusiness className='service-icon2' /><br /><span>Business Plan</span></div>
                            <div><BsFillSendCheckFill className='service-icon3' /><br /><span>UI/UX Designing</span></div>
                            <div><FaCalculator className='service-icon4' /><br /><span>Prototyping & Wireframing</span></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Services