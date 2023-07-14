/* React God */
//import React from 'react';
/* CSS */
import s from './Header.module.css'

/* REACT ICONS */
import {CiSearch} from "react-icons/ci";
import {BsPersonCircle} from "react-icons/bs";
import {MdStars} from "react-icons/md";

/* React Icons */
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className={s.div_global}>
        <div className={s.div_title}>
            <h1 className={s.title_yellow}>Feedback</h1>
            <h1 className={s.title_green}>Post</h1>
        </div>
        <div className={s.div_navbar}>
            <ul>
              <Link to='/' style={{"textDecoration": "none", "color": "rgba(0, 0, 0, 0.631)"}}>
                <li>Home</li>
              </Link>
              <Link to='/' style={{"textDecoration": "none", "color": "rgba(0, 0, 0, 0.631)"}}>
                  <li>Favourites</li>
              </Link>
              <Link to='/' style={{"textDecoration": "none", "color": "rgba(0, 0, 0, 0.631)"}}>
                <li>Contact</li>
              </Link>
            </ul>
        </div>
        <div className={s.div_helpers}>
            <div className={s.helpers_search}>
                <input placeholder='Search...'/>
                <CiSearch className={s.search_icon}/>
            </div>
            <div className={s.helpers_icons}>
                <BsPersonCircle className={s.icon_profile}/>
            </div>
            <div className={s.helpers_icons}>
                <MdStars className={s.icon_premium}/>
            </div>
        </div>
    </div>
  )
}
