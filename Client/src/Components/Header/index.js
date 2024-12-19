import { Link, useNavigate } from 'react-router-dom';
import Logo from "../../assets/images/logo.png";
import CountryDropdown from "../CountryDropdown";
import { Button } from 'bootstrap-4-react/lib/components';
import { AiOutlineUser } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { GiLargeDress } from "react-icons/gi";
import { FaBlog } from "react-icons/fa";
import { RiContactsBook3Line } from "react-icons/ri";
import { useContext, useState } from 'react';
import { myContext } from '../../App';
import { GiPirateCoat } from "react-icons/gi";
import { LuBaby } from "react-icons/lu";
import { GiLipstick } from "react-icons/gi";
import { BsWatch } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { IoBagRemoveSharp } from "react-icons/io5";
import { GiDelicatePerfume } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa";

const Header = () => {
    const context = useContext(myContext);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navigate = useNavigate();

    const goToCart = () => {
        navigate("/cart"); // Navigates to the Sign-In page
    };

    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
                    </div>
                </div>

                <header className="header mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper col-sm-2 d-flex align-items-center">
                                <Link to={"/"}><img src={Logo} alt="logo" /> </Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>

                                {
                                    context.countryList.length !== 0 && <CountryDropdown />
                                }


                                <SearchBox />


                                <div className='part3 d-flex align-items-center ml-auto'>
                                    {
                                        context.isLogin!==true ? <Link to="/signin"><Button className="btn-blue btn-lg btn-big btn-round mr-3">Sign In</Button></Link> :
                                        <Button className="circle mr-3"><AiOutlineUser /></Button>
                                    }
                                    
                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'>$3.29</span>
                                        <div className='position-relative ml-2'>
                                            <Button onClick={goToCart} className="circle ml-2"><IoBagOutline /></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <nav>
                    <div className='container mt-4'>
                        <div className='row'>
                            <div className='col-sm-3 navPart1'>
                                <div className='catWrapper'>
                                    <Button className="allCatTab align-items-center" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                        <span className='icon1 mr-2'><IoIosMenu /></span>
                                        <span className='text'>ALL CATEGORY</span>
                                        <span className='icon2 ml-2'><FaAngleDown /></span>
                                    </Button>
                                    <div className={`sidebarNav ${isSidebarOpen ? "open" : ""}`}>
                                        <ul>
                                            <li><Link to="/"><GiPirateCoat /> &nbsp;Men<butoon className="ml-auto"><FaAngleRight /></butoon></Link>
                                                <div className='catSubmenu shadow'>
                                                    <Link to="/">Clothing</Link>
                                                    <Link to="/">Footwear</Link>
                                                    <Link to="/">Watches</Link>
                                                    <Link to="/">Clothing</Link>
                                                    <Link to="/">Footwear</Link>
                                                    <Link to="/">Watches</Link>
                                                </div>
                                            </li>
                                            <li><Link to="/"><GiLargeDress /> &nbsp;Women</Link></li>
                                            <li><Link to="/"><LuBaby /> &nbsp;Kids</Link></li>
                                            <li><Link to="/"><BsWatch /> &nbsp;Watches</Link></li>
                                            <li><Link to="/"><GiPirateCoat /> &nbsp;Clothing<butoon className="ml-auto"><FaAngleRight /></butoon></Link>
                                                <div className='catSubmenu shadow'>
                                                    <Link to="/">Clothing</Link>
                                                    <Link to="/">Footwear</Link>
                                                    <Link to="/">Watches</Link>
                                                    <Link to="/">Clothing</Link>
                                                    <Link to="/">Footwear</Link>
                                                    <Link to="/">Watches</Link>
                                                </div>
                                            </li>
                                            <li><Link to="/"><GiLargeDress /> &nbsp;Fashion</Link></li>
                                            <li><Link to="/"><IoBagRemoveSharp /> &nbsp;Bags</Link></li>
                                            <li><Link to="/"><GiDelicatePerfume /> &nbsp;Perfumes<butoon className="ml-auto"><FaAngleRight /></butoon></Link>
                                                <div className='catSubmenu shadow'>
                                                    <Link to="/">Clothing</Link>
                                                    <Link to="/">Footwear</Link>
                                                    <Link to="/">Watches</Link>
                                                    <Link to="/">Clothing</Link>
                                                    <Link to="/">Footwear</Link>
                                                    <Link to="/">Watches</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-9 navPart2 d-flex align-items-center'>
                                <ul className='list list-inline ml-auto'>
                                    <li className='list-inline-item'><Link to="/"><AiFillHome /> &nbsp;Home</Link></li>
                                    <li className='list-inline-item'><Link to="/"><GiPirateCoat /> &nbsp;Men</Link>
                                        <div className='submenu shadow'>
                                            <Link to="/">Clothing</Link>
                                            <Link to="/">Footwear</Link>
                                            <Link to="/">Watches</Link>
                                            <Link to="/">Clothing</Link>
                                            <Link to="/">Footwear</Link>
                                            <Link to="/">Watches</Link>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'><Link to="/"><GiLargeDress /> &nbsp;Women</Link>
                                        <div className='submenu shadow'>
                                            <Link to="/">Clothing</Link>
                                            <Link to="/">Footwear</Link>
                                            <Link to="/">Watches</Link>
                                            <Link to="/">Clothing</Link>
                                            <Link to="/">Footwear</Link>
                                            <Link to="/">Watches</Link>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'><Link to="/"><LuBaby /> &nbsp;Kids</Link></li>
                                    <li className='list-inline-item'><Link to="/"><GiLipstick /> &nbsp;Beauty</Link>
                                        <div className='submenu shadow'>
                                            <Link to="/">Clothing</Link>
                                            <Link to="/">Footwear</Link>
                                            <Link to="/">Watches</Link>
                                            <Link to="/">Clothing</Link>
                                            <Link to="/">Footwear</Link>
                                            <Link to="/">Watches</Link>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'><Link to="/"><BsWatch /> &nbsp;Watches</Link></li>
                                    <li className='list-inline-item'><Link to="/"><FaBlog /> &nbsp;Blog</Link></li>
                                    <li className='list-inline-item'><Link to="/"><RiContactsBook3Line /> &nbsp;Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Header;