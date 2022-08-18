import React from 'react'
import * as Yup from 'yup'; // imported the yup package for form validation


// exporting the form validation  module to be used across the app
// for fields (input fields)
export const loginFormValidation= Yup.object({

    emailAddress: Yup.string()
    .email('Invalid email address')
    .required('Required'),

    password: Yup.string()
    .min(12, 'Must be 10 characters or more')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/,
    //   /^([a-z]{1,}[A-Z]{1,}[0-9]{1,}[@£$%*]{1,})$/,
      "Password is not valid. Must contain at least 1 number, lowercase and uppercase alphabets (a-z), special character [@,£,$,%,*]"
    )
    .required('Required'),
  })

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const registrationFormValidation = Yup.object({

    emailAddress: Yup.string()
    .email('Invalid email address')
    .required('Required'),

    phoneNumber: Yup.string()
    .min(10, 'Must be 10 characters or more')
    // .max(11, 'Invalid phone number')
    .matches(
      // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      /^((\+44\s?|0)7([45789]\d{2}|624)\s?\d{3}\s?\d{3})$/,
      "Phone number is not valid"
    )
    .required('Required'),

    password: Yup.string()
    .min(12, 'Must be 10 characters or more')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/,
    //   /^([a-z]{1,}[A-Z]{1,}[0-9]{1,}[@£$%*]{1,})$/,
      "Password is not valid. Must contain at least 1 number, lowercase and uppercase alphabets (a-z), special character [@,£,$,%,*]"
    )
    .required('Required'),
  })

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const projectFormValidation = Yup.object({
    
    projectTitle: Yup.string()
    .min(5, 'Must be at least 5 characters')
    .max(200, 'Must be no more than 200 characters')
    .required('Required'),

    projectDescription: Yup.string()
    .min(50, 'Must be at least 50 characters')
    .max(2000, 'Must be no more than 2000 characters')
    .required('Required'),
})

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const projectTaskFormValidation = Yup.object({
    
    taskName: Yup.string()
    .min(5, 'Must be at least 5 characters')
    .required('Required'),

    minTime: Yup.number()
    .moreThan(0, 'Must be > (greater than) 0')
    .required('Required'),

    pessTime: Yup.number()
    .moreThan(0, 'Must be > (greater than) 0')
    .required('Required'),

    maxTime: Yup.number()
    .moreThan(0, 'Must be > (greater than) 0')
    .required('Required'),

    risk: Yup.string()
    .min(2, 'Must be at least 2 characters'),
})

// exporting the form validation  module to be used across the app
// for fields (input fields)
export const profileFormValidation = Yup.object({
    
    firstName: Yup.string()
    .min(1, 'Must be at least 1 character')
    .required('Required'),

    lastName: Yup.string()
    .min(1, 'Must be at least 1 character')
    .required('Required'),
    
    emailAddress: Yup.string()
    .email('Invalid email address')
    .required('Required'),

    phoneNumber: Yup.string()
    .min(10, 'Must be 10 characters or more')
    // .max(11, 'Invalid phone number')
    .matches(
      // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      /^((\+44\s?|0)7([45789]\d{2}|624)\s?\d{3}\s?\d{3})$/,
      "Phone number is not valid"
    )
    .required('Required'),
  })