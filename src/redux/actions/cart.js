// export const setTotalPrice = (items) => ({
//   type: "SET_TOTAL_PRICE",
//   payload: items,
// });

// export const setTotalCount = (value) => ({
//   type: "SET_TOTAL_COUNT",
//   payload: value,
// });
export const addPizzaToCart = (pizzaObj) => ({
  type: "ADD_PIZZA_CART",
  payload: pizzaObj,
});
export const clearCart = () => ({
  type: "CLEAR_CART",
});
export const removeCartItem = (id) => ({
  type: "REMOVE_CART_ITEM",
  payload: id,
});
export const plusCartItem = (id) => ({
  type: "PLUS_CART_ITEM",
  payload: id,
});
export const minusCartItem = (id) => ({
  type: "MINUS_CART_ITEM",
  payload: id,
});
