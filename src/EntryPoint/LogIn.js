import React from 'react'

import { Link } from "react-router-dom"

import { Button, Input, Form, FormGroup, Label } from 'reactstrap'; // reactstrap module importsimport { Button, Input, InputGroup, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // reactstrap module imports

import {loginFormValidation} from "./Components/FormComponents/FormValidation"

import formFields from "./Components/FormComponents/FormFields"
import formInput from "./Components/FormComponents/FormInput"
import formButton from "./Components/FormComponents/FormButton"

import { Formik, useField, useFormik, useFormikContext, ErrorMessage, Field } from "formik";

export default function LogIn() {
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
                
            </Form>
            {
              
            }

          </Formik>
          <form>
            <label for="emailaddress">Email Address:</label><br/>
            <Input id='emailaddress' name="emailaddress" onKeyDown={enterKeyPressLogIn} innerRef={emailAddressRef} type="text" placeholder='Enter email address here' /> <br/>
            <label for="password">Password:</label><br/>
            <Input id='password' name="password" onKeyDown={enterKeyPressLogIn} innerRef={passwordRef} type="text" placeholder='Enter password here' /> <br/>
            <div>
              <div>
                <Input id='rememberme' innerRef={rememberMeRef} type="checkbox" defaultValue={false} name='rememberme' /> 
                <label for="rememberme">Remember Me</label>
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
          </form>
          
          <p>
            Don't have an account? <Link href='/monteCarloApp/registration'>Register</Link>
          </p>
        </div>
        
      </div>
    </div>
  )
}
