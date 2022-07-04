import React, { useEffect, useRef, useState } from 'react'; //  { useEffect, useRef, useState }
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Form, FormGroup, FormFeedback, Label } from 'reactstrap'; // reactstrap module importsimport { Button, Input, InputGroup, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // reactstrap module imports
import { Link } from "react-router-dom";
import LogIn from './LogIn';
import { Formik, useField, useFormik, useFormikContext, ErrorMessage, Field } from "formik";
import * as Yup from 'yup';

export default function Registration({ toggleLoggingState, registerUserHandler }) {
     // states: LoggedIn
  // usestate hook for the  (variable and the setting function)
//   const [userDetails, setUserDetails] = useState([])
//   const [loggedIn, setLoggedIn] = useState(false)
  // useref hook for storing the tasks inputted for storage
  const emailAddressRef = useRef()

  const phoneNumberRef = useRef()

  const passwordRef = useRef()

  const rememberMeRef = useRef()
  
  
  const [registered, setregistered] = useState(false)

  function registerUserDetails() {
    const regStatus= registerUserHandler(emailAddressRef, passwordRef, phoneNumberRef)
    regStatus ? setregistered(regStatus):setregistered(regStatus)
  }
  function enterKeyPressRegister(e) {
    if (e.key === 'Enter') {
        registerUserDetails()
    }
  }

  function userExistsConfirmation(){

  }

//   const SignupForm = () => {
//     return (
//       <Formik
//         initialValues={{email: '', password: '', phoneNumber: ''}}
//         validationSchema={Yup.object({
//             email: Yup.string().email('Invalid email address').required('Required'),
//             password: Yup.string()
//                 .min(15, 'Must be 15 characters or more')
//                 .required('Required'),
//             phoneNumber: Yup.string()
//                 .max(10, 'Invalid phone number')
//                 .required('Required'),
          
//         })}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         <Form>
//             <label htmlFor="email">Email Address</label>
//             <Field name="email" type="email" />
//             <ErrorMessage name="email" />

//             <label htmlFor="password">Password</label>
//             <Field name="password" type="text" />
//             <ErrorMessage name="password" />
    
//             <label htmlFor="phoneNumber">Phone Number</label>
//             <Field name="phoneNumber" type="number" />
//             <ErrorMessage name="phoneNumber" />
    
            
    
//             <button type="submit">Register</button>
//         </Form>
//       </Formik>
//     );
//   };



  return (
    <div className='registration_page'>
        <div className='registration_form_container'>
            <div className='registration_form'>
                <h1>MCS</h1>
                <h2>Register</h2>
                <p style={{textAlign:"left"}}>Enter your user details here</p>

                <Formik
                    initialValues={{email: '', password: '', phoneNumber: ''}}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Invalid email address').required('Required'),
                        password: Yup.string()
                            .min(15, 'Must be 15 characters or more')
                            .required('Required'),
                        phoneNumber: Yup.string()
                            .max(11, 'Invalid phone number')
                            .required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                    }}
                >
                    {/* <Form>
                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" />

                        <label htmlFor="password">Password</label>
                        <Field name="password" type="text" />
                        <ErrorMessage name="password" />
                
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <Field name="phoneNumber" type="number" />
                        <ErrorMessage name="phoneNumber" />
                
                        
                        <Button type="submit">Register</Button>
                    </Form> */}
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
                            onKeyDown={enterKeyPressRegister}
                            placeholder='Enter email address here'
                            type="email"
                            innerRef={emailAddressRef}
                            />
                            <ErrorMessage name="email" />
                            <FormFeedback>
                                Email has already been registered
                            </FormFeedback>
                        </FormGroup>
                        {' '}
                        <br/>
                        <FormGroup>
                            <Label
                            for="phonenumber"
                            style={{fontWeight:"bold"}}
                            >
                            Phone Number
                            </Label>
                            <Input
                            id='phonenumber'
                            name="phonenumber"
                            bsSize="lg"
                            onKeyDown={enterKeyPressRegister}
                            placeholder='Enter phone number here'
                            type="tel"
                            innerRef={phoneNumberRef}
                            />
                            <ErrorMessage name="phoneNumber" />
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
                            onKeyDown={enterKeyPressRegister}
                            placeholder="Enter password here"
                            type="password"
                            innerRef={passwordRef}
                            />
                            <ErrorMessage name="password" />
                        </FormGroup>
                        {' '}
                        
                        {/* <div style={{marginBottom:"40px"}}>
                            <div className='remember_me'>
                                <Input id='rememberme' innerRef={rememberMeRef} type="checkbox" defaultValue={false} name='rememberme' /> 
                                <label for="rememberme">Remember Me</label>
                            </div>
                            <div className='forgot_password'>
                                <a href=''>Forgot Password?</a>
                                
                            </div>
                        </div> */}
                        {' '}
                        <br/>
                        {registered &&<p className='registration_confirmation_p'>Details registered. Proceed to <span className='login_a' onClick={toggleLoggingState}>LogIn</span></p>}
                        <br/>
                        {' '}
                        <Button color='primary' size='lg' id='register_button' onClick={registerUserDetails}>
                            Register
                        </Button>
                        {' '}
                    </Form>
                </Formik>
                <br/>
                
                <p>Already have an account? <span className='login_a' onClick={toggleLoggingState}>LogIn</span></p>
            </div>
            
            
        </div>
        <div className='registrationpage_div'>
            <img className='stock_img' src={require('./template.png')} alt='Stock' style={{height:"600px",top:"50%",bottom: "50%",float:"right"}} />
        </div>
      

    </div>
  )
}
