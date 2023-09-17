import { products } from "@/utils/mocks"
import ProductList from "@/components/ProductList"
import { StaticImageData } from "next/image"
const getProductsByCategory = (category: string) => {
    return products.filter((product) => product.category.toLowerCase() == category.toLowerCase())
};
export default function Page({ params }: { params: { slug: string } }) {
    const result = getProductsByCategory(params.slug);
    return (<div className="flex justify-evenly mt-16 py-10 flex-wrap">
        {/* {
            result.length > 0 ? result.map((product) => (
                <ProductList key={product.id} heading={product.name} category={product.category} price={product.price} image={product.image} type={product.type} />
            )) : <p>No Products Found</p>
        } */}

        {
            result.map((product) => (
                <ProductList key={product.id} heading={product.name} category={product.category} price={product.price} image={product.image} type={product.type} id={product.id} />
            ))

        }

    </div>
    )
}