import React, { useEffect, useRef, useState } from 'react'
import { Outlet, Link } from "react-router-dom"
// import { v4 as uuidv4 } from 'uuid'
import { Nav, NavLink, Button } from 'reactstrap'; // reactstrap module imports { Button, Input, InputGroup, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // reactstrap module imports
// const local_storage = "todolists"

export default function BaseLayout() {
    // const [toDoList, setToDoList] = useState([])

    // const toDoListNameRef = useRef()

    // useEffect(() =>{
    //     const storedToDoLists = JSON.parse(localStorage.getItem(local_storage))
    //     if (storedToDoLists) setToDoList(storedToDoLists)
    // }, [])

    // useEffect(() =>{
    //     localStorage.setItem(local_storage, JSON.stringify(toDoList))
    // }, [toDoList])


    function logoutHandler(e){
    //     const listName = toDoListNameRef.current.value
    //     // if(listName === '') return
    //     setToDoList( existingToDoLists =>{
    //         return [...existingToDoLists,{id:uuidv4(), name: listName, listGoals:{}, complete:false, urgent:false, editing:true}]
    //     })

    //     toDoListNameRef.current.value = null
    }

    // function createList() {
    //     const listName = toDoListNameRef.current.value
    //     if(listName === '') return
    //         setToDoList( existingToDoLists =>{
    //         return [...existingToDoLists,{id:uuidv4(), name: listName, listGoals:{}, complete:false, urgent:false, editing:false}]
    //     })

    //     toDoListNameRef.current.value = null
    // }
  return (
      <>
        <Nav vertical>
            <h1>MCS</h1>
            <br />
            <br />
            {' '}
            <NavLink href="#">
            Home
            </NavLink>
            {' '}
            <br />
            <NavLink href="#">
            History
            </NavLink>
            {' '}
            <br />
            <NavLink href="#">
            Profile
            </NavLink>
            {' '}
            <br />
            <br />
            <br />
            <br />

            {/* <NavLink
            disabled
            href="#"
            >
            Disabled Link
            </NavLink> */}
            <Button onClick={logoutHandler} className='logOutButton' >
                Logout
            </Button>
        </Nav>
        <Outlet />
        
      </>
    
  )
}
