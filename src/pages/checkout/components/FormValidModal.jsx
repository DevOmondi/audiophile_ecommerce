// import React from 'react'
import { useState } from "react";
import { Modal } from "react-responsive-modal";

const FormValidModal = () => {
  const [open, setOpen] = useState(true);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="font-manrope">
      <Modal open={open} onClose={onCloseModal} center>
        <p className="mt-[2rem] text-[#979797]">
          Ooopsie!! please fill out all the details :(
        </p>
      </Modal>
    </div>
  );
};

export default FormValidModal;
