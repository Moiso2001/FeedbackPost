import React from 'react'

import { TypeComment } from '../../../db'

type FoodProps = {
    img: string
    name: string
    description: string
    comments: TypeComment[]
}

export default function Food({img,name,description,comments}: FoodProps ){
    return(
        <div>
            
        </div>
    )

}
