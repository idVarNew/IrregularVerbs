import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import visibilityFilter from "./visibilityFilter";
import verbsList from "./verbsList";
import verbsDetails from "./verbsDetails";


const appReducers = combineReducers({
  verbsList,
  verbsDetails,
  visibilityFilter,
  routing: routerReducer
})

export default appReducers;