import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./AddToCart";
function ProductList(props: 
    {heading: string;
       type:string;
       price: number;
       image:string | StaticImageData;
       category:string;
       id:number;
    }) {
  return (
    <Link href={`/products/${props.id}`}>
    <div className="py-5 mt-2">
      <Image src={props.image} alt="picture" height={400} width={400} />
      <h3 className="mt-2 text-lg font-semibold">{props.heading}</h3>
      <p className="mt-2 text-lg text-gray-500 font-semibold"> ${props.type}</p>
      <p className="mt-2 text-lg font-semibold">${props.price}</p>
      <p className="mt-2 text-lg  font-semibold">Category:<span className="font-normal text-gray-600">{props.category}</span></p>
      <AddToCart />
    </div>
    </Link>
  );
}

export default ProductList;