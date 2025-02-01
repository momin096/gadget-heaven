
const Footer = () => {
    return (
        <div className=" mt-20 bg-base-200 pt-10 ">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">Gadget Heaven</h3>
                <p className="text-gray-600 mt-3">Leading the way in cutting-edge technology and innovation.</p>
            </div>

            <footer className="footer sm:footer-horizontal 
            text-base-content p-10 flex justify-between container mx-auto
             max-w-5xl border-t-2 border-gray-300 pt-10 mt-10 flex-col md:flex-row ">

                <nav>
                    <h6 className="footer-title ">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;