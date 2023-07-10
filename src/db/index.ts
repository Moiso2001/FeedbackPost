export type TypeRestaurant = {
    id: number
    img: string
    name: string
    description: string
    cost: number
    location: string
    menu: TypeFood[]
}

export type TypeFood = {
    id: number
    img: string
    name: string
    description: string
    comments: TypeComment[]
    rate: number
}

export type TypeComment = {
    id: number
    text: string
    owner: number | string
    rate: number
}

const commentSample: TypeComment[] = [{
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    owner: 'Lorem',
    rate: 3
}, {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    owner: 'Lorem',
    rate: 3
}, {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    owner: 'Lorem',
    rate: 3
} , {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    owner: 'Lorem',
    rate: 3
}]

const menuSample: TypeFood[] = [{
    id: 1,
    img: '',
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    comments: commentSample,
    rate: 3
} , {
    id: 2,
    img: '',
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    comments: commentSample,
    rate: 3
} , {
    id: 3,
    img: '',
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    comments: commentSample,
    rate: 3
} , {
    id: 4,
    img: '',
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    comments: commentSample,
    rate: 3
}]

export const restaurants: TypeRestaurant[] = [{
    id: 1,
    img: 'https://img.theculturetrip.com/wp-content/uploads/2022/01/andres-carne-de-res-restaurant-chia-cundinamarca-colombia.jpg',
    name: 'Andres D.C',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    cost: 3,
    location: '1111 N Lorem St',
    menu: menuSample

} , {
    id: 2,
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/15/da/15/terraza.jpg',
    name: 'Giraotire',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    cost: 4,
    location: '1111 N Lorem St',
    menu: menuSample

} , {
    id: 3,
    img: 'https://d2yoo3qu6vrk5d.cloudfront.net/images/20211113115953/crepes-waffles_-cual-es-el-nuevo-proyecto-que-abrio-fuera-de-bogota_-fotos.jpg',
    name: 'Creps & Waffles',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    cost: 3,
    location: '1111 N Lorem St',
    menu: menuSample

}] 

/* Services */

export function getRestaurantById(id: number) {
    const result = restaurants.find(e => e.id === id)

    return result ? result : undefined
}