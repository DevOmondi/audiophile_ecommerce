// import React from 'react'
import { useLocation } from "react-router-dom";
import CategoryHeader from "./CategoryHeader";
import CategoryProductCard from "./CategoryProductCard";
import HeadphonesProductCard from "../../home/components/HeadphonesProductCard";
import SpeakersProductCard from "../../home/components/SpeakersProductCard";
import EarphonesProductCard from "../../home/components/EarphonesProductCard";
import BestGearSection from "../../home/components/BestGearSection";
import Footer from "../../home/components/Footer";
import headPhoneCardImage from "../../../../resources/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerCardImage from "../../../../resources/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earPhoneCardImage from "../../../../resources/assets/shared/desktop/image-category-thumbnail-earphones.png";
// import { headerModalsContext } from "../../../App";

const CategoryPage = () => {

  const { state } = useLocation();
  // console.log("state data is:", state);
  return (
    <div className="font-manrope">
      <CategoryHeader header={state[0]?.category} />
      <div>
        {state?.map((stateObject, index) => (
          <CategoryProductCard key={index} categoryCardData={stateObject} />
        ))}
      </div>
      <div className="my-[3rem] flex flex-col md:flex-row md:w-[90%] md:mx-auto md:gap-3 lg:w-[80%]">
        <HeadphonesProductCard cardImage={headPhoneCardImage} product="HEADPHONES" />
        <SpeakersProductCard cardImage={speakerCardImage} product="SPEAKERS" />
        <EarphonesProductCard cardImage={earPhoneCardImage} product="EARPHONES" />
      </div>
      <BestGearSection />
      <Footer />
    </div>
  );
};

export default CategoryPage;
