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
    img: '',
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    cost: 3,
    location: '1111 N Lorem St',
    menu: menuSample

} , {
    id: 2,
    img: '',
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    cost: 4,
    location: '1111 N Lorem St',
    menu: menuSample

} , {
    id: 3,
    img: '',
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    cost: 3,
    location: '1111 N Lorem St',
    menu: menuSample

} , {
    id: 4,
    img: '',
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    cost: 6,
    location: '1111 N Lorem St',
    menu: menuSample

} , {
    id: 5,
    img: '',
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    cost: 3,
    location: '1111 N Lorem St',
    menu: menuSample

} , {
    id: 6,
    img: '',
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    cost: 3,
    location: '1111 N Lorem St',
    menu: menuSample

}] 

/* Services */

export function getRestaurantById(id: number) {
    return restaurants.find(e => e.id === id)
}