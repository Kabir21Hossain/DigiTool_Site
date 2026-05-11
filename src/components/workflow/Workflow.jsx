import React from 'react';

const Workflow = () => {
  return (
    <div className="bg-linear-to-r from-[#4f39f6] 100% to-[#9514fa] 100% text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-[16px] text-[#ffffff] mb-10 max-w-2xl mx-auto">
          Join thousands of professionals who are already using DigiTools to work smarter.
          <br />Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="btn bg-white text-violet-700 hover:bg-gray-100 font-semibold px-4 py-6 rounded-full  transition">
            Explore Products
          </button>
          <button className="btn btn-outline  text-white bg-linear-to-r from-[#4f39f6] 100% to-[#9514fa] 100% font-semibold px-8 py-6 rounded-full  transition">
            View Pricing
          </button>
        </div>

        {/* Trust line */}
        <p className="text-violet-200 text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default Workflow;