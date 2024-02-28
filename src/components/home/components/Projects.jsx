import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import PropTypes from "prop-types";

export default function Projects({ children }) {
  const description =
    "This is a budgeting application that will allow users to input their spending and income to help them manage their finances. This project is written in React and uses Firebase for the backend and user authentication. I am using Tailwind CSS for the styling, allowing me to create a responsive and visually appealing application. I seleced Chart.js to create visual representations of the user's spending and income this is pictured in the projects section below.";

  return (
    <div>
      {children}
      <div className="flex flex-col gap-20 my-5">
        <Project
          name={"Easy Budget"}
          link={"https://budget.pdxgrantc.com"}
          imgName={"Budget.jpg"}
          description={description}
        />
      </div>
    </div>
  );
}

Projects.propTypes = {
  children: PropTypes.node,
};

function Project({ name, link, imgName, description }) {
  const [url, setUrl] = useState(null);

  // Get home page image url from firebase storage
  const getURL = async () => {
    const storageRef = ref(storage, imgName);
    const url = await getDownloadURL(storageRef);
    setUrl(url);
  };
  useEffect(() => {
    getURL();
  });

  return (
    <div className="w-full grid grid-cols-7 gap-8">
      <div className="col-span-2">
        <h4 className="text-xlheader font-semibold">{name}</h4>
        <p className="text-mdtext">{description}</p>
      </div>
      <a
        className="relative col-span-5"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="absolute w-full h-full bg-accent_red z-0 top-2 left-2"></div>
        <img src={url} alt={name} className="relative w-full h-full z-1" />
      </a>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  imgName: PropTypes.string,
  description: PropTypes.string,
};
