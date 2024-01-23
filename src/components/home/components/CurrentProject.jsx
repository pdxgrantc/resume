import PropTypes from "prop-types";

// icons
import { LiaPhotoVideoSolid as ClipIcon } from "react-icons/lia";

export default function CurrentProject({ children }) {
  return (
    <div>
      {children}
      <ClipIcon className="w-[30%] h-auto mx-auto my-8" />
      <p>
        I am a student at Oregon State University studying computer science. I
        expect to graduate in March of 2025 with a Bachelors degree in Computer
        Science with a focus in web and mobile application development. I am
        currently looking for an internship for the summer of 2024. I am
        passionate about learning new things and creating new projects.
      </p>
    </div>
  );
}

CurrentProject.propTypes = {
  children: PropTypes.node,
};
