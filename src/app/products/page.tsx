import ProductList from "@/components/ProductList"
import { products } from "@/utils/mocks"

const AllProducts = () => {
    return (
        <div className="flex justify-evenly mt-16 py-10 flex-wrap">

            {
                products.map((product) => (
                    <ProductList key={product.id} heading={product.name} category={product.category} price={product.price} image={product.image} type={product.type}
                        id={product.id} />
                ))

            }

        </div>
    )
}

export default AllProducts