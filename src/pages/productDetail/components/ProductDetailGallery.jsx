// import React from 'react'

const ProductDetailGallery = ({
  galleryImage1,
  galleryImage2,
  galleryImage3,
}) => {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col gap-[2rem] md:flex-row mt-[4rem]">
      <div>
        <img
          src={galleryImage1}
          alt="gallery image"
          className="rounded-lg mb-[1.5rem]"
        />
        <img src={galleryImage2} alt="gallery image" className="rounded-lg" />
      </div>
      <div>
        <img src={galleryImage3} alt="gallery image" className="rounded-lg" />
      </div>
    </div>
  );
};

export default ProductDetailGallery;
