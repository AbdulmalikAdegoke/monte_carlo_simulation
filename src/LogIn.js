import React, { useEffect, useRef, useState } from 'react'

import { Link } from "react-router-dom"

import { Button, Input, Form, FormGroup, Label } from 'reactstrap'; // reactstrap module importsimport { Button, Input, InputGroup, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // reactstrap module imports

import {loginFormValidation} from "./Components/FormValidation"

import FormField from "./Components/FormField"
// import FormField from "./Components/FormComponents/FormField"
// import FormInput from "./Components/FormComponents/FormInput"
// import FormButton from "./Components/FormComponents/FormButton"

import { Formik, useField, useFormik, useFormikContext, ErrorMessage, Field } from "formik";

export default function LogIn({ currentlyLoggedInUser ,toggleLoggingState, logUserIn }) {
  const [userExists, setUserExists] = useState(false)
  // useref hook for storing the tasks inputted for storage
  const emailAddressRef = useRef()

  const passwordRef = useRef()

  const rememberMeRef = useRef()

  function userLogIn(values) {
    logUserIn(values.emailAddress,values.password)
  }
  return (
    <div className='login_page'>
      <h1>MCS</h1>

      <img className='stock_img' src={require('./Assets/template.png')} alt='Stock' style={{height:"200px"}} />
      <div className='loginform_container'>
        <div className='loginform'>
          <h1>LogIn</h1>
          <p id='login_p'>Enter your login details here</p>
          {/* login form */}
          <Formik
          initialValues={{emailAddress: '', password: ''}}
          validationSchema={loginFormValidation}
          onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              // userLogIn(values);
          }, 400);
          }}
          >
            <Form inline>
              <Label for="emailaddress">Email Address:</Label><br/>
              <Input id='emailaddress' name="emailaddress" 
              // onKeyDown={enterKeyPressLogIn} 
              innerRef={emailAddressRef} 
              type="text" placeholder='Enter email address here' /> <br/>

              <Label for="password">Password:</Label><br/>
              <Input id='password' name="password" 
              // onKeyDown={enterKeyPressLogIn} 
              innerRef={passwordRef} 
              type="text" placeholder='Enter password here' /> <br/>

              <div>
                <div>
                  <Input id='rememberme' 
                  innerRef={rememberMeRef} 
                  type="checkbox" defaultValue={false} name='rememberme' /> 
                  <Label for="rememberme">Remember Me</Label>
                </div>
                <div>
                  <Link href='/monteCarloApp/forgottenPassword'>
                    Forgot Password?
                  </Link>
                </div>
              </div>

              {/* <input type="submit" value="Submit" /> */}
              {/* button for logging in */}
              {/* color="success" */}
              <Button onClick={logUserIn}>
                Log In
              </Button>
          
            </Form>
            {
              
            }

          </Formik>
          
          
          <p>
            Don't have an account? <Link href='/registration'>Register</Link>
          </p>
        </div>
        
      </div>
    </div>
  )
}
