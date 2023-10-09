// import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import productData from "../../../../resources/data.json";
import speakerProductImage from "../../../../public/assets/home/desktop/image-speaker-zx9.png";
import earphonesProductImage from "../../../../public/assets/product-yx1-earphones/desktop/image-gallery-2.jpg";

const SeeProductSection = () => {
  // ZX9 DATA
  const [zx9DataObject, setZx9DataObject] = useState({});
  // TODO: Func to filter productData
  function filterZx9Data() {
    const filteredArray = productData.filter(
      (product) => product.slug === "zx9-speaker"
    );
    filteredArray.map((filteredProduct) => {
      setZx9DataObject(filteredProduct);
    });
  }
  // console.log("ZX9 SPEAKER data is:", zx9DataObject);
  // ZX7 DATA
  const [zx7DataObject, setZx7DataObject] = useState({});
  // TODO: Func to filter productData
  function filterZx7Data() {
    const filteredArray = productData.filter(
      (product) => product.slug === "zx7-speaker"
    );
    filteredArray.map((filteredProduct) => {
      setZx7DataObject(filteredProduct);
    });
  }
  // console.log("ZX7 SPEAKER data is:", zx7DataObject);
  // YX1 DATA
  const [yx1DataObject, setYx1DataObject] = useState({});
  // TODO: Func to filter productData
  function filterYx1Data() {
    const filteredArray = productData.filter(
      (product) => product.slug === "yx1-earphones"
    );
    filteredArray.map((filteredProduct) => {
      setYx1DataObject(filteredProduct);
    });
  }
  // console.log("YX1 SPEAKER data is:", yx1DataObject);
  // TODO: Execute on page load
  useEffect(() => {
    filterZx9Data();
    filterZx7Data();
    filterYx1Data();
  }, []);
  return (
    <div>
      {/* First product */}
      <div className="bg-[#D87D4A] bg-circlesPattern bg-cover bg-center py-[3rem] text-[#FFFFFF] lg:items-top text-center w-[90%] lg:w-[80%] lg:gap-[2rem] flex flex-col lg:flex-row mx-auto rounded-lg">
        <img
          src={speakerProductImage}
          alt={`${zx9DataObject?.name} image`}
          className="h-[10rem] w-[10rem] mx-auto lg:h-[30rem] lg:w-[30rem] lg:relative lg:-bottom-21"
        />
        <div className="lg:text-left">
          <h1 className="text-xl tracking-[0.2rem] pb-[1rem] pt-[2rem] lg:text-[2rem] uppercase">
            {zx9DataObject?.name}
          </h1>
          <p className="text-[0.7rem] pb-[1.5rem] lg:w-[50%] lg:text-[0.8rem]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to={"/product-detail"} state={zx9DataObject}>
            <div>
              <button className="bg-[#000000] text-[#FFFFFF] text-[0.6rem] py-[0.4rem] px-[0.8rem] hover:bg-[#979797]">
                SEE PRODUCT
              </button>
            </div>
          </Link>
        </div>
      </div>
      {/* Second product */}
      <div className="bg-product2-bg h-[10rem] bg-cover bg-center lg:w-[80%]  text-[#000000] bg-center w-[90%] mx-auto rounded-lg mt-[2rem]">
        <div className="text-left ml-[1rem] lg:ml-[3rem]">
          <h1 className="text-lg font-bold py-[1rem] uppercase">
            {zx7DataObject?.name}
          </h1>
          <Link to={"/product-detail"} state={zx7DataObject}>
            <div>
              <button className="text-[0.6rem] border-solid border-[2px] border-[#000000] py-[0.4rem] px-[0.8rem] hover:bg-[#000000] hover:text-[#FFFFFF]">
                SEE PRODUCT
              </button>
            </div>
          </Link>
        </div>
      </div>
      {/* Third product */}
      <div className="flex flex-col md:flex-row md:w-[90%] lg:w-[80%] md:mx-auto md:gap-[1rem] lg:gap-[0.1rem]">
        <div className="rounded-lg mt-[2rem] w-[90%] h-auto mx-auto">
          <img
            src={earphonesProductImage}
            alt={`${yx1DataObject?.name} image`}
            className="rounded-lg"
          />
        </div>
        <div className="bg-[#F1F1F1] w-[90%] rounded-lg mx-auto mt-[2rem] py-[2rem] md:py-[3rem] lg:py-[6rem] pl-[1rem] lg:pl-[7rem]">
          <h1 className="pb-[1.5rem] font-bold lg:text-[2rem] uppercase">
            {yx1DataObject?.name}
          </h1>
          <Link to={"/product-detail"} state={yx1DataObject}>
            <div>
              <button className="text-[0.6rem] border-solid border-[2px] border-[#000000] py-[0.4rem] px-[0.8rem] hover:bg-[#000000] hover:text-[#FFFFFF]">
                SEE PRODUCT
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeeProductSection;
