import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, leftName, rightName, productName, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="productSpecificContainer">
                <div>{leftName}</div>
                <div className='roundC'></div>
                <div>{rightName}</div>
            </div>
            <h1>{productName}</h1>
            <h2>£{price}</h2>
            <button>Read More</button>
        </div>
    );
};

export default Product;