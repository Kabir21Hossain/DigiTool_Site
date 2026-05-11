import React from 'react';
import user from '../../assets/user.png'
import packkage from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const GetStarted = () => {
  return (
    <div className=" bg-[#F9FAFC] flex items-center justify-center py-[120px]">
      <div className="max-w-5xl w-full container mx-auto">
     
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#101727] mb-2">
            Get Started In 3 Steps
          </h2>
          <p className="text-[#627382] text-sm">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* steps-container */}
        <div className="gap-8 px-6 grid  md:grid-cols-2 lg:grid-cols-3">
        
        {/* step1*/}
          <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 relative">
            <div className="absolute top-4 right-4 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
              01
            </div>
            
            <div className="flex justify-center mb-4  mt-[88px]">
              <div className=" w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center">
                <img src={user} alt="" />
              </div>
            </div>

            <h3 className="text-[24px] font-bold text-center text-[#101727] mb-4">
              Create Account
            </h3>
            
            <p className="text-gray-400 text-center leading-relaxed text-[13px] sm:text-[16px] mb-[88px]">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 relative">
            <div className="absolute top-4 right-4 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
              02
            </div>
            
            <div className="flex justify-center mb-4 mt-[88px]">
              <div className=" w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center">
                <img src={packkage} alt="" />
              </div>
            </div>

            <h3 className="text-[24px] font-bold text-center text-[#101727] mb-4">
              Choose Products
            </h3>
            
            <p className="text-[#627382] text-center leading-relaxed text-[13px] sm:text-[16px] mb-[88px]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 relative ">
            <div className="absolute top-4 right-4 w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
              03
            </div>
            
            <div className="flex justify-center mb-4 mt-[88px]">
              <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center">
                <img src={rocket} alt="" />
              </div>
            </div>

            <h3 className="text-[24px] font-bold text-center text-[#101727] mb-4">
              Start Creating
            </h3>
            
            <p className="text-[#627382] text-center leading-relaxed text-[13px] sm:text-[16px] mb-[88px]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;