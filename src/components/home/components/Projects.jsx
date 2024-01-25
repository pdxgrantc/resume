import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import PropTypes from "prop-types";

export default function Projects({ children }) {
  return (
    <div>
      {children}
      <div className="flex flex-col gap-20 my-5">
        <ProjectNorm
          name={"Recipe Storage"}
          link={"https://budget.pdxgrantc.com"}
          imgName={"Budget.jpg"}
        />
        <ProjectRev
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

function ProjectNorm({ name, link, imgName }) {
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
      <a className="relative col-span-5" href={link} target="_blank" rel="noreferrer">
        <div className="absolute w-full h-full bg-accent_red z-0 top-2 left-2"></div>
        <img src={url} alt={name} className="relative w-full h-full z-1" />
      </a>
      <div className="col-span-2">
        <h4 className="">{name}</h4>
      </div>
    </div>
  );
}

ProjectNorm.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  imgName: PropTypes.string,
};

function ProjectRev({ name, link, imgName }) {
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
        <h4 className="">{name}</h4>
      </div>
      <a className="relative col-span-5" href={link} target="_blank" rel="noreferrer">
        <div className="absolute w-full h-full bg-accent_red z-0 top-2 left-2"></div>
        <img src={url} alt={name} className="relative w-full h-full z-1" />
      </a>
    </div>
  );
}

ProjectRev.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  imgName: PropTypes.string,
};
