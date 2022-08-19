import React from 'react'

// the layout that is shared by most of the app's page
export default function BaseLayout({ entryPointPage }) {
  return (
    <>
      {entryPointPage?
      <div>

      </div>
      :
      <div>
        
      </div>
      }
    </>
  )
}
