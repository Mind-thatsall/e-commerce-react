import React from "react";
import product from "@/assets/images/men.jpg";

const Card = () => {
  return (
    <div style={{ fontFamily: "ClashDisplay-Medium" }} className="h-fit">
      <img src={product} alt="Black Hoodie" width={310} height={450} />
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <p className="text-[1.3vw]">Black Hoodie</p>
          <p
            className="leading-none"
            style={{ fontFamily: "ClashDisplay-SemiBold" }}
          >
            20.00$
          </p>
        </div>
        <p
          className="text-[6vw] leading-[4vw] hover:cursor-pointer"
          style={{ fontFamily: "ClashDisplay-Light" }}
        >
          +
        </p>
      </div>
    </div>
  );
};

export default Card;
