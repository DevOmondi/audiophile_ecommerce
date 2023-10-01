// import React from 'react'
import { Link } from "react-router-dom";
const CategoryProductCard = ({ categoryCardData }) => {
  // console.log("category card data is", categoryCardData);
  const categoryCardImage = categoryCardData?.categoryImage?.mobile;
  return (
    <div className="w-[90%] mx-auto mt-[3rem] mb-[5rem] lg:flex lg:items-center lg:w-[80%] lg:gap-[12rem]">
      <img
        src={categoryCardImage}
        alt={`${categoryCardData?.name} image`}
        className="rounded-lg lg:w-[35%] lg:h-[35%]"
      />
      <div className="text-center mt-[2rem] lg:text-left">
        {categoryCardData?.new && (
          <p className="text-[#D87D4A] text-[0.6rem] tracking-[0.5rem] pb-[0.5rem]">
            NEW PRODUCT
          </p>
        )}
        <h1 className="text-[#000000] text-xl  font-bold py-[1rem] tracking-[0.1rem] uppercase">
          {categoryCardData?.name}
        </h1>
        <p className="text-[#979797] text-[0.8rem] pb-[1.5rem] md:w-[70%] md:mx-auto lg:mx-0">
          {categoryCardData?.description}
        </p>
        <Link to={"/product-detail"} state={categoryCardData}>
          <div>
            <button className="bg-[#D87D4A] text-[#FFFFFF] text-[0.6rem] py-[0.4rem] px-[0.8rem] hover:bg-[#FBAF85]">
              SEE PRODUCT
            </button>
          </div>
        </Link>
        {/* <Button1Product /> */}
      </div>
    </div>
  );
};

export default CategoryProductCard;
