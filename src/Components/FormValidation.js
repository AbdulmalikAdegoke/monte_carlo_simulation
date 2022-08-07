import React from 'react'
import * as Yup from 'yup'; // imported the yup package for form validation

const emailAddressValidation= Yup.string()
      .email('Invalid email address')
      .required('Required')

const passwordValidation= Yup.string()
      .min(12, 'Must be 10 characters or more')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/,
      //   /^([a-z]{1,}[A-Z]{1,}[0-9]{1,}[@£$%*]{1,})$/,
        "Password is not valid. Must contain at least 1 number, lowercase and uppercase alphabets (a-z), special character [@,£,$,%,*]"
      )
      .required('Required')

const phoneNumberValidation= Yup.string()
      .min(10, 'Must be 10 characters or more')
      // .max(11, 'Invalid phone number')
      .matches(
        // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        /^((\+44\s?|0)7([45789]\d{2}|624)\s?\d{3}\s?\d{3})$/,
        "Phone number is not valid"
      )
      .required('Required')

const firstNameValidation= Yup.string()
      .min(1, 'Must be at least 1 character')
      .required('Required')

const lastNameValidation= Yup.string()
      .min(1, 'Must be at least 1 character')
      .required('Required')

const projectTitleValidation= Yup.string()
      .min(5, 'Must be at least 5 characters')
      .max(200, 'Must be no more than 200 characters')
      .required('Required')

const projectDescriptionValidation= Yup.string()
      .min(50, 'Must be at least 50 characters')
      .max(2000, 'Must be no more than 2000 characters')
      .required('Required')

const taskSchedulingValidation= Yup.string()
      .min(1, 'Must be at least 1 character')
      .required('Required')

const taskNameValidation= Yup.string()
      .min(5, 'Must be at least 5 characters')
      .required('Required')

const minTimeValidation= Yup.number()
      .moreThan(0, 'Must be > (greater than) 0')
      .required('Required')

const pessTimeValidation= Yup.number()
      .moreThan(0, 'Must be > (greater than) 0')
      .required('Required')

const maxTimeValidation= Yup.number()
      .moreThan(0, 'Must be > (greater than) 0')
      .required('Required')

const riskValidation= Yup.string()
      .min(2, 'Must be at least 2 characters')

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const loginFormValidation = Yup.object({

    emailAddress: emailAddressValidation,

    password: passwordValidation,
  })

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const registrationFormValidation = Yup.object({

    emailAddress: emailAddressValidation,

    phoneNumber: phoneNumberValidation,

    password: passwordValidation,
  })

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const projectFormValidation = Yup.object({
    
    projectTitle: projectTitleValidation,

    projectDescription: projectDescriptionValidation,
})

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const projectTaskFormValidation = Yup.object({
    
    taskName: taskNameValidation,

    minTime: minTimeValidation,

    pessTime: pessTimeValidation,

    maxTime: maxTimeValidation,

    risk: riskValidation,
})

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const profileFormValidation = Yup.object({
    
    firstName: firstNameValidation,

    lastName: lastNameValidation,
    
    emailAddress: emailAddressValidation,

    phoneNumber: phoneNumberValidation,
  })