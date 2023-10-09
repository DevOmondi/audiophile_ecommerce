// import React from 'react'
import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";
import CartPurchaseDetails from "./CartPurchaseDetails";
const CartModal = () => {
  // Retrieve cart array from local storage
  const retrievedCartArrayString = localStorage.getItem("cartArrayKey");
  // console.log(retrievedCartArrayString);
  const retrievedCartArray = JSON.parse(retrievedCartArrayString);
  // console.log(retrievedCartArray);
  // TODO: Func to remove items from cart
  // function removeAllItems() {
  //   localStorage.removeItem("cartArrayKey");
  // }
  // TODO: Func to calculate total amount
  const initVal = 0;
  const totalAmount = retrievedCartArray?.reduce(
    (accumulatorAmount, cartItem) => {
      return accumulatorAmount + cartItem.price * cartItem.orderQuantity;
    },
    initVal
  );
  const [open, setOpen] = useState(true);
  // const [isOpen, handleIsopenChange] = useModalStatus();

  // const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="font-manrope">
      {/* <button onClick={onOpenModal}>Open modal</button> */}
      <Modal open={open} onClose={onCloseModal} center>
        <div className="flex py-[1.5rem] gap-[8rem] items-center">
          <div>
            <h1 className="font-bold">{`CART (${retrievedCartArray.length})`}</h1>
          </div>
          <p
            className="underline text-[0.8rem] text-[#979797] hover:cursor-pointer"
            // onClick={removeAllItems}
          >
            Remove all
          </p>
        </div>
        {/* Product purchase details section */}
        <div>
          {retrievedCartArray?.map((retrievedCartArrayItem, index) =>
            retrievedCartArray.length > 0 ? (
              <CartPurchaseDetails
                key={index}
                cartPurchaseDetailsData={retrievedCartArrayItem}
              />
            ) : (
              "No items in your cart :("
            )
          )}
        </div>
        {/* Total amount section */}
        {retrievedCartArray.length > 0 && (
          <div className="flex justify-between items-center">
            <p className="text-[0.7rem] text-[#979797]">TOTAL</p>
            <p className="font-bold">{`$ ${totalAmount}`}</p>
          </div>
        )}
        {/* <CheckoutBtn/> */}
        {retrievedCartArray.length > 0 && (
          <Link to={"/checkout"} state={retrievedCartArray}>
            <div className="mx-auto">
              <button className="bg-[#D87D4A] text-[#FFFFFF] my-[1.5rem] text-[0.8rem] py-[0.7rem] px-[0.8rem] hover:bg-[#FBAF85] w-[100%]">
                CHECKOUT
              </button>
            </div>
          </Link>
        )}
      </Modal>
    </div>
  );
};

export default CartModal;
