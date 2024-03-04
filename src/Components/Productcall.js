import React from 'react'
import { Link } from 'react-router-dom'

const Productcall = ({product}) => {
  return (
    <>
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
    </>
  )
}

export default Productcall