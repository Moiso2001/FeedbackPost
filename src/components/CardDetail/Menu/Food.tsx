import {useState} from 'react'

import { TypeComment } from '../../../db'
import Comments from './Comments/Comments'

/* React Icons */
import {AiFillStar} from "react-icons/ai"
import {BsArrowDownCircleFill} from "react-icons/bs"

/* CSS */
import s from "./Food.module.css"


type FoodProps = {
    id: number
    img: string
    name: string
    description: string
    comments: TypeComment[]
    rate: number
}

export default function Food({img, id,name,description,comments, rate}: FoodProps ){
    const [show, setShow] = useState<boolean>(false)

    return(
        <div className={s.div_global}>
            <div className={id % 2 !== 0 ? s.div_food : s.div_food__reversed}>
                <div className={s.div_circle}>
                    <div className={s.circle}/>
                </div>
                <div className={s.div_title}>
                    <div>
                        <div>
                            <span>{rate}</span>
                            <AiFillStar/>
                        </div>
                        <h3>{name}</h3>
                    </div>
                    <div className={s.div_text}>
                        <span>{description}</span>
                        <button onClick={() => setShow(s => !s)}>Feedback</button>
                    </div>    
                </div>  
            </div>
            <div className={show ? s.div_comments : s.div_none}>
                <div className={s.div_header}>
                    <h3>121</h3>
                    <span>comments</span>
                </div>
                <hr/>
                <div className={s.div_sort}>
                    <span>Sort By Newest</span>
                    <BsArrowDownCircleFill/>
                </div>
                <div className={s.div_input}>
                    <div>
                        <div className={s.div_circle2}>
                            <span>M</span>
                        </div>
                    </div>
                    <div>
                        <textarea placeholder='How was your experience...'/>
                        <button>Post</button>
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
