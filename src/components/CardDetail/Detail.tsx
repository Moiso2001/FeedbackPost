/* React */
import {useState} from 'react'
import { TypeFood, TypeRestaurant } from '../../db'
import Food from './Menu/Food'

type DetailProps = {
    id: number
}

export default function Detail({id}: DetailProps) {
    const [restaurant, setRestaurant] = useState<TypeRestaurant | undefined>()



    if(restaurant){
        return (
          <div>
            <div>
                <img src={restaurant.img}/>
            </div>
            <div>
                <h2>WELCOME TO ${restaurant.name.toUpperCase()}</h2>
                <p>{restaurant.description}</p>
            </div>
            <div>
                {restaurant.menu.map((e: TypeFood) => 
                    <Food
                        key={e.id}
                        img={e.img}
                        name={e.name}
                        description={e.description}
                        comments={e.comments}
                    />
                )}
            </div>
          </div>
        )
    }

    return(
        <div>
            No existe xd
        </div>
    )
}
