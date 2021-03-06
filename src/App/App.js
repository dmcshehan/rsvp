import React, { useEffect } from "react";
import firebase from "../auth/firebase";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import classNames from "./App.module.css";

//components
import Home from "./Home/Home";
import NavBar from "./Navbar/Navbar";
import DropDown from "./Dropdown/Dropdown";
import Signin from "./Signin/Signin";
import Dashboard from "./Dashboard/Dashboard";
import EventModal from "./EventModal/EventModal";
import InviteeModal from "./InviteeModal/InviteeModal";
import EventIntro from "./EventIntro/EventIntro";
import Footer from "./Footer/Footer";
import Notification from "./Notification/Notification";

//Actioncreators
import { userLoginSuccess } from "../store/actionCreators/user";
import { fetchEvents } from "../store/actionCreators/event";
import { closeDropdown } from "../store/actionCreators/dropdown";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (loggedInUser) {
      if (loggedInUser) {
        dispatch(userLoginSuccess(loggedInUser));
        const unsubscribe = dispatch(fetchEvents());

        return () => {
          unsubscribe();
        };
      }
    });
  });

  function handleBackgroundClick() {
    dispatch(closeDropdown());
  }

  return (
    <React.StrictMode>
      <Router>
        <div
          className={`card ${classNames.app}`}
          onClick={handleBackgroundClick}
        >
          <NavBar />
          <div className='card-content'>
            <EventModal />
            <InviteeModal />
            <DropDown />
            <Notification />

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/signin' component={Signin} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/intro' component={EventIntro} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}
