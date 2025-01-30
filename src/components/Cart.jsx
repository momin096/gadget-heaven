import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList } from "../JS/LocalStorage";
import CartItems from "./CartItems";

const Cart = () => {
    const allProducts = useLoaderData();
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    // const updatePrice = cart.map(product => product.price + totalPrice);
    useEffect(() => {
        const storedCart = getStoredCartList();
        const cartItems = allProducts.filter(product => storedCart.includes(product.product_id));
        setCart(cartItems);

    }, [allProducts]);

    useEffect(() => {
        const total = cart.reduce((acc, product) => acc + product.price, 0)
        setTotalPrice(total);
    }, [cart]);

    const handleDelete = (id) => {
        const updateProducts = cart.filter(product => product.product_id !== id);
        setCart(updateProducts);
        localStorage.setItem('cart', JSON.stringify(updateProducts));
    }

    const handlePurchase = () =>{
        setTotalPrice(0);
        setCart([]);
        localStorage.removeItem('cart');
    }

    return (
        <div className="container mx-auto">
            <div className="flex justify-between my-5">
                <h3 className="text-2xl font-bold">Cart</h3>
                <div className="flex items-center gap-5">
                    <h2 className="text-xl font-semibold">Total Cost:  <span>{totalPrice}</span> </h2>
                    <button className="btn px-5" >Sort By Price</button >
                    <label htmlFor="my_modal_6" className={`btn px-5 ${cart.length === 0 ? 'btn-disabled' : ''}`} >Purchase</label>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                {
                    cart.map((item, idx) => <CartItems handleDelete={handleDelete} key={idx} item={item}></CartItems>)
                }
            </div>

            {/* Modal */}

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box flex flex-col items-center text-center">
                    <div>
                        <img src="/Group.png" alt="" />
                    </div>
                    <div>
                        <h2 className="font-bold my-5 text-2xl
                        ">Payment Successfully</h2>
                        <div className="divider "></div>
                        <p className="font-semibold text-gray-500 my-2">Thanks for purchasing.</p>
                        <p className="text-gray-500 font-semibold">Total: {totalPrice}</p>
                    </div>
                    <div onClick={handlePurchase} className={`modal-action w-full`}>
                        <label htmlFor="my_modal_6" className="btn w-full">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;