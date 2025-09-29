import React, { useEffect } from "react";
// @ts-ignore
import Logo1 from "../../assets/icons/logo1.svg";
// @ts-ignore
import Logo2 from "../../assets/icons/logo2.svg";
import Aos from "aos";
import "aos/dist/aos.css";

import Mainbutton from "../MainButton";

const Navbar = () => {
  useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  return (
    <>
      <nav className="w-full relative">
        <div className="nav__wrapper container flex justify-between py-[43px] items-center">
          <div className="nav__logo flex items-center gap-[3px]">
            <img src={Logo1} alt="Onicarn Logo" />
            <img src={Logo2} alt="Onicarn Logo" />
          </div>
          <ul data-aos="fade-left" className="nav__links flex items-center gap-[80px]">
            <li>
              <a href="#">
                <span className="text-primary font-medium text-lg">Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-[#252641] font-medium text-lg">
                  Careers
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-[#252641] font-medium text-lg">
                  Blog
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-[#252641] font-medium text-lg">
                  About Us
                </span>
              </a>
            </li>
          </ul>
          <div className="nav__buttons flex items-center gap-[31px]">
            <Mainbutton
              children={"Log in"}
              onClick={""}
              className={
                "uppercase text-main bg-white transition-all duration-300 ease-in-out hover:bg-main hover:text-white"
              }
            />
            <Mainbutton
              children={"Sign up"}
              onClick={""}
              className={
                "uppercase bg-main text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-main"
              }
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
