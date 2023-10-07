import {TbPremiumRights} from "react-icons/tb"
import {CiMobile3} from "react-icons/ci"
import {IoDesktopSharp} from "react-icons/io5"
import {CgWebsite} from "react-icons/cg"
import {SiHiveBlockchain} from "react-icons/si"
import {HiOutlineBuildingLibrary} from "react-icons/hi2"
import {IoIosSend} from "react-icons/io"
import {ImSpoonKnife} from "react-icons/im"
import {MdOutlineLocalGroceryStore} from "react-icons/md"
import {MdLocalGroceryStore} from "react-icons/md"
import {GiMedicines} from "react-icons/gi"
import {LiaTruckPickupSolid} from "react-icons/lia"
import {FaTaxi} from "react-icons/fa"
import {GiHairStrands} from "react-icons/gi"
import {TbSettingsCog} from "react-icons/tb"
import {GiEarthAmerica} from "react-icons/gi"
import {FaUserDoctor} from "react-icons/fa6"
import {BsLayersFill} from "react-icons/bs"
import {MdFitnessCenter} from "react-icons/md"
import {GiHealthCapsule} from "react-icons/gi"
import {PiBusBold} from "react-icons/pi"
import {MdOutlineRealEstateAgent} from "react-icons/md"
import {FcSelfServiceKiosk} from "react-icons/fc"
import {MdCarRental} from "react-icons/md"
import {BsSendPlus} from "react-icons/bs"
import {FaCreativeCommonsRemix} from "react-icons/fa6"
import {RiP2PFill} from "react-icons/ri"
import {SiApplearcade} from "react-icons/si"
import {PiHeadsetFill} from "react-icons/pi"
import {TbFileLike} from "react-icons/tb"
import {BsChatSquareHeart} from "react-icons/bs"
import {AiFillQuestionCircle} from "react-icons/ai"
import {SiPostmates} from "react-icons/si"
import {SiGoogleearth} from "react-icons/si"
import Eicon from "../assest/e-icon-png.png" 
import Picon from "../assest/p-icon.jpg"
import {LiaHandHoldingHeartSolid} from "react-icons/lia"
import {SiDoordash} from "react-icons/si"
import {SiZomato} from "react-icons/si"
import {TbBrandUber} from "react-icons/tb"
import {SiInstacart} from "react-icons/si"
import {FcAreaChart} from "react-icons/fc"
import {LiaHorseHeadSolid} from "react-icons/lia"
import {SiTiktok} from "react-icons/si"
import {TbBrandDeliveroo} from "react-icons/tb"
import {AiOutlineAmazon} from "react-icons/ai"
import {FcAbout} from "react-icons/fc"
import {FaHandshakeSimple} from "react-icons/fa6"
import {TbSettingsX} from "react-icons/tb"
import {BsQuestionCircle} from "react-icons/bs"
import {FaBlogger} from "react-icons/fa6"
import {AiOutlineVideoCameraAdd} from "react-icons/ai"
import {TbChartInfographic} from "react-icons/tb"
import {BiBriefcaseAlt2} from "react-icons/bi"
import {FaIndustry} from "react-icons/fa6"
import {GiBlackBook} from "react-icons/gi"
import {MdTouchApp} from "react-icons/md"
import Ticon from "../assest/t-icon.png"

import Letter from "../assest/letter-a.png"
import Logo from "../assest/logo.png"
function NavBar() {
  return (
    <>
      <nav className="navbar" >
        <div className='d-flex w-100 justify-content-between'>
          <img src={Logo} alt="" className='nav-logo' />
          <div>
            <ul className="nav-list">

              <li className="nav-item dropdown">
                <span className="dropdown-text"> Services</span>
                <div className="dropdown-menu" style={{width:"40rem"}}>
                    <div className="d-flex justify-content-between">
                    <ul >
                    <li className="dropdown-item" ><TbPremiumRights className="icon-yellow"/> Premium Custom Solution</li>
                  <li className="dropdown-item"><CiMobile3 className="icon-green"/> Mobile App Solution</li>
                  <li className="dropdown-item" ><IoDesktopSharp className="icon-yellow"/> Enterprise Software Development</li>
                  <li className="dropdown-item"><CgWebsite className="icon-blue"/> Web Development</li>
                </ul>
                <ul >
                <li className="dropdown-item"><SiHiveBlockchain className="icon-pink"/> Blockchain Development</li>
                  <li className="dropdown-item"><HiOutlineBuildingLibrary className="icon-min-pink"/> Fintech Development</li>
                  <li className="dropdown-item" ><img src={Letter} alt="" className="icon-red"/> UI/UX Design-Allurive</li>
                  <li className="dropdown-item"><IoIosSend className="icon-yellow"/> Growth & Marketing</li>
                </ul>
              </div>
            </div>
              </li>
              <li className="nav-item dropdown">
                <span className="dropdown-text w-100">Industry</span>
                <div className="dropdown-menu" style={{width:"57rem"}}>
                    <div className="d-flex justify-content-between" id="drp">
                    <ul >
                    <h6 className="nav-heading-h4"> &nbsp;&nbsp; Demand</h6>
                    <li className="dropdown-item"><ImSpoonKnife className="icon-yellow"/> Food Delivery</li>
                  <li className="dropdown-item"><MdOutlineLocalGroceryStore className="icon-green"/> Grocery Delivery</li>
                  <li className="dropdown-item" ><MdLocalGroceryStore className="icon-blue"/>   E-commerce Delivery</li>
                  <li className="dropdown-item"> <GiMedicines className="icon-green"/> Pharmacy Delivery</li>
                  <li className="dropdown-item"><LiaTruckPickupSolid className="icon-blue"/> Pickup & Delivery</li>
                </ul>
                <ul >
                <h6 className="nav-heading-h4">&nbsp;&nbsp;&nbsp;&nbsp;Services</h6>
                <li className="dropdown-item"><FaTaxi className="icon-yellow"/> Taxi & Transporation </li>
                  <li className="dropdown-item"><GiHairStrands className="icon-min-pink"/> Beuty & Salon</li>
                  <li className="dropdown-item" ><TbSettingsCog  className="icon-pink"/> Home Services</li>
                  <li className="dropdown-item"><GiEarthAmerica className="icon-min-blue"/> Laundry Services</li>
                  <li className="dropdown-item"><FaUserDoctor className="icon-green"/> Concierge Servives</li>
                </ul>
                <ul >
                <h6 className="nav-heading-h4">&nbsp;&nbsp;&nbsp;&nbsp;Other</h6>
                  <li className="dropdown-item"><BsLayersFill className="icon-yellow"/> Education</li>
                  <li className="dropdown-item"><MdFitnessCenter className="icon-blue"/> Fitness</li>
                  <li className="dropdown-item"><GiHealthCapsule className="icon-green"/> Healthcare</li>
                  <li className="dropdown-item"><PiBusBold className="icon-red"/> Logistic</li>
                  <li className="dropdown-item"><MdOutlineRealEstateAgent className="icon-yellow"/> Real Estate</li>
                </ul>
                <ul >
                <h6 className="nav-heading-h4">MarketPlace</h6>
                <li className="dropdown-item"><FcSelfServiceKiosk className="icon-green"/> Service</li>
                <li className="dropdown-item"><MdCarRental className="icon-blue"/>Rental</li>
                <li className="dropdown-item"><BsSendPlus className="icon-yellow"/> Freelancer</li>
                <li className="dropdown-item"><FaCreativeCommonsRemix className="icon-min-blue"/> E-commerce</li>
                <li className="dropdown-item"><RiP2PFill className="icon-red"/> Peer-To-Peer</li>
                </ul>
                <ul >
                <h6 className="nav-heading-h4">&nbsp;&nbsp;&nbsp; Solution</h6>
                <li className="dropdown-item"><SiApplearcade className="icon-black"/> On Demand App</li>
                <li className="dropdown-item"><PiHeadsetFill className="icon-yellow" /> Consultation App</li>
                <li className="dropdown-item"><TbFileLike className="icon-blue"/> Social Media App</li>
                <li className="dropdown-item"><BsChatSquareHeart className="icon-red"/> Dating App</li>
                </ul>
              </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <span className="dropdown-text" >Business Models</span>
                <div className="dropdown-menu" style={{width:"28rem"}}>
                    <div className="d-flex justify-content-between">
                    <ul >
                    <li className="dropdown-item"><AiFillQuestionCircle className="icon-yellow"/> Overview</li>
                    <li className="dropdown-item"><SiPostmates className="icon-black"/> Postmates</li>
                    <li className="dropdown-item"><SiGoogleearth className="icon-green"/> Gojek</li>
                    <li className="dropdown-item"><img src={Eicon} alt="" className="icon-red"/> Ebay</li>
                    <li className="dropdown-item"><img src={Picon} alt=""  className="icon-min-blue"/> Practo</li>
                    <li className="dropdown-item"><LiaHandHoldingHeartSolid className="icon-red"/> Tinder</li>
                </ul>
                <ul >
                <li className="dropdown-item"><img src={Ticon} alt="" className="icon-yellow"/> Talabat</li>
                <li className="dropdown-item"><SiDoordash className="icon-red"/> Doordash</li>
                <li className="dropdown-item"><SiZomato className="icon-blue"/> Zomato</li>
                <li className="dropdown-item"><TbBrandUber className="icon-green"/> Ubereats</li>
                <li className="dropdown-item"><SiInstacart className="icon-yellow"/> Instacart</li>
                </ul>
                <ul>
                  <li className="dropdown-item"><FcAreaChart className="icon-green"/> Careem</li>
                  <li className="dropdown-item"><LiaHorseHeadSolid className="icon-red"/> Dubizzle</li>
                  <li className="dropdown-item"><SiTiktok className="icon-black"/> Tiktok</li>
                  <li className="dropdown-item"><TbBrandDeliveroo className="icon-blue"/> Deliveroo</li>
                  <li className="dropdown-item"><AiOutlineAmazon className="icon-black"/>  Amazone</li>
                </ul>
              </div>
            </div>
              </li>
              <li className="nav-item dropdown">
                <span className="dropdown-text">Live Demos</span>
              </li>
              <li className="nav-item dropdown">
                <span className="dropdown-text" >Company</span>
                <ul className="dropdown-menu">
                  <li className="dropdown-item"><FcAbout  className="icon-pink"/> About Us</li>
                  <li className="dropdown-item"><FaHandshakeSimple className="icon-green"/> Partnership</li>
                  <li className="dropdown-item"><TbSettingsX className="icon-blue"/> How We Work</li>
                  <li className="dropdown-item"><BsQuestionCircle className="icon-yellow"/> Why Choose Us</li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <span className="dropdown-text">Portfolio</span>
              </li>
              <li className="nav-item dropdown">
                <span className="dropdown-text" >Resource</span>
                <ul className="dropdown-menu">
                  <li className="dropdown-item"><FaBlogger className="icon-yellow"/> Blog</li>
                  <li className="dropdown-item"><AiOutlineVideoCameraAdd className="icon-red"/> Video</li>
                  <li className="dropdown-item"><TbChartInfographic className="icon-blue"/> Infographics</li>
                  <li className="dropdown-item"><BiBriefcaseAlt2 className="icon-yellow"/> Case Study</li>
                  <li className="dropdown-item"><FaIndustry className="icon-pink"/> Industry Reports</li>
                  <li className="dropdown-item"><GiBlackBook className="icon-green"/> Feature Book</li>
                </ul>
              </li>
              <li> <div className='me-4'>
            <button class="custom-btn btn-15" ><MdTouchApp /> Get in Touch </button>
          </div> </li>
            </ul>
           
          </div>
        
        </div>
      </nav>
    </>
  )
}

export default NavBar