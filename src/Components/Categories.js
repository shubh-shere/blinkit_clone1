import React from 'react'
import { Link } from 'react-router-dom';
import "./Categories.css";

const Categories = () => {

const catlist = [
    {
        id: '1',
        imagesrc : "../Assets/Images/cat-1.JPG",
        title: "red",
    },
    {
        id: '2',
        imagesrc : "../Assets/Images/cat-2.png",
        title : "red"
    },
    {
        id: '3',
        imagesrc: "../Assets/Images/cat-3.png",
        title: "red"
    },
    {
        id: '4',
        imagesrc: "../Assets/Images/cat-4.png",
        title: "red"
    },
    {
        id: '5',
        imagesrc: "../Assets/Images/cat-5.png",
        title: "red"
    },
    {
        id: '6',
        imagesrc: "../Assets/Images/cat-6.png",
        title: "red"
    },
    {
        id: '7',
        imagesrc: "../Assets/Images/cat-7.png",
        title: "red"
    },
    {
        id: '8',
        imagesrc: "../Assets/Images/cat-8.png",
        title: "red"
    },
    {
        id: '9',
        imagesrc: "../Assets/Images/cat-9.png",
        title: "red"
    },
    {
        id: '10',
        imagesrc: "../Assets/Images/cat-10.png",
        title: "red"
    },
    {
        id: '11',
        imagesrc: "../Assets/Images/cat-11.png",
        title: "red"
    },
    {
        id: '12',
        imagesrc: "../Assets/Images/cat-12.PNG",
        title: "red"
    },
    {
        id: '13',
        imagesrc: "../Assets/Images/cat-13.PNG",
        title: "red"
    },
    {
        id: '14',
        imagesrc: "../Assets/Images/cat-14.PNG",
        title: "red"
    },
    {
        id: '15',
        imagesrc: "../Assets/Images/cat-15.PNG",
        title: "red"
    },
    {
        id: '16',
        imagesrc: "../Assets/Images/cat-16.png",
        title: "red"
    },
    {
        id: '17',
        imagesrc: "../Assets/Images/cat-17.png",
        title: "red"
    },
    {
        id: '18',
        imagesrc: "../Assets/Images/cat-18.png",
        title: "red"
    },
    {
        id: '19',
        imagesrc: "../Assets/Images/cat-19.png",
        title: "red"
    },
    {
        id: '20',
        imagesrc: "../Assets/Images/cat-20.png",
        title: "red"
    },

];
   return (
    <>
    <div className='categories'>
        <div className='container'>
            <div className='row'>

                <div className='cat-list'>
                    {
                        catlist.map((data) => ( 
                           
                              <div key={data.id} className='cat-item'> 
                                    <Link to="/Categorydetails" > <img src={data.imagesrc} alt={data.title}/> </Link>
                             </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Categories