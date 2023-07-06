/* React God */
//import React from 'react';

/* REACT ICONS */
import {CiSearch} from "react-icons/ci";
import {BsPersonCircle} from "react-icons/bs";
import {MdStars} from "react-icons/md";

export default function Header() {
  return (
    <div>
        <div>
            <h2>Feedback</h2>
            <h2>Post</h2>
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>Favourites</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <input/>
            <CiSearch/>
        </div>
        <div>
            <BsPersonCircle/>
        </div>
        <div>
            <MdStars/>
        </div>
    </div>
  )
}
