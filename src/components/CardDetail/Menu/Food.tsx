import React from 'react'

import { TypeComment } from '../../../db'
import Comments from './Comments/Comments'

type FoodProps = {
    img: string
    name: string
    description: string
    comments: TypeComment[]
}

export default function Food({img,name,description,comments}: FoodProps ){
    return(
        <div>
            <div>
                <img src={img}/>
            </div>
            <div>
                <h3>{name}</h3>
                <span>{description}</span>
                <button>REVIEWS</button>
            </div>  
            <div>
                <div>
                    <span>{comments.length}</span>
                </div>
                <div>
                    {comments.map(e => <Comments key={e.id} owner={e.owner} text={e.text} rate={e.rate}/>)}
                </div>
                <div>
                    <form>
                        <textarea/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )

}
