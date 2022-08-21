import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import { Form } from 'reactstrap';
import { Formik } from 'formik';

import {registrationFormValidation} from "./Components/FormValidation"

import FormField from './Components/FormField';

export default function Registration({ toggleLoggingState, registerUserHandler }) {

  
  const [registered, setregistered] = useState(false)

  // function registerUserDetails(values) {
  //   const regStatus= registerUserHandler(values.emailAddress, values.password, values.phoneNumber)
  //   setregistered(regStatus)
  // }
  // function enterKeyPressRegister(e) {
  //   if (e.key === 'Enter') {
  //       registerUserDetails()
  //   }
  // }

  // function userExistsConfirmation(){

  // }
  return (
    <>
      <div className='registration_page'>
        <div className='registration_form_container'>
            <div className='registration_form'>
                <h1>MCS</h1>
                <h2>Register</h2>
                <p style={{textAlign:"left"}}>Enter your user details here</p>

                <Formik
                  initialValues={{emailAddress: '', password: '', phoneNumber: ''}}
                  validationSchema={registrationFormValidation}
                  onSubmit={(values, { setSubmitting }) => {
                        
                    // registerUserDetails(values);
                    // setSubmitting(false);
                    setTimeout(() => {
                        // registerUserDetails(values);
                        // alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        
                    }, 400);
                  }}
                >
                  {formik=>
                    (
                      <Form inline>
                        {console.log(formik.values)}
                        <FormField 
                          label="Email Address"
                          fieldType="textField"
                          id="emailAddress"
                          name="emailAddress"
                          placeholder="Enter email address here"
                          type="email" 
                          // ref={emailAddressRef} 
                        />
                        {' '}
                        <br/>
                        <FormField 
                          label="Phone Number"
                          fieldType="textField"
                          id='phoneNumber'
                          name="phoneNumber"
                          placeholder='Enter phone number here'
                          type="tel" 
                          // ref={{phoneNumberRef}} 
                        />
                        {' '}
                        <br/>
                        <FormField 
                          label="Password"
                          fieldType="textField"
                          id='password'
                          name="password"
                          placeholder='Enter password here'
                          type="password" 
                          // ref={passwordRef} 
                        />
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
                            <FormField 
                            label="Register"
                            fieldType ="buttonField"
                            color='primary' 
                            size='lg' 
                            id='register_button' 
                            type="submit"
                            />
                            {' '}
                        </Form>
                        )
                    }
                    
                </Formik>
                <br/>
                
                <p>Already have an account? <Link className='login_a' href='/'>LogIn</Link></p>
            </div>
            
            
        </div>
        <div className='registrationpage_div'>
            <img className='stock_img' src={require('./Assets/template.png')} alt='Stock' style={{height:"600px",top:"50%",bottom: "50%",float:"right"}} />
        </div>
      </div>
    </>
    
  )
}
