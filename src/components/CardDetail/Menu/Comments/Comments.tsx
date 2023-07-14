
/* CSS */
import s from "./Comments.module.css"

/* React Icons */
import {BsFillHandThumbsUpFill, BsFillHandThumbsDownFill} from "react-icons/bs"

type CommentsProps = {
    text: string
    owner: string
    rate: string
}

export default function Comments({text, owner, rate}: CommentsProps) {
  return (
    <div className={s.div_global}>
      <div className={s.div_circle2}>
        <div>
          <span>{owner[0].toUpperCase()}</span>
        </div>
      </div>
      <div className={s.div_text}>
        <div className={s.div_name}>
            <h3>{owner}</h3>
            <span>{rate}</span>
        </div>
        <div>
            <p>{text}</p>
        </div>
        <div className={s.div_options}>
          <span className={s.icon_options}>reply</span>
          <span> • </span>
          <span className={s.icon_options}>share</span>
          <span> • </span>
          <span className={s.icon_options}>490 likes</span>
          <BsFillHandThumbsDownFill className={s.icon_options}/>
          <BsFillHandThumbsUpFill className={s.icon_options}/>
        </div>
      </div>
      <div className={s.hr}/>
    </div>
  )
}
