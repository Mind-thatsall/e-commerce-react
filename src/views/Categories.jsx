import React from "react";
import categorie from "@/assets/images/men.jpg";

const Categories = () => {
  return (
    <div className="px-[4vw] pt-[10vh] flex flex-col justify-center items-center">
      <h2
        className="text-[8vw] leading-[8vw] text-[#796B66] mix-blend-difference ml-[1vw] self-start"
        style={{
          fontFamily: "ClashDisplay-SemiBold",
        }}
      >
        CATEGORIES
      </h2>
      <span className="w-[98%] block h-1 bg-[#796B66] mix-blend-difference"></span>
      <div className="hide-scroll grid grid-cols-4 gap-[1.3vw] overflow-auto h-[76vh] py-[3vh] w-fit mx-auto">
        <img src={categorie} alt="" width={300} height={450} />
        <img src={categorie} alt="" width={300} height={450} />
        <img src={categorie} alt="" width={300} height={450} />
        <img src={categorie} alt="" width={300} height={450} />
        <img src={categorie} alt="" width={300} height={450} />
        <img src={categorie} alt="" width={300} height={450} />
        <img src={categorie} alt="" width={300} height={450} />
        <img src={categorie} alt="" width={300} height={450} />
        <img src={categorie} alt="" width={300} height={450} />
        <img src={categorie} alt="" width={300} height={450} />
      </div>
    </div>
  );
};

export default Categories;
