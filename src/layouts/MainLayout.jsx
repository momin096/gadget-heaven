import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <div>
            <ToastContainer autoClose={2000} />
            {/* Navbar */}
            <NavBar /> 

            {/* Dynamic content */}
            <Outlet />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;