import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LogIn from "./EntryPoint/LogIn.js"
import Registration from "./EntryPoint/Registration.js"
import ForgottenPassword from "./EntryPoint/ForgottenPassword.js"

import BaseLayout from './Pages/BaseLayout.js'
import Dashboard from "./Pages/Dashboard.js"
import History from "./Pages/History.js"
import Profile from "./Pages/Profile.js"
// import ErrorPage from "./Pages/ErrorPage.js"

export default function MonteCarloApp() {
  // entry point state
  const [entryPointPage, setEntryPointPage] = useState(true)

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/monteCarloApp" element={<BaseLayout entryPointPage={entryPointPage} userProfile={()=>{}} />}
                //{currentlyLoggedInUser}}
                >
                    {/* Entry Point */}
                    <Route index element={<LogIn userProfile={currentlyLoggedInUser} />} />
                    <Route path="/registration" element={<Registration userProfile={currentlyLoggedInUser} />} />
                    <Route path="/forgottenPassword" element={<ForgottenPassword userProfile={currentlyLoggedInUser} />} />

                    {/* Within the app */}
                    <Route path="/dashboard" element={<Dashboard userProfile={currentlyLoggedInUser} />} />
                    <Route path="/history" element={<History userProfile={currentlyLoggedInUser} />} />
                    <Route path="/profile" element={<Profile userProfile={currentlyLoggedInUser} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
