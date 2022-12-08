import React from "react";
import { Button } from "../BasicComponents/Button";

const SchedaProdotto = ({ item, handleClick }) => {
  const { title, price, img } = item;
  return (
    <div className="text-light cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>Price - {price}Rs</p>
        <Button buttonSize="BTN--medium" onClick={() => handleClick(item)}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default SchedaProdotto;