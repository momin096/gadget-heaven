import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">404 Error</h1>
                        <p className="py-6 text-xl">
                            Page not found
                        </p>
                        <NavLink to='/' className="btn btn-soft">Home</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;