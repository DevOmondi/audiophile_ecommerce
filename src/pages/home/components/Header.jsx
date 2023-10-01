// import React from 'react'
// import { useModalStatus } from "../../../useModalStatus";
import categoryData from "../../../../resources/data.json";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../../../../resources/assets/shared/tablet/icon-hamburger.svg";
import cartIcon from "../../../../resources/assets/shared/desktop/icon-cart.svg";
import { appModalsContext } from "../../../App";

const Header = () => {
  //HANDLE CART AND MOBILE MENU MODAL DISPLAY
  const appModalsContextObject = useContext(appModalsContext);
  // console.log("app modals context object is:", appModalsContextObject);
  // TODO: Func to handle cart modal state change
  function handleCartModalIsopenChange() {
    appModalsContextObject.setCartModalIsopen(
      !appModalsContextObject.cartModalIsopen
    );
  }
  // TODO: Func to handle mobile menu state change
  function handleMobileMenuIsopenChange() {
    appModalsContextObject.setMobileMenuIsopen(
      !appModalsContextObject.mobileMenuIsopen
    );
  }
  //GET DATA FOR LINK TO HEADPHONES SECTION
  const [headphonesDataArray, setHeadphonesDataArray] = useState([]);
  // TODO: Func to filter data from json file
  function filterHeadphonesCategoryData() {
    const filteredArray = categoryData.filter(
      (categoryDataObject) => categoryDataObject.category === "headphones"
    );
    setHeadphonesDataArray(filteredArray);
  }
  // console.log(headphonesDataArray);

  //GET DATA FOR LINK TO SPEAKERS SECTION
  const [speakersDataArray, setSpeakersDataArray] = useState([]);
  // TODO: Func to filter data from json file
  function filterSpeakersCategoryData() {
    const filteredArray = categoryData.filter(
      (categoryDataObject) => categoryDataObject.category === "speakers"
    );
    setSpeakersDataArray(filteredArray);
  }
  // console.log(speakersDataArray);

  //GET DATA FOR LINK TO EARPHONES SECTION
  const [earphonesDataArray, setEarphonesDataArray] = useState([]);
  // TODO: Func to filter data from json file
  function filterEarphonesCategoryData() {
    const filteredArray = categoryData.filter(
      (categoryDataObject) => categoryDataObject.category === "earphones"
    );
    setEarphonesDataArray(filteredArray);
  }
  // console.log(earphonesDataArray);

  // TODO: Execute at page load
  useEffect(() => {
    filterHeadphonesCategoryData();
    filterSpeakersCategoryData();
    filterEarphonesCategoryData();
  }, []);
  return (
    <div className="text-white flex justify-between items-center py-[1rem] px-[5%] lg:px-[10%]">
      <div className="flex items-center gap-[7rem]">
        <img src={menuIcon} alt="menu icon" className="lg:hidden" onClick={handleMobileMenuIsopenChange}/>
        <h1 className="font-bold">audiophile</h1>
      </div>
      <div className="lg:flex gap-[2rem] text-[0.6rem] hidden md:hidden">
        <Link to={"/"}>
          <p className="hover:text-[#D87D4A] hover:cursor-pointer">HOME</p>
        </Link>
        <Link to={"/categories"} state={headphonesDataArray}>
          <p className="hover:text-[#D87D4A] hover:cursor-pointer">
            HEADPHONES
          </p>
        </Link>
        <Link to={"/categories"} state={speakersDataArray}>
          <p className="hover:text-[#D87D4A] hover:cursor-pointer">SPEAKERS</p>
        </Link>
        <Link to={"/categories"} state={earphonesDataArray}>
          <p className="hover:text-[#D87D4A] hover:cursor-pointer">EARPHONES</p>
        </Link>
      </div>
      <img
        src={cartIcon}
        alt="cart icon"
        className="hover:cursor-pointer"
        onClick={handleCartModalIsopenChange}
      />
    </div>
  );
};

export default Header;
