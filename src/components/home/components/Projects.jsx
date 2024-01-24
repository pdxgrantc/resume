import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import PropTypes from "prop-types";

export default function Projects({ children }) {
  return (
    <div>
      <div className="z-10 relative w-60 h-60 bg-green-700">
        <div className="absolute z-20 bottom-10 right-10 w-60 h-60 bg-red-700"></div>
      </div>
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
    <div className="">
      <div className="z-[1] relative">
        <a href={link} target="_blank" rel="noreferrer">
          <h4 className="">{name}</h4>
          <img src={url} alt={name} className="w-full h-full" />
        </a>
      </div>
      <div className="w-[50px] bg-red-700 h-[50px] z-0 bottom-10 left-10"></div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  imgName: PropTypes.string,
};
