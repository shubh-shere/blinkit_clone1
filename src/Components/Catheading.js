import React from "react";
import Product from "./Product";

const Catheading = ({category}) => {


    return(
        <>
        <div className="right_page">
            <div className="heading-cat">
                <div className="cat-sorting">
                    <h3>
                        Buy Milk Online 
                    </h3>
                </div>
            </div>
            <div className="p-list">
                <div className="p-item">
                    <Product/>
                </div>
            </div>
        </div>
        </>
    );
};

export default Catheading