import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from './BaseLayout'; // component import
import Dashboard from './Dashboard'; // component import
import History from './History'; // component import
import Profile from './Profile'; // component import
import ErrorPage from './ErrorPage'; // component import

export default function MonteCarloApp({ currentlyLoggedInUser, toggleLogInState }) {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout toggleLogInState={toggleLogInState} userProfile={currentlyLoggedInUser} />}>
                    <Route index element={<Dashboard userProfile={currentlyLoggedInUser} />} />
                    <Route path="history" element={<History userProfile={currentlyLoggedInUser} />} />
                    <Route path="profile" element={<Profile userProfile={currentlyLoggedInUser} />} />
                    <Route path="*" element={<ErrorPage userProfile={currentlyLoggedInUser} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
