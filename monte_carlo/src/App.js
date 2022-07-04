import React, { useEffect, useRef, useState, createContext, useContext } from 'react'
import './App.css';
import { v4 as uuidv4 } from 'uuid'; // uuid library import for the unique id generation
import LandingPage from './LandingPage'; // component import
import MonteCarloApp from './MonteCarloApp'; // component import

// the local strage name variable initialisation
const local_storage = "userdetails"
// const userProfileContext = createContext()

function App() {
  
  // usestate hook for the  (variable and the setting function)
  const [loggedIn, setLoggedIn] = useState(true)

  const [currentlyLoggedInUser, setCurrentlyLoggedInUser] = useState({
    email:"",
    phoneNumber:"",
    password:"",
    firstName:"",
    lastName:"",
    profileImageSrc:"",
    savedProjects:[{
      projectTitle:"",
      projectDescription:"",
      tasks:[{
        taskName:"",
        timeTo:0,
        estTp:0,
        monthTm:0,
        risk:[""]
      }]
    }]
  })

  const [existingUsersList, setExistingUsersList] = useState([])

  const [userExists, setUserExists] = useState(false)

  // useeffect hook for accessing the stored user details in local storage to retain the items stored in the list
  useEffect(() =>{
    const storedUserDetails = JSON.parse(localStorage.getItem(local_storage))
    if (storedUserDetails) setExistingUsersList(storedUserDetails)
  }, [])

  // useeffect hook for the storage of the list's item on local storage
  // this can be later replaced with backend storage (node)
  useEffect(() =>{
    localStorage.setItem(local_storage, JSON.stringify(existingUsersList))
  }, [existingUsersList])

  function userDetailsValidation(emailAddress,password,phoneNumber) {
    
    return true
  }

  // the function for adding tasks to the list
  // it assigns unique ids to each tasks added to the list using the uuid module
  function registerUserHandler(emailAddressRef,passwordRef,phoneNumberRef){
    const emailAddress = emailAddressRef.current.value;
    const password = passwordRef.current.value;
    const phoneNum = phoneNumberRef.current.value;

    if(emailAddress === '' || emailAddress === null || emailAddress === undefined || password === '' || password === null || password === undefined) return false;


    if(userDetailsValidation(emailAddress,password,phoneNum)){
      console.log(emailAddress,password,phoneNum)
      setExistingUsersList( existingUsersList =>{
        return [...existingUsersList,{email: emailAddress, 
          password:password, 
          phoneNumber:phoneNum,
          firstName:"",
          lastName:"",
          profileImageSrc:"",
          savedProjects:[]
        }]
      })
    } else {
      return false;
    }

    emailAddressRef.current.value = null
    passwordRef.current.value = null
    phoneNumberRef.current.value = null

    return true
  }

  // the function for toggling the list tasks as complete or incomplete
  function toggleLogInState() {
    const logInState = !loggedIn
    setLoggedIn(logInState)

    const userLogInReset = {emailaddress:"",password:"",phoneNum:""}

    if(loggedIn === false) {
      setCurrentlyLoggedInUser(userLogInReset)
    }
  }

  function validateUser(userDetails) {
    const storedUserDetails = [...existingUsersList]
    const currentUserDetails = storedUserDetails.find(userdetails => userdetails.email === userDetails.email && userdetails.password === userDetails.password)

    if (currentUserDetails === undefined) {return false} else {return currentUserDetails}
  }

  function logUserIn(emailAddressRef,passwordRef) {
    const emailAddress = emailAddressRef.current.value;
    const passWord = passwordRef.current.value;
    console.log(emailAddress + ' ' + passWord)
    // const phoneNum = phoneNumberRef.current.value;

    const userLogInReset = {emailaddress:"",password:"",phoneNumber:""}
    setCurrentlyLoggedInUser({...currentlyLoggedInUser,email:emailAddress,password:passWord})
    const loginValidity = validateUser(currentlyLoggedInUser)

    if (loginValidity !== false){
      const exists = !userExists
      setCurrentlyLoggedInUser(loginValidity)
      // setUserExists(exists)
      toggleLogInState(true)
    } else {
      setCurrentlyLoggedInUser(userLogInReset)
      return false
    }
  }

  // function for after logout of a session to update user profile contents if any changes have been made to the profile during the session
  function updateUserProfile(updatedUserDetails){

  }

  console.log(existingUsersList)

  return (
    // <userProfileContext.Provider value={currentlyLoggedInUser}>
      <>
        <div className="bodyContainer">
          {loggedIn? <MonteCarloApp currentlyLoggedInUser={currentlyLoggedInUser} toggleLogInState={toggleLogInState} />: <LandingPage logUserIn={logUserIn} registerUserHandler={registerUserHandler} />}
        </div>
      </>
    // </userProfileContext.Provider>
    
  );
}

export default App;

