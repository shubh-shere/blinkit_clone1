import React from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Groceryproduct.css"
import Data from "../Components/Data.json"; 

const Groceryproduct2 = () => {

    const settings = {
      infinite: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 600,
      slidesToShow: 7,
      slidesToScroll: 1
    };

    // console.log(Productnew);
  
    return (
      <>
        <div className="grocery-product">
          <div className="container">
            <div className="row">
              <div className="prodcut-hread">
                <h4 className="heading">Rolling paper & tobacco</h4>
                <Link to="/">See all</Link>
              </div>
            </div>
            <div className="product-slide">
              <div className="col-lg-12">
                <div className="row">
                  <Slider {...settings}>
                    {Data &&
                      Data.product.map(product => (
                        <div className="col-md-2" key={product.id}>

                          <div className="product-card">
                            <div className="p-image">
                              <img src={product.url } alt="" />
                            </div>
                            <div className="p-content">
                                        <div className="timing">
                                            <p><img src="../Assets/Images/15-mins.png" alt=""/>11 mins </p>
                                            </div>
                                        <div className="p-name">
                                            <p>{product.productname}</p>
                                        </div>
                                        <div className="p-size">
                                            <p>{product.quantity}</p>
                                        </div>
                                      <div className="p-price">
                                            <div className="price">
                                                <p>&#8377;{product.price}</p>
                                            </div>
                                            <div className="add-btn">
                                                <Link>ADD</Link>
                                                
                                            </div>
                                      </div>
                                    </div>


                          </div>
                        </div>
                      ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }; 
  export default Groceryproduct2;
  