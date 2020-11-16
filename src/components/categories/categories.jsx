import React from "react";
import nextId from "react-id-generator";
import PropTypes from "prop-types";

const Categories = React.memo(({ activeCategory, categories, onClickItem }) => {
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onClickItem(null)}
          className={activeCategory === null ? "active" : ""}
        >
          All
        </li>
        {categories &&
          categories.map((item, index) => {
            return (
              <li
                className={activeCategory === index ? "active" : ""}
                key={nextId()}
                onClick={() => onClickItem(index)}
              >
                {item}
              </li>
            );
          })}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickItem: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, categories: [] };

export default Categories;
