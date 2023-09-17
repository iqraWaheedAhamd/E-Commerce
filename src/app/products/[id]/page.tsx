import AddToCart from "@/components/AddToCart";
import Quantity from "@/components/Quantity";
import { products } from "@/utils/mocks"
import Image from "next/image";
import { StaticImageData } from "next/image";
const getProductsDetail = (id: number | string) => {
  console.log(id);
  return products.filter((product) => product.id == id);
};
const sizes = ["XS", "S", "M", "L", "XL"];
export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);
  return (
    <div className="bg-gray-100">
      <div className="flex justify-evenly mt-16 py-10 flex-wrap ">
        {result.map((product) => (
          <div key={product.id} className="flex flex-col lg:flex-row justify-between gap-7">
            <div>
              <Image
                src={product.image}
                alt={product.name}
                height={500}
                width={600}
              />
            </div>
            <div className="flex flex-col justify-center">
              <div>
                <h1 className="font-normal text-3xl text-[#212121]  ">
                  {product.name}
                </h1>
                <p className="text-base text-gray-500 font-bold">
                  {product.type}
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-base font-semibold">SELECT SIZE</h3>
                <div className="flex gap-3">
                  {sizes.map((item) => {
                    return (
                      <div key={item} className="flex items-center justify-center w-7 h-7 mt-2 duration-300 border rounded-full hover:shadow-xl">
                        <span className="text-[10px] font-semibold text-center text-gray-700">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex mt-6 gap-x-3">
                  <h4 className=" text-[15px] font-semibold   items-center">
                    Quantity:
                  </h4>
                  <Quantity />
                </div>
                <div className="flex items-center gap-x-4 mt-6">
                  <AddToCart />
                  <h2 className="text-2xl font-bold ">
                    ${product.price.toFixed(2)}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 mt-8 flex w-full flex-col items-start space-y-8 bg-white px-8 py-16 md:p-16">
        <div className="relative mb-6 w-full items-start sm:mb-8">
          <p className="text-2xl font-bold">Product Information</p>
          <div className="absolute inset-0 -z-50 flex items-center justify-start">
            <div className="text-[45px] font-bold text-gray-100 custom1:text-[70px] sm:text-8xl sm:font-extrabold">
              Overview
            </div>
          </div>
        </div>
        <div className="w-full border-[1px]"></div>
        <div className="flex w-full flex-col space-y-8 sm:flex-row sm:justify-start sm:space-x-16 sm:space-y-0">
          <p className="whitespace-nowrap font-semibold text-gray-700  md:basis-2/6">
            PRODUCT DETAILS
          </p>
          <div className="flex-col space-y-4 md:basis-4/6">
            <p className="text-justify tracking-wider text-gray-600 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col space-y-8 sm:flex-row sm:justify-start sm:space-x-16 sm:space-y-0">
          <p className="whitespace-nowrap font-semibold text-gray-700  md:basis-2/6">
            PRODUCT CARE
          </p>
          <ul className="flex-col space-y-2 md:basis-4/6">
            <li className="flex text-justify font-semibold tracking-wider text-gray-900">
              Hand wash using cold water.
            </li>
            <li className="flex text-justify font-semibold tracking-wider text-gray-900">
              Do not using bleach.
            </li>
            <li className="flex text-justify font-semibold tracking-wider text-gray-900">
              Hang it to dry.
            </li>
            <li className="flex text-justify font-semibold tracking-wider text-gray-900">
              Iron on low temperature.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}