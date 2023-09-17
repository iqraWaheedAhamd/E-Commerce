import Link from "next/link"
import Image from "next/image"
import logo from 'public/logo.png'
const Footer = () => {
    return (
        <>
            <div className="flex flex-col justify-around lg:flex-row px-12">
                    <div className="flex flex-col basis-2/5 space-y-8">
                        <Link className="cursor-pointer" href="/">
                            <Image alt="logo" src={logo} width="136" height="24" />
                        </Link>
                        <p className="mt-3 text-gray-600">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                    </div>
                    <div className="flex basis-1/5 flex-col space-y-5">
                        <p className="text-xl font-semibold text-gray-700">Company</p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="cursor-pointer">About</li>
                            <li className="cursor-pointer">Terms of Use</li>
                            <li className="cursor-pointer">Privacy Policy</li>
                            <li className="cursor-pointer">How it Works</li>
                            <li className="cursor-pointer">Contact Us</li>
                        </ul>
                    </div>
                    <div className="flex basis-1/5 flex-col space-y-5">
                        <p className="text-xl font-semibold text-gray-700">Support</p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="cursor-pointer">Support Carrer</li>
                            <li className="cursor-pointer">24h Service</li>
                            <li className="cursor-pointer">Quick Chat</li>
                        </ul>
                    </div>
                    <div className="flex basis-1/5 flex-col space-y-5">
                        <p className="text-xl font-semibold text-gray-700">Contact</p>
                        <ul className="space-y-3 text-gray-600">
                            <li className="cursor-pointer">Whatsapp</li>
                            <li className="cursor-pointer">Support 24h</li>
                        </ul>
                    </div>
                
            </div>
            <div className="mt-5 border-t-[1px] border-t-black text-gray-500">
                <div className="flex flex-col items-start justify-between space-x-0 space-y-5 px-5 py-4 sm:px-10 md:px-16 md:py-8 lg:flex-row lg:space-x-20 lg:space-y-0 lg:px-20">
                    <div className="">Copyright © 2022 Dine Market</div>
                    <div className="">Design by: 
                         <span className="text-lg font-semibold text-gray-900"> IQra WaheedAhmad!</span> 
                    </div>
                    <div className="">Code by IQra WaheedAhmad :
                        <span className="text-lg font-semibold text-gray-900">iqra-waheed on github</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer