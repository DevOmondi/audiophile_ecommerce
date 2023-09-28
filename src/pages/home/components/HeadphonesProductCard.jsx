// import React from 'react'
import categoryData from "../../../../resources/data.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrowRight from "../../../../resources/assets/shared/desktop/icon-arrow-right.svg";
const HeadphonesProductCard = ({ cardImage, product }) => {
  const [headphonesDataArray, setHeadphonesDataArray] = useState([]);
  // TODO: Func to filter data from json file
  function filterCategoryData() {
    const filteredArray = categoryData.filter(
      (categoryDataObject) => categoryDataObject.category === "headphones"
    );
    setHeadphonesDataArray(filteredArray);
  }
  // console.log(headphonesDataArray);

  // TODO: Execute at page load
  useEffect(()=>{
    filterCategoryData();
  },[])

  return (
    <div className="text-center mx-auto bg-[#F1F1F1] rounded-lg w-[90%] mt-[4rem] pb-[1rem] ">
      <img
        src={cardImage}
        alt={`${product} image`}
        className="h-[5rem] w-[5rem] mx-auto relative -top-9"
      />
      <p className="mb-[0.5rem]">{product}</p>
      <div>
        <Link to={"/categories"} state={headphonesDataArray}>
          <button className="flex items-center gap-2 text-[#979797] text-xs mx-auto hover:text-[#D87D4A]">
            SHOP{" "}
            <span>
              <img src={arrowRight} alt="arrow icon" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeadphonesProductCard;
