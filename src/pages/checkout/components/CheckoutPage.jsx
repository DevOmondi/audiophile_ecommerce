// import React from 'react'
import { useContext } from "react";
import Header from "../../home/components/Header";
import SummaryProductDets from "./SummaryProductDets";
import Footer from "../../home/components/Footer";
import checkoutImg1 from "../../../../resources/assets/cart/image-xx99-mark-two-headphones.jpg";
import checkoutImg2 from "../../../../resources/assets/cart/image-xx59-headphones.jpg";
import checkoutImg3 from "../../../../resources/assets/cart/image-yx1-earphones.jpg";
import { appContext } from "../../../App";
const CheckoutPage = () => {
  const appContextObject = useContext(appContext);
  console.log("modal object is:", appContextObject);
  return (
    <div className="bg-[#FAFAFA] h-[100vh] overflow-auto">
      <div className="bg-[#000000]">
        <Header />
      </div>
      <p className="w-[90%] lg:w-[80%] mx-auto text-[#979797] text-[0.8rem] pt-[1rem] hover:text-[#D87D4A] hover:cursor-pointer">
        Go Back
      </p>
      <div className="w-[90%] lg:w-[80%] lg:flex lg:justify-between mx-auto lg:items-top">
        {/* Checkout Form section */}
        <div className="rounded-lg bg-[#FFFFFF] py-[1rem] my-[1rem] lg:w-[60%] px-[1.5rem]">
          <h1 className="font-bold text-lg pb-[1rem]">CHECKOUT</h1>
          {/* Billing details */}
          <p className="text-[0.6rem] py-[0.8rem] text-[#D87D4A]">
            BILLING DETAILS
          </p>
          {/* Billing form */}
          <div className="md:flex md:justify-between">
            <div className="md:w-[45%]">
              <p className="text-[0.6rem] font-bold">Name</p>
              <input
                type="text"
                className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem]  focus:border-[#D87D4A]"
                placeholder="Alexei Ward"
              />
              <p className="text-[0.6rem] font-bold">Email Address</p>
              <input
                type="email"
                className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                placeholder="alexei@mail.com"
              />
            </div>
            <div className="md:w-[45%]">
              <p className="text-[0.6rem] font-bold">Phone Number</p>
              <input
                type="number"
                className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                placeholder="+1 202-555-0136"
              />
            </div>
          </div>
          {/* Shipping info */}
          <p className="text-[0.6rem] text-[#D87D4A] py-[1rem]">
            SHIPPING INFO
          </p>
          {/* Shipping form */}
          <div>
            <p className="text-[0.6rem] font-bold">Your Address</p>
            <input
              type="text"
              className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
              placeholder="1137 Williams Avenue"
            />
            <div className="md:flex md:justify-between">
              <div className="md:w-[45%]">
                <p className="text-[0.6rem] font-bold">Zip Code</p>
                <input
                  type="number"
                  className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                  placeholder="10001"
                />
                <p className="text-[0.6rem] font-bold">City</p>
                <input
                  type="text"
                  className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                  placeholder="New York"
                />
              </div>
              <div className="w-[45%]">
                <p className="text-[0.6rem] font-bold">Country</p>
                <input
                  type="text"
                  className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                  placeholder="United States"
                />
              </div>
            </div>
          </div>
          {/* Payment details */}
          <p className="text-[0.6rem] text-[#D87D4A] py-[1rem]">
            PAYMENT DETAILS
          </p>
          {/* Payment Details form */}
          <div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="md:w-[45%]">
                <p className="text-[0.6rem] font-bold">Payment Method</p>
              </div>
              <div className="flex flex-col gap-[1rem] md:w-[45%]">
                <label
                  htmlFor="payment"
                  className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] focus:border-[#D87D4A]"
                >
                  {" "}
                  <input type="radio" name="payment" id="payment" />
                  e-Money
                </label>
                <label
                  htmlFor="payment"
                  className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                >
                  {" "}
                  <input type="radio" name="payment" id="payment" />
                  Cash on Delivery
                </label>
              </div>
            </div>
            <div className="md:flex md:justify-between">
              <div className="md:w-[45%]">
                <p className="text-[0.6rem] font-bold">e-Money Number</p>
                <input
                  type="number"
                  className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                  placeholder="238521993"
                />
              </div>
              <div className="md:w-[45%]">
                <p className="text-[0.6rem] font-bold">e-Money PIN</p>
                <input
                  type="number"
                  className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%]  border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                  placeholder="6891"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Summary section */}
        <div className="rounded-lg bg-[#FFFFFF] lg:w-[30%] lg:max-h-fit px-[1.5rem]">
          <h1 className="font-bold text-lg py-[1rem]">SUMMARY</h1>
          {/* selected products checkout dets */}
          <div>
            <SummaryProductDets
              productImg={checkoutImg1}
              product="XX99 MK II"
              productPrice={2999}
              quantity={1}
            />
            <SummaryProductDets
              productImg={checkoutImg2}
              product="XX59"
              productPrice={899}
              quantity={2}
            />{" "}
            <SummaryProductDets
              productImg={checkoutImg3}
              product="YX1"
              productPrice={599}
              quantity={1}
            />
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[0.7rem] text-[#979797]">TOTAL</p>
            <p className="font-bold">$ 5396</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[0.7rem] text-[#979797]">SHIPPING</p>
            <p className="font-bold">$ 50</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[0.7rem] text-[#979797]">VAT(INCLUDED)</p>
            <p className="font-bold">$ 1079</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[0.7rem] text-[#979797]">GRAND TOTAL</p>
            <p className="font-bold text-[#D87D4A]">$ 5446</p>
          </div>
          <div className="mx-auto">
            <button className="bg-[#D87D4A] text-[#FFFFFF] my-[1.5rem] text-[0.8rem] py-[0.7rem] px-[0.8rem] hover:bg-[#FBAF85] w-[100%]">
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
