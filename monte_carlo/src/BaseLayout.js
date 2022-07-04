import React, { useState } from 'react'
import { Outlet, useLocation } from "react-router-dom"
// import { v4 as uuidv4 } from 'uuid'
import { Nav, NavLink, Button, NavItem, Modal, ModalBody,ModalFooter, ModalHeader, Input } from 'reactstrap'; // reactstrap module imports { Button, Input, InputGroup, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // reactstrap module imports
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BaseLayout({ toggleLogInState, userProfile }) {
    const [wantsToLogOut,setWantsToLogOut] = useState(false)
    function logoutHandler(e){
        toggleLogInState()
    }

    function logOutConfirmation() {
        const logOut = !wantsToLogOut
        setWantsToLogOut(logOut)
    }

    const currentHref = useLocation();
    
  return (   
      
    <div className='layout_container'>
        <Nav vertical>
            <h1>MCS</h1>
            <br />
            <br />

            {' '}
            <div className='nav_pages'>
                <NavItem active={currentHref.pathname ==="/"?true:false}>
                    <NavLink href="/">
                        <img src={require('./home_icon.png')} alt='Home stock' style={{width:"30px"}} />
                        <br />
                        Home
                    </NavLink>
                </NavItem>
                {' '}
                <br />
                <NavItem active={currentHref.pathname ==="/history"?true:false}>
                    <NavLink href="/history">
                        <img src={require('./history_icon.png')} alt='History stock' style={{width:"30px"}} />
                        <br />
                        History
                    </NavLink>
                </NavItem>
                {' '}
                <br />
                <NavItem active={currentHref.pathname ==="/profile"?true:false}>
                    <NavLink href="/profile">
                        <img src={require('./profile_icon.png')} alt='Profile stock' style={{width:"30px"}} />
                        <br />
                        Profile
                    </NavLink>
                </NavItem>
                {' '}
                <br />
            </div>
            

            {' '}
            {/* <br /> */}
            {/* <br />
            <br />
            <br /> */}

            
            <Button onClick={logOutConfirmation} className='logOutButton' >
                <img src={require('./logout_icon_.png')}  alt='Logout stock' style={{width:"30px"}} />
                <br />
                Logout
            </Button>
        </Nav>
        <div className='layout_body_container'>
            <div className='layout_top_nav'>
                <img src={require('./profile.png')} alt='Profile stock' style={{width:"50px",borderRadius:"50%"}} />
                <h2>{userProfile.firstName}</h2>
            </div>
            <Outlet />

            
        </div>
        {/* modal for the confirmation of the deletion of the list contents */}
        <Modal
        centered
        scrollable
        isOpen={wantsToLogOut}
        >
            <ModalHeader>
                Log Out Confirmation
            </ModalHeader>
            <ModalBody>
                <Button
                color="danger"
                onClick={logoutHandler}
                >
                    Log Out
                </Button>
                {' '}
                <br />
                <br />
                <Button 
                color="secondary" 
                onClick={logOutConfirmation}
                >
                    Cancel
                </Button>
            </ModalBody>
        </Modal>
        
    </div>
  )
}
