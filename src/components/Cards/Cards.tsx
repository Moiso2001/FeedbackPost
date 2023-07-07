/* React */
import React from 'react'

/* Import from DB (hardcode) */
import { restaurants, TypeRestaurant } from '../../db'

/* Card import */
import Card from './Card/Card'
// 
export default function Cards() {
  return (
    <div>
      <div>
        {restaurants.map((e: TypeRestaurant) => 
          <Card 
            key={e.id}
            id={e.id}
            img={e.img}
            name={e.name} 
            description={e.description}
            cost={e.cost}
            location={e.location}
            menu={e.menu}
          />
        )}
      </div>
      <div>
        <button>View All</button>
      </div>
    </div>
  )
}
