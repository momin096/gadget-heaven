import { IoIosCloseCircleOutline } from "react-icons/io";

const CartItems = ({ item, handleDelete }) => {
    const { product_id, product_title, product_image, description, price } = item;

    return (
        <div className="">
            <div className="flex max-w-5xl mx-auto gap-5  p-5 bg-white shadow-sm rounded-2xl">
                <div className="">
                    <img className="max-w-30 p-5" src={product_image} alt="" />
                </div>
                <div className="space-y-2  flex justify-between w-full">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">{product_title}</h3>
                        <p className="font-medium text-gray-600">{description}</p>
                        <p className="text-base font-bold text-gray-600">Price: {price}</p>
                    </div>
                    <button onClick={() => handleDelete(product_id)}><IoIosCloseCircleOutline className="text-4xl mr-6 text-red-600 " /></button>
                </div>

            </div>
        </div>
    );
};

export default CartItems;