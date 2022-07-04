import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom"
import { Button, Input, InputGroup, InputGroupText } from 'reactstrap'; // reactstrap module importsimport { Button, Input, InputGroup, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // reactstrap module imports

// the local strage name variable initialisation
const local_storage = "logindetails"

export default function LogInPage() {
  // states: LoggedIn
  // usestate hook for the  (variable and the setting function)
  const [userDetails, setUserDetails] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  // useref hook for storing the tasks inputted for storage
  const emailAddressRef = useRef()

  const passwordRef = useRef()

  const rememberMeRef = useRef()

  // usestate hook for determining the clearing of the to do list goals
  const [clearList, setClearList] = useState(false)
  
  // useeffect hook for accessing the stored list items in local storage to retain the items stored in the list
  useEffect(() =>{
    const storedUserDetails = JSON.parse(localStorage.getItem(local_storage))
    if (storedUserDetails) setLoggedIn(storedUserDetails)
  }, [])

  // useeffect hook for the storage of the list's item on local storage
  // this can be later replaced with backend storage (node)
  useEffect(() =>{
    localStorage.setItem(local_storage, JSON.stringify(userDetails))
  }, [userDetails])

  function logUserIn() {
    
  }
  function enterKeyPressLogIn(e) {
    if (e.key === 'Enter') {
      logUserIn()
    }
  }

  return (
    <div className='login_page'>
      1<h1>MCS</h1>

      <img className='stock_img' src={require('./template.png')} alt='Stock' style={{height:"200px"}} />
      <div className='loginform_container'>
        <div className='loginform'>
          <h1>LogIn</h1>
          <p id='login_p'>Enter your login details here</p>
          {/* login form */}
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
                <Link href='#'>Forgot Password?</Link>
              </div>
            </div>

            {/* <input type="submit" value="Submit" /> */}
            {/* button for logging in */}
            {/* color="success" */}
            <Button onClick={logUserIn}>Log In</Button>
          </form>
          
          <p>Don't have an account?<Link href='#'>Register</Link></p>
        </div>
        
      </div>
      

    </div>
  )
}
