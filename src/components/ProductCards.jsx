import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const ProductCards = () => {
    const allProducts = useLoaderData();
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category) {
            const categoryProducts = allProducts.filter(product => product.category === category);
            setProducts(categoryProducts);
        }
        else{
            setProducts(allProducts.slice(0,9))
        }
    }, [allProducts, category]);
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">

            {
                products.map(product => <ProductCard product={product} key={product.product_id}></ProductCard>)
            }
        </div>
    );
};

export default ProductCards;