import React from 'react'

import { TypeComment } from '../../../db'
import Comments from './Comments/Comments'

/* React Icons */
import {AiFillStar} from "react-icons/ai"
import {BsArrowDownCircleFill} from "react-icons/bs"

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
                <div>
                    <h3>{name}</h3>
                    <div>
                        <span>{rate}</span>
                        <AiFillStar/>
                    </div>
                </div>
                <span>{description}</span>
                <button>Your Feedback</button>
            </div>  
            <div>
                <div>
                    <h3>{comments.length}</h3>
                    <span>comments</span>
                </div>
                <hr/>
                <div>
                    <span>Sort By Newest</span>
                    <BsArrowDownCircleFill/>
                </div>
                <div>
                    <div>
                        <img/>
                    </div>
                    <div>
                        <textarea/>
                        <button>Submit</button>
                    </div>
                </div>
                <div>
                    <div>
                        {comments.map(e => <Comments key={e.id} owner={e.owner} text={e.text} rate={e.rate}/>)}
                    </div>
                </div>
            </div>
        </div>
    )

}
