import {useState} from 'react'

import { TypeComment } from '../../../db'
import Comments from './Comments/Comments'

/* React Icons */
import {AiFillStar} from "react-icons/ai"
import {BsArrowDownCircleFill} from "react-icons/bs"

/* CSS */
import s from "./Food.module.css"


type FoodProps = {
    img: string
    name: string
    description: string
    comments: TypeComment[]
    rate: number
}

export default function Food({img,name,description,comments, rate}: FoodProps ){
    const [show, setShow] = useState<boolean>(false)

    return(
        <div className={s.div_global}>
            <div className={s.div_food}>
                <div>
                    <div className={s.circle}/>
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
                    <button onClick={() => setShow(s => !s)}>Your Feedback</button>
                </div>  
            </div>
            <div className={show ? s.div_comments : s.div_none}>
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
