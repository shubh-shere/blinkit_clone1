import React, { useState } from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import Loginpopup from "./Loginpopup";
import Location from "./Location";
 
const Header = () =>  {
 
const[ispopupopen, setispopupopen] = useState(false);
const[islocationopen, setislocationopen] = useState(false);

 const handleOpen = () => {
   
    setispopupopen(true);
    document.body.classList.add("popup-blank");
 
  };

  const handleClose = () =>{
    setispopupopen(false);
    document.body.classList.remove("popup-blank");
  }

const locationOpen = () =>{
    setislocationopen(true);
    document.body.classList.add("popup-blank");
}
const locationClose = () =>{
    setislocationopen(false);
    document.body.classList.remove("popup-blank");
}



     return( 
    <>
        <header className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="full-header"> 
                        <div className="sitelogo">
                            <Link to="/"> <img src="../Assets/Images/app_logo.png" alt=""/></Link>
                            
                        </div>
                        <div className="location-box" >
                            <Link   onClick={locationOpen}> 
                            <h3>Delivery in 10 minutes</h3>
                            <p>Block I, moolchand tower,base...<i class="fa-solid fa-caret-down"></i></p>
                            </Link>
                            {
                                islocationopen &&
                                <Location location={locationClose}/>
                            }
                            
                        </div>
                        <div className="search-box">
                         <Link to="/"> <i className="fa-solid fa-magnifying-glass"></i> </Link> <input type="text" name="search" placeholder="search anything"/>
                        </div>
                        <div className="login-nav">
                             <ul>
                                <li className="login-nav">
                                   <Link onClick={handleOpen} >Login  </Link>  
                                   {
                                        ispopupopen &&
                                        <Loginpopup handleClose={handleClose}/> 

                                    }
                                </li>
                                <li>
                                  <button> <i className="fa-solid fa-cart-shopping"></i> My Cart</button>   
                                </li>
                             </ul>
                            
                        </div>
                    
                         
                    </div>
                </div>  
            </div>
                     
        </header>
       
 
 
    </>
    );
}

 
export default Header

 