import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { addCartToLs, addWishListToLs } from "../JS/LocalStorage";

const ProductDetails = () => {
    const products = useLoaderData();
    const { productId } = useParams();
    
    const [product, setProduct] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const btnWishList  = <>
            <IoMdHeartEmpty  className="text-4xl border rounded-full p-1" />

    </>


    useEffect(() => {
        const displayProduct = products.find(product => product.product_id === parseInt(productId));
        setProduct(displayProduct);
    }, [products, productId]);

    const handleWishListBtn = () =>{
        setDisabled(true);
    }
    
    

    const { product_id, product_title, price, product_image, availability, Specification, extra_section, rating, description } = product;
    return (
        <div className="relative md:min-h-screen min-h-96 z-50">
            <div className=" bg-[#9538E2] pb-40">
                <div className="container mx-auto text-center space-y-5 pt-5">
                    <h2 className="text-3xl font-semibold text-white">Product Details</h2>
                    <p className="text-white max-w-2xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>


            {/* Card */}
            <div className="container mx-auto absolute md:left- lg:top-35 lg:left-10 xl:top-40 xl:left-[75px] ">
                <div className="card lg:card-side bg-base-100 shadow-sm">
                    <figure className="rounded-xl">
                        <img className="p-4 rounded-4xl max-h-[500px]"
                            src={product_image}
                            alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">{product_title}</h2>
                        <p className="font-bold text-gray-500 text-base">Price: $ {price}</p>
                        {/* stock update */}
                        <div>
                            <button className="border py-1 px-2 rounded-3xl text-green-700 bg-green-100 font-semibold">{availability ? 'In Stock' : 'Out Of Stock'}</button>
                        </div>
                        <p className="text-base text-gray-500">{description}</p>
                        <p className="text-gray-500">{extra_section}</p>
                        <label className="text-base font-bold">Specification:</label>
                        <ol className="list-decimal pl-6">
                            {
                                Specification?.map((list, idx) => <li className="font-medium text-gray-500" key={idx}>{list}</li>)
                            }
                        </ol>
                        <div className="flex items-center gap-2 text-xl font-semibold">Rating
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-amber-400" aria-label="1 star" defaultChecked />
                            </div>
                        </div>

                        <div className="space-x-3 ">
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>
                            <span className="bg-blue-50 px-2 py-1 rounded-xl">{rating}</span>
                        </div>

                        <div className="card-actions my-4 flex items-center">
                            <button onClick={() => (addCartToLs(product_id))} className="btn text-white bg-[#9538E2]">Add To Cart <FaOpencart className="text-xl" /></button>

                        <button  onClick={() => (addWishListToLs(product_id), handleWishListBtn())}
                            className={`${disabled ? 'btn-disabled opacity-15' : ''}`}
                            >
                                {
                                    btnWishList
                                }
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
};

export default ProductDetails;