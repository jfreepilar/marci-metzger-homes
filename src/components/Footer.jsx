import React from 'react';
import { padding } from '../pages/Home';
import { navItems } from './Navbar'; 
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter, FaLinkedin, FaYelp } from "react-icons/fa6";
import { brokerageObjects } from '../arrays-objects/brokerageObjects';

export const socialMediaIcons = [
    <FaFacebook key="facebook" />,
    <FaInstagram key="instagram" />,
    <FaYoutube key="youtube" />,
    <FaXTwitter key="twitter" />,
    <FaLinkedin key="linkedin" />,
    <FaYelp key="yelp" />
  ];

const responsiveWidth = "w-full lg:w-1/3 mb-8";


const Footer = () => {
    return (
        <footer className="bg-gray-500 min-h-fit text-white font-source-sans-pro py-6">
            <div className={`${padding} flex flex-col lg:flex-row justify-between`}>    
                <nav className={`${responsiveWidth} flex justify-evenly mt-8`}>
                    {navItems.map((item, index) => (
                        <li key={index}
                            className="cursor-pointer list-none text-white">
                            {item}
                        </li>
                    ))}
                </nav>

                <div className={`${responsiveWidth}`}>
                    <p className="text-xl text-center mb-4">Follow Us</p>
                    <div className="flex justify-between">
                        {socialMediaIcons.map((icon, index) => (
                            <div key={index}
                                 className="text-4xl mx-2 text-white cursor-pointer hover:scale-120 transition duration-300">
                                    {icon}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="text-xl text-center mb-4">Membership</p>
                    <div className={`${responsiveWidth} flex justify-around min-w-fit ml-[-30px] md:ml-0`}>
                        {brokerageObjects.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt="Brokerage Logo"
                                className={` ${
                                index === 0 || index === 1 ? "w-[120px] mt-[-25px]" : "w-[50px] h-[70px] mr-6"}`}/>
                        ))}
                    </div>    
                </div>
  
            </div>

            <p className="text-center">COPYRIGHT © 2023 MARCI METZGER Homes - All Rights Reserved</p>
        </footer>
    );
};

export default Footer;