
const Banner = () => {
    return (
        <div className="relative pb-[500px]">
            <div className="bg-[#9538E2] pt-5 min-h-[calc(100vh-250px)] rounded-b-2xl">
                <div className="max-w-7xl mx-auto  lg:px-10 text-center space-y-5">
                    <h2 className="text-2xl lg:text-5xl font-semibold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                    <p className="max-w-4xl mx-auto text-base text-blue-100">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="btn btn-primary bg-white text-[#9538E2] border-none text-xl">Shop Now</button>
                </div>
            </div>
            <div className="absolute top-80 left-0 md:top-60  lg:top-70 lg:left-[40px] xl:left-[170px] 2xl:left-[291px]">
                <div className=" max-w-[1100px]   rounded-4xl mx-auto  border-white border-2 p-5 backdrop-blur-2xl">
                    <div className="rounded-3xl">
                        <img className="w-full rounded-3xl lg:h-[600px] object-cover" src="/banner.jpg" alt="Banner" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;