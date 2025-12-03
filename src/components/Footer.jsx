import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaVoicemail,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-black text-gray-300 px-8 py-12 mt-10">
      <div className="w-11/12 mx-auto grid md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-2">Pet Care in Winter</h3>
          <p className="text-sm">
            A cozy winter companion platform designed for pet owners to ensure
            their furry friends stay warm, safe, and healthy during the cold
            season. Users can explore local pet care services, winter pet
            clothing, grooming options, and expert tips — all in one friendly
            interface.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Administrator</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-sm">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Information</h4>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Social Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex space-x-1 items-center">
              <FaTwitter />
              <span> Twitter</span>
            </li>
            <li className="flex space-x-1 items-center">
              <FaInstagram /> <span>Instagram</span>
            </li>
            <li className="flex space-x-1 items-center">
              <FaFacebook />
              <span> Facebook</span>
            </li>
            <li className="flex space-x-1 items-center">
              <FaVoicemail />
              <span> support@cst.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-left md:text-center text-white-400 text-sm mt-8">
        © 2025 Pet Care in Winter. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
