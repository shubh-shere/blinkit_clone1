import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Categoryheader.css';

    const Categoryheader = () => {

    const [islistopen, setIsListOpen] = useState(false);

    const handleOpenlist = () => {
        setIsListOpen(!islistopen); 
    }

    return (
        <>
            <div className="category-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="category_list">
                            <ul>
                                <li><Link to="/">Vegetables & Fruits</Link></li>
                                <li><Link to="/">Dairy & Breakfast</Link></li>
                                <li><Link to="/">Munchies</Link></li>
                                <li><Link to="/">Cold Drinks & Juices</Link></li>
                                <li><Link to="/">Instant & Frozen Food</Link></li>
                                <li><Link to="/">Sweet Tooth</Link></li>
                                <li><Link to="/">Bakery & Biscuits</Link></li>
                                <li className="morelist" onClick={handleOpenlist}>
                                    <Link to="  ">More <i className="fa-solid fa-angle-down"></i></Link>
                                    {islistopen && (
                                        <ul className="dropdown_list">
                                            <li><Link to="/">Atta, Rice & Dal</Link></li>
                                            <li><Link to="/">Dry Fruits, Masala & Oil</Link></li>
                                            <li><Link to="/">Sauces & Spreads</Link></li>
                                            <li><Link to="/">Chicken, Meat & Fish</Link></li>
                                            <li><Link to="/">Paan Corner</Link></li>
                                            <li><Link to="/">Organic & Premium</Link></li>
                                            <li><Link to="/">Baby Care</Link></li>
                                            <li><Link to="/">Pharma & Wellness</Link></li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categoryheader;
