import React from 'react';

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
    <div>
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
