import React from 'react'
import Catheading from '../Components/Catheading'
import Header from '../Components/Header'
import Categoryheader from '../Components/Categoryheader'
import Footer from '../Components/Footer'

const Seeallproduct = () => {
  return (
     
        <> 
        <Header/>
        <Categoryheader/>
        <div className='seeall_data'>
        <div className="container">
          <div className="row">
          <Catheading/>
          </div>
        </div>
        </div>
        
        <Footer/>
        </>
  )
}

export default Seeallproduct