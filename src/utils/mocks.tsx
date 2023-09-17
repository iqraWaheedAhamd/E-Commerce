import  P12 from 'public/P12.webp'
import P1 from 'public/P1.webp'
import P2 from 'public/P2.webp'
import P3 from 'public/P3.webp'
import P4 from 'public/P4.webp'
import P5 from 'public/P5.webp'
import P6 from 'public/P6.webp'
import P7 from 'public/P7.webp'
import P8 from 'public/P8.webp'
import P9 from 'public/P9.webp'
import P10 from 'public/P10.webp'
import P11 from 'public/P11.webp'
import { Product } from "./types"
export const products: Product[] = [
    {
        id: 1,
        name: 'Brushed Raglan Sweatshirt',
        type: 'Sweater',
        price: 195,
        category: 'female',
        image: P1,
    },
    {
        id: 2,
        name: 'Cameryn Sash Tie Dress',
        type: 'Dress',
        price: 525,
        category: 'female',
        image: P2,
    },
    {
        id: 3,
        name: 'Flex Sweatshirt',
        type:'Sweater',
        price: 175,
        category: 'female',
        image: P3,
    },
    {
        id: 4,
        name: 'Brushed Bomber',
        type: 'Jackets',
        price: 224,
        category: 'female',
        image: P8,
    },
    {
        id: 5,
        name: 'Lite Sweatpants',
        type: 'Pants',
        price: 150,
        category: 'female',
        image: P9,
    },
    {
        id: 6,
        name: 'Pink Fleece Sweatpants',
        type: 'Pants',
        price: 195,
        category: 'female',
        image: P10,
    },
    {
        id: 8,
        name: 'Flex Sweatpants',
        type: 'Pants',
        price: 175,
        category: 'female',
        image: P11,
    },
    {
        id: 9,
        name: 'Muscle Tank',
        type: 'T Shirts',
        price: 75,
        category: 'female',
        image: P6,
    },
    {
        id: 10,
        name: 'Imperial Alpaca Hoodie',
        type: 'Jackets',
        price: 525,
        category: 'female',
        image: P12,
    },
    {
        id: 11,
        name: 'Raglan Sweatshirt',
        type: 'Sweater',
        price: 195,
        category: 'male',
        image: P4,
    },
    {
        id: 12,
        name: 'Flex Push Button Bomber',
        type: 'Jackets',
        price: 224,
        category: 'male',
        image: P5,
    },
    {
        id: 13,
        name: 'Loose Control',
        type: 'T Shirts',
        price: 110,
        category: 'kids',
        image: P7,
    },
]