// import React from 'react
import headPhoneCardImage from "../../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerCardImage from "../../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earPhoneCardImage from "../../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
import HeroSection from "./HeroSection";
import HeadphonesProductCard from "./HeadphonesProductCard";
import SpeakersProductCard from "./SpeakersProductCard";
import EarphonesProductCard from "./EarphonesProductCard";
import SeeProductSection from "./SeeProductSection";
import BestGearSection from "./BestGearSection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="font-manrope">
      <HeroSection />
      <div className="my-[3rem] flex flex-col md:flex-row md:w-[90%] md:mx-auto md:gap-3 lg:w-[80%]">
        <HeadphonesProductCard
          cardImage={headPhoneCardImage}
          product="HEADPHONES"
        />
        <SpeakersProductCard cardImage={speakerCardImage} product="SPEAKERS" />
        <EarphonesProductCard
          cardImage={earPhoneCardImage}
          product="EARPHONES"
        />
      </div>
      <SeeProductSection />
      <BestGearSection />
      <Footer />
    </div>
  );
};

export default HomePage;
