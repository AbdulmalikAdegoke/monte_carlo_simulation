import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input, Form, FormGroup, Label, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap'; // reactstrap module importsimport { Button, Input, InputGroup, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // reactstrap module imports

import EditingProfile from './EditingProfile'

export default function Profile({ userProfile }) {
    const [profileUpdated,setProfileUpdated] = useState(true)

    function updateProfile() {
        const profileChangeMade = !profileUpdated
        setProfileUpdated(profileChangeMade)
    }
  return (
    <div className='outlet_Container'>
        <h2>Edit Profile</h2>
        <div className='profile_image'>
            <img src={require('./profile.png')} alt='Profile stock' style={{width:"150px"}} />
        </div>
        <br />

        <div>
            <Form>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Input
                            bsSize="lg"
                            id="firstname"
                            name="firstname"
                            placeholder="First Name"
                            type="text"
                            // value={userProfile.firstName}
                            onChange={updateProfile}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Input
                            bsSize="lg"
                            id="lastname"
                            name="lastname"
                            placeholder="Last Name"
                            type="text"
                            // value={userProfile.lastName}
                            onChange={updateProfile}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Input
                    bsSize="lg"
                    id="emailAddress"
                    name="emailAddress"
                    placeholder="Email Address"
                    type="email"
                    // value={userProfile.email}
                    onChange={updateProfile}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                    bsSize="lg"
                    id="telephoneNumber"
                    name="telephoneNumber"
                    placeholder="Telephone Number"
                    type="tel"
                    // value={userProfile.phoneNumber}
                    onChange={updateProfile}
                    />
                </FormGroup>
            </Form>
        </div>

        <br />
        <br />
        

        <div className='footer'>
            <Button 
            color='primary' 
            size='lg' 
            className='edit_profile_button' 
            onClick={updateProfile}
            disabled ={profileUpdated}
            >
                Update
            </Button>
            {' '}
            <Button color='danger' outline size='lg' className='edit_profile_button' onClick={updateProfile}>
                Cancel
            </Button>

        </div>
    </div>
  )
}
