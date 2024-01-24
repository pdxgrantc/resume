import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet";

// icons
import { HiChevronDoubleDown as DownArrow } from "react-icons/hi";

// firebase
import { storage } from "../../firebase";
import { ref, getDownloadURL } from "@firebase/storage";

// components
import { ButtonStyle, ContentHeader } from "../../Lib";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CurrentProject from "./components/CurrentProject";

export default function Home() {
  const [url, setUrl] = useState(null);

  // Get home page image url from firebase storage
  const getURL = async () => {
    const storageRef = ref(storage, "HomeProfile.jpg");
    const url = await getDownloadURL(storageRef);
    setUrl(url);
  };
  useEffect(() => {
    getURL();
  }, []);

  // Refs for scrolling to sections
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  // Scroll to start of the page content
  const scrollToHeader = () => {
    if (headerRef.current) {
      // Scroll to the target div
      headerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      // Get the reference element's position
      const referencePosition = aboutRef.current.offsetTop;

      // Calculate the new scroll position with an offset
      const newScrollPosition =
        referencePosition -
        7.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);

      // Scroll to the new position
      window.scrollTo({
        top: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToExperience = () => {
    if (experienceRef.current) {
      // Get the reference element's position
      const referencePosition = experienceRef.current.offsetTop;

      // Calculate the new scroll position with an offset
      const newScrollPosition =
        referencePosition -
        6 * parseFloat(getComputedStyle(document.documentElement).fontSize);

      // Scroll to the new position
      window.scrollTo({
        top: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      // Get the reference element's position
      const referencePosition = projectsRef.current.offsetTop;

      // Calculate the new scroll position with an offset
      const newScrollPosition =
        referencePosition -
        7.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);

      // Scroll to the new position
      window.scrollTo({
        top: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  // Code to make the navbar sticky at after scrolling past the first viewport
  const [isSticky, setIsSticky] = useState(false);
  const [scrollThreshold, setScrollThreshold] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const updateScrollThreshold = () => {
      setScrollThreshold(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateScrollThreshold);

    // Initial setup
    updateScrollThreshold();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollThreshold);
    };
  }, [scrollThreshold]);

  const imageStyle = {
    height: `full`, // Set the desired height
    width: "auto", // Let the width adjust based on the aspect ratio
    display: "block", // Remove any default inline-block spacing
  };

  return (
    <div>
      <Helmet>
        <title>Grant Conklin</title>
      </Helmet>
      <div className="w-full min-h-screen bg-bg text h-full">
        <div className="h-screen flex flex-nowrap bg-accent_bg">
          <img src={url} alt="Grant" style={imageStyle} />
          <div className="min-w-[550px] my-auto flex flex-col gap-6 ml-16">
            <div className="flex flex-col gap-3">
              <h2 className="text-xlheader font-bold">
                I&apos;m Grant Conklin
              </h2>
              <h3 className="text-lheader font-semibold">
                Full Stack Web Developer
              </h3>
              <h3 className="text-lheader leading-[4rem] font-semibold">
                Student at Oregon State University
              </h3>
            </div>
            <ButtonStyle click={scrollToHeader}>
              <p className="text-sheader">View my work</p>
              <DownArrow className="h-8 w-auto my-auto" />
            </ButtonStyle>
          </div>
        </div>
        <div
          ref={headerRef}
          className={`sticky-navbar${isSticky ? " sticky" : ""}`}
        >
          <Header title={"Grant Conklin"}>
            <ButtonStyle click={scrollToAbout}>
              <p className="text-xlarge">About</p>
            </ButtonStyle>
            <ButtonStyle click={scrollToExperience}>
              <p className="text-xlarge">Experience</p>
            </ButtonStyle>
            <ButtonStyle click={scrollToProjects}>
              <p className="text-xlarge">Projects</p>
            </ButtonStyle>
          </Header>
        </div>
        <div
          className={`flex flex-col gap mx-page ${
            isSticky ? "sticky-navbar-padding" : ""
          }`}
        >
          <div ref={aboutRef} className="grid grid-cols-5 gap-[7rem]">
            <div className="col-span-2">
              <About>
                <ContentHeader title={"About"} />
              </About>
            </div>
            <div className="col-span-3 w-full h-full">
              <CurrentProject>
                <ContentHeader title={"Current Project"} />
              </CurrentProject>
            </div>
          </div>
          <div ref={experienceRef}>
            <Experience>
              <ContentHeader title={"Experience"} />
            </Experience>
          </div>
          <div ref={projectsRef}>
            <Projects>
              <ContentHeader title={"Projects"} />
            </Projects>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
