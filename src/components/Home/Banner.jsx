

const Banner = () => {


    return (
        <>
            <div className="carousel w-full mb-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/XZv8PDZ/1.jpg" className="w-full" />
                    <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className="text-white space-y-8 lg:mt-80">
                            <h3 className=" text-6xl font-bold">Unlock Your Dream Career.</h3>
                            <h3 className=" text-6xl font-bold lg:pl-48">Find Your Perfect Job Today!</h3>
                            <div className="form-control flex items-center text-black">
                                <div className="input-group lg:ml-56">
                                    <input type="text" placeholder="Search…" className="input input-bordered" />
                                    <button className="btn btn-square">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;