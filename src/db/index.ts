type TypeRestaurant = {
    id: number
    name: string
    description: string
    cost: number
    location: string
    menu: TypeFood[]
}

type TypeFood = {
    id: number
    name: string
    description: string
    comments: TypeComment[]
}

type TypeComment = {
    id: number
    text: string
    owner: number | string
}

const commentSample: TypeComment[] = [{
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    owner: 'Lorem'
}, {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    owner: 'Lorem'
}, {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    owner: 'Lorem'
} , {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    owner: 'Lorem'
}]

const menuSample: TypeFood[] = [{
    id: 1,
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    comments: commentSample
} , {
    id: 2,
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    comments: commentSample
} , {
    id: 3,
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    comments: commentSample
} , {
    id: 4,
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    comments: commentSample
}]

const restaurants: TypeRestaurant[] = [{
    id: 1,
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    cost: 3,
    location: '1111 N Lorem St',
    menu: menuSample

} , {
    id: 2,
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    cost: 4,
    location: '1111 N Lorem St',
    menu: menuSample

} , {
    id: 3,
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    cost: 3,
    location: '1111 N Lorem St',
    menu: menuSample

} , {
    id: 4,
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    cost: 6,
    location: '1111 N Lorem St',
    menu: menuSample

} , {
    id: 5,
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    cost: 3,
    location: '1111 N Lorem St',
    menu: menuSample

} , {
    id: 6,
    name: 'Lorem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    cost: 3,
    location: '1111 N Lorem St',
    menu: menuSample

}] 