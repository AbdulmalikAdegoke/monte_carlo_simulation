import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProjectHistory({ projects }) {
  return (
    <tr>
        <th scope="row">
            {projects}
        </th>
        <td>
            {projects}
        </td>
        <td>
            {projects}
        </td>
        <td>
            <span className='projectActions' onClick={()=>{}} style={{float:'left',color:'#0500FF'}}>
                View
            </span>
            <span className='projectActions' onClick={()=>{}} style={{float:'right',color:'#0500FF'}}>
                Delete
            </span>
        </td>
    </tr>   
  )
}
