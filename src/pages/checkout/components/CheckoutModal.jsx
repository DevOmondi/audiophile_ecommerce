// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
// import BackToHomeBtn from "./BackToHomeBtn";
import orderConfirmIcon from "../../../../resources/assets/checkout/icon-order-confirmation.svg";
import productImg from "../../../../resources/assets/cart/image-xx99-mark-two-headphones.jpg";

const CheckoutModal = () => {
  const [open, setOpen] = useState(true);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="py-[2rem]">
          <img
            src={orderConfirmIcon}
            alt="confirmation icon"
            className="w-[3rem] h-[3rem]"
          />
          <h1 className="font-bold py-[1rem]">
            THANKYOU <br /> FOR YOUR ORDER
          </h1>
          <p className="text-[0.7rem] text-[#979797]">
            You will receive an email confirmation shortly.
          </p>
          <div className="rounded-lg mt-[1rem] md:flex md:items-center">
            <div className="bg-[#F1F1F1] p-[1rem] rounded-t-lg md:rounded-tr-none md:rounded-l-lg">
              <div className="flex justify-between items-center mb-[1rem]">
                <div className="flex gap-[1rem]">
                  <img
                    src={productImg}
                    alt="product image"
                    className="w-[3rem] h-[3rem] rounded-lg"
                  />
                  <div>
                    <h1 className="font-bold">XX99 MK II</h1>
                    <p className="text-[#979797] text-[0.8rem]">$ 2,999</p>
                  </div>
                </div>
                <p className="text-[0.6rem] text-[#979797]">x1</p>
              </div>
              <div className="h-[1px] bg-[#979797]"></div>
              <p className="text-center text-[0.6rem] pt-[0.5rem] text-[#979797]">
                and 2 other item(s)
              </p>
            </div>
            {/* Grand total section */}
            <div className="bg-[#000000] p-[1rem] rounded-b-lg md:rounded-r-lg md:rounded-bl-none md:py-[2.3rem] md:pr-[2rem]">
              <p className="text-[#979797] text-[0.7rem]">GRAND TOTAL</p>
              <p className="text-[#FFFFFF] text-[0.8rem] pt-[0.5rem]">
                $ 5,446
              </p>
            </div>
          </div>
        </div>
        {/* <BackToHomeBtn/> */}
        <Link to={"/"}>
          <div className="mx-auto">
            <button className="bg-[#D87D4A] text-[#FFFFFF] text-[0.8rem] py-[0.7rem] px-[0.8rem] hover:bg-[#FBAF85] w-[100%]">
              BACK TO HOME
            </button>
          </div>
        </Link>
      </Modal>
    </div>
  );
};

export default CheckoutModal;
