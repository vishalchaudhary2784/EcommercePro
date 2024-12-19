
import React, { useState } from "react";
import Rating from '@mui/material/Rating';
import { Button } from "bootstrap-4-react/lib/components";
import { TfiFullscreen } from "react-icons/tfi";
import { GoHeart } from "react-icons/go";
import ProductModal from "../ProductModal";

const ProductItem = (props) =>{

    

      const [isOpenProductModal,setisOpenProductModal] = useState(false);
        

      const viewProductDetail = (id) =>{
        setisOpenProductModal(true);
      }
      const closeProductDetail = ()=>{
        setisOpenProductModal(false);
      }
        return(
            <>
                                    <div className={`productItem ${props.itemView}`}>
                                        <div className="imgWrapper">
                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100"/>
                                            <span className="badge badge-primary">25%</span>
                                            <div className="actions">
                                                <Button onClick={()=>viewProductDetail()}><TfiFullscreen/></Button>
                                                <Button><GoHeart style={{fontSize:'20px'}}/></Button>
                                            </div>
                                        </div>
                                        <div className="info">
                                        <h4>All Natural Italian-Style Chicken Meatballs</h4>
                                            <span className="text-success d-block">IN STOCK</span>
                                            <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                            <div className="d-flex">
                                                <span className="oldPrice">$20.0</span>
                                                <span className="netPrice text-danger ml-2">$15.0</span>
                                            </div>
                                        </div>
                                    </div>

                                {isOpenProductModal===true && <ProductModal closeProductDetail={closeProductDetail}/>}
                                {/* <ProductModal/> */}
            </>
        )
}

export default ProductItem;