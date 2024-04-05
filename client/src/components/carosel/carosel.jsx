import "./pro.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./product.jsx";
import { productData, responsive } from "./data..js";

export default function Carousel() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    /> 
  ));

  return (
    <div className="App">
      <h1>React multi carousel</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
