// import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import productData from "../../../../resources/data.json";
import Header from "./Header";

const HeroSection = () => {
  const [productDataObject, setProductDataObject] = useState({});
  // TODO: Func to filter productData
  function filterProductData() {
    const filteredArray = productData.filter(
      (product) => product.slug === "xx99-mark-two-headphones"
    );
    filteredArray.map((filteredProduct) => {
      setProductDataObject(filteredProduct);
    });
  }
  // console.log("hero section data is:", productDataObject);
  // TODO: Execute on page load
  useEffect(() => {
    filterProductData();
  }, []);
  return (
    <div className="bg-hero-image-mobile md:bg-hero-image-tablet lg:bg-hero-image-desktop bg-center bg-contain h-[100vh]">
      <Header />
      <div className="h-[0.5px] bg-[#979797] mt-[1rem] lg:w-[80%] lg:mx-auto"></div>
      {/* Hero message */}
      <div className="text-center mt-[10rem] w-[60%] mx-auto lg:text-left lg:ml-[10%]">
        {productDataObject?.new && (
          <p className="text-[#979797] text-[0.6rem] tracking-[0.5rem] pb-[0.5rem] md:pb-[2rem]">
            NEW PRODUCT
          </p>
        )}
        <h1 className="text-[#FFFFFF] text-xl md:text-[2rem] font-bold pb-[1.5rem] tracking-[0.2rem] uppercase">
          {productDataObject?.name}
        </h1>
        <p className="text-[#979797] text-[0.8rem] pb-[1.5rem] lg:text-left lg:w-[40%]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link to={"/product-detail"} state={productDataObject}>
          <div>
            <button className="bg-[#D87D4A] text-[#FFFFFF] text-[0.6rem] py-[0.4rem] px-[0.8rem] hover:bg-[#FBAF85]">
              SEE PRODUCT
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
