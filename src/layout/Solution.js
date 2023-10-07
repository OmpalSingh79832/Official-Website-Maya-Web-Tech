import React, { useEffect } from 'react'
import { MdTouchApp } from 'react-icons/md'
import Aos from 'aos'
import "aos/dist/aos.css"
const Solution = () => {
  useEffect (() => {
    Aos.init()
  },[])
  return (
    <>
    <div className='service-main-img'>
    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
<h2 className='service-empower'>We Empower Your Business With <br /> Out-Of-The-Box Digital Solutions</h2>
<button class="custom-btn btn-15" ><MdTouchApp /> Get in Touch </button>

    </div>
    </div>

    </>
    
  )
}

export default Solution