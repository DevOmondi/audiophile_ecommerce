// import React from 'react'
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../home/components/Header";
import SummaryProductDets from "./SummaryProductDets";
import Footer from "../../home/components/Footer";
import FormValidModal from "./FormValidModal";
import CheckoutModal from "./CheckoutModal";
import codIcon from "../../../../public/assets/checkout/icon-cash-on-delivery.svg";

const CheckoutPage = () => {
  const { state } = useLocation();
  // console.log("cart array is:", state);
  const [checkoutModalIsopen, setCheckoutModalIsopen] = useState(false);
  const [formValidModalIsopen, setFormValidModalIsopen] = useState(false);
  // TODO: Func to handle checkout modal Isopen state change
  function handleCheckoutAndPay() {
    if (
      !name ||
      !email ||
      !phoneNumber ||
      !address ||
      !zipCode ||
      !city ||
      !country ||
      !paymentMethod ||
      !emoneyNo ||
      !emoneyPIN
    ) {
      setFormValidModalIsopen(!formValidModalIsopen);
    } else {
      setCheckoutModalIsopen(!checkoutModalIsopen);
    }
  }
  // HANDLE FORM ENTRIES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [emoneyNo, setEmoneyNo] = useState("");
  const [emoneyPIN, setEmoneyPIN] = useState("");

  // SECTION: CALCULATE THE AMOUNTS
  // Calculate total amount
  const initAmount = 0;
  const totalAmount = state?.reduce((accumulatorAmount, cartItem) => {
    return accumulatorAmount + cartItem.price * cartItem.orderQuantity;
  }, initAmount);
  // console.log("total amount is:", totalAmount)
  // calculate grand amount
  const shippingAmount = 50;
  const VATAmount = Math.floor((20 / 100) * totalAmount);
  const grandAmount = totalAmount + shippingAmount + VATAmount;
  // console.log("grand amount is:", grandAmount);
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="text-[0.6rem] font-bold">Email Address</p>
              <input
                type="email"
                className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                placeholder="alexei@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="md:w-[45%]">
              <p className="text-[0.6rem] font-bold">Phone Number</p>
              <input
                type="number"
                className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                placeholder="+1 202-555-0136"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="md:flex md:justify-between">
              <div className="md:w-[45%]">
                <p className="text-[0.6rem] font-bold">Zip Code</p>
                <input
                  type="number"
                  className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                  placeholder="10001"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
                <p className="text-[0.6rem] font-bold">City</p>
                <input
                  type="text"
                  className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                  placeholder="New York"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="w-[45%]">
                <p className="text-[0.6rem] font-bold">Country</p>
                <input
                  type="text"
                  className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                  placeholder="United States"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
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
                  <input
                    type="radio"
                    name="payment"
                    id="payment"
                    value="e-Money"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="accent-[#D87D4A]"
                  />
                  e-Money
                </label>
                <label
                  htmlFor="payment"
                  className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                >
                  {" "}
                  <input
                    type="radio"
                    name="payment"
                    id="payment"
                    value="cashOnDelivery"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="accent-[#D87D4A]"
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>
            {/* COD INFO */}
            {paymentMethod === "cashOnDelivery" && (
              <div className="hidden md:flex md:my-[1rem] md:flex-row md:items-center md:gap-[1.5rem]">
                <img
                  src={codIcon}
                  alt="cash on delivery icon"
                  className="w-[2rem] h-[2rem]"
                />
                <div>
                  <p className="text-[0.9rem] text-[#979797]">
                    The ‘Cash on Delivery’ option enables you to pay in cash
                    when our delivery courier arrives at your residence. Just
                    make sure your address is correct so that your order will
                    not be cancelled.
                  </p>
                </div>
              </div>
            )}
            <div className="md:flex md:justify-between">
              <div className="md:w-[45%]">
                <p className="text-[0.6rem] font-bold">e-Money Number</p>
                <input
                  type="number"
                  className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%] border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                  placeholder="238521993"
                  value={emoneyNo}
                  onChange={(e) => setEmoneyNo(e.target.value)}
                />
              </div>
              <div className="md:w-[45%]">
                <p className="text-[0.6rem] font-bold">e-Money PIN</p>
                <input
                  type="number"
                  className="rounded p-[0.6rem] focus:outline-none text-[0.6rem] w-[100%]  border-solid border-[1px] border-[#CFCFCF] mt-[0.5rem] mb-[1rem] focus:border-[#D87D4A]"
                  placeholder="6891"
                  value={emoneyPIN}
                  onChange={(e) => setEmoneyPIN(e.target.value)}
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
            {state?.map((cartArrayItem, index) => (
              <SummaryProductDets
                key={index}
                summaryProdDetsData={cartArrayItem}
              />
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[0.7rem] text-[#979797]">TOTAL</p>
            <p className="font-bold">{`$ ${totalAmount}`}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[0.7rem] text-[#979797]">SHIPPING</p>
            <p className="font-bold">{`$ ${shippingAmount}`}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[0.7rem] text-[#979797]">VAT(INCLUDED)</p>
            <p className="font-bold">{`$ ${VATAmount}`}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[0.7rem] text-[#979797]">GRAND TOTAL</p>
            <p className="font-bold text-[#D87D4A]">{`$ ${grandAmount}`}</p>
          </div>
          <div className="mx-auto">
            <button
              className="bg-[#D87D4A] text-[#FFFFFF] my-[1.5rem] text-[0.8rem] py-[0.7rem] px-[0.8rem] hover:bg-[#FBAF85] w-[100%]"
              onClick={handleCheckoutAndPay}
            >
              CONTINUE & PAY
            </button>
          </div>
        </div>
      </div>
      <Footer />
      {checkoutModalIsopen && (
        <CheckoutModal grandAmount={grandAmount} cartArrayData={state} />
      )}
      {formValidModalIsopen && <FormValidModal />}
    </div>
  );
};

export default CheckoutPage;
