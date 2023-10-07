// import React from 'react'

const CartPurchaseDetails = ({ cartPurchaseDetailsData }) => {
  return (
    <div className="flex justify-between items-center mb-[1rem]">
      <div className="flex gap-[1rem]">
        {/* <img
          src={productImg}
          alt={`${cartPurchaseDetailsData?.name} image`}
          className="w-[3rem] h-[3rem] rounded-lg"
        /> */}
        <div>
          <h1 className="font-bold">{cartPurchaseDetailsData?.name}</h1>
          <p className="text-[#979797] text-[0.8rem]">{`$ ${cartPurchaseDetailsData?.price}`}</p>
        </div>
      </div>
      <div>
        <button className="flex gap-[1rem] bg-[#F1F1F1] text-[0.6rem] py-[0.4rem] px-[0.8rem]">
          <span
            className="hover:text-[#D87D4A]"
            onClick={() => {
              if (cartPurchaseDetailsData?.orderQuantity >= 2) {
                cartPurchaseDetailsData?.orderQuantity - 1;
              }
            }}
          >
            -
          </span>
          {cartPurchaseDetailsData?.orderQuantity}
          <span
            className="hover:text-[#D87D4A]"
            onClick={() => {
              if (cartPurchaseDetailsData?.orderQuantity >= 1) {
                cartPurchaseDetailsData?.orderQuantity + 1;
              }
            }}
          >
            +
          </span>
        </button>
      </div>
    </div>
  );
};

export default CartPurchaseDetails;
