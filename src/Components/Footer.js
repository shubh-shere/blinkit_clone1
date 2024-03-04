import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom";
 

const Footer = () => {
  return (
    <div>
      <footer className='mt-5 mb-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className='footer_link_heading'>Useful Links</div>
              <div className='row'> 
              <div className='col-lg-4 footer_link'>
                <ul className='footer_column'>
                  <li>
                    <Link>About</Link>
                  </li>
                  <li>
                    <Link>Careers</Link>
                  </li>
                  <li>
                    <Link>Blog</Link>
                  </li>
                  <li>
                    <Link>Lead</Link>
                  </li>
                  <li>
                    <Link>Press</Link>
                  </li>
                  <li>
                    <Link>Value</Link>
                  </li>

                </ul>
                </div>
                <div className='col-lg-4 footer_link'>

                <ul className='footer_column'>
                  <li>
                    <Link>Privacy</Link>
                  </li>
                  <li>
                    <Link>Terms</Link>
                  </li>
                  <li>
                    <Link>FAQs</Link>
                  </li>
                  <li>
                    <Link>Mobile</Link>
                  </li>
                  <li>
                    <Link>Contact</Link>
                  </li>
                  

                </ul>
                </div>
                <div className='col-lg-4 footer_link'>

                <ul className='footer_column'>
                  <li>
                    <Link>Partner</Link>
                  </li>
                  <li>
                    <Link>Express</Link>
                  </li>
                  <li>
                    <Link>Seller</Link>
                  </li>
                  <li>
                    <Link>Spotlight</Link>
                  </li>
                  <li>
                    <Link>Warehouse</Link>
                  </li>
                  <li>
                    <Link>Deliver</Link>
                  </li>

                </ul>
              </div>
              </div>
              </div>
           
              <div className='col-8'>
              <div className='footer_link_heading'>Categories</div>
              <div className='row'> 
              <div className='col-lg-4 footer_link'>
                <ul className='footer_column'>
                  <li>
                    <Link>Vegetables & Fruits</Link>
                  </li>
                  <li>
                    <Link>Cold Drinks & Juices</Link>
                  </li>
                  <li>
                    <Link>Bakery & Biscuits</Link>
                  </li>
                  <li>
                    <Link>Dry Fruits, Masala & Oil</Link>
                  </li>
                  <li>
                    <Link>Paan Corner</Link>
                  </li>
                  <li>
                    <Link>Pharma & Wellness</Link>
                  </li>
                  <li>
                    <Link>Personal Care</Link>
                  </li>
                  <li>
                    <Link>Pharma & Wellness</Link>
                  </li>
                  <li>
                    <Link>Beauty & Cosmetics</Link>
                  </li>
                  <li>
                    <Link>Print Store</Link>
                  </li>


                </ul>
                </div>
                <div className='col-lg-4 footer_link'>

                <ul className='footer_column'>
                  <li>
                    <Link>Dairy & Breakfast</Link>
                  </li>
                  <li>
                    <Link>Instant & Frozen Food</Link>
                  </li>
                  <li>
                    <Link>Sweet Tooth</Link>
                  </li>
                  <li>
                    <Link>Sauces & Spreads</Link>
                  </li>
                  <li>
                    <Link>Organic & Premium</Link>
                  </li>
                  <li>
                    <Link>Cleaning Essentials</Link>
                  </li>
                  <li>
                    <Link>Ice Creams & Frozen Desserts</Link>
                  </li>
                  

                </ul>
                </div>
                <div className='col-lg-4 footer_link'>

                <ul className='footer_column'>
                  <li>
                    <Link>Munchies</Link>
                  </li>
                  <li>
                    <Link>Tea, Coffee & Health Drinks</Link>
                  </li>
                  <li>
                    <Link>Atta, Rice & Dal</Link>
                  </li>
                  <li>
                    <Link>Chicken, Meat & Fish</Link>
                  </li>
                  <li>
                    <Link>Baby Care</Link>
                  </li>
                  <li>
                    <Link>Home & Office</Link>
                  </li>
                  <li>
                    <Link>Pet Care</Link>
                  </li>

                </ul>
              </div>
              </div>
              </div>
          </div>

          <div className='row'>
            <div className='social-footer'>
              <div className='col-lg-12'>
                <div className='row'>

                <div className='col-md-4'>
                <p className='blink_copyright'>
                © Blink Commerce Private Limited (formerly known as Grofers India Private Limited), 2016-2024

                </p>
              </div>
              <div className='col-md-4'>
                 <div className='download_app'>
                  <h6>Download App</h6>
                  <Link><img src="../Assets/Images/apple_store.png" alt=''/></Link> 
                  <Link><img src="../Assets/Images/google_play.png" alt=''/></Link> 
                 </div>
              </div>
              <div className='col-md-4'>
                 <div className='social-icons'>
                 <Link> <img src='../Assets/Images/facebook.png' alt=''/></Link> 
                 <Link> <img src='../Assets/Images/insta.png' alt=''/></Link> 
                 <Link> <img src='../Assets/Images/twitter.png' alt=''/></Link> 
                 <Link>  <img src='../Assets/Images/linkedin.png' alt=''/></Link> 
                 </div>
              </div>
              </div>
           
          </div>

        </div>
          </div>
          <div className='row'>
            <div className='blinkit'>
            <p>“Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.</p>

            </div>
             </div>
          </div>
       </footer>
      </div>
   )
}

export default Footer