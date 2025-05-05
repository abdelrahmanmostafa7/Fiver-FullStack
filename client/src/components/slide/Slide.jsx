import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";


const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
         <Slider slidesToShow={slidesToShow}  arrowsScroll={arrowsScroll} autoplay={true} autoplayScroll={1} autoplaySpeed	={5000} duration={3000} arrows={false} shift={5}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
