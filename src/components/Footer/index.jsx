import React from "react";
// @ts-ignore
import Logo1 from "../../assets/icons/logo1.svg";
// @ts-ignore
import Logo2 from "../../assets/icons/logo2.svg";
// @ts-ignore
import Location from "../../assets/icons/Location.svg";
// @ts-ignore
import Calling from "../../assets/icons/Calling.svg";
// @ts-ignore
import Time from "../../assets/icons/Time Circle.svg";
// @ts-ignore
import Message from "../../assets/icons/Message.svg";
// @ts-ignore
import DownVector from "../../assets/icons/down-vector.svg";

const Footer = () => {
  return (
    <>
      <div className="container mt-[140px] pt-[100px] pb-[31px] footer__wrapper flex justify-between items-center">
        <div className="footer__contacts flex flex-col gap-2">
          <span className="flex items-center gap-1">
            <img src={Logo1} alt="Onlearn Logo" className="" />
            <img src={Logo2} alt="Onlearn Logo" className="" />
          </span>
          <span className="flex mt-[28px] text-main gap-2 font-bold">
            <img src={Location} alt="Location Icon" />
            <span>Address:</span>
          </span>
          <p className="font-medium text-main">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
          </p>
          <span className="flex text-main gap-2 font-bold">
            <img src={Calling} alt="Phone Icon" />
            <span>Tel :+9229341037</span>
          </span>
          <span className="flex text-main gap-2 font-bold">
            <img src={Time} alt="Clock Icon" />
            <span>Response hours: 8 to 20</span>
          </span>
          <span className="flex text-main gap-2 font-bold">
            <img src={Message} alt="Email Icon" />
            <span>Email: info@onlearn.com</span>
          </span>
        </div>
        <div className="footer__links flex gap-[56px]">
          <ul className="flex flex-col gap-2">
            <span className="text-[#0A033C] font-bold">Categories</span>
            <li className="mt-[29px]">
              <a href="#">
                <span className="text-main font-medium">Counseling</span>
              </a>
            </li>
            <li className="mt-[29px]">
              <a href="#">
                <span className="text-main font-medium">
                  Health and fitness
                </span>
              </a>
            </li>
            <li className="mt-[29px]">
              <a href="#">
                <span className="text-main font-medium">
                  Individual development
                </span>
              </a>
            </li>
          </ul>
          <ul className=" flex flex-col gap-2">
            <span className="text-[#0A033C] font-bold">Links</span>
            <li className="mt-[29px]">
              <a href="#">
                <span className="text-main font-medium">
                  About us
                </span>
              </a>
            </li>
            <li className="mt-[29px]">
              <a href="#">
                <span className="text-main font-medium">
                  blog
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__email flex flex-col gap-5">
            <p className="font-normal">Stay up to date with the latest courses</p>
            <span className="relative">
                <input placeholder="Email" className="rounded-[15px] py-[20px] px-[50px] bg-white " type="text" />
                <button className="absolute bg-main focus:outline-none top-[5px] left-[180px] rounded-[20px] font-medium text-white py-3 px-[21px]">
                    Send
                </button>
            </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
