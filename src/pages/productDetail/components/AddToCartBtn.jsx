// import React from 'react'

const AddToCartBtn = ({ addToCartHandler }) => {
  return (
    <div>
      <button
        className="bg-[#D87D4A] text-[#FFFFFF] text-[0.6rem] py-[0.4rem] px-[0.8rem] hover:bg-[#FBAF85]"
        onClick={addToCartHandler}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCartBtn;
