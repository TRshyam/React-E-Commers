import React from 'react';
import { FaInstagram,FaYoutube} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiSuitcaseSimpleFill } from "react-icons/pi";



const Footer = () => {
  return (
    <footer className="bg-black px-4 py-8 sm:px-12 sm:py-16">
      <div className="flex flex-wrap justify-between max-w-7xl mx-auto">
        {/* About Section */}
        <div className="footer-section">
          <h2 className="text-lg font-semibold text-neutral-700 mb-2">ABOUT</h2>
          <ul className="text-sm leading-5 text-white">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Our Stories</li>
            <li>Press</li>
          </ul>
        </div>
        {/* Help Section */}
        <div className="footer-section">
          <h2 className="text-lg font-semibold text-neutral-700 mb-2">HELP</h2>
          <ul className="text-sm leading-5 text-white">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
            <li>Report Infringement</li>
          </ul>
        </div>
        {/* Mail Us Section */}
        <div className="footer-section">
          <h2 className="text-lg font-semibold text-neutral-700 mb-2">MAIL US</h2>
          <ul className="text-sm leading-5 text-zinc-300">
            <li>EBART Private Limited,</li>
            <li>Buildings & Cave Tech Village,</li>
            <li>Outer Ring Road, Devarabeesanahalli Village,</li>
            <li>Bengaluru, 560103,</li>
            <li>Karnataka, India.</li>
            </ul>
        </div>
        {/* Consumer Policy Section */}
        <div className="footer-section">
          <h2 className="text-lg font-semibold text-neutral-700 mb-2">CONSUMER POLICY</h2>
          <ul className="text-sm leading-5 text-zinc-300">
            <li>Cancellation & Returns</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between mt-8'>
          {/* Social Section */}
          <div className="flex items-center text-stone-200 gap-4 mt-4 sm:mt-0">
            <span className="mr-4 text-sm">SOCIAL</span>
            <FaInstagram size={20}/>
            <FaXTwitter size={20}/>
            <FaYoutube size={20}/>
          </div>
        {/* Become a Seller Section */}
        <div className="flex gap-2 items-center text-zinc-300">
            <PiSuitcaseSimpleFill />
            {/* <link to={"/src/index.html"}  className="ml-2 text-sm active">Become a Seller</link> */}
            <a href="#">Become a Seller</a>
          </div>
        </div>
      <div className="text-center text-zinc-400 mt-20">
        © 2024 eBART. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
