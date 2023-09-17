import { Button } from "components/ui/button"
import Link from "next/link"
import Image from "next/image"
import feature from 'public/feature.webp'
const Seeallproduct = () => {
    return (
        <div>

            <div className="z-10 flex w-full flex-row">
                <div className="hidden basis-7/12 xl:block "></div>
                <div className="basis-full px-5 mt-10 text-5xl font-bold leading-[55px] tracking-wide md:px-16 xl:basis-5/12 xl:px-0">Unique and Authentic Vintage Designer Jewellery</div>
            </div>
            <div className="flex flex-col lg:flex-row justify-evenly bg-gray-100  lg:-mt-[50px] space-x-10 space-y-20 bg...d:-mt[56px] md:pt-24 x1:flex-row xl:space-x-10 xl:space-y-0">
                <div className="relative flex basis-1/2 flex-col items-center space-y-8 text-gray-600 ">
                    <div className="flex basis-1/2 flex-col justify-between ml-4 space-y-8 sm:flex-row sm:space-x-14 sm:space-y-0">
                        <div className="flex basis-1/2 flex-col items-start justify-center">
                            <p className="text-lg font-semibold leading-4">Using Good Quality Materials</p>
                            <p className="mt-3 text-base font-light">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className="flex basis-1/2 flex-col items-start justify-center">
                            <p className="text-lg font-semibold leading-4">100% Handmade Products</p>
                            <p className="mt-3 text-base font-light">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="flex basis-1/2 flex-col justify-between ml-4 space-y-8 sm:flex-row sm:space-x-14 sm:space-y-0">
                        <div className="flex basis-1/2 flex-col items-start justify-center">
                            <p className="text-lg font-semibold leading-4">Modern Fashion Design</p>
                            <p className="mt-3 text-base font-light">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className="flex basis-1/2 flex-col items-start justify-center">
                            <p className="text-lg font-semibold leading-4">Discount for Bulk Orders</p>
                            <p className="mt-3 text-base font-light">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex flex-col lg:flex-row basis-full  items-center space-x-3  space-y-10 s...-row sm:space-y-0 xl:basis-1/2 xl:items-stretch xl:space-x-8">
                    <div className="flex basis-1/2 mb-6 xl:basis-3/5">
                        <Image src={feature} alt="picture" />
                    </div>
                    <div className="flex basis-3/5 flex-col justify-between space-y-10 xl:basis-2/5">
                        <p className="text-justify text-base mr-7 font-light text-[#212121]">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                        <Link className="z-40 " href={"/products"}><Button className="w-fit cursor-pointer whitespace-nowrap bg-[#212121] mb-6 px-5 py-2 text-white sm:w-2/3 sm:whitespace-normal">See All Product</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seeallproduct