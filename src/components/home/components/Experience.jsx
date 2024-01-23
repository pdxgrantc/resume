import PropTypes from 'prop-types';

// icons
import { RiJavascriptFill as Javascript } from 'react-icons/ri'
import { SiReact as ReactIcon } from 'react-icons/si'
import { FaAngular  as Angular } from 'react-icons/fa'
import { SiTailwindcss as Tailwind } from 'react-icons/si'
import { SiFirebase as Firebase } from 'react-icons/si'
import { FaNodeJs as Node } from 'react-icons/fa'


export default function Experience({ children }) {
  return (
    <div className='w-full flex flex-col gap-10'>
      {children}
      <div className='mx-auto w-fit'>
        <Skills />
      </div>
    </div>
  )
}

Experience.propTypes = {
  children: PropTypes.node,
}


function Skills() {
  return (
    <div className='grid grid-cols-2 gap-x-10 gap-y-5 w-fit'>
      <div className='col-span-2 mx-auto w-[12rem] border-accent_red border-b-[3px]'>
        <h4 className='mx-auto w-fit flex gap-2 h-[3.5rem] text-xlarge font-bold pb-3'>
          Skills
        </h4>
      </div>
      
      <Skill>
        <Javascript className='h-full w-fit mx-0' />
        <p>JavaScript</p>
      </Skill>
      <Skill>
        <ReactIcon className='h-full w-fit mx-0' />
        <p>React</p>
      </Skill>
      <Skill>
        <Angular className='h-full w-fit mx-0' />
        <p>Angular</p>
      </Skill>
      <Skill>
        <Tailwind className='h-full w-fit mx-0' />
        <p>TailwindCSS</p>
      </Skill>
      <Skill>
        <Firebase className='h-full w-fit mx-0' />
        <p>Firebase</p>
      </Skill>
      <Skill>
        <Node className='h-full w-fit mx-0' />
        <p>Node JS</p>
      </Skill>
    </div>
  )
}


function Skill({ children }) {
  return (
    <div className='w-[18rem] border-accent_red border-b-[3px]'>
      <div className='mx-auto w-fit flex gap-2 h-[3rem] text-medium font-semibold pb-3 group overflow-hidden transform transition-transform duration-300 hover:scale-[1.15]'>
        {children}
      </div>
    </div>
  )
}

Skill.propTypes = {
  children: PropTypes.node,
}
