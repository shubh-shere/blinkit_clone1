import React, {  useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Productdetail.css';
import { Link } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
import Data from "../Components/Data.json"; 
const Productdetail = () => {

const [handleOn, sethandleOn] = useState('../Assets/Images/p-cat-2.jpg');
const [isActive, setisActive] = useState('')
 

const additem = () =>{

    setisActive('consol.log()');

}

 
 
const handleImagechange = (e) =>{
    let imgUrl = e.target.src;
    sethandleOn(imgUrl);
}


 const settings = {
    
        infinite: false,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1
      };


    return(

        <>
        <Header/>
       
        <div className='productdetail'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'> 
                    <dvi className='zoom_product'>
                         <div className='p_zoomimg'>
                             
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: handleOn,
                            className: 'product-zoom'
                        },
                        largeImage: {
                            src: handleOn,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                    
                    </div>

                    <div className='product_slider'>
                    <Slider {...settings}>
                    {Data &&
                      Data.product.map(product => (

                        <Link onClick={handleImagechange}> 
                        <div className="img_product" key={product.id}>

                          <div className="product-card">
                            <div className="p-image">
                              <img src={product.url } alt="" />
                            </div>
                            


                          </div>
                        </div>
                        </Link>
                      ))}
                  </Slider>
                    </div>
                    <div className='product-details-data'>
                        <h3>Product Details</h3>
                        <h6>Key Features</h6>
                         <ul>
                            <li>Wholesome and healthy</li>
                            <li>Wholesome and healthy</li>
                            <li>Wholesome and healthy</li>
                         </ul>
                         <h6>Unit </h6>
                         <p>500 ml</p>
                         <h6>Ingredients</h6>
                         <p>Milk</p>
                         <h6>Shelf Life</h6>
                         <p>2 days</p>
                         <h6>Country Of Origin</h6>
                         <p>India</p>
                         <h6>Customer Care Details</h6>
                         <p>Email: info@blinkit.com</p>
                         <h6>Return Policy</h6>
                         <p>The product is non-returnable. For a damaged, defective, expired or incorrect item, you can request a replacement within 24 hours of delivery.
In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition.</p>
                          

                    </div>
                    </dvi>

                   

                    </div>
                    <div className='col-6'>
                        <div className='right-Productinfo'>
                            <div className='productinfo'> 
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><Link> Home</Link></li>
                                        <li class="breadcrumb-item"><Link>  Butter & More </Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">Amul Salted Butter</li>
                                    </ol>
                                    
                             </nav>

                             <h2>Amul Salted Butter</h2>
                             <div class="timing"><p><img src="../Assets/Images/15-mins.png" alt=""/>11 mins </p></div>
                             <div className='all-product-link'>
                                <Link to="" >View all by Amul <i class="fa-solid fa-caret-right"></i></Link>
                             </div>
                             </div>
                             <div className='select_unit'>
                                <div className='unitheading'>
                                    <p>Select Unit</p>
                                </div>
                            <div className='unit_data  '> 
                            <Link onClick={additem(0)} className={`unit_cat  ${isActive  ? 'active' : ''}`}>
                                <p className='unit_quantity'>100 g</p>
                                <p className='unit_price'> <span>MRP</span> ₹140 </p>
                            </Link>


                            <Link onClick={additem(1)} className={`unit_cat  ${isActive  ? 'active' : ''}`}>
                                    <p className='unit_quantity'>100 g</p>
                                    <p className='unit_price'> <span>MRP</span> ₹140 </p>
                                </Link>
                                </div>
                            <div className='add_btn_product'> 
                                <p>(Inclusive of all taxes) </p>
                                <div class="add-btn"><a  href='/'>ADD</a></div>
                             </div>
                             </div>

                        <div className='blinkit-content'>
                            <p>Why shop from blinkit?</p>
                            
                            <div className='blinkit-content-inner'>
                                <div className='blink_img'>
                                    <img src='../Assets/Images/10_minute_delivery.png' alt=''/>
                                </div>
                                <div className='content-p'>
                                    <p><b> Superfast Delivery </b></p>
                                    <p>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                                </div>
                            </div>

                            <div className='blinkit-content-inner'>
                                <div className='blink_img'>
                                    <img src='../Assets/Images/Best_Prices_Offers.png' alt=''/>
                                </div>
                                <div className='content-p'>
                                    <p><b> Superfast Delivery </b></p>
                                    <p>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                                </div>
                            </div>

                            <div className='blinkit-content-inner'>
                                <div className='blink_img'>
                                    <img src='../Assets/Images/Wide_Assortment.png' alt=''/>
                                </div>
                                <div className='content-p'>
                                    <p><b> Superfast Delivery </b></p>
                                    <p>Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                                </div>
                            </div>
                        </div>
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
         
        <Footer/>
        </>
    )
};

export default Productdetail;