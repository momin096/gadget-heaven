import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div className="container mx-auto">
            <Banner />
            <div className="flex gap-5 flex-col md:flex-row">
           <div>
           <Categories categories={categories} />
           </div>
            <Outlet />
                
            </div>
            
        </div>
    );
};

export default Home;