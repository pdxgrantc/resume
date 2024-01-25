import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import PropTypes from "prop-types";

export default function Projects({ children }) {
  return (
    <div>
      {children}
      <div className="flex gap-20 my-5">
        <Project
          name={"Recipe Storage"}
          link={"https://budget.pdxgrantc.com"}
          imgName={"Budget.jpg"}
        />
      </div>
    </div>
  );
}

Projects.propTypes = {
  children: PropTypes.node,
};

function Project({ name, link, imgName }) {
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
    <div className="w-full">
      <h4 className="">{name}</h4>
      <a className="relative" href={link} target="_blank" rel="noreferrer">
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
};
