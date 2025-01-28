// import { useParams } from "react-router-dom";

import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
    // const obj = useParams();

    const { product_image, product_title, price, product_id } = product;


    return (
        <div>
            <div className="card bg-base-100 h-full  shadow-sm">
                <figure className="px-5 pt-5">
                    <img
                        src={product_image}
                        alt={product_title}
                        className="rounded-xl w-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{price} $</p>
                    <div >
                        <NavLink to={`/${product_title}/${product_id}`} className="btn text-[#9538E2] hover:bg-violet-200 hover:text-black  border-[#9538E2] bg-white ">View Details</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;