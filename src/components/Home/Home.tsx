/* React Icons */
import {CiFacebook} from "react-icons/ci" // Facebook
import {PiInstagramLogoLight, PiTiktokLogoLight, PiStarFourThin} from "react-icons/pi" // Instagram n Tiktok


/* Images png */
import homeImage from "../../assets/steps icon.png"

/* CSS */
import s from './Home.module.css';
import Cards from "../Cards/Cards";

export default function Home() {
  return (
    <div className={s.the_div}>
      <div className={s.div_global}>
        <PiStarFourThin className={s.star_1}/>  
        <div className={s.div_text}>
          <h4>Taste of your favorite food !</h4>
          <h2>Top-notch eateries, just for you!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <button>Give your opinion</button>

          <div className={s.div_social}>
            <CiFacebook/>
            <PiInstagramLogoLight/>
            <PiTiktokLogoLight/>
          </div>
          <PiStarFourThin className={s.star_2}/> 
        </div>
  
        <div>
          <img src={homeImage} alt='image of plate of food and steps'/>
          <PiStarFourThin className={s.star_3}/> 
        </div>
      </div>

      <Cards/>
    </div>
  )
}
