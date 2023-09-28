// import React from 'react'
import bestGearImg from "../../../../resources/assets/shared/desktop/image-best-gear.jpg";

const BestGearSection = () => {
  return (
    // <div>BestGearSection</div>
    <div className="mt-[6rem] text-center lg:w-[80%] lg:mx-auto lg:flex lg:items-center">
      <img
        src={bestGearImg}
        alt="Person with headphones on"
        className="w-[90%] h-auto rounded-lg mx-auto"
      />
      <div className="lg:text-right">
        <h1 className="font-bold my-[2rem] w-[90%] md:text-xl">
          BRINGING YOU THE <br /> <span className="text-[#D87D4A]">BEST</span>{" "}
          AUDIO GEAR
        </h1>
        <p className="w-[90%] mx-auto text-[0.8rem] text-[#979797] lg:w-[80%]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default BestGearSection;
