import { Button } from "components/ui/button";
import Image from "next/image";
import Event1 from "public/event1.webp";
import Event2 from "public/event2.webp";
import P5 from "public/P5.webp";
const Promotion = () => {
  return (
    <section>
      <div className="mt-20">
        <span className="flex justify-center text-2x2  text-blue-600  ">
          PROMOTIONS
        </span>
        <h2 className="flex justify-center    text-3xl font-semibold tracking-tight transition-colors  my-10 ">
          Our Promotions Events
        </h2>
      </div>
      <div className="flex w-full space-y-5 flex-col lg:flex-row lg:space-x-5 lg:space-y-0">
        <div>
          <div className="event-banner-left space-y-5">
            <div className="event-card bg-gray-200 h-64 flex justify-around ">
              <div className="content flex flex-col justify-center ml-10">
                <h3 className="text-2xl font-semibold ">
                  GET UP TO
                  <span className="ml-2 ">60%</span>
                </h3>

                <p>For the summer season</p>
              </div>
              <Image alt="event" src={Event1} />
            </div>
            <div className="flex basis-1 flex-col items-center space-y-5 bg-[#212121] p-8 text-white lg:basis-1/2">
              <p className="text-4xl font-extrabold">GET 30% Off</p>
              <div className="flex flex-col items-center justify-center space-y-1">
                <p className="text-sm font-normal">USE PROMO CODE</p>
                <p className="cursor-pointer rounded-lg bg-[#474747] px-4 py-2 text-sm font-semibold">
                  DINEWEEKENDSALE
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0 lg:lg:basis-3/5">
          <div className="flex basis-1 flex-col justify-between bg-[#efe1c7] px-6 pt-6 text-[#212121] md:basis-1/2">
            <div className="flex flex-col">
              <p className="text-lg font-normal">Flex Sweatshirt</p>
              <p className="text-lg font-normal">
                <span className="line-through">$100.00</span>
                <span className="ml-3 font-semibold">$75.00</span>
              </p>
            </div>
            <Image alt="promotion2" src={Event2} />
          </div>
          <div className="flex basis-1 flex-col justify-between bg-[#d7d7d9] px-6 pt-6 text-[#212121] md:basis-1/2">
            <div className="flex flex-col">
              <p className="text-lg font-normal">Flex Push Button Bomber</p>
              <p className="text-lg font-normal">
                <span className="line-through">$225.00</span>
                <span className="ml-3 font-semibold">$190.00</span>
              </p>
            </div>
            <Image alt="promotion3" src={P5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;