import React from 'react';

const ProductCard = ({ image, title, price, discount, href }) => {
  return (
    <div className="product-card">
      <div className="aspect-w-4 aspect-h-3 sm:aspect-w-3 sm:aspect-h-2 md:aspect-w-4 md:aspect-h-3 lg:aspect-w-3 lg:aspect-h-2">
        <img src={image} alt={title} />
      </div>
      <div className="product-card-content">
        <h5 className="product-card-title">{title}</h5>
        <p className="product-card-price">{price}</p>
        <div className="product-card-discount">
          <span>{discount}% off</span>
          <span className="line-through">{price}</span>
        </div>
        <a href={href} className="product-card-button">Shop Now →</a>
      </div>
    </div>
  );
};

export default ProductCard;
