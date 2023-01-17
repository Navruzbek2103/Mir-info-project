import React from "react";
import "./style.scss";
import { NavLink, Link } from "react-router-dom";
import { IoIosToday } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiWindows } from "react-icons/bi";

const index = () => {
  // let menuActiveLink = "color: {red}" // isActive o'xshamadi

  return (
    // <header className="header">
    //   <div className="container">
    //     <nav className="nav">
    //       <ul className="nav__list">
    //         <li className="nav__item">
    //           <NavLink to="/" className="nav__item-link">
    //             <IoIosToday className="nav__item-link-icon" />
    //             Today
    //           </NavLink>
    //         </li>

    //         <li className="nav__item">
    //           <NavLink to="/categories" className="nav__item-link">
    //             <BiCategory className="nav__item-link-icon" />
    //             Categories
    //           </NavLink>
    //         </li>

    //         <li className="nav__item">
    //           <NavLink to="/discover" className="nav__item-link">
    //             <FaStar className="nav__item-link-icon" />
    //             Discover
    //           </NavLink>
    //         </li>

    //         <li className="nav__item">
    //           <NavLink to="/search" className="nav__item-link">
    //             <BsSearch className="nav__item-link-icon" />
    //             Search
    //           </NavLink>
    //         </li>

    //         <li className="nav__item">
    //           <NavLink to="/pages" className="nav__item-link">
    //             <BiWindows className="nav__item-link-icon" />
    //             Pages
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>

    <nav className="nav my-5 p-4">
      <ul className="nav__list d-flex flex-column gap-5">
        <li className="nav__item">
          <NavLink to="/" className="nav__item-link d-flex align-items-center gap-3 text-dark">
            <IoIosToday className="nav__item-link-icon rounded-4 p-2" size={`1.5em`} />
            Today
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink to="/categories" className="nav__item-link d-flex align-items-center gap-3 text-dark">
            <BiCategory className="nav__item-link-icon rounded-4 p-2" size={`1.5em`} />
            Categories
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink to="/discover" className="nav__item-link d-flex align-items-center gap-3 text-dark">
            <FaStar className="nav__item-link-icon rounded-4 p-2" size={`1.5em`} />
            Discover
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink to="/search" className="nav__item-link d-flex align-items-center gap-3 text-dark">
            <BsSearch className="nav__item-link-icon rounded-4 p-2" size={`1.5em`} />
            Search
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink to="/pages" className="nav__item-link d-flex align-items-center gap-3 text-dark">
            <BiWindows className="nav__item-link-icon rounded-4 p-2" size={`1.5em`} />
            Pages
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default index;
