// import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Header from "../../home/components/Header";
import ProductDetailSection from "./ProductDetailSection";
import ProductDetailGallery from "./ProductDetailGallery";
import MayAlsoLikeCard from "./MayAlsoLikeCard";
import ProductCard from "../../home/components/HeadphonesProductCard";
import BestGearSection from "../../home/components/BestGearSection";
import Footer from "../../home/components/Footer";
import headPhoneCardImage from "../../../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerCardImage from "../../../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earPhoneCardImage from "../../../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";
const ProductDetailPage = () => {
  const { state } = useLocation();
  // console.log("product detail state:", state)
  return (
    <div className="font-manrope">
      <div className="bg-[#000000]">
        <Header />
      </div>
      <Link to={"/"}>
        <p className="w-[90%] lg:w-[80%] mx-auto text-[#979797] text-[0.8rem] py-[1rem] hover:text-[#D87D4A] hover:cursor-pointer">
          Go Back
        </p>
      </Link>
      <ProductDetailSection productDetailsData={state} />
      {/* Gallery section */}
      <ProductDetailGallery
        galleryImage1={state?.gallery.first.mobile}
        galleryImage2={state?.gallery.second.mobile}
        galleryImage3={state?.gallery.third.mobile}
      />
      {/* You may also like section */}
      <div className="mt-[4rem]">
        <h1 className="text-center">YOU MAY ALSO LIKE</h1>
        <div className="flex flex-col md:flex-row md:w-[90%] lg:w-[80%] md:mx-auto gap-[2rem] mt-[2rem]">
          {state?.others?.map((othersObject, index) => (
            <MayAlsoLikeCard
              key={index}
              mayAlsoLikeCardData={othersObject}
              productData={state}
            />
          ))}
        </div>
      </div>
      {/* Products section */}
      <div className="my-[3rem] flex flex-col md:flex-row md:w-[90%] md:mx-auto md:gap-3 lg:w-[80%]">
        <ProductCard cardImage={headPhoneCardImage} product="HEADPHONES" />
        <ProductCard cardImage={speakerCardImage} product="SPEAKERS" />
        <ProductCard cardImage={earPhoneCardImage} product="EARPHONES" />
      </div>
      {/* Best Gear scetion */}
      <BestGearSection />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
