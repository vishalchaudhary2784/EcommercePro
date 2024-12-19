
import Dialog from "@mui/material/Dialog";
import { MdClose } from "react-icons/md";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import ProductZoom from "../ProductZoom";

const ProductModal = (props) => {
 
  return (
    <>
      <Dialog open={true} className="productModal">
        <Button className="close_" onClick={() => props.closeProductDetail()}>
          <MdClose />
        </Button>
        <h5 className="mb-1 font-weight-bold">All Natural Italian-Style Chicken Meatballs</h5>

        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>Welch's</b>
            </span>
          </div>
          <Rating name="read-only" value={3} readOnly precision={0.5} size="small" />
          <span className="text-light ml-2">1 review</span>
        </div>
        <hr />
        <div className="row mt-2 productDetailModal position-relative">
          <div className="col-md-5">
          <ProductZoom/>
          </div>
          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice lg mr-2">$20.0</span>
              <span className="netPrice text-danger lg">$15.0</span>
            </div>
            <span className="badge badge-success">IN STOCK</span>
            <p className="mt-3">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.
              Class aptent taciti sociosqu ad litora torquent
            </p>
            <div className="d-flex align-items-center">
              <QuantityBox />
              <Button className="btn-blue btn-lg btn-big btn-round ml-3">Add to cart</Button>
            </div>

            <div className="d-flex align-items-center whislist">
              <Button className="btn-round mt-3 whislistBtn" variant="outlined">
                <IoIosHeartEmpty />
                &nbsp;Outlined
              </Button>
              <Button className="btn-round mt-3 ml-3 whislistBtn" variant="outlined">
                <MdOutlineCompareArrows />
                &nbsp;Outlined
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
