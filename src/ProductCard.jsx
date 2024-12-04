import { useState } from 'react';

const ProductCard = (props) => {
  const bgColor = props.selected ? "bg-blue-300" : "";

  return <div
    onClick={props.onClickHandler}
    className={`p-4 border border-gray-700 flex
                flex-col items-center rounded-md
                ${bgColor}`}
  >
    <p className="font-bold text-lg">{props.name}</p>
    <p>{props.price} $</p>
  </div>
}

export default ProductCard;