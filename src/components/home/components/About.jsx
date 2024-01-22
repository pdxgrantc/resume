import PropTypes from 'prop-types';

// icons
import { MdPerson as Person } from 'react-icons/md'


export default function About({ children }) {
  return (
    <div>
      {children}
      <div className='grid grid-cols-5 gap-16'>
        <div className='col-span-2'>
          <Person className='w-3/5 h-auto mx-auto' />
          <p>
            I am a student at Oregon State University studying computer science.
            I expect to graduate in March of 2025 with a Bachelors degree in Computer Science with a focus in web and mobile application development.
            I am currently looking for an internship for the summer of 2024.
            I am passionate about learning new things and creating new projects.
          </p>
        </div>
        <div className='bg-accent_bg w-full h-full col-span-3'>
      
        </div>
      </div>
    </div>
  )
}

About.propTypes = {
  children: PropTypes.node,
}
