// import React from 'react'
import categoryData from "../../../../resources/data.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fbIcon from "../../../../resources/assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "../../../../resources/assets/shared/desktop/icon-twitter.svg";
import igIcon from "../../../../resources/assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
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
    <div className="bg-[#000000] text-[#FFFFFF] mt-[6rem] pb-[2rem]">
      <div className="h-[2px] bg-[#D87D4A] mt-0 w-[4rem] mx-auto md:ml-[5%] lg:ml-[10%]"></div>
      <div className="flex flex-col text-center md:text-left lg:flex-row lg:items-center lg:justify-between lg:w-[80%] lg:mx-auto md:ml-[5%]">
        <div>
          <p className="font-bold py-[1.5rem]">audiophile</p>
        </div>
        <div className="text-[0.6rem] md:flex pb-[2rem] md:gap-[2rem]">
          <Link to={"/"}>
            <p className="hover:text-[#D87D4A] hover:cursor-pointer pb-[0.8rem]">
              HOME
            </p>
          </Link>
          <Link to={"/categories"} state={headphonesDataArray}>
            <p className="hover:text-[#D87D4A] hover:cursor-pointer pb-[0.8rem]">
              HEADPHONES
            </p>
          </Link>
          <Link to={"/categories"} state={speakersDataArray}>
            <p className="hover:text-[#D87D4A] hover:cursor-pointer pb-[0.8rem]">
              SPEAKERS
            </p>
          </Link>
          <Link to={"/categories"} state={earphonesDataArray}>
            <p className="hover:text-[#D87D4A] hover:cursor-pointer pb-[0.8rem]">
              EARPHONES
            </p>
          </Link>
        </div>
      </div>
      <p className="text-[#979797] text-center text-[0.8rem] w-[90%] mx-auto py-[2rem] lg:w-[50%] lg:ml-[10%] md:text-left">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="flex flex-col gap-[2rem] md:flex-row lg:justify-between md:w-[90%] lg:w-[80%] md:mx-auto md:justify-between md:items-center">
        <div>
          <p className="text-[#979797] text-center text-[0.8rem]">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
        <div className="flex gap-2 mx-auto">
          <img
            src={fbIcon}
            alt="facebook icon"
            className="hover:fill-[#D87D4A] hover:cursor-pointer"
          />
          <img
            src={twitterIcon}
            alt="twitter icon"
            className="hover:text-[#D87D4A] hover:cursor-pointer"
          />
          <img
            src={igIcon}
            alt="instagram icon"
            className="hover:text-[#D87D4A] hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
