
import ProductList from '@/components/ProductList'
import { products } from '@/utils/mocks'

const Productlist = () => {
    const productchecks=products.slice(0,3);
    return (
        <div className='space-y-10'>

            <p className='text-center text-sm font-bold mt-10 uppercase text-blue-500'>PRODUCTS</p>
            <p className='mt-8  text-center text-3xl font-bold'>Check What We Have</p>
            <div className='flex flex-col lg:flex-row items-center justify-evenly lg:space-x-10 xl:justify-center xl:space-x-0 2xl:space-x-10 w-full'>
                {  productchecks.map((product)=>(
                        <ProductList key={product.id} heading={product.name} price={product.price} image={product.image} category={product.category} type={product.type} id={product.id} />
                    ))
                }
                  
            </div>
        </div>
    )
}  

export default Productlist