import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LogIn from "./LogIn.js"
import Registration from "./Registration.js"
import ForgottenPassword from "./ForgottenPassword.js"

import BaseLayout from './BaseLayout.js'
import Dashboard from "./Dashboard.js"
import History from "./History.js"
import Profile from "./Profile.js"
// import ErrorPage from "./Pages/ErrorPage.js"

import {profileFormValidation, projectTaskFormValidation, projectFormValidation } from "./Components/FormValidation"

export default function MonteCarloApp() {
  // VARIABLES

  // entry point state
  const [entryPointPage, setEntryPointPage] = useState(true)

  // usestate hook for the  (variable and the setting function)
  const [loggedIn, setLoggedIn] = useState(true)
  // const [loggedIn, setLoggedIn] = useState(false)
  
  const [existingUsersList, setExistingUsersList] = useState([])

  const [userExists, setUserExists] = useState(false)

  const [currentlyLoggedInUser, setCurrentlyLoggedInUser] = useState({
    email:"",
    phoneNumber:"",
    password:"",
    firstName:"",
    lastName:"",
    profileImageSrc:"",
    savedProjects:[{
      projectTitle:"",
      projectDescription:"",
      tasks:[{
        taskName:"",
        timeTo:0,
        estTp:0,
        monthTm:0,
        risk:[""]
      }]
    }]
  })


  // FUNCTIONS:

  // the function for toggling the list tasks as complete or incomplete
  function toggleLogInState() {
    const logInState = !loggedIn
    setLoggedIn(logInState)

    const userLogInReset = {emailaddress:"",password:"",phoneNum:""}

    if(loggedIn === false) {
      setCurrentlyLoggedInUser(userLogInReset)
    }
  }

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout toggleLogInState={toggleLogInState} loggedIn={loggedIn} userProfile={()=>{}} />}
                //{currentlyLoggedInUser}}
                >
                    {/* Entry Point */}
                    <Route index element={<LogIn toggleLogInState={toggleLogInState} userProfile={currentlyLoggedInUser} />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="forgottenPassword" element={<ForgottenPassword />} />

                    {/* Within the app */}
                    <Route path="dashboard" element={<Dashboard userProfile={currentlyLoggedInUser} projectTaskFormValidation={projectTaskFormValidation} projectFormValidation={projectFormValidation} />} />
                    <Route path="history" element={<History userProfile={currentlyLoggedInUser} />} />
                    <Route path="profile" element={<Profile userProfile={currentlyLoggedInUser} profileFormValidation={profileFormValidation} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
