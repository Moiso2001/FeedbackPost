import React from 'react'

import { TypeComment } from '../../../db'
import Comments from './Comments/Comments'

type FoodProps = {
    img: string
    name: string
    description: string
    comments: TypeComment[]
    rate: number
}

export default function Food({img,name,description,comments, rate}: FoodProps ){
    return(
        <div>
            <div>
                <img src={img}/>
            </div>
            <div>
                <h3>{name}</h3>
                <span>{description}</span>
                <button>Your Feedback</button>
            </div>  
            <div>
                {/* <div>
                    {comments.map(e => <Comments key={e.id} owner={e.owner} text={e.text} rate={e.rate}/>)}
                </div> */}
            </div>
        </div>
    )

}
