
/* DB Types */

type CommentsProps = {
    text: string
    owner: string | number
    rate: number
}

export default function Comments({text, owner, rate}: CommentsProps) {
  return (
    <div>
        <div>
            <span>{owner}</span>
            <span>{rate}</span>
        </div>
        <div>
            <p>{text}</p>
        </div>
    </div>
  )
}
