import { IoIosCloseCircleOutline } from "react-icons/io";
import { addCartToLs } from "../JS/LocalStorage";
import { FaOpencart } from "react-icons/fa";


const WishItems = ({ item, handleDelete }) => {
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
                        <p className="font-medium text-gray-600"><span className=" font-bold text-black">Description: </span>{description}</p>
                        <p className="text-base font-bold text-gray-600">Price: {price}</p>
                        <button onClick={()=>addCartToLs(product_id)} className="btn text-white bg-[#9538E2]">Add To Cart <FaOpencart className="text-xl" /></button>

                    </div>
                    <button onClick={() => handleDelete(product_id)} ><IoIosCloseCircleOutline className="text-4xl mr-6 text-red-600 hover:bg-base-100 rounded-full" /></button>
                </div>

            </div>
        </div>
    );
};

export default WishItems;