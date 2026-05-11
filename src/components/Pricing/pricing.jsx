import React from 'react';
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
    return (
        <div id="pricing" className=" bg-white py-[120px] px-6">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-[#101727] mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-[#627382] text-sm max-w-2xl mx-auto">
                        Choose the plan that fits your needs. Upgrade or downgrade anytime.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

                    {/* Starter Plan */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-[20px] font-bold text-[#101727]">Starter</h3>
                            <p className="text-[#627382] text-[16px] mt-1">Perfect for getting started</p>
                        </div>

                        <div className="mb-6">
                            <span className="text-[38px] font-bold text-[#101727]">$0</span>
                            <span className="text-[#627382] text-[16px]">/Month</span>
                        </div>

                        <ul className="space-y-1 mb-10 flex-1">
                            <li className="flex items-start gap-3 text-[#627382] text-[16px]">
                                <span className="text-green-500 mt-1"><FaCheck /></span>
                                Access to 10 free tools
                            </li>
                            <li className="flex items-start gap-3 text-[#627382] text-[16px]">
                                <span className="text-green-500 mt-1"><FaCheck /></span>
                                Basic templates
                            </li>
                            <li className="flex items-start gap-3 text-[#627382] text-[16px]">
                                <span className="text-green-500 mt-1"><FaCheck /></span>
                                Community support
                            </li>
                            <li className="flex items-start gap-3 text-[#627382] text-[16px]">
                                <span className="text-green-500 mt-1"><FaCheck /></span>
                                1 project per month
                            </li>
                        </ul>

                        <button className=" btn bg-linear-to-r from-[#4f39f6] 100% to-[#9514fa] 100% mt-auto w-full text-white font-bold py-3.5 rounded-full transition">
                            Get Started Free
                        </button>
                    </div>


                    {/* Pro Plan - Highlighted */}
                    <div className="relative bg-linear-to-r from-[#4f39f6] 100% to-[#9514fa] 100% text-white rounded-3xl p-8 flex flex-col shadow-xl scale-105">
                        {/* Most Popular Badge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] text-xs font-semibold px-3 py-1 rounded-full">
                            Most Popular
                        </div>

                        <div className="mb-6">
                            <h3 className="text-[20px] font-bold text-white">Pro</h3>
                            <p className="text-[#ffffff7e] mt-1 text-[16px]">Best for professionals</p>
                        </div>

                        <div className="mb-6">
                            <span className="text-[38px] font-bold text-white">$29</span>
                            <span className="text-[#ffffff7e] text-[16px]">/month</span>
                        </div>

                        <ul className="space-y-1 mb-4 flex-1">
                            <li className="flex items-start gap-3">
                                <span className="text-white mt-1"><FaCheck/></span>
                                Access to all premium tools
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-white mt-1"><FaCheck/></span>
                                Unlimited templates
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-white mt-1"><FaCheck/></span>
                                Priority support
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-white mt-1"><FaCheck/></span>
                                Unlimited projects
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-white mt-1"><FaCheck/></span>
                                Cloud sync
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-white mt-1"><FaCheck/></span>
                                Advanced analytics
                            </li>
                        </ul>

                        <button className="btn bg-white text-[#4f39f6] mt-auto w-full font-bold py-3.5 rounded-full transition">
                            Start Pro Trial
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col">
                        <div className="mb-6">
                            <h3 className="text-[20px] font-bold text-[#101727]">Enterprise</h3>
                            <p className="text-[#627382] text-[16px] mt-1">For teams and businesses</p>
                        </div>

                        <div className="mb-6">
                            <span className="text-[38px] font-bold text-[#101727]">$99</span>
                            <span className="text-[#627382] text-[16px]">/month</span>
                        </div>

                        <ul className="space-y-1 mb-10 flex-1">
                            <li className="flex items-start gap-3 text-[#627382] text-[16px]">
                                <span className="text-green-500 mt-1"><FaCheck/></span>
                                Everything in Pro
                            </li>
                            <li className="flex items-start gap-3 text-[#627382] text-[16px]">
                                <span className="text-green-500 mt-1"><FaCheck/></span>
                                Team collaboration
                            </li>
                            <li className="flex items-start gap-3 text-[#627382] text-[16px]">
                                <span className="text-green-500 mt-1"><FaCheck/></span>
                                Custom integrations
                            </li>
                            <li className="flex items-start gap-3 text-[#627382] text-[16px]">
                                <span className="text-green-500 mt-1"><FaCheck/></span>
                                Dedicated support
                            </li>
                            <li className="flex items-start gap-3 text-[#627382] text-[16px]">
                                <span className="text-green-500 mt-1"><FaCheck/></span>
                                SLA guarantee
                            </li>
                            <li className="flex items-start gap-3 text-[#627382] text-[16px]">
                                <span className="text-green-500 mt-1"><FaCheck/></span>
                                Custom branding
                            </li>
                        </ul>

                        <button className="btn mt-auto w-full bg-linear-to-r from-[#4f39f6] 100% to-[#9514fa] 100% text-white font-medium py-3.5 rounded-2xl transition">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;