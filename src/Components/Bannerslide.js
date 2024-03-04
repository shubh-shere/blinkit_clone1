import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Bannerslide.css";

const Bannerslide = () => {
  const settings = {
    
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='banner-silde'> 
    <div className='container'>
      <div className='row'>
       
      
        <Slider {...settings}>
          <div className='ban-img'>
            <img src='../Assets/Images/banner-1.jpg' alt=''/>
          </div>
          <div className='ban-img'>
            <img src='../Assets/Images/banner-1.jpg' alt=''/>
          </div>
          <div className='ban-img'>
            <img src='../Assets/Images/banner-1.jpg' alt=''/>
          </div>
        </Slider>
      </div>
      
    </div>
      </div>
    );
  }
  
  


export default Bannerslide

 