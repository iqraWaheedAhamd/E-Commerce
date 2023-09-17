import { StaticImageData } from "next/image"

export type Product={
    id:number;
    name:string;
    type:string;
    price:number;
    category:string;
    image:string|StaticImageData;
};