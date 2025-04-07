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
        <footer className="relative bg-[url('assets/images/background-3.png')] bg-cover bg-no-repeat min-h-fit text-white font-source-sans-pro py-6">
            <div className="absolute top-0 bg-[rgba(27,27,27,0.7)] w-full h-full z-10"></div>

            <div className={`${padding} relative flex flex-col lg:flex-row z-20 py-10 gap-8 lg:gap-0`}>  
                <div className="w-full lg:w-1/4">
                    <p className="text-2xl text-center !font-cinzel">Marci Metzger - <br/> THE RIDGE REALTY GROUP</p>
                    <p className="text-center">Dedicated to making your real estate journey smooth and successful. Trust Marci for expert advice and personalized support every step of the way.</p>
                </div>

                <nav className={`${responsiveWidth} flex flex-col items-center  gap-4`}>
                    {navItems.map((item, index) => (
                        <li key={index}
                            className="cursor-pointer list-none text-[1.25rem] text-white">
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

            <p className="text-center relative z-20">COPYRIGHT © 2023 MARCI METZGER Homes - All Rights Reserved</p>
        </footer>
    );
};

export default Footer;