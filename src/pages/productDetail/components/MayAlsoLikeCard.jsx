// import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import productData from "../../../../resources/data.json";

const MayAlsoLikeCard = ({ mayAlsoLikeCardData, productData }) => {
  // console.log("May also like product dets:",mayAlsoLikeCardData)
  // const [productDataObject, setProductDataObject] = useState({});
  // // TODO: Func to filter productData
  // function filterProductData() {
  //   const filteredArray = productData.filter(
  //     (product) => product.name === mayAlsoLikeCardData?.name
  //   );
  //   filteredArray.map((filteredProduct) => {
  //     setProductDataObject(filteredProduct);
  //   });
  // }
  // console.log("May also like product dets:", productDataObject);
  // useEffect(()=> {
  //   filterProductData();
  // },[])
  return (
    <div className="w-[90%] mx-auto text-center">
      {/* <img src={cardImg} alt={`${MayAlsoLikeCardData?.name} image`} className="rounded-lg"/> */}
      <h1 className="py-[1rem] font-bold text-lg uppercase">{mayAlsoLikeCardData?.name}</h1>
      <Link to={"/product-detail"} state={productData}>
          <div>
            <button className="bg-[#D87D4A] text-[#FFFFFF] text-[0.6rem] py-[0.4rem] px-[0.8rem] hover:bg-[#FBAF85]">
              SEE PRODUCT
            </button>
          </div>
        </Link>
      {/* <Button1Product/> */}
    </div>
  );
};

export default MayAlsoLikeCard;
