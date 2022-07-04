import React, { useEffect, useRef, useState } from 'react'
import LogIn from './LogIn' // log in component import
import Registration from './Registration' // component import
import ForgottenPassword from './ForgottenPassword' // component import


export default function LandingPage({ logUserIn, registerUserHandler }) {
  // usestate hook for the  (variable and the setting function)
  const [loggingIn, setLoggingIn] = useState(true)
  const [passwordForgotten, setPasswordForgotten] = useState(false)

  function toggleLoggingState() {
    const newLogState = !loggingIn
    setLoggingIn(newLogState)
  }

  function toggleForgottenPassword() {
    const newState = !passwordForgotten
    setPasswordForgotten(newState)
  }

  return (
    <div>
      {passwordForgotten?<ForgottenPassword />:
      loggingIn ? <LogIn toggleLoggingState={toggleLoggingState} logUserIn={logUserIn} toggleForgottenPassword={toggleForgottenPassword} />:
      <Registration toggleLoggingState={toggleLoggingState} registerUserHandler={registerUserHandler} toggleForgottenPassword={toggleForgottenPassword} />}
      
      
    </div>
  )
}
