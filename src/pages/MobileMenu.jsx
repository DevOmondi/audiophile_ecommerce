// import React from 'react'
import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import HeadphonesProductCard from "./home/components/HeadphonesProductCard";
import SpeakersProductCard from "./home/components/SpeakersProductCard";
import EarphonesProductCard from "./home/components/EarphonesProductCard";
import headPhoneCardImage from "../../public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerCardImage from "../../public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earPhoneCardImage from "../../public/assets/shared/desktop/image-category-thumbnail-earphones.png";

const MobileMenu = () => {
  const [open, setOpen] = useState(true);

  // const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="font-manrope">
      <Modal open={open} onClose={onCloseModal}>
        <div className="my-[3rem] flex flex-col md:flex-row md:mx-auto md:gap-3 w-[17rem]">
          <HeadphonesProductCard
            cardImage={headPhoneCardImage}
            product="HEADPHONES"
          />
          <SpeakersProductCard
            cardImage={speakerCardImage}
            product="SPEAKERS"
          />
          <EarphonesProductCard
            cardImage={earPhoneCardImage}
            product="EARPHONES"
          />
        </div>
      </Modal>
    </div>
  );
};

export default MobileMenu;
