import React from 'react';

/* React Icons */
import {AiOutlineHeart} from "react-icons/ai"

/* CSS */
import s from "./Card.module.css"

type CardProps = {
    id: number
    img: string
    name: string
    description: string
    cost: number
    location: string
    menu: unknown
}

export default function Card({id, img, name, description, cost, location, menu}: CardProps) {
  return (
    <div className={s.div_global}>
        <div>
          <AiOutlineHeart/>
        </div>
        <div>
            <img src={img}/>
        </div>
        <div>
            <span>{name}</span>
            <span>{cost}</span>
        </div>
    </div>
  )
}
