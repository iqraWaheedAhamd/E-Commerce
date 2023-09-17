import { Button } from "components/ui/button"
import { Input } from "components/ui/input"

const Newletter = () => {
    return (
        <div>
            <div className="relative">
                <div className="flex flex-col items-center justify-center py-10">
                    <h3 className="mb-2 px-5 text-center text-3xl font-bold tracking-normal text-[#212121] sm:mb-4 sm:text-4xl">Subscribe Our Newsletter</h3>
                    <p className="mb-4 px-5 text-center text-base tracking-normal text-gray-700 sm:mb-8">Get the latest information and promo offers directly</p>

                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="email" placeholder="Email" />
                        <Button type="submit" className="w-40" >Get Start</Button>
                    </div>

                </div>
                <div className="absolute inset-0 -z-50 flex items-center justify-center">
                    <div className="text-[54px] font-bold text-gray-200 sm:text-8xl sm:font-extrabold">Newsletter</div>
                </div>
            </div>
        </div>
    )
}

export default Newletter;