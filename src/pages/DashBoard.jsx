import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {

    

    return (
        <div className="">
            <div className=" bg-[#9538E2] p-5">
                <div className="container mx-auto text-center space-y-5 pt-5">
                    <h2 className="text-3xl font-semibold text-white">Dashboard</h2>
                    <p className="text-white max-w-2xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!!</p>
                </div>
                <div className="flex gap-5 justify-center my-5">
                    <NavLink to='/dashboard/cart' className={({isActive})=> `${isActive ? 'bg-fuchsia-200' : ''} btn px-10 text-xl`}>Cart</NavLink>
                    <NavLink to='/dashboard/wishlist' className={({isActive})=> `${isActive ? 'bg-fuchsia-200' : ''} btn px-10 text-xl`}>Wishlist</NavLink>
                </div>
            </div>

            {/* Modal  */}
            
            <div>
                <Outlet />
            </div>
        </div>
        
    );
};

export default DashBoard;