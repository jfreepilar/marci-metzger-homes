import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import marciMetzgerLogo from '../assets/images/marci-metzger-logo.webp';
import { toggleNav } from '../redux/navSlice'; 

const navItems = [
  "HOME", "LISTINGS", "LET'S MOVE", "ABOUT US", 
];

export default function Navbar() {
  const dispatch = useDispatch();
  const isScrolled = useSelector((state) => state.nav.isScrolled); 
  useEffect(() => {
    const handleScroll = () => {

      dispatch(toggleNav(window.scrollY > 2));  
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  return (
    <div className={`${isScrolled ? "fixed top-[-140px] w-full bg-gray-400 opacity-90  transform translate-y-[100%] transition-all duration-300 ease-in-out z-20 pt-6 shadow-silver shadow-2xl" : "bg-transparent"} w-full flex flex-col items-center pt-2`}>
      <nav className={`flex gap-6 mb-4 relative ${isScrolled ? "" : ""}`}> 
        {navItems.map((item, index) => ( 
          <li key={index}
            className={`${index === 0 ? "font-bold" : "font-normal"} 
            text-xl font-source-sans-pro cursor-pointer list-none 
            text-black relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0
            after:w-full after:h-[2px] after:bg-gray-700 
            after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300
            transition-colors duration-300`}>
            {item}
          </li>
        ))}
      </nav>

      <img
        src={marciMetzgerLogo}
        alt="Marci Metzger Logo"
        className={"w-[292px]  mt-[-30px] cursor-pointer"}
      />

    </div>
  );
}
