import React, { useEffect, useRef, useState } from 'react'
import LogIn from './LogIn' // component import
import Registration from './Registration' // component import

// the local strage name variable initialisation
const local_storage = "logindetails"

export default function LandingPage({ toggleLogInState, loggedIn }) {
  // usestate hook for the  (variable and the setting function)
  const [loggingIn, setLoggingIn] = useState(true)

  return (
    <div>
        if (loggingIn) {
          <LogIn />
        } else {
          <Registration />
        }

    </div>
  )
}
