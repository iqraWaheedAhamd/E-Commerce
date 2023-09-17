import { Badge } from "components/ui/badge";
import { Button } from "components/ui/button";
import {ShoppingCart} from "lucide-react"
import hero1 from 'public/hero1.webp'
import hero2 from 'public/hero2.webp'
import hero3 from 'public/hero3.webp'
import hero4 from 'public/hero4.webp'
import hero from 'public/hero.webp'
import Image from "next/image";
const Hero = () => {
    return (
        <section className="flex flex-col gap-y-10 lg:flex-row py-6 ">
            <div className="flex-1 mt-10">
                <Badge className="mt-10 w-fit rounded-lg bg-blue-100 px-6 py-2 font-semibold text-blue-900 ">Sale 70%</Badge>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-10">
                An Industrial Take on Streetwear
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
                <Button className="gap-1 mt-10 h-20 font-medium">
                    <ShoppingCart/>
                    Start Shopping</Button>
                <div className="flex gap-6 mt-10 h-12 ">
                    <Image src={hero1} alt="logo"/>
                    <Image src={hero2} alt="logo"/>
                    <Image src={hero3} alt="logo"/>
                    <Image src={hero4} alt="logo"/>
                </div>
            </div>
            <div className="flex-1  h-{400px} w-{400px} overflow-visible rounded-full bg-orange-100">
                <Image className="mx-auto mt-5 h-400px w-300px" src={hero} alt="picture"/>


            </div>
        </section>
    )
}
export default Hero;