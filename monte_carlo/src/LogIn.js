import React, { useEffect, useRef, useState } from 'react'; //  { useEffect, useRef, useState }
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap'; // reactstrap module importsimport { Button, Input, InputGroup, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // reactstrap module imports
import { Link } from "react-router-dom";
import Registration from "./Registration";
import { Formik,useField, useFormikContext } from "formik";

export default function LogIn({ toggleLoggingState, toggleForgottenPassword, logUserIn }) {
    // states: LoggedIn
  // usestate hook for the  (variable and the setting function)
//   const [userDetails, setUserDetails] = useState([])
//   const [loggedIn, setLoggedIn] = useState(false)
    const [userExists, setUserExists] = useState(false)
  // useref hook for storing the tasks inputted for storage
  const emailAddressRef = useRef()

  const passwordRef = useRef()

  const rememberMeRef = useRef()

  function userLogIn() {
    logUserIn(emailAddressRef,passwordRef)
  }
  function enterKeyPressLogIn(e) {
    if (e.key === 'Enter') {
        logUserIn(emailAddressRef,passwordRef)
        
    }
  }

  return (
    <div className='login_page'>
        <div className='loginpage_div'>
            <h1>MCS</h1>

            <img className='stock_img' src={require('./template.png')} alt='Stock'  />
        </div>

        <div className='loginform_container'>
            <div className='loginform'>
            <div className='loginform_div'>
                <h1>MCS</h1>

                <img className='stock_img' src={require('./template.png')} alt='Stock'  />
            </div>
                <h2>LogIn</h2>
                <p id='login_p' style={{textAlign:"left"}}>Enter your login details here</p>
                
                <Form inline>
                    <FormGroup>
                        <Label
                        for="emailaddress"
                        style={{fontWeight:"bold"}}
                        >
                        Email
                        </Label>
                        <Input
                        id='emailaddress'
                        name="emailaddress"
                        bsSize="lg"
                        onKeyDown={enterKeyPressLogIn}
                        placeholder='Enter email address here'
                        type="email"
                        innerRef={emailAddressRef}
                        />
                    </FormGroup>
                    {' '}
                    <br/>
                    <FormGroup>
                        <Label
                        for="password"
                        style={{fontWeight:"bold"}}
                        >
                        Password
                        </Label>
                        <Input
                        id="password"
                        name="password"
                        bsSize="lg"
                        onKeyDown={enterKeyPressLogIn}
                        placeholder="Enter password here"
                        type="password"
                        innerRef={passwordRef}
                        />
                    </FormGroup>
                    {' '}
                    <br/>
                    <div style={{marginBottom:"40px"}}>
                    <div className='remember_me'>
                        <Input id='rememberme' innerRef={rememberMeRef} type="checkbox" defaultValue={false} name='rememberme' /> 
                        <Label id='rm_label' for="rememberme">Remember Me</Label>
                    </div>
                    <div className='forgot_password'>
                        <span className='forgot_p_a' onClick={toggleForgottenPassword}>Forgot Password?</span>
                        {/* <Link href='#'>Forgot Password?</Link> */}
                    </div>
                    </div>
                    {' '}
                    <br/>
                    <br/>
                    {' '}
                    <Button color='primary' size='lg' className='login_button' onClick={userLogIn}>
                        Log In
                    </Button>
                    {' '}
                </Form>
                
                <br/><br/>
                <p>Don't have an account? <span className='register_a' onClick={toggleLoggingState}>Register</span></p>
            </div>
            {/* <input type="submit" value="Submit" /> */}
            {/* button for logging in */}
            {/* color="success" */}
            
        </div>
      

    </div>
  )
}

