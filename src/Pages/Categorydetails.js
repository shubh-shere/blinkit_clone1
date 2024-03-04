import React from "react";
import Header from '../Components/Header'
// import Bannerslide from '../Components/Bannerslide';
// import Catbanner from '../Components/Catbanner';
// import Categories from '../Components/Categories';
// import Groceryproduct from '../Components/Groceryproduct';
// import Groceryproduct2 from '../Components/Groceryproduct2';
import Footer from '../Components/Footer';
import Categoryheader from '../Components/Categoryheader';
import LeftsideCategory from "../Components/Leftside-category";
import '../Components/Categorypage.css';
import Catheading from "../Components/Catheading";
import Categorydiscription from "../Components/Categorydiscription";


const Categorydetails = () =>{

    return(
        <>
        <Header/>
        <Categoryheader/>
        
        <section className="cat_page">
            <div className="container">
                <div className="row">
                    <div className="cat-data">
                    <LeftsideCategory/>
                    <Catheading/>
                     </div>
                     <Categorydiscription/>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );


}

export default Categorydetails