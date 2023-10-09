// import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mayAlsoLikeProductData from "../../../../resources/data.json";

const MayAlsoLikeCard = ({ mayAlsoLikeCardData }) => {
  // console.log("May also like product dets:", mayAlsoLikeCardData);
  // console.log("App array is:",mayAlsoLikeProductData);
  const imageURL = mayAlsoLikeCardData?.image.mobile;
  const [productDataObject, setProductDataObject] = useState({});
  // TODO: Func to filter productData
  function filterProductData() {
    const filteredArray = mayAlsoLikeProductData?.filter((product) => {
      product.slug === mayAlsoLikeCardData.slug;
    });
    filteredArray?.map((filteredProduct) => {
      setProductDataObject(filteredProduct);
    });
    // console.log("May also like product array:", filteredArray);
  }
  // console.log("May also like product dets:", productDataObject);
  // useEffect(()=> {
  //   filterProductData();
  // },[])
  return (
    <div className="w-[90%] mx-auto text-center">
      <img
        src={imageURL}
        alt={`${mayAlsoLikeCardData?.name} image`}
        className="rounded-lg"
      />
      <h1 className="py-[1rem] font-bold text-lg uppercase">
        {mayAlsoLikeCardData?.name}
      </h1>
      <Link to={"/product-detail"} state={productDataObject}>
        <div>
          <button
            className="bg-[#D87D4A] text-[#FFFFFF] text-[0.6rem] py-[0.4rem] px-[0.8rem] hover:bg-[#FBAF85]"
            onClick={filterProductData}
          >
            SEE PRODUCT
          </button>
        </div>
      </Link>
      {/* <Button1Product/> */}
    </div>
  );
};

export default MayAlsoLikeCard;
