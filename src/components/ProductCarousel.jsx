import React from 'react';
import './ProductCarousel.css'; // Style sheet for ProductCarousel

const ProductCarousel = ({ products }) => {
  return (
    <div className="product-carousel">
      <div className="product-carousel-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span>${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
