/* React */
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import {BsFillArrowDownCircleFill} from "react-icons/bs"

import { Link } from "react-router-dom"

/* Import from DB (hardcode) */
import { restaurants, TypeRestaurant } from '../../db'

/* Card import */
import Card from './Card/Card'

/* CSS */
import s from "./Cards.module.css" 


export default function Cards() {
  return (
    <div className={s.the_div}>
      <div className={s.div_global}>

      <Link to={'restaurant/1'} style={{textDecoration: 'none'}}>
        <div className={s.div_card1}>
          <div>
              <img src='https://img.theculturetrip.com/wp-content/uploads/2022/01/andres-carne-de-res-restaurant-chia-cundinamarca-colombia.jpg'/>
          </div>
          <div className={s.div_text}>
            <div className={s.div_text_info}>
              <span>andres d.c</span>
              <span>4.5</span>
            </div>
              <AiOutlineHeart/> 
          </div>
        </div>
      </Link>
      <Link to='restaurant/2' style={{textDecoration: 'none'}}>
        <div className={s.div_card2}>
          <div>
              <img src='https://media-cdn.tripadvisor.com/media/photo-s/15/15/da/15/terraza.jpg'/>
          </div>
          <div className={s.div_text}>
            <div className={s.div_text_info}>
              <span>la giratoria</span>
              <span>3.5</span>
            </div>
              <AiFillHeart className={s.icon}/> 
          </div>
        </div>
      </Link>
      <Link to='restaurant/3' style={{textDecoration: 'none'}}>
        <div className={s.div_card3}>
          <div>
              <img src='https://d2yoo3qu6vrk5d.cloudfront.net/images/20211113115953/crepes-waffles_-cual-es-el-nuevo-proyecto-que-abrio-fuera-de-bogota_-fotos.jpg'/>
          </div>
          <div className={s.div_text}>
            <div className={s.div_text_info}>
              <span>creps and waffles</span>
              <span>4.3</span>
            </div>
              <AiOutlineHeart/>   
          </div>
        </div>
      </Link>
      </div>
      
      
      <div className={s.div_button}>
        <BsFillArrowDownCircleFill className={s.arrowMore}/>
      </div>
    </div>
  )
}
