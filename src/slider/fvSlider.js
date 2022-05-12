import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "../components/image" //追加

import '../styles/slider/_fvSlider.scss'

const SimpleSlider = () =>  {
    const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 3000,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <Slider {...settings}>
        <div>
        <Image filename="fv01.jpg" alt="サンプル画像" /> 
        </div>
        <div>
        <Image filename="fv01.jpg" alt="サンプル画像" /> 
        </div>
        <div>
        <Image filename="fv01.jpg" alt="サンプル画像" /> 
        </div>     
      </Slider>
    );
  }

  export default SimpleSlider;