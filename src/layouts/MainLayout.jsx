import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <NavBar /> 

            {/* Dynamic content */}
            <Outlet />

            {/* Footer */}
        </div>
    );
};

export default MainLayout;