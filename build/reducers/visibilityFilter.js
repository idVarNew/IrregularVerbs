
const visibilityFilter = (state = { filterType: "SHOW_ALL" }, action) => {
  switch (action.type) {
    case "BY_FEATURED":
      return { filterType: action.filter, filterAction: action };
    case "BY_COLOR":
      return { filterType: action.filter, filterAction: action };
    case "SEARCH":
      return { filterType: action.filter, filterAction: action };
    case "RANDOM_VERB":
      return { filterType: action.filter, filterAction: action };
    default:
      return state;
  }
};


export default visibilityFilter;
