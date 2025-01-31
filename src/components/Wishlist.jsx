import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList, successToast } from "../JS/LocalStorage";

import WishItems from "./WishItems";

const Wishlist = () => {
    const allProducts = useLoaderData();
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const storedWishList = getStoredWishList();
        const wishListItems = allProducts.filter(product => storedWishList.includes(product.product_id));

        setWishList(wishListItems);

    }, [allProducts]);

    const handleDelete = (id) => {
        const updateProducts = wishList.filter(product => product.product_id !== id);
        setWishList(updateProducts);
        localStorage.setItem('wish-list', JSON.stringify(updateProducts));
        successToast('This item removed from wishlist')
    }

    return (
        <div>
            <div className="flex justify-between my-10 container mx-auto">
                <h3 className="text-2xl font-semibold">Wish List</h3>
                {/* <div className="flex items-center gap-5">
                    <h2>Total Cost <span></span> </h2>
                    <button className="btn px-5" >Sort By Price</button >
                    <button className="btn px-5" >Purchase</button>
                </div> */}
            </div>
            <div className="flex flex-col gap-5">
                {
                    wishList.map((item, idx) => <WishItems handleDelete={handleDelete} key={idx} item={item}></WishItems>)
                }
            </div>
        </div>
    );
};

export default Wishlist;