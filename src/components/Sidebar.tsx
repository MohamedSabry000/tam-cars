import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Logo from "../assets/logo.png";
import MiniLogo from "../assets/mini-logo.png";
import DashboardIcon from "../assets/dashboard-icon.png";
import CarsIcon from "../assets/car-icon.png";
import GearIcon from '../assets/gear.png'
import LogoutIcon from '../assets/logout.png'

const links = [
  { label: "Dashboard", icon: DashboardIcon, path: "/" },
  { label: "Cars", icon: CarsIcon, path: "/cars" },
];

const bottomLinks = [
  { label: "Setting", icon: GearIcon, path: "/"},
  { label: "Log out", icon: LogoutIcon, path: "/"},
]

function Sidebar() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <aside
      className="w-14 md:w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 fixed top-0 left-0 z-10 overflow-hidden h-full"
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800 h-full">
        <Link to="/" className="flex items-center">
          {!isMobile ? (
            <img src={Logo} alt="logo" className="h-8 w-auto" />
          ) : (
            <img src={MiniLogo} alt="logo" className="h-8 w-auto" />
          )}
        </Link>
        <ul className="space-y-2 mt-4 overflow-hidden">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-100"
              >
                <img src={link.icon} alt="icon" className="h-6 w-auto" />
                <span className="ml-2">{link.label}</span>
              </Link>
            </li>
          ))}
          <div className="absolute bottom-3 left-3 w-full">
            {bottomLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-100"
                >
                  <img src={link.icon} alt="icon" className="h-6 w-auto" />
                  <span className="ml-2">{link.label}</span>
                </Link>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
