// import React from 'react'
import { useState } from "react";
import { Modal } from "react-responsive-modal";

const AddedToCartModal = ({addedToCartModalIsopen, setAddedToCartModalIsopen}) => {
  const [open, setOpen] = useState(addedToCartModalIsopen);

  // const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setAddedToCartModalIsopen(!addedToCartModalIsopen);
  return (
    <div className="font-manrope">
      <Modal open={open} onClose={onCloseModal} center>
        <p className="mt-[2rem] text-[#979797]">Added to cart successfully :)</p>
      </Modal>
    </div>
  );
};

export default AddedToCartModal;
