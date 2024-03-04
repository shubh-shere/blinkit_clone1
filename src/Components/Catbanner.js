import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Bannerslide.css';
import { Link } from 'react-router-dom';


const Catbanner = () => {
const catdata = [
  {
    id: 1,
    imgsrc: "../Assets/Images/cat-bann-1.jpg",
    title: "redd"
  },
  {
    id: 2,
    imgsrc: "../Assets/Images/cat-bann-2.jpg",
    title: "redd"
  },
  {
    id: 3,
    imgsrc: "../Assets/Images/cat-bann-3.jpg",
    title: "redd"
  },
  {
    id: 4,
    imgsrc: "../Assets/Images/cat-bann-4.jpg",
    title: "redd"
  },
  {
    id: 5,
    imgsrc: "../Assets/Images/cat-bann-5.jpg",
    title: "redd"
  },
  // ... (other data)
];

 
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className='catbanner'>
      <div className='container'>
        <div className='row'>
          <Slider {...settings}>
            {
            catdata.map((data) => (
              <div key={data.id} className='ban-img'>
               <Link to="/">  <img src={data.imgsrc} alt={data.title} /></Link>
              </div>
            ))
            }
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Catbanner;
