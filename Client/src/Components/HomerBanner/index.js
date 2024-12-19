import React from "react";
import Slider from "react-slick";

const HomeBanner = () =>{
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        autoplay:true
      };

    return(
        <>
        <div className="homeSlider">
        <div className="container">
        <div className="homeBannerSection mt-4">
        <Slider {...settings}>
            <div className="item">
                <img src="https://cmsimages.shoppersstop.com/private_brands_main_banner_web_7d4414cc87/private_brands_main_banner_web_7d4414cc87.png" className="w-100"/>
            </div>
            <div className="item">
                <img src="https://cmsimages.shoppersstop.com/watches_main_banner_web_647872b54f/watches_main_banner_web_647872b54f.png" className="w-100"/>
            </div>
            <div className="item">
                <img src="https://cmsimages.shoppersstop.com/menswear_main_banner_web_132c5d7fea/menswear_main_banner_web_132c5d7fea.png" className="w-100"/>
            </div>
            <div className="item">
                <img src="https://cmsimages.shoppersstop.com/women_indianwear_main_banner_web_854bf2fdfb/women_indianwear_main_banner_web_854bf2fdfb.png" className="w-100"/>
            </div>
            <div className="item">
                <img src="https://cmsimages.shoppersstop.com/MAC_Web_23_Oct24_ca21b822aa/MAC_Web_23_Oct24_ca21b822aa.jpg" className="w-100"/>
            </div>
            <div className="item">
                <img src="https://cmsimages.shoppersstop.com/footwear_main_banner_web_e43f630930/footwear_main_banner_web_e43f630930.png" className="w-100"/>
            </div>

        </Slider>
        </div>
        </div>
        </div>
        </>
    )

}

export default HomeBanner;