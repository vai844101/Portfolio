import { Link, NavLink } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";

import VaibhavKumarResume from "../assets/Vaibhav_Kumar.pdf";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-1g bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">VK</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>

        <div className="flex items-center self-start mt-0">
          <a
            href={VaibhavKumarResume} // Use the imported file path
            // download="Vaibhav_Kumar_Resume.pdf" // File name for download
            target="_blank" // Opens the file in a new tab if clicked normally
            rel="noopener noreferrer" // Security best practice
            className="flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-xl text-lg font-bold transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <FaFileDownload className="mr-3 text-xl" />
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
