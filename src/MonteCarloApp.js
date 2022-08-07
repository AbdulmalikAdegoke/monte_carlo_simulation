import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LogIn from "./EntryPoint/LogIn.js"
import Registration from "./EntryPoint/Registration.js"
import ForgottenPassword from "./EntryPoint/ForgottenPassword.js"

import Dashboard from "./Pages/Dashboard.js"
import History from "./Pages/History.js"
import Profile from "./Pages/Profile.js"
import ErrorPage from "./Pages/ErrorPage.js"

export default function MonteCarloApp() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                {/* <Route path="login" element={<LogIn userProfile={currentlyLoggedInUser} formValidation={formValidation} />} />
                <Route path="registration" element={<Registration userProfile={currentlyLoggedInUser} />} />
                <Route path="forgottenPassword" element={<ForgottenPassword userProfile={currentlyLoggedInUser} formValidation={formValidation} />} /> */}
                {/* <Route path="/" element={<Layout toggleLogInState={toggleLogInState} userProfile={currentlyLoggedInUser} />}>
                    <Route index element={<Dashboard userProfile={currentlyLoggedInUser} formValidation={formValidation} />} />
                    <Route path="history" element={<History userProfile={currentlyLoggedInUser} />} />
                    <Route path="profile" element={<Profile userProfile={currentlyLoggedInUser} formValidation={formValidation} />} />
                    <Route path="*" element={<ErrorPage userProfile={currentlyLoggedInUser} />} />
                </Route> */}
            </Routes>
        </BrowserRouter>
    </div>
  )
}
