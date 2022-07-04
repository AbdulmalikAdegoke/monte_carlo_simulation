import React from 'react'
import { Button } from 'reactstrap'; // reactstrap module imports { Button, Input, InputGroup, InputGroupText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'; // reactstrap module imports

export default function Risks({ risk }) {
  return (
    <div>
      {risk}
    {/* {console.log(risk.riskName)} */}
        {/* <span style={{float:'left'}}>{risk}</span> */}
        {/* <span style={{float:'right',width:'45%'}}>
            <Button
            color="danger"
            size='sm'
            style={{width:'45%',float:'left',borderRadius:"50%"}}
            >
                -
            </Button>
            
            {'  '}
            <Button
            color="primary"
            size='sm'
            style={{width:'45%',float:'right',borderRadius:"50%"}}
            >
                +
            </Button>
        </span> */}
    </div>
  )
}
