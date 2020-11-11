const initialState = {
  category: null,
  sortBy: "popularity",
};
const filtersReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
export default filtersReducers;
