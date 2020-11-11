import React, { useState, useEffect } from "react";
import Categories from "../components/categories";
import Item from "../components/item";
import SortPopup from "../components/sort-popup";

//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchPizzas } from "../redux/actions/pizzas";
import { setCategory, setSortBy } from "../redux/actions/filters";

import LoadingBlock from "../components/loading-block";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  //take data from redux (mapStateToProps)
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  const { category, sortBy } = useSelector(({ filters }) => filters);
  const categories = ["Meat", "Vegan", "Grill", "Hot", "Closed"];
  const sortItems = [
    { name: "Popularity", type: "popularity" },
    { name: "Price", type: "price" },
    { name: "Alphabet", type: "name" },
  ];

  const dispatch = useDispatch();
  //take data from db
  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy, dispatch]);

  const onClickCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
      setActiveCategory(categories[index]);
    },
    [dispatch]
  );

  const onSelectType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            activeCategory={category}
            onClickItem={onClickCategory}
            categories={categories}
          />

          <SortPopup
            activeSortType={sortBy}
            onClickItem={onSelectType}
            items={sortItems}
          />
        </div>
        <h2 className="content__title">
          {activeCategory == null ? "All" : activeCategory} pizzas
        </h2>
        <div className="content__items">
          {isLoaded ? (
            <RenderItems items={items} />
          ) : (
            <RenderLoadingBlock n={12} />
          )}
        </div>
      </div>
    </div>
  );
};

//Loading items block
const RenderLoadingBlock = ({ n }) => {
  const arr = new Array(n);
  return arr.fill(0).map((_, index) => {
    return <LoadingBlock key={index} />;
  });
};

//Create new Items
const RenderItems = ({ items }) => {
  return (
    items &&
    items.map((item) => {
      return <Item key={item.id} {...item} />;
    })
  );
};

export default Home;
