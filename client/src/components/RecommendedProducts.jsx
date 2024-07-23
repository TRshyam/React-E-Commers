import React, { useRef, useState, useEffect } from 'react';
import axios from "axios";

const RecommendedProductsBanner = (props) => {
  const scrollRef = useRef(null);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const { strategy, userId } = props; // Destructuring props correctly
  const [recommendation, setRecommendations] = useState([]);
  const [error, setError] = useState(null);
  const [cartData, setCartData] = useState([]);

  const strategyText = {
    liked: 'Products You Might Like',
    trending: 'Trending Products',
    path: 'Products Based on Your Path'
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsGrabbing(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isGrabbing) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scroll speed here
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsGrabbing(false);
  };

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        let response;
        if (strategy === "liked") {
          response = await axios.post('http://127.0.0.1:5000/api/recommendation/liked', { userId });
        } else if (strategy === "trending") {
          response = await axios.get('http://127.0.0.1:5000/api/recommendation/trending');
        } else if (strategy === "path") {
          response = await axios.post('http://127.0.0.1:5000/api/recommendation/path', { userId });
        }
        setRecommendations(response.data);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
        setError(error.message);
      }
    };

    if (strategy) {
      fetchRecommendations();
    }
  }, [strategy, userId]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const productsData = [];
      for (const productId of recommendation) {
        try {
          const response = await axios.post('http://127.0.0.1:5000/api/data/retrive_product', { ProductId: productId });
          productsData.push(response.data);
        } catch (error) {
          console.error(`Error fetching product details for ${productId}:`, error);
        }
      }
      console.log("Products Data:", productsData);
      setCartData(productsData);
    };

    if (recommendation.length > 0) {
      fetchProductDetails();
    }
  }, [recommendation]);

  if (cartData.length === 0) {
    return <></>;
  }

  return (
    <div className="bg-gray-100 w-full py-3">
      <div className="w-full">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="flex items-center justify-between px-4 py-4 sm:px-6">
            <h2 className="text-2xl font-bold leading-8 text-gray-900 italic underline">
              {strategyText[strategy] || 'Recommended Products'}
            </h2>
          </div>
          <div
            ref={scrollRef}
            className="overflow-x-auto cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ scrollBehavior: 'smooth', overscrollBehaviorX: 'none' }}
          >
            <div className="grid grid-flow-col auto-cols-max gap-4 px-4 py-4">
              {cartData.map((product) => (
                <div key={product._id} className="bg-white overflow-hidden shadow rounded-lg w-72" style={{ height: '400px' }}>
                  <img src={`http://127.0.0.1:5000/static/imgs/${product.details.images[0]}`} alt={product.product_name} className="h-48 object-cover mx-auto" />
                  <div className="px-4 py-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">{product.product_name}</h3>
                    <p className="mt-2 text-sm text-gray-600">{product.details.product_FullName}</p>
                    <p className="mt-2 text-lg font-semibold text-gray-900">Rs .{product.details.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProductsBanner;
