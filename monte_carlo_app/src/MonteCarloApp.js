import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Layout from './BaseLayout'; // component import
import Dashboard from './Dashboard'; // component import
import History from './History'; // component import
import Profile from './Profile'; // component import
import ErrorPage from './ErrorPage'; // component import


export default function MonteCarloApp() {
  return (
    <div>MonteCarloApp
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="history" element={<History />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
