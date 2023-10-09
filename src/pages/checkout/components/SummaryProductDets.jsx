// import React from 'react'

const SummaryProductDets = ({ summaryProdDetsData }) => {
  return (
    <div className="flex justify-between items-center mb-[1rem]">
      <div className="flex gap-[1rem]">
        <img
          src={summaryProdDetsData?.image.mobile}
          alt={`${summaryProdDetsData?.name} image`}
          className="w-[3rem] h-[3rem] rounded-lg"
        />
        <div>
          <h1 className="font-bold">{summaryProdDetsData?.name}</h1>
          <p className="text-[#979797] text-[0.8rem]">{`$ ${summaryProdDetsData?.price}`}</p>
        </div>
      </div>
      <p className="text-[0.6rem] text-[#979797]">
        x{summaryProdDetsData?.orderQuantity}
      </p>
    </div>
  );
};

export default SummaryProductDets;
