import React, { useState } from "react";
import { Link } from "react-router-dom";
import Leftcategory from "../Components/Leftcategory.json";

const LeftsideCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <>
            <div className="leftside_nav">
                <div className="l_navlist">
                    <ul>
                        {Leftcategory.Product.map(Product => (
                            <li className={selectedCategory === Product.title ? "active" : ""} key={Product.title}>
                                <Link to="" category={Product.title} onClick={() => setSelectedCategory(Product.title)}>
                                    <div className="l-cat-img">
                                        <img src={Product.image} alt="cat" />
                                    </div>
                                    <p>{Product.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default LeftsideCategory;
