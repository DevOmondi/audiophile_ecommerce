// import React from 'react'

const SummaryProductDets = ({ productImg, product, productPrice, quantity }) => {
  return (
    <div className="flex justify-between items-center mb-[1rem]">
      <div className="flex gap-[1rem]">
        <img
          src={productImg}
          alt={`${product} image`}
          className="w-[3rem] h-[3rem] rounded-lg"
        />
        <div>
          <h1 className="font-bold">{product}</h1>
          <p className="text-[#979797] text-[0.8rem]">{`$ ${productPrice}`}</p>
        </div>
      </div>
      <p className="text-[0.6rem] text-[#979797]">x{quantity}</p>
    </div>
  );
};

export default SummaryProductDets;
