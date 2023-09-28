// import React from 'react'
import Header from "./home/components/Header";
import { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ProductCard from "./home/components/HeadphonesProductCard";
import headPhoneCardImage from "../../resources/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerCardImage from "../../resources/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earPhoneCardImage from "../../resources/assets/shared/desktop/image-category-thumbnail-earphones.png";

const MobileMenu = () => {
  const [open, setOpen] = useState(true);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="font-manrope">
      <Modal open={open} onClose={onCloseModal}>
        <div className="my-[3rem] flex flex-col md:flex-row md:mx-auto md:gap-3 w-[100%]">
          <ProductCard cardImage={headPhoneCardImage} product="HEADPHONES" />
          <ProductCard cardImage={speakerCardImage} product="SPEAKERS" />
          <ProductCard cardImage={earPhoneCardImage} product="EARPHONES" />
        </div>
      </Modal>
    </div>
  );
};

export default MobileMenu;
