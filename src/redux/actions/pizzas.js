import axios from "axios";
export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category === null ? "" : `category=${category}`
      }&_sort=${sortBy}&_order=asc`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

export const setLoaded = (value) => ({
  type: "SET_LOADED",
  payload: value,
});
