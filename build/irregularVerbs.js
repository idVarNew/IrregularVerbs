

import React from "react"
import { render } from "react-dom"
import "./styles/styles.scss";

import store, { history } from "./store";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute } from "react-router";

import reducers from "./reducers";
import App from "./containers/App";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Explore from "./components/pages/explore/Explore";
import Learn from "./components/pages/learn/Learn";
import Exam from "./components/pages/exam/Exam";
import Quiz from "./components/pages/quiz/Quiz";
import Single from "./components/pages/single/Single";
import Results from "./components/pages/Results";


const router = (
  <Provider store={store} >
    <Router history={history} >
      <Route path="/" component={App} >       
       <IndexRoute component={Home}> </IndexRoute>
        <Route path="/about" component={About}></Route>
        <Route path="/explore" component={Explore}></Route>
        <Route path="/learn" component={Learn}></Route>
        <Route path="/exam" component={Exam}></Route>
        <Route path="/quiz" component={Quiz}></Route>
        <Route path="/e-test/:option" component={Quiz}></Route>
        <Route path="/l-test/:option" component={Quiz}></Route>
         <Route path="/results" component={Results}></Route>
        <Route path="/:text" component={Single}></Route>     
      </Route> 
    </Router>
  </Provider>
);

render(router, document.getElementById("app"));

