// import Counter from '@/Counter'
import Hero from "@/views/Hero";
import Productlist from "@/views/Productlist";
import Seeallproduct from '@/views/seeallproduct'
import Newletter from "@/views/Newletter";
import Promotion from "@/views/Promotion";


export default function Home() {
  return (
    <div>
            <Hero />
       <Promotion /> 
      <Productlist />
     <Seeallproduct />
      <Newletter />
    </div>
  );
}