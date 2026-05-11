import React from 'react';
import { FaSquareFacebook,FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";


const Footer = () => {
  return (
    <footer id="footer" className="bg-[#101727] text-gray-400">
      <div className="container mx-auto px-6 pt-16 pb-12">
        {/* Main Footer Content */}
        <div className="flex flex-wrap p-10 gap-10 justify-between ">
          
          {/* Brand Section */}
          <div className="max-w-[30%]">
            <h2 className="text-white text-xl sm:text-4xl font-bold mb-4">DigiTools</h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div className="">
            <h4 className="text-white font-semibold mb-5">Product</h4>
            <ul className="space-y-3">
              <li><a href="#tools" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#getStarted" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#tools" className="hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="">
            <h4 className="text-white font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="">
            <h4 className="text-white font-semibold mb-5">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="">
            <h4 className="text-white font-semibold mb-5">Social Links</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <RiInstagramFill size={26}/>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaSquareFacebook size={26}/>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaXTwitter size={26} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-sm border-t border-gray-800 pt-8">
          <p>© 2026 DigiTools. All rights reserved.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;