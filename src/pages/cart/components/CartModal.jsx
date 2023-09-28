// import React from 'react'
import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import CartPurchaseDetails from "./CartPurchaseDetails";
import CheckoutBtn from "./CheckoutBtn";
import cartImg1 from "../../../../resources/assets/cart/image-xx99-mark-two-headphones.jpg";
import cartImg2 from "../../../../resources/assets/cart/image-xx59-headphones.jpg";
import cartImg3 from "../../../../resources/assets/cart/image-yx1-earphones.jpg";

const CartModal = () => {
  const [open, setOpen] = useState(true);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="font-manrope">
      {/* <button onClick={onOpenModal}>Open modal</button> */}
      <Modal open={open} onClose={onCloseModal} center>
        <div className="flex py-[1.5rem] gap-[8rem] items-center">
          <div>
            <h1 className="font-bold">CART (3)</h1>
          </div>
          <p className="underline text-[0.8rem] text-[#979797] hover:cursor-pointer">
            Remove all
          </p>
        </div>
        {/* Product purchase details section */}
        <div>
          <CartPurchaseDetails
            productImg={cartImg1}
            product="XX99 MK II"
            productPrice="2999"
          />
          <CartPurchaseDetails
            productImg={cartImg2}
            product="XX59"
            productPrice="899"
          />
          <CartPurchaseDetails
            productImg={cartImg3}
            product="YX1"
            productPrice="599"
          />
        </div>
        {/* Total amount section */}
        <div className="flex justify-between items-center">
          <p className="text-[0.7rem] text-[#979797]">TOTAL</p>
          <p className="font-bold">$ 5396</p>
        </div>
        <CheckoutBtn/>
      </Modal>
    </div>
  );
};

export default CartModal;
