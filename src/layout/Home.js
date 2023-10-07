import React from 'react'
import { MdTouchApp } from "react-icons/md"
import Home1 from "../assest/home1.webp"
import Home2 from "../assest/home2.webp"
import Home3 from "../assest/home3.webp"
import Home4 from "../assest/home4.webp"
const Home = () => {
  return (
    <div className='homepage-img'>
      <h1>Transforming The Way You <br /> <span style={{ color: "red" }}>Launch. Run. Grow</span> Your <br /> Business Digitally</h1>
      <h5 >Accelerating growth for brands like you with technology, <br />
           experience & innovation <span className='for-deacade'>for a decade.</span></h5>
      <button class="custom-btn btn-15" ><MdTouchApp /> Get Started </button>
      <div className='d-flex icons-homepage'>
        <h6 >CLIENTS  <br /> <h2>3000+</h2> </h6>
        <div className='d-flex image-section'>
          <img src={Home1} alt='' className='icon-one' />
          <img src={Home2} alt='' className='icon-one' />
          <img src={Home3} alt='' className='icon-one' />
          <img src={Home4} alt='' className='icon-one' />
        </div>
      </div>
    </div>
  )
}

export default Home


