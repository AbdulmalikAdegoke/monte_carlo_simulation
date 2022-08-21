import React from 'react'

import { Formik } from 'formik'

import FormField from './FormField';

import { Empty } from 'antd';

export default function DB_Output({ formData }) {
  return (
    <div className='formContent'>
      {/* conditional rendering */}
      {formData.tasks.length === 0?
        <Empty />:
        <Empty />// placeholder until data is to be put in place
        
      }
        
    </div>
  )
}
