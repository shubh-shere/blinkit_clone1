import React from "react";
import Header from '../Components/Header'
import Bannerslide from '../Components/Bannerslide';
import Catbanner from '../Components/Catbanner';
import Categories from '../Components/Categories';
import Groceryproduct from '../Components/Groceryproduct';
import Groceryproduct2 from '../Components/Groceryproduct2';
import Footer from '../Components/Footer';
// import Categoryheader from '../Components/Categoryheader';


const Index = () => {


    return(

        <>
        <Header/>
        {/* <Categoryheader/> */}
        <Bannerslide/>
        <Catbanner/>
        <Categories/>
        <Groceryproduct/>
        <Groceryproduct2/>
        <Footer/>
        
        </>

    );
};

export default Index