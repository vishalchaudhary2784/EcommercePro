import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const HomeCat = () => {

    var homeCatSliderOptions = {
        dots: false,
        infinite: true,
        speed: 500,
        arrow: true,
        slidesToShow: 10,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className="homeCat mt-4">
                <div className="container">
                
                <div className="homeCatHeader">
                    <h3>Featured Categories</h3>
                </div>

                <div className="homeCatSlider mt-4">
                    <Slider {...homeCatSliderOptions}>
                        
                        
                        <div className="item text-center catCard1">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" className="w-100"/>
                            <div className="product-ct">
                            <h6>Cake & Milk</h6>
                            <span className="d-block">26 items</span>
                            </div>
                        </div>
                        <div className="item text-center catCard2">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" className="w-100"/>
                            <div className="product-ct">
                            <h6>Cake & Milk</h6>
                            <span className="d-block">26 items</span>
                            </div>
                        </div>
                        <div className="item text-center catCard3">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png" className="w-100"/>
                            <div className="product-ct">
                            <h6>Cake & Milk</h6>
                            <span className="d-block">26 items</span>
                            </div>
                        </div>
                        <div className="item text-center catCard4">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" className="w-100"/>
                            <div className="product-ct">
                            <h6>Cake & Milk</h6>
                            <span className="d-block">26 items</span>
                            </div>
                        </div>
                        <div className="item text-center catCard5">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png" className="w-100"/>
                            <div className="product-ct">
                            <h6>Cake & Milk</h6>
                            <span className="d-block">26 items</span>
                            </div>
                        </div>
                        <div className="item text-center catCard6">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-1.png" className="w-100"/>
                            <div className="product-ct">
                            <h6>Cake & Milk</h6>
                            <span className="d-block">26 items</span>
                            </div>
                        </div>
                        <div className="item text-center catCard7">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png" className="w-100"/>
                            <div className="product-ct">
                            <h6>Cake & Milk</h6>
                            <span className="d-block">26 items</span>
                            </div>
                        </div>
                        <div className="item text-center catCard8">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png" className="w-100"/>
                            <div className="product-ct">
                            <h6>Cake & Milk</h6>
                            <span className="d-block">26 items</span>
                            </div>
                        </div>
                        <div className="item text-center catCard9">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png" className="w-100"/>
                            <div className="product-ct">
                            <h6>Cake & Milk</h6>
                            <span className="d-block">26 items</span>
                            </div>
                        </div>
                        <div className="item text-center catCard10">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-14.png" className="w-100"/>
                            <div className="product-ct">
                            <h6>Cake & Milk</h6>
                            <span className="d-block">26 items</span>
                            </div>
                        </div>
                        <div className="item text-center catCard11">
                            <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-15.png" className="w-100"/>
                            <div className="product-ct">
                            <h6>Cake & Milk</h6>
                            <span className="d-block">26 items</span>
                            </div>
                        </div>
                        


                    </Slider>
                </div>
                </div>
            </section>
        </>
    )
}

export default HomeCat; 