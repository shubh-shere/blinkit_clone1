import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Groceryproduct.css"
import Productdata from "./Productdata.json"; 
 

const Product = () => {
  const [Quantity, setQuantity] = useState(0);
 
 const showAddbutton = () => {
   
  setQuantity(Quantity + 1);
 }
  const productplus = (e) => {
    e.preventDefault();
    setQuantity(Quantity + 1);
  }
  const productMinus = (e) => {
    e.preventDefault();
    setQuantity(Quantity - 1);
  }

  return (
    <>
     
        <div className="p-product">
          {Productdata && Productdata.product.map(product => (
            
       
              <div className="product-card" key={product.id}>
                 <Link to="../Productdetail"> 
                <div className="p-image">
                  <img src={product.url} alt="" />
                </div>
                <div className="p-content">
                  <div className="timing">
                    <p><img src="../Assets/Images/15-mins.png" alt="" />11 mins </p>
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
                    <div className={ `add-btn ${Quantity !==0 ? 'addchange' : ''}`}>
                    

                    
                    { Quantity === 0 &&
                      <Link onClick={showAddbutton} > ADD</Link>
                    }
                     
                    {  
                    Quantity !==0 &&
                      
                      <Link  ><span  onClick={productMinus}  >-</span> <span>{Quantity}</span><span onClick={productplus}>+</span></Link>
                    } 
                    </div>
                  </div>
                </div>
                </Link>
                </div>
                
              
          ))}
      </div>
        
    </>
  );
};

export default Product;
