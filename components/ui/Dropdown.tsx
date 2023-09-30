"use client"
import React, { useState, useRef, useEffect } from 'react';

const MiMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  return (
    <div className="relative inline-block text-center" ref={dropdownRef}>
      <button
        id="dropdownDelayButton"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={toggleDropdown}
      >
        Mi Menu
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="z-10 absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black"
              >
                Podex
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black"
              >
                Galleta de la suerte
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-white dark:hover:bg-white hover:text-black dark:hover:text-black"
              >
                Shop
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MiMenu;
