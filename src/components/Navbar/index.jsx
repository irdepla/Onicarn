import React from 'react';
// @ts-ignore
import Logo1 from "../../assets/icons/logo1.svg";
// @ts-ignore
import Logo2 from "../../assets/icons/logo2.svg";

const Navbar = () => {
    return (
        <>
        <div className="container nav__wrapper flex justify-between items-center">
            <div className="nav__logo flex items-center gap-[3px]">
                <img src={Logo1} alt="Onicarn Logo" />
                <img src={Logo2} alt="Onicarn Logo" />
            </div>
            <ul className="nav__links flex items-center gap-[80px]">
                <li>
                    <a href="#">
                        <span className='text-[#252641] font-medium text-lg'>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className='text-[#252641] font-medium text-lg'>Careers</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className='text-[#252641] font-medium text-lg'>Blog</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className='text-[#252641] font-medium text-lg'>About Us</span>
                    </a>
                </li>
            </ul>
        </div>
        </>
    );
}

export default Navbar;
