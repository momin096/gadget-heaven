
const Banner = () => {
    return (
        <div>
            <div className="bg-[#9538E2] pt-5 min-h-[calc(100vh-300px)] rounded-b-2xl">
                <div className="max-w-7xl mx-auto px-10 text-center space-y-8">
                    <h2 className="text-6xl font-semibold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                    <p className="max-w-4xl mx-auto text-blue-100">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="btn btn-primary bg-white text-[#9538E2] border-none text-xl">Shop Now</button>
                </div>
            </div>
            {/* <div className="border h-screen">
                <img className="" src="../assets/banner.jpg" alt="" />
            </div> */}
        </div>
    );
};

export default Banner;