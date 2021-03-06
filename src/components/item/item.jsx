import React, { useState } from "react";
import Button from "../button";
//class-names
import classNames from "classnames";
//prop-types
import PropTypes, { number } from "prop-types";

const Item = ({
  id,
  imageUrl,
  name,
  price,
  sizes,
  types,
  onAddItem,
  addedCount,
}) => {
  const pizzaTypes = ["thin", "traditional"];
  const pizzaSizes = [26, 30, 40];

  const [activeSize, setActiveSize] = useState(sizes[0]);
  const [activeType, setActiveType] = useState(types[0]);

  const onSelectType = (index) => {
    setActiveType(index);
  };

  const onSelectSize = (size) => {
    setActiveSize(size);
  };

  const handleItemClick = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: activeSize,
      type: pizzaTypes[activeType],
    };
    onAddItem(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {pizzaTypes.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => onSelectType(index)}
                className={classNames({
                  active: activeType === index,
                  disabled: !types.includes(index),
                })}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <ul>
          {pizzaSizes.map((size, index) => {
            return (
              <li
                onClick={() => onSelectSize(size)}
                key={index}
                className={classNames({
                  active: activeSize === size,
                  disabled: !sizes.includes(size),
                })}
              >
                {size} cm.
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">From {price} $</div>
        <Button
          className="button--outline button--add"
          onClick={handleItemClick}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>ADD</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  sizes: PropTypes.arrayOf(number).isRequired,
  types: PropTypes.arrayOf(number).isRequired,
  onAddItem: PropTypes.func,
  addedCount: PropTypes.number,
};

export default Item;
