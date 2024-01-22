import React from 'react'

export default function Projects({ children }) {
  return (
    <div>
      {children}
      <div className='flex gap-20 my-5'>
        <Project
          name={"Recipe Storage"}
          link={'https://pdxgrantc.com'}
        />
        <Project />
      </div>
    </div>
  )
}

function Project({ name, link }) {
  return (
    <div>
      <h4 className=''>{name}</h4>
    </div>
  )
}




