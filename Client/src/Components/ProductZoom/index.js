import React, { useRef } from "react";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";


const ProductZoom = () =>{
    const mainSliderRef = useRef(null);
    const thumbSliderRef = useRef(null);
  
    const mainSliderSettings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: thumbSliderRef.current,
    };
  
    const thumbSliderSettings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: mainSliderRef.current,
      dots: false,
      infinite: false,
      centerMode: false,
      focusOnSelect: true,
      arrows: false,
    };
  
    const images = [
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg",
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg",
      "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg",
    ];
  
    return(

            <div className="productZoom">
                <div className="badge badge-primary">10%</div>
            <div className="product-detail-slider">
              {/* Main Slider */}
              <div className="main-slider">
                <Slider
                  {...mainSliderSettings}
                  ref={(slider) => (mainSliderRef.current = slider)}
                >
                  {images.map((img, index) => (
                    <div key={index} className="main-slide">
                      <InnerImageZoom
                        src={img}
                        zoomSrc={img}
                        zoomScale={1} // Adjust the zoom level
                        className="w-100"
                        alt={`Product ${index + 1}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>

              {/* Thumbnail Slider */}
              <div className="thumbnail-slider">
                <Slider
                  {...thumbSliderSettings}
                  ref={(slider) => (thumbSliderRef.current = slider)}
                >
                  {images.map((img, index) => (
                    <div key={index} className="thumbnail-slide">
                      <img src={img} alt={`Thumbnail ${index + 1}`} className="w-100" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            </div>
    )

}

export default ProductZoom;