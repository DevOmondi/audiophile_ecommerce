// import React from 'react'

const QuantityBtn = ({ quantity, setQuantity }) => {
  // console.log("quantity is:", quantity)
  return (
    <div>
      <button className="flex gap-[1rem] bg-[#F1F1F1] text-[0.6rem] py-[0.4rem] px-[0.8rem]">
        <span
          className="hover:text-[#D87D4A]"
          onClick={() => {
            if (quantity >= 2) {
              setQuantity(quantity - 1);
            }
          }}
        >
          -
        </span>
        {quantity}
        <span
          className="hover:text-[#D87D4A]"
          onClick={() => {
            if (quantity >= 1) {
              setQuantity(quantity + 1);
            }
          }}
        >
          +
        </span>
      </button>
    </div>
  );
};

export default QuantityBtn;
