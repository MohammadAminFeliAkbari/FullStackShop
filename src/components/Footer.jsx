import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <NavLink to="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </NavLink>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <NavLink to="#" className="hover:underline me-4 md:me-6">
              About
            </NavLink>
          </li>
          <li>
            <a
              href="https://github.com/"
              className="hover:underline me-4 md:me-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git Hub
            </a> 
          </li>
          <li>
            <NavLink
              to="#"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Licensing
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="hover:underline">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}
