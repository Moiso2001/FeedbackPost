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
    rate: string
}

const commentSample: TypeComment[] = [{
    id: 1,
    text: "I had the pleasure of trying their signature dish, which is a plate of delicious pasta served with a creamy sauce made from scratch. The pasta was perfectly cooked, al dente, and the sauce had a delightful balance of flavors. It was seasoned with fresh herbs that elevated the taste to another level. Every bite was a burst of culinary delight, and I highly recommend it to all pasta lovers!",
    owner: "ItalianFoodLover",
    rate: "😍"
}, {
    id: 2,
    text: "Unfortunately, my experience with their steak was quite disappointing. The steak was overcooked and ended up being tough and chewy. It lacked the desired tenderness and juiciness that one expects from a perfectly cooked steak. I was expecting a melt-in-your-mouth experience, but it fell short of my expectations. I hope they improve their steak preparation in the future.",
    owner: "SteakConnoisseur",
    rate: "😠"
}, {
    id: 3,
    text: "I recently had the pleasure of enjoying their mouthwatering sushi rolls, and I must say, they were a culinary masterpiece. The sushi rolls were beautifully presented and made with the freshest fish available. Each piece was a perfect balance of flavors, and the fish melted in my mouth. The attention to detail in their sushi-making process was evident, and I can confidently say that it was one of the best sushi experiences I've had so far!",
    owner: "SushiEnthusiast",
    rate: "😍"
}, {
    id: 4,
    text: "The dessert I had was a heavenly delight! It was a rich and decadent creation that showcased a perfect blend of flavors. The presentation of the dessert was artful, with intricate details that showed the skill and creativity of the chef. Every spoonful was a delight to the senses, and it left me craving for more. If you have a sweet tooth like me, you absolutely must try this dessert!",
    owner: "SweetTooth",
    rate: "😲"
}];


const menuSample: TypeFood[] = [{
    id: 1,
    img: 'https://img.freepik.com/fotos-premium/tazon-burrito-pollo-mexicano-arroz-frijoles-tomate-aguacate-maiz-espinacas-fondo-blanco-concepto-comida-cocina-mexicana_79830-2856.jpg?w=2000',
    name: 'CREP CHICKEN',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    comments: commentSample,
    rate: 3
} , {
    id: 2,
    img: '',
    name: 'SOUP LE CREAM',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    comments: commentSample,
    rate: 3
} , {
    id: 3,
    img: '',
    name: 'CHICKEN',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
    comments: commentSample,
    rate: 3
} ]

export const restaurants: TypeRestaurant[] = [{
    id: 1,
    img: 'https://img.theculturetrip.com/wp-content/uploads/2022/01/andres-carne-de-res-restaurant-chia-cundinamarca-colombia.jpg',
    name: 'Andres Carne de Res',
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