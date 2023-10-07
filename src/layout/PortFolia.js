import React from 'react'
import Slider from './Slider'
import { BsBagCheckFill } from "react-icons/bs"
const PortFolia = () => {
  return (
    <>      <div className='portfolio-main'>
        <h3><BsBagCheckFill style={{ color: "red", marginBottom:"15px" }} /> PORTFOLIO</h3>
        <h2>The Successfully Brewed Businesses</h2>
        <p>We take pride in catering their growing business needs and making them stand apart on the App Store & Google Play.</p>
      </div>
    <Slider />
    
    </>

  )
}

export default PortFolia