
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ onNavigate, activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getClassNames = (section) => {
        return section === activeSection
            ? "bg-green-500 p-2 rounded-[40px] text-center cursor-pointer"
            : "hover:bg-green-700 p-2 rounded-[40px] text-center cursor-pointer";
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (section) => {
        onNavigate(section);
        setIsMenuOpen(false); 
    };

    return (
        <div className="header fixed top-4 left-0 w-full flex items-center justify-center z-50">
            <div className="w-full lg:w-7/12 p-4 lg:bg-zinc-800 lg:rounded-[50px] lg:text-emerald-100 lg:h-16 lg:mt-4 lg:border lg:border-zinc-600 flex justify-between items-center">
                <span className="text-3xl font-bold text-emerald-100 lg:hidden p-8">Santosh</span>
                <button
                    onClick={toggleMenu}
                    className="text-2xl lg:hidden  p-4 mr-4 focus:outline-none text-emerald-100 "
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <ul
                    className={`${
                        isMenuOpen ? "flex" : "hidden"
                    } flex-col lg:flex lg:flex-row lg:gap-4 lg:justify-center lg:items-center w-full lg:w-auto absolute lg:static top-20 left-0 bg-zinc-800 lg:bg-transparent p-6 lg:p-0 rounded-[50px] lg:rounded-none z-50`}
                >
                    <li className={getClassNames('home')} onClick={() => handleNavigation('home')}>Home</li>
                    <li className={getClassNames('skills')} onClick={() => handleNavigation('skills')}>Skill</li>
                    <li className={getClassNames('services')} onClick={() => handleNavigation('services')}>Service</li>
                    <li className="lg:text-3xl font-bold p-2 rounded w-full lg:w-32 text-center cursor-pointer">Santosh</li>
                    <li className={getClassNames('portfolio')} onClick={() => handleNavigation('portfolio')}>Portfolio</li>
                    <li className={getClassNames('resume')} onClick={() => handleNavigation('resume')}>Resume</li>
                    <li className={getClassNames('contact')} onClick={() => handleNavigation('contact')}>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
