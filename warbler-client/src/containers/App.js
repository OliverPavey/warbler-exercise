import React,{Component} from "react";
import {Provider} from "react-redux";
import {configureStore} from "../store";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar"
import Main from "./Main";
import {setAuthorizationHeader,setCurrentUser} from "../store/actions/auth";
import jwtDecode from "jwt-decode";

const store=configureStore();

if (localStorage.jwtToken) {
  setAuthorizationHeader(localStorage.jwtToken)
  // Prevent manual tampering of jwtToken in localStorage
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch(e) {
    store.dispatch(setCurrentUser({})); // Forcibly log user out
  }
}

const App=() => {
  return (
    <Provider store={store}>
      <Router>
        <div className="onboarding">
          <Navbar />
          <Main />
        </div>
      </Router>
    </Provider>
  )
};

export default App;
