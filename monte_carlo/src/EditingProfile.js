import React from 'react'
import { Form, Input, FormGroup, Col, Label, Row } from 'reactstrap';

export default function EditingProfile() {
  return (
    <div>
        <Form>
            <Row>
                <Col md={6}>
                <FormGroup>
                    <Label for="exampleEmail">
                    Email
                    </Label>
                    <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="with a placeholder"
                    type="email"
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label for="examplePassword">
                    Password
                    </Label>
                    <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password placeholder"
                    type="password"
                    />
                </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label for="exampleAddress">
                Address
                </Label>
                <Input
                id="exampleAddress"
                name="address"
                placeholder="1234 Main St"
                />
            </FormGroup>
            <FormGroup>
                <Label for="exampleAddress2">
                Address 2
                </Label>
                <Input
                id="exampleAddress2"
                name="address2"
                placeholder="Apartment, studio, or floor"
                />
            </FormGroup>
        </Form>
    </div>
  )
}
