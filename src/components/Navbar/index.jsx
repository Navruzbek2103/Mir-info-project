import React from 'react';
import "./style.scss";
import { NavLink, Link } from 'react-router-dom';
import {IoIosToday} from "react-icons/io"
import { BiCategory } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiWindows } from "react-icons/bi";


const index = () => {
   return (
     <header className="header">
       <div className="container">
         <nav className="nav">
           <ul className="nav__list">
             <li className="nav__item">
               <NavLink to="" className="nav__item-link">
                 <IoIosToday className='nav__item-link-icon' size={`2em`}/>
                 Today
               </NavLink>
             </li>

             <li className="nav__item">
               <NavLink to="" className="nav__item-link">
                 <BiCategory className='nav__item-link-icon' size={`2em`}/>
                 Categories
               </NavLink>
             </li>

             <li className="nav__item">
               <NavLink to="" className="nav__item-link">
                 <FaStar className='nav__item-link-icon' size={`2em`}/>
                 Discover
               </NavLink>
             </li>

             <li className="nav__item">
               <NavLink to="" className="nav__item-link">
                 <BsSearch className='nav__item-link-icon' size={`2em`}/>
                 Search
               </NavLink>
             </li>

             <li className="nav__item">
               <NavLink to="" className="nav__item-link">
                 <BiWindows className='nav__item-link-icon' size={`2em`}/>
                 Pages
               </NavLink>
             </li>
           </ul>
         </nav>
       </div>
     </header>
   );
};

export default index;