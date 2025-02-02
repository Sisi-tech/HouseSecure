import react from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white py-8">
            <div className="max-w-screen-lg mx-auto flex justify-center items-center">
                <ul className="flex space-x-6">
                    <li className="hover:scale-120 hover:text-blue-800">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={24} />
                        </a>
                    </li>
                    <li className="hover:scale-120 hover:text-blue-800">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </a>
                    </li>
                    <li className="hover:scale-120 hover:text-blue-800">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={24} />
                        </a>
                    </li>
                    <li className="hover:scale-120 hover:text-blue-800">
                        <a href="mailto:info@homesecure.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope size={24} />
                        </a>
                    </li>
                    <li className="hover:scale-120 hover:text-blue-800">
                        <a href="tel:+18888888888">
                            <FaPhoneAlt size={24} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-center text-sm mt-4">
                    @ 2025 HomeSecure. All rights reserved.
                </p>
                <p className="text-center text-sm hover:text-blue-800">
                    <a
                        href="https://www.google.com/maps?q=1234+Street+Name,+New+York,+US+11101"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        1234 Street Name, New York, US 11101
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;