const Hero = () => {
    return (
        <div className="container mx-auto py-[60px] grid grid-cols-1 sm:grid-cols-2 gap-[60px]">
            <div className="left pl-[20px]">
                <h1>The Right Way to Start Your Journey!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, odit! Odit amet accusantium saepe deleniti commodi. Porro nihil consequuntur nisi.</p>
                <button>Explore</button>
            </div>

            <div className="right">
                <img src="../../assets/banner.png" alt="" />
            </div>

        </div>
    );
};

export default Hero;