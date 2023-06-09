/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLightbulb } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      {/* <nav className="fixed w-screen nav-trans flex justify-between items-center px-14 py-8 mx-auto dark:bg-black"> */}
      <nav className="sticky top-0 z-10 mx-auto my-0 flex w-full items-center justify-between p-8 backdrop-blur-sm md:my-8">
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="hover-grey flex h-12 w-12 items-center justify-center rounded bg-sky-200 p-2 dark:bg-white"
        >
          <FontAwesomeIcon icon={faLightbulb} />
        </div>
        <div>
          {/* <Link to="/viz" className="nav-link">
            Visualization
          </Link> */}
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <Link to="/courses" className="nav-link">
            Coursework
          </Link>
          <Link to="/" className="nav-link">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </div>
      </nav>
      {/* <Outlet /> */}
    </>
  );
}

export default Header;
