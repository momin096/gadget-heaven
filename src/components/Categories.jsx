import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {

    return (
        <div className="flex flex-col gap-4 min-w-[300px] mx-auto p-8  rounded-2xl bg-white shadow-xl">
            <NavLink to='/'  className={({ isActive }) => `${isActive ? 'bg-[#9538E2] text-white' : 'bg-stone-200/60'}
                     btn  border-none py-5 text-xl`}>All Products</NavLink >
            {
                categories.map((category, idx) => <NavLink
                    to={`/category/${category.category}`}
                    className={({ isActive }) => `${isActive ? 'bg-[#9538E2] text-white' : 'bg-stone-200/60'}
                     btn  border-none py-5 text-xl`} key={idx}>{category.category}</NavLink>)
            }
        </div>
    );
};

export default Categories;