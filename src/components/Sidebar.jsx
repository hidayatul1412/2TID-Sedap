import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineOrderedList } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${
          isActive
            ? "text-hijau bg-green-200 font-extrabold"
            : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;

  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex flex-col">
        <span
          id="logo-title"
          className="font-poppins-extrabold text-[48px] text-gray-900"
        >
          Sedap{" "}
          <b id="logo-dot" className="text-hijau">
            .
          </b>
        </span>
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <li>
            <NavLink id="menu-1" to="/" className={menuClass}>
              <MdDashboard className="mr-4 text-xl" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-2" to="/orders" className={menuClass}>
              <AiOutlineOrderedList className="mr-4 text-xl" />
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-3" to="/customers" className={menuClass}>
              <AiOutlineUser className="mr-4 text-xl" />
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-4" to="/401" className={menuClass}>
              <BsPeople className="mr-4 text-xl" />
              Error 401
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-5" to="/404" className={menuClass}>
              <BsPeople className="mr-4 text-xl" />
              Error 404
            </NavLink>
          </li>
          <li>
            <NavLink id="menu-6" to="/user" className={menuClass}>
              <AiOutlineUser className="mr-4 text-xl" />
              User List
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 cursor-pointer"
            >
              <span className="text-gray-600 flex items-center">
                <AiOutlinePlus />
                Add Menus
              </span>
            </div>
          </div>
          <img
            id="footer-avatar"
            className="w-20 rounded-full"
            src="https://avatar.iran.liara.run/public/28"
          />
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          Sedap Restaurant Admin Dashboard
        </span>
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
