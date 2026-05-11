import Banner from '../../assets/banner.png'
import play from '../../assets/play.png'
const Hero = () => {
    return (
        <div className="container mx-auto py-10 sm:py-[60px] flex flex-col-reverse sm:flex-row sm:gap-[60px] gap-0 items-center">
            <div className="left pl-[20px] text-center sm:text-start">
                <div className="space-y-8 py-20 sm:py-40">
                    <div className="space-y-4">
                        
                        <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-purple-700 text-sm font-medium px-4 py-2 rounded-full mb-8">
                            <div className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center"> <div className="w-4 h-4 rounded-full bg-purple-300 flex items-center justify-center"><div className="w-2 h-2 bg-purple-600 rounded-full"></div></div></div>
                            <span className="text-sm sm:text-[16px] font-medium bg-linear-to-r from-[#4f39f6] 100% to-[#9514fa] 100% text-transparent bg-clip-text">New: AI-Powered Tools Available</span>
                        </div>

                        
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#101727] leading-tight">
                            Supercharge Your<br />
                            Digital Workflow
                        </h1>

                        
                        <p className="text-[12px] sm:text-[18px] text-[#627382] max-w-2xl mx-auto mb-8">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                        </p>

                        
                        
                        <div className="flex items-center justify-center sm:justify-start gap-2">
                            <button className="btn bg-linear-to-r from-[#4f39f6] 100% to-[#9514fa] 100% transition-all duration-300 text-white py-2 sm:py-0 text-sm sm:text-md rounded-full">
                                Explore Products
                            </button>

                            <button className="border border-purple-500 btn rounded-full btn-outline btn-primary flex items-center gap-2 font-bold bg-linear-to-r from-[#4f39f6] 100% to-[#9514fa] 100% text-transparent bg-clip-text">
                                <div className="w-4 h-4 rounded-full flex items-center justify-center">
                                  <img src={play} alt="" />
                                </div>
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right">
                <img src={Banner} alt="" />
            </div>

        </div>
    );
};

export default Hero;