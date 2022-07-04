// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useRef, useState } from 'react'
import './App.css'

import LandingPage from './LandingPage'; // component import
import MonteCarloApp from './MonteCarloApp'; // component import

// the local strage name variable initialisation
const local_storage = "userdetails"

function App() {
  // usestate hook for the to do list goals (variable and the setting function)
  const [loggedIn, setLoggedIn] = useState(false)

  const [currentlyLoggedInUser, setCurrentlyLoggedInUser] = useState({username:"",password:""})

  // const [existingUsersList, setExistingUsersList] = useState([])

  // the function for toggling the list tasks as complete or incomplete
  function toggleLogInState() {
    const logInState = !loggedIn
    setLoggedIn(logInState)
  }
  return (
    <>
      <div className="bodyContainer">
        if (loggedIn) {
          <MonteCarloApp toggleLogInState={toggleLogInState} currentlyLoggedInUser={currentlyLoggedInUser} />
        } else {
          <LandingPage toggleLogInState={toggleLogInState} loggedIn={loggedIn}  />
        }
      </div>
    </>
  );
}

export default App;
