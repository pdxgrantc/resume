import PropTypes from 'prop-types';

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

Projects.propTypes = {
  children: PropTypes.node,
}


function Project({ name, link}) {
  return (
    <div>
      <h4 className=''>{name}</h4>
      <a href={link}>{link}</a>
    </div>
  )
}

Project.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
}




