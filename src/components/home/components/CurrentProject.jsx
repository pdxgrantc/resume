import PropTypes from "prop-types";

// icons
import { LiaPhotoVideoSolid as ClipIcon } from "react-icons/lia";

export default function CurrentProject({ children }) {
  return (
    <div>
      {children}
      <ClipIcon className="w-[30%] h-auto mx-auto my-8" />
      <p>
        I am currently working on a budgeting application that will allow users
        to input their spending and income to help them manage their finances.
        This project is written in React and uses Firebase for the backend and
        user authentication. I am using Tailwind CSS for the styling, allowing
        me to create a responsive and visually appealing application. I seleced
        Chart.js to create visual representations of the user&apos;s spending and
        income this is pictured in the projects section below.
      </p>
    </div>
  );
}

CurrentProject.propTypes = {
  children: PropTypes.node,
};
