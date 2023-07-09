
/* DB Types */

/* React Icons */
import {BsFillHandThumbsUpFill, BsFillHandThumbsDownFill} from "react-icons/bs"

type CommentsProps = {
    text: string
    owner: string | number
    rate: number
}

export default function Comments({text, owner, rate}: CommentsProps) {
  return (
    <div>
      <div>
        <img/>
      </div>
      <div>
        <div>
            <span>{owner}</span>
            <span>{rate}</span>
        </div>
        <div>
            <p>{text}</p>
        </div>
        <div>
          <span>reply</span>
          <span>share</span>
          <span>490 likes</span>
          <BsFillHandThumbsDownFill/>
          <BsFillHandThumbsUpFill/>
        </div>
      </div>
      <hr/>
    </div>
  )
}
