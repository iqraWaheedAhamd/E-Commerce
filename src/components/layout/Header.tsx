'use client'
import logo from '/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Search } from 'lucide-react'
import { Input } from "components/ui/input"
import { useSelector } from 'react-redux'
 import { RootState } from '@/store/store';

const Header = () => {
    const cartValue = useSelector(
        (state:RootState)=>state.cart.totalQuantity
        );
    return (
        <div className='flex justify-between items-center px-20 m-8'>
            <Link className='curcour-pointer' href={"../../../"}>
            <Image src={logo} alt='logo' className='w-136'/ >
            </Link>
            <ul className='flex gap-x-7 text-2xl font-sans'>
                <li><Link href={"/category/female"}>Female</Link></li>
                <li><Link href={"/category/male"}>Male</Link></li>
                <li><Link href={"/category/kids"}>Kids</Link></li>
                <li><Link href={"/products"}>All Products</Link></li>
            </ul>
            <div className='flex gap-0'>
                <Search className='h-7' />
                <Input className='w-60 h-7 ' placeholder='What you looking for?' />
            </div>
            <div className='h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center relative'>
                <span className=' absolute right-1 top-0 rounded-full bg-red-500 h-4 w-4 text-white  text-xs text-center'>
                    {cartValue}
                </span>
                <ShoppingCart />
            </div>
        </div>

    )
}
export default Header;