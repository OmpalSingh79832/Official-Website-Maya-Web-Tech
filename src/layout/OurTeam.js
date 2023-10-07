import React from 'react';
import "./OurTeam.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import OmImage from "../assest/om-img.jpeg"

  export default function OurTeam() {
  return (
    <>
    <div> <h2 style={{margin:"80px 0 60px 30%"}}>Their Taste-Statements Make Us Proud</h2></div>
    <div className="team-our">
    <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="row">
          <div className="col-lg-6"><img src={OmImage} alt="" className='slider1-img'/></div>
          <div className="col-lg-6">
            <h1 className='text-img'>OM YADAV <br /><p>Front-End Developer</p></h1>
            <p className='para-img'>Innovative and detail-oriented Front End Developer with a passion for creating responsive and user-friendly websites. Skilled in collaborating with back-end developers, utilizing version control systems, and staying up-to-date on emerging technologies. Proven track record in improving website traffic, performance,
             and functionality through the implementation of front-end coding standards and troubleshooting.</p>
          </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
    </>
  );
}
