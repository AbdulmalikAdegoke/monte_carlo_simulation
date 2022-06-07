import React, { useEffect, useRef, useState } from 'react'
import { Outlet, Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'

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
        <div className='navigationContainer'>
            <ul className='fixedNav'>
                <li>
                    <Link to="/">Schedule <span className='navCount'></span></Link>
                </li>
                <li>
                    <Link to="/">History <span className='navCount'></span></Link>
                </li>
                <li>
                    <Link to="/">Profile <span className='navCount'></span></Link>
                </li>
            </ul>
            <br />

            <br/>
            <div onClick={logoutHandler} className='logOut'>
                <Link to="/">Logout <span className='navCount'></span></Link>
            </div>
        </div>
        <Outlet />
      </>
    
  )
}
