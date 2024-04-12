import React from "react";
import './Category.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Category = () => {
    return(
        <div>
        <Navbar />
        <div  className="Catogory">
        <div className="Catogory-Filters">
            <h1>Filter</h1>
        </div>
        <div className="Catogory-Products" >
            <h1>Elemnets</h1>
        </div>
        </div>
        <Footer />
        </div>
    );
}

export default Category;  