/* React Icons */
import {CiFacebook} from "react-icons/ci" // Facebook
import {PiInstagramLogoLight, PiTiktokLogoLight} from "react-icons/pi" // Instagram n Tiktok

/* Images png */
import homeImage from "../../assets/steps icon.png"

/* CSS */
import s from './Home.module.css';

export default function Home() {
  return (
    <div className={s.div_global}>
      <div className={s.div_text}>
        <h4>Taste of your favorite food !</h4>
        <h2>Top-notch eateries, just for you!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>
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
