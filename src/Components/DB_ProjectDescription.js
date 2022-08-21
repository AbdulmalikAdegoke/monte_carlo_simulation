import React from 'react'

import { Formik } from 'formik'
import { Form } from 'reactstrap'

import FormField from './FormField';


export default function DB_ProjectDescription({ formData,setFormData, projectFormValidation }) {
  return (
    <div className='formContent'>
      <Formik
        initialValues={{projectTitle: '', projectDescription: ''}}
        validationSchema={projectFormValidation}
      >
        {formik=>
          (
            <Form inline>
              {/* {console.log(formik.values)} */}
              <FormField 
                label="Title"
                fieldType="textField"
                id="projectTitle"
                name="projectTitle"
                type="text"
                placeholder='Project Title'
                // ref={emailAddressRef} 
                value={formData.projectTitle}
                onChange={(e)=>
                  setFormData({...formData,projectTitle:e.target.value})
                }
              />
              {' '}
              <br/>
              <FormField 
                label="Description"
                fieldType="textField"
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
              {' '}
              <br/>
              {' '}
            </Form>
          )
        }     
      </Formik>
    </div>
  )
}
