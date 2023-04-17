import React from "react";

const ArticleCart = ({ name, color, price }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="leading-[20px]">
        <p className="uppercase">{name}</p>
        <p className="uppercase">{color}</p>
        <p>M</p>
      </span>
      <p>2</p>
      <p>{price}$</p>
    </div>
  );
};

export default ArticleCart;
