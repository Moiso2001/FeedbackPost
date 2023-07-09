/* React */
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

/* DB */
import { TypeFood, TypeRestaurant, getRestaurantById } from '../../db'

/* Components */
import Food from './Menu/Food'



export default function Detail() {
    const [restaurant, setRestaurant] = useState<TypeRestaurant | undefined>();
    const {id} = useParams();

    console.log(id)
    useEffect(() => {
        if(id){
            setRestaurant(getRestaurantById(Number(id)))
        } 
    }, [])



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
                        rate={e.rate}
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
