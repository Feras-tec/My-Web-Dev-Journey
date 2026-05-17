import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="navbar bg-base-100 shadow-lg px-4 md:px-8 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            aria-label="Open responsive navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <title>Menu Icon</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#projects" className="text-base-content font-bold">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="text-base-content font-bold">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="text-base-content font-bold">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <a
          href="#"
          className="text-xl font-black tracking-tighter cursor-pointer text-base-content"
        >
          FERAS.TEC
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold text-base-content gap-2">
          <li>
            <a
              href="#projects"
              className="hover:text-red-500 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-red-500 transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-500 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <a
          href="https://github.com/Feras-tec"
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost btn-circle text-base-content hover:text-red-500 transition-colors"
          aria-label="Open and view my profile portfolio source code repositories on GitHub"
        >
          <svg
            height="20"
            width="20"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <title>GitHub Platform Logo</title>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>

        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle text-base-content hover:text-red-500 transition-colors"
          aria-label={`Switch application interface display color to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <Moon size={20} aria-hidden="true" focusable="false" />
          ) : (
            <Sun size={20} aria-hidden="true" focusable="false" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
