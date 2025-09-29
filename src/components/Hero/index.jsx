import React, { useEffect } from "react";
import Mainbutton from "../MainButton";
// @ts-ignore
import HeroImg from "../../assets/images/hero-img.svg";
// @ts-ignore
import HeroImg1 from "../../assets/images/hero-img1.svg";
// @ts-ignore
import HeroImg2 from "../../assets/images/hero-img2.svg";
// @ts-ignore
import HeroImg3 from "../../assets/images/hero-img3.svg";
// @ts-ignore
import HeroStars from "../../assets/images/hero-stars.svg";
// @ts-ignore
import HeroSmallCard from "../../assets/icons/hero-smallcard.svg";
// @ts-ignore
import HeroStats from "../../assets/images/hero-stats.svg";
// @ts-ignore
import HeroEllipse from "../../assets/images/hero-ellipse.svg";
// @ts-ignore
import HeroCircle from "../../assets/images/hero-circle.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper relative container flex justify-between pb-[150px] pt-[100px]">
          <div className="hero__info flex flex-col ">
            <Mainbutton
              className={"bg-white py-[10px] px-[25px] w-fit text-[#252641] "}
              children={"Never stop learning"}
              onClick={""}
            />
            <h1 className="font-bold text-[64px] mt-[15px] text-main">
              Grow up your skills by online courses with Onlearning
            </h1>
            <div className="mt-[28px] flex  items-center gap-3">
              <Mainbutton
                className={
                  "bg-primary uppercase text-white py-5 px-[30px] w-fit"
                }
                children={"explore path"}
                onClick={""}
              />
              <div className="flex relative hero__students">
                <img src={HeroImg1} alt="image of student" />
                <img
                  className="absolute left-[40px]"
                  src={HeroImg2}
                  alt="image of student"
                />
                <img
                  className="absolute left-[80px]"
                  src={HeroImg3}
                  alt="image of student"
                />
              </div>
              <div className="hero__ratings ml-[80px] flex flex-col">
                <img src={HeroStars} alt="" />
                <span className="text-[#230F0F] font-semibold text-sm">
                  ( 10k+ Reviews)
                </span>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="hero__img relative w-full h-full">
            <img
              className="absolute  top-[250px] right-[300px]"
              src={HeroStats}
              alt="Statistics card"
            />
            <img
              className="absolute top-[120px] left-[370px]"
              src={HeroSmallCard}
              alt="Small Card"
            />
            <img className="border-none" src={HeroImg} alt="Student Image" />
          </div>
          <img
            className="absolute top-[540px] left-2/5 "
            src={HeroEllipse}
            alt="Picture of ellipse"
          />
          <img
            className="absolute top-[600px] left-[550px] "
            src={HeroCircle}
            alt="Picture of ellipse"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
