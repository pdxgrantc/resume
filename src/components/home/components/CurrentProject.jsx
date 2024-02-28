import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// firebase
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";

export default function CurrentProject({ children }) {
  return (
    <div>
      {children}
      <Image imgName={"Budget.jpg"} className="w-[30%] h-auto mx-auto my-8" />
      <p>
        I am currently working on a budgeting application that will allow users
        to input their spending and income to help them manage their finances.
        This project is written in React and uses Firebase for the backend and
        user authentication. I am using Tailwind CSS for the styling, allowing
        me to create a responsive and visually appealing application. I seleced
        Chart.js to create visual representations of the user&apos;s spending
        and income this is pictured in the projects section below.
      </p>
    </div>
  );
}

CurrentProject.propTypes = {
  children: PropTypes.node,
};

function Image({ imgName }) {
  const [url, setUrl] = useState(null);

  const getURL = async () => {
    const storageRef = ref(storage, imgName);
    const url = await getDownloadURL(storageRef);
    setUrl(url);
  };

  useEffect(() => {
    getURL();
  });

  return (
    <div className="my-8">
      <img className="w-auto h-auto" src={url} alt="Budgeting Application" />
    </div>
  );
}

Image.propTypes = {
  imgName: PropTypes.string,
};
