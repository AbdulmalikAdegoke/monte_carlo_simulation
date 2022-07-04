import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom"
import { Button, Input, InputGroup, InputGroupText } from 'reactstrap'; // reactstrap module importsimport { Button, Input, InputGroup, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // reactstrap module imports

import 'bootstrap/dist/css/bootstrap.min.css';

export default function RegistrationPage() {
  const emailAddressRef = useRef()
  const passwordRef = useRef()
  const phoneNoRef = useRef()
  
  // registration handler
  function registerNewUserDetails() {
    if (emailAddressRef === "" || passwordRef === "" || phoneNoRef === "") {
      // not registering the details due to missing details
      
    } else {
      // adding the new user details to storage

    }
  }

  // the event listener function for the enter key press which adds task to the list on
  // enter key press whilst in the input box of the "add task" section
  function enterKeyPressRegister(e) {
    if (e.key === 'Enter') {
      registerNewUserDetails()
    }
  }

  return (
    <div className='registration_page'>
      <div className='reg_container'>
        <div className='reg_form_container'>
          <h1>Register</h1>
          <p id='login_p'>Register your login details here</p>
          {/* registration form */}
          <form>
            <label for="email">Email Address:</label><br/>
            <Input id='email' name="email" onKeyDown={enterKeyPressRegister} innerRef={emailAddressRef} type="text" placeholder='Enter email address here' /> <br/>
            <br/>
            <label for="phone_no">Phone Number:</label><br/>
            <Input id='phone_no' name="phone_no" onKeyDown={enterKeyPressRegister} innerRef={phoneNoRef} type="number" placeholder='Enter phone number here' /> <br/>
            <br/>
            <label for="password">Password:</label><br/>
            <Input id='password' name="password" onKeyDown={enterKeyPressRegister} innerRef={passwordRef} type="number" placeholder='Enter phone number here' /> <br/>
            <br/>

            <div className='reg_form_container'>
              <div className='remeber_me_container'>
                <input type="checkbox" id='rememberme' name='rememberme'/>
                <label for="rememberme">Remember Me</label>
              </div>
              <div className='forgot_password_container'>
                <Link href='#'>Forgot Password?</Link>
              </div>
            </div>

            {/* <input type="register" value="Register" /> */}
            <Button onClick={registerNewUserDetails}>Register</Button>
          </form>
          <p>Already have an account?<Link href='#'>Login</Link></p>
        </div>
        
      </div>
    </div>
  )
}
