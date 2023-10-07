import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BharatpayImg from "../assest/home_bharatpe_img.webp"
import AwrImage from "../assest/home_awr_img.webp"
import YummImage from "../assest/home_yumm_img.webp"
import AybizImage from "../assest/home_aybiz_img.webp"
import ArascaImage from "../assest/arasca-app-img.webp"
import HamiltonImage from "../assest/hamilton-app-img.webp"
import BuildexImage from "../assest/buildex-app-img.webp"
import GrintafyImage from "../assest/home_grintafy_img.webp"
import SmlImage from "../assest/home_sml_img.webp"
import BadmintonImage from "../assest/home-badminton-img.webp"
import GradeupImage from "../assest/home_gradeup_img.webp"

import AwrLogo from "../assest/home_awr_logo.webp"
import BharatpayLogo from "../assest/home_bharatpe_logo.webp"
import YummLogo from "../assest/home_yumm_logo.webp"
import AybizLogo from "../assest/home_aybiz_logo.webp"
import ArascaLogo from "../assest/arasca-logo.webp"
import HamiltonLogo from "../assest/hamilton-app-logo.webp"
import BuildexLogo from "../assest/buildex-logo.webp"
import GrintafyLogo from "../assest/home_grintafy_logo.webp"
import SmlLogo from "../assest/home_sml_logo.webp"
import BadmintonLogo from "../assest/home-badminton-logo.webp"
import GradeupLogo from "../assest/home_gradeup_logo.webp"
import { FaAppStoreIos } from "react-icons/fa6"
import { FaGooglePlay } from "react-icons/fa6"
import { MdTouchApp } from "react-icons/md"
import Aos from 'aos'
import "aos/dist/aos.css"
const Slider = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])
  return (
    <>
     

      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}

        pagination={{
          clickable: true,
        }}
    
        navigation={true}
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>      <div className="bharat-pay-bg">
          <div className='row '>
            <div className="col-lg-5">
              <div data-aos="fade-down"
                data-aos-delay="10">
                <div className='main-bharat-pay'>
                  <img src={BharatpayLogo} alt='' className='bharatpay-logo' />
                  <p className='bharat-pay-text'>Unique Ideas Need Unique Solutions-this is what we had in our minds while building a<span>customized app solution for this leading </span> <br />Fintech Solution.</p>
                  <h5 className='available-on'>Available on <FaAppStoreIos className='app-img' /> <FaGooglePlay className='app-img' /></h5>
                  <div className='d-flex'>
                    <div className='download-rating'><h2>10M+ </h2>Downloads</div>
                    <div className='download-rating'><h2>4.2/5</h2>Rating</div>
                    <div className='download-rating'><h2>$2.8B</h2>Funding Raised</div>

                  </div>
                  <button class="custom-btn btn-15 case-study" ><MdTouchApp />Explore Case Study</button>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <img src={BharatpayImg} alt='' className='bharatpay-img' />
            </div>
          </div>
        </div></SwiperSlide>
        <SwiperSlide>  {/* AwRostamani */}

          <div className="aws-bg">
            <div className='row '>
              <div className="col-lg-7">
                <img src={AwrImage} alt='' className='aws-img' />
              </div>
              <div className="col-lg-5">
                <div data-aos="fade-down"
                  data-aos-delay="200">
                  <div className='main-aws'>
                    <img src={AwrLogo} alt='' className='awr-logo' />
                    <p className='aws-text'> We’ve expertise in building <span> enterprise software solutions </span>for constant innovation & efficiency. This feature-loaded<span> ERP Solution </span>is a perfect example.</p>

                    <h5 className='available-on'>Available on <FaAppStoreIos className='app-img' /> <FaGooglePlay className='app-img' /></h5>
                    <div className='d-flex'>
                      <div className='download-rating'><h2>$2B+ </h2>Revenue</div>
                      <div className='download-rating'><h2>4K+</h2>Employees</div>
                      <div className='download-rating'><h2>14+</h2>Companies</div>

                    </div>
                    <button class="custom-btn btn-15 case-study" ><MdTouchApp />Explore Case Study</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide> {/* YummBanner */}

          <div className="yumm-bg">
            <div className='row '>
              <div className="col-lg-5">
                <div data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  <div className='main-yumm'>
                    <img src={YummLogo} alt='' className='yumm-logo' />
                    <p className='yumm-text'>Becoming the first & most<span> downloaded food delivery app </span>Venezuela turned possible with our<span> AI-powered platform. </span>Now build your app 7X faster and pay 80% less.</p>
                    <h5 className='available-on'>Available on <FaGooglePlay className='app-img' /></h5>
                    <div className='d-flex'>
                      <div className='download-rating'><h2>M+ </h2>Downloads</div>
                      <div className='download-rating'><h2>4.3/5</h2>Rating</div>
                      <div className='download-rating'><h2>$4M</h2>Total Valuation</div>

                    </div>
                    <button class="custom-btn btn-15 case-study" ><MdTouchApp />Explore Case Study</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <img src={YummImage} alt='' className='bharatpay-img' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide> {/* AybizBanner */}

          <div className="aybiz-bg">
            <div className='row '>
              <div className="col-lg-7">
                <img src={AybizImage} alt='' className='aybiz-img' />
              </div>
              <div className="col-lg-5">
                <div data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  <div className='main-aybiz'>
                    <img src={AybizLogo} alt='' className='aybiz-logo' />
                    <p className='aybiz-text'><span> Delightful experience</span>is the X-factor for this amazing solution which is loved by people in <span>Kuwait and the MENA </span>area to discover new places to visit or shop.</p>

                    <h5 className='available-on'>Available on <FaAppStoreIos className='app-img' /> <FaGooglePlay className='app-img' /></h5>
                    <div className='d-flex'>
                      <div className='download-rating'><h2>10K</h2>Downloads</div>
                      <div className='download-rating'><h2>5/5</h2>Rating</div>
                    </div>
                    <button class="custom-btn btn-15 case-study" ><MdTouchApp />Explore Case Study</button>
                  </div>
                </div>
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>
          {/* Arasca Banner */}

          <div className="arasca-bg">
            <div className='row '>
              <div className="col-lg-5">
                <div data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  <div className='main-arasca'>
                    <img src={ArascaLogo} alt='' className='arasca-logo' />
                    <p className='arasca-text'><span>“Online Selling Platform For Pre-Hospital Medical Supplies” Leading medical equipment supplier within the UAE, GCC, Middle East & Africa, selling over 5000+ products from leading international brands with the highest quality of products.</span></p>
                    <h5 className='available-on'>Available on <FaAppStoreIos className='app-img' /> <FaGooglePlay className='app-img' /></h5>
                    <div className='d-flex'>
                      <div className='download-rating'><h2>4.2/5 </h2>Rating</div>
                    </div>
                    <button class="custom-btn btn-15 case-study" ><MdTouchApp />Explore Case Study</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <img src={ArascaImage} alt='' className='arasca-img' />
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>   {/* Hamilton Banner */}

          <div className="hamilton-bg">
            <div className='row '>
              <div className="col-lg-7">
                <img src={HamiltonImage} alt='' className='hamilton-img' />
              </div>
              <div className="col-lg-5">
                <div data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  <div className='main-hamilton'>
                    <img src={HamiltonLogo} alt='' className='hamilton-logo' />
                    <p className='hamilton-text'><span>“App based on Hamilton Bay booking system in Dubai & Abu Dhabi”. Home of a comprehensive aquatics programme in swimming and water polo to book swimming lessons, view progress and do more.</span></p>
                    <h5 className='available-on'>Available on <FaAppStoreIos className='app-img' /> <FaGooglePlay className='app-img' /></h5>
                    <div className='d-flex'>
                    </div>
                    <button class="custom-btn btn-15 case-study" ><MdTouchApp />Explore Case Study</button>
                  </div>
                </div>
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>
          {/* Buildex Banner */}

          <div className="buildex-bg">
            <div className='row '>
              <div className="col-lg-5">
                <div data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  <div className='main-buildex'>
                    <img src={BuildexLogo} alt='' className='buildex-logo' />
                    <p className='buildex-text'><span>“Online platform for synchronized shopping experience”. A bouquet of solutions by Al Khalili Group- A diversified & dynamic business house in the OMAN, UAE, QATAR & other GCC countries</span></p>
                    <h5 className='available-on'>Available on <FaAppStoreIos className='app-img' /> <FaGooglePlay className='app-img' /></h5>
                    <div className='d-flex'>
                      <div className='download-rating'><h2>1K+ </h2>Downloads</div>
                      <div className='download-rating'><h2>5/5 </h2>Rating</div>
                    </div>
                    <button class="custom-btn btn-15 case-study" ><MdTouchApp />Explore Case Study</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <img src={BuildexImage} alt='' className='buildex-img' />
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>
          {/* GrinTafy Banner */}

          <div className="grintafy-bg">
            <div className='row '>
              <div className="col-lg-7">
                <img src={GrintafyImage} alt='' className='grintafy-img' />
              </div>
              <div className="col-lg-5">
                <div data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  <div className='main-grintafy'>
                    <img src={GrintafyLogo} alt='' className='grintafy-logo' />
                    <p className='grintafy-text'>Building <span>sports & gaming</span> solution calls for a delightful & seamless experience. <span>Allurive- our in-house design studio </span>crafted brilliance to deliver ever-evolving experiences.</p>
                    <h5 className='available-on'>Available on <FaAppStoreIos className='app-img' /> <FaGooglePlay className='app-img' /></h5>
                    <div className='d-flex'>
                      <div className='download-rating'><h2>1M+ </h2>Downloads</div>
                      <div className='download-rating'><h2>4.2/5 </h2>Rating</div>
                      <div className='download-rating'><h2>$3.4M </h2>Total valuation</div>
                    </div>
                    <button class="custom-btn btn-15 case-study" ><MdTouchApp />Explore Case Study</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* SML Banner */}

          <div className="sml-bg">
            <div className='row '>
              <div className="col-lg-5">
                <div data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  <div className='main-buildex'>
                    <img src={SmlLogo} alt='' className='sml-logo' />
                    <p className='sml-text'><span>ERP Solution</span> to the commercial vehicle manufacturer, specializing in buses, ambulances and customized vehicles.</p>
                    <h5 className='available-on'>Available on <FaGooglePlay className='app-img' /></h5>
                    <div className='d-flex'>
                      <div className='download-rating'><h2>1000+ </h2>Employee Usage</div>
                      <div className='download-rating'><h2>4.4/5 </h2>Rating</div>
                    </div>
                    <button class="custom-btn btn-15 case-study" ><MdTouchApp />Explore Case Study</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <img src={SmlImage} alt='' className='sml-img' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* Badminton Banner */}

          <div className="badminton-bg">
            <div className='row '>
              <div className="col-lg-7">
                <img src={BadmintonImage} alt='' className='badminton-img' />
              </div>
              <div className="col-lg-5">
                <div data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  <div className='main-badminton'>
                    <img src={BadmintonLogo} alt='' className='badminton-logo' />
                    <p className='badminton-text'>We have built this comprehensive badminton app for this badminton lover to keep them updated on latest news and follow your favorite players or countries</p>
                    <h5 className='available-on'>Available on <FaGooglePlay className='app-img' /></h5>
                    <div className='d-flex'>
                      <div className='download-rating'><h2>50K </h2>Downloads</div>
                      <div className='download-rating'><h2>4.5/5.0 </h2>Rating</div>
                    </div>
                    <button class="custom-btn btn-15 case-study" ><MdTouchApp />Explore Case Study</button>
                  </div>
                </div>
              </div>
            </div>
          </div></SwiperSlide>
        <SwiperSlide>  {/* GradeUp Banner */}

          <div className="gradeup-bg">
            <div className='row '>
              <div className="col-lg-5">
                <div data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  <div className='main-gradeup'>
                    <img src={GradeupLogo} alt='' className='gradeup-logo' />
                    <p className='gradeup-text'>We’ve a best experience in building <span>custom android applications,</span> just like the one we crafted for the leading <span>Edtech brand</span> that offers online exam preparation.</p>
                    <h5 className='available-on'>Available on <FaGooglePlay className='app-img' /></h5>
                    <div className='d-flex'>
                      <div className='download-rating'><h2>10M+ </h2>Downloads</div>
                      <div className='download-rating'><h2>4.3/5 </h2>Rating</div>
                      <div className='download-rating'><h2>$2.8B </h2>Funding Raised</div>
                    </div>
                    <button class="custom-btn btn-15 case-study" ><MdTouchApp />Explore Case Study</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <img src={GradeupImage} alt='' className='gradeup-img' />
              </div>
            </div>
          </div></SwiperSlide>

      </Swiper>







  </>
  )
}

export default Slider