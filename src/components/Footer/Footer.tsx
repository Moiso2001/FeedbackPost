import React from 'react'

import s from "./Footer.module.css"

/* React Icons */
import {FaAppStore} from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

export default function Footer() {
  return (
    <div>
      <footer className={s.footer}>
        <div className={s.div_title}>
          <h1 className={s.title_yellow}>Feedback</h1>
          <h1 className={s.title_green}>Post</h1>
        </div>
        <div className={s.div_navbar}>
            <ul>
                <li>Home</li>
                <li>Favourites</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className={s.div_app}>
          <BiLogoPlayStore className={s.appIcon}/>
          <FaAppStore className={s.appIcon}/>
        </div>
        <div className={s.div_footer__content}>
          <p>&copy; 2023 Your Restaurant Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
