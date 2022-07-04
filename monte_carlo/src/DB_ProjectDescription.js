import React, { useRef } from 'react'
import { Label, Input, Form, FormGroup, FormFeedback } from 'reactstrap'

export default function DB_ProjectDescription({ formData,setFormData }) {
  // const projectTitleInput = useRef()
  // const projectDescriptionInput = useRef()


  return (
    <div className='formContent'>
      {/* <Form> */}
        <FormGroup>
          <Label 
          size="lg"
          for="projectTitle">
              Title
          </Label>
          <Input
          bsSize="lg"
          id="projectTitle"
          name="projectTitle"
          type="text"
          placeholder='Project Title'
          // innerRef={projectTitleInput}
          value={formData.projectTitle}
          onChange={(e)=>
            setFormData({...formData,projectTitle:e.target.value})
          }
          />
          <FormFeedback>
            Project Titles must contain alphabets (a-z)
          </FormFeedback>
        </FormGroup>
        
        {/* <br /> */}

        <FormGroup>
          <Label 
          size="lg"
          for="projectDescription">
              Description
          </Label>
          <Input
          bsSize="lg"
          id="projectDescription"
          name="projectDescription"
          type="textarea"
          placeholder='Project Description'
          // innerRef={projectDescriptionInput}
          value={formData.projectDescription}
          onChange={(e)=>
            setFormData({...formData,projectDescription:e.target.value})
          }
          />
          <FormFeedback>
            Project Descriptions must contain alphabets (a-z)
          </FormFeedback>
        </FormGroup>

        
      {/* </Form>   */}
    </div>
  )
}

