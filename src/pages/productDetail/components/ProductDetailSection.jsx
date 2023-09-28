// import React from 'react'
import QuantityBtn from "./QuantityBtn";
import AddToCartBtn from "./AddToCartBtn";

const ProductDetailSection = ({ productDetailsData }) => {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto">
      {/* Card sub section */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-[6rem] lg:gap-[10rem]">
        <img
          src={productDetailsData?.image?.mobile}
          alt={`${productDetailsData?.name} image`}
          className="rounded-lg md:w-[35%] md:h-[25rem]"
        />
        <div>
          <div className=" mt-[2rem] text-left">
            {productDetailsData?.new && (
              <p className="text-[#D87D4A] text-[0.6rem] tracking-[0.5rem] pb-[0.5rem]">
                NEW PRODUCT
              </p>
            )}
            <h1 className="text-[#000000] text-xl  font-bold py-[1rem] tracking-[0.1rem] uppercase">
              {productDetailsData?.name}
            </h1>
            <p className="text-[#979797] text-[0.8rem] pb-[1.5rem]">
              {productDetailsData?.description}
            </p>
            <p className="font-bold pb-[1rem]">${productDetailsData?.price}</p>
            <div className="flex gap-[1rem] items-center">
              <QuantityBtn />
              <AddToCartBtn />
            </div>
          </div>
        </div>
      </div>
      {/* Features & In the box section */}
      <div className="mt-[3rem] flex flex-col lg:flex-row gap-[8rem]">
        <div className="lg:w-[40%]">
          <h1 className="text-lg pb-[1rem] font-bold">FEATURES</h1>
          <p className="text-[#979797] text-[0.8rem] ">
            {productDetailsData?.features}
          </p>
        </div>
        <div className="flex gap-[0.2rem] flex-col md:flex-row lg:flex-col lg:gap-[0.6rem] md:gap-[19rem]">
          <h1 className="text-lg pb-[1rem] font-bold">IN THE BOX</h1>
          <div>
            {productDetailsData?.includes?.map((includesOject, index) => (
              <div
                key={index}
                className="text-[0.8rem] text-[#979797] flex gap-[1rem]"
              >
                <span className="text-[#D87D4A]">
                  {includesOject?.quantity}x
                </span>
                <p>{includesOject?.item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSection;
