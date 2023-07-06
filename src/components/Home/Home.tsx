import React from 'react'

/* React Icons */
import {CiFacebook} from "react-icons/ci" // Facebook
import {PiInstagramLogoLight, PiTiktokLogoLight} from "react-icons/pi" // Instagram n Tiktok

/* Images png */
import homeImage from "../../assets/steps icon.png"

export default function Home() {
  return (
    <div>
      <div>
        <h4>Taste of your favorite food</h4>
        <h2>The best restaurants around you, and for you ;)</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco
        </span>
        <button>Give your opinion</button>

        <div>
          <CiFacebook/>
          <PiInstagramLogoLight/>
          <PiTiktokLogoLight/>
        </div>
      </div>

      <div>
        <img src={homeImage} alt='image of plate of food and steps'/>
      </div>
    </div>
  )
}
