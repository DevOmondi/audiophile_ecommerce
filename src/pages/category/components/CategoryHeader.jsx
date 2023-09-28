// import React from 'react
import Header from "../../home/components/Header";
// import itemsData from "../../../../resources/data.json";
const CategoryHeader = ({header}) => {
  // console.log("item data:", itemsData)
  return (
    <div className="bg-[#000000] text-white">
      <Header />
      <h1 className="text-center pt-[2rem] pb-[1rem] uppercase">{header}</h1>
    </div>
  );
};

export default CategoryHeader;
