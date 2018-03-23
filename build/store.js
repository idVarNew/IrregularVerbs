import { createStore } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import reducers from "./reducers/index";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";
import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'


const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState
);

store.subscribe(throttle(() => {
  saveState({
    verbsList: store.getState().verbsList
  })
}, 1000));

const browserHistory = useRouterHistory(createHistory)({
  basename: '/verbs'
  });
  
  
export const history = syncHistoryWithStore(
  browserHistory,
  store
);

export default store;
