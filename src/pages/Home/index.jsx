import React, { useState } from "react";
// @ts-ignore
import CoursesVector from "../../assets/icons/courses-vector.svg";
// @ts-ignore
import CourseCard1 from "../../assets/images/card1.svg";
// @ts-ignore
import CourseCard2 from "../../assets/images/card2.svg";
// @ts-ignore
import CourseCard3 from "../../assets/images/card3.svg";
// @ts-ignore
import CourseCard4 from "../../assets/images/card4.svg";
// @ts-ignore
import Blink1 from "../../assets/icons/Blink1.svg";
// @ts-ignore
import Blink2 from "../../assets/icons/Blink2.svg";
// @ts-ignore
import Blink3 from "../../assets/icons/Blink3.svg";
// @ts-ignore
import Blink4 from "../../assets/icons/Blink4.svg";
// @ts-ignore
import Blink5 from "../../assets/icons/Blink5.svg";
// @ts-ignore
import CategoryVector from "../../assets/icons/category-vector.svg";
// @ts-ignore
import BeautyImg from "../../assets/icons/beauty1.svg";
// @ts-ignore
import BeautyImg2 from "../../assets/icons/beauty2.svg";
// @ts-ignore
import BeautyImg3 from "../../assets/icons/beauty3.svg";
// @ts-ignore
import BeautyImg4 from "../../assets/icons/beauty4.svg";
// @ts-ignore
import FeaturesImg1 from "../../assets/images/features1.svg";
// @ts-ignore
import FeaturesImg2 from "../../assets/images/features2.svg";
// @ts-ignore
import FeaturesCard1 from "../../assets/icons/features-card1.svg";
// @ts-ignore
import FeaturesCard2 from "../../assets/icons/features-card2.svg";
// @ts-ignore
import FeaturesCard3 from "../../assets/icons/features-card3.svg";
// @ts-ignore
import GiftCard from "../../assets/images/gift-card.svg";
// @ts-ignore
import Star from "../../assets/icons/star.svg";
// @ts-ignore
import DownVector from "../../assets/icons/down-vector.svg";
// @ts-ignore
import Carousel1 from "../../assets/images/carousel-card1.svg";
// @ts-ignore
import Carousel2 from "../../assets/images/carousel-card2.svg";
import CardSlider from "../../components/Swiper";

const Home = () => {
  const [isHovered, setIsHovered] = useState(null);
  return (
    <>
      <main className="main">
        <section className="courses mt-[150px]">
          <div className="container courses__wrapper flex flex-col">
            <div className="courses__info">
              <h2 className="courses__title  text-primary font-bold text-5xl text-center ">
                Popular Courses
                <img
                  className="ml-[680px] mt-1.5"
                  src={CoursesVector}
                  alt="A line"
                />
              </h2>
              <div className="courses__list flex items-center gap-6 justify-center mt-[40px]">
                <button
                  className={"bg-main rounded-[5px] py-2.5 px-5 text-white"}
                >
                  All Programme
                </button>
                <button
                  className={
                    "bg-white border-[1px] border-solid border-[#C4C4C4] rounded-[5px] py-2.5 px-5 text-[#818C96]"
                  }
                >
                  Ui/Ux Design
                </button>
                <button
                  className={
                    "bg-white border-[1px] border-solid border-[#C4C4C4] rounded-[5px] py-2.5 px-5 text-[#818C96]"
                  }
                >
                  Program Design
                </button>
                <button
                  className={
                    "bg-white border-[1px] border-solid border-[#C4C4C4] rounded-[5px] py-2.5 px-5 text-[#818C96]"
                  }
                >
                  Program Design
                </button>
                <button
                  className={
                    "bg-white border-[1px] border-solid border-[#C4C4C4] rounded-[5px] py-2.5 px-5 text-[#818C96]"
                  }
                >
                  Program Design
                </button>
                <button
                  className={
                    "bg-white border-[1px] border-solid border-[#C4C4C4] rounded-[5px] py-2.5 px-5 text-[#818C96]"
                  }
                >
                  Program Design
                </button>
              </div>
            </div>

            <div className="courses__cards mt-[60px] grid grid-cols-4 gap-[25px]">
              <div className="courses__card w-[296px] px-[17px] pb-[22px] shadow-custom flex flex-col">
                <div className="relative">
                  <img
                    className="rounded-t-[14px]"
                    src={CourseCard1}
                    alt="Course Image"
                  />
                  <div className="courses__cards__participiants absolute bg-white top-[140px] left-[20px] border-red-800 border-solid mb-7 flex items-center gap-[5px] rounded-[40px]  px-2.5 py-1.5">
                    <div>
                      <img
                        className="inline-block"
                        src={Blink1}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink2}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink3}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink4}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink5}
                        alt="Participant"
                      />
                    </div>
                    <span>+40 students</span>
                  </div>
                </div>
                <div className="courses__cards__info mt-15 flex flex-col ">
                  <span className="font-normal text-[#777795] text-sm">
                    1 - 28 July 2022
                  </span>
                  <h2 className="text-main mt-2 font-extrabold text-xl">
                    Product Management Basic - Course
                  </h2>
                  <p className="font-normal text-sm text-[#4D4D4D] mt-2 ">
                    Product Management Masterclass, you will learn with Sarah
                    Johnson - Head of Product Customer Platform Gojek Indonesia.
                  </p>
                  <div className="mt-[31px] flex justify-between">
                    <p className="flex items-center gap-2">
                      <span className="text-primary font-bold text-xl">
                        $ 380
                      </span>
                      <span className="text-[#230F0F] text-xl opacity-50 line-through font-normal">
                        $ 500
                      </span>
                    </p>

                    <button
                      className={"bg-main rounded-[5px] py-2.5 px-5 text-white"}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="courses__card w-[296px] px-[17px] pb-[22px] shadow-custom flex flex-col">
                <div className="relative">
                  <img
                    className="rounded-t-[14px]"
                    src={CourseCard2}
                    alt="Course Image"
                  />
                  <div className="courses__cards__participiants absolute bg-white top-[140px] left-[20px] border-red-800 border-solid mb-7 flex items-center gap-[5px] rounded-[40px]  px-2.5 py-1.5">
                    <div>
                      <img
                        className="inline-block"
                        src={Blink1}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink2}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink3}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink4}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink5}
                        alt="Participant"
                      />
                    </div>
                    <span>+40 students</span>
                  </div>
                </div>
                <div className="courses__cards__info mt-15 flex flex-col ">
                  <span className="font-normal text-[#777795] text-sm">
                    1 - 28 July 2022
                  </span>
                  <h2 className="text-main mt-2 font-extrabold text-xl">
                    Product Management Basic - Course
                  </h2>
                  <p className="font-normal text-sm text-[#4D4D4D] mt-2 ">
                    Product Management Masterclass, you will learn with Sarah
                    Johnson - Head of Product Customer Platform Gojek Indonesia.
                  </p>
                  <div className="mt-[31px] flex justify-between">
                    <p className="flex items-center gap-2">
                      <span className="text-primary font-bold text-xl">
                        $ 380
                      </span>
                      <span className="text-[#230F0F] text-xl opacity-50 line-through font-normal">
                        $ 500
                      </span>
                    </p>

                    <button
                      className={"bg-main rounded-[5px] py-2.5 px-5 text-white"}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="courses__card w-[296px] px-[17px] pb-[22px] shadow-custom flex flex-col">
                <div className="relative">
                  <img
                    className="rounded-t-[14px]"
                    src={CourseCard3}
                    alt="Course Image"
                  />
                  <div className="courses__cards__participiants absolute bg-white top-[140px] left-[20px] border-red-800 border-solid mb-7 flex items-center gap-[5px] rounded-[40px]  px-2.5 py-1.5">
                    <div>
                      <img
                        className="inline-block"
                        src={Blink1}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink2}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink3}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink4}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink5}
                        alt="Participant"
                      />
                    </div>
                    <span>+40 students</span>
                  </div>
                </div>
                <div className="courses__cards__info mt-15 flex flex-col ">
                  <span className="font-normal text-[#777795] text-sm">
                    1 - 28 July 2022
                  </span>
                  <h2 className="text-main mt-2 font-extrabold text-xl">
                    Product Management Basic - Course
                  </h2>
                  <p className="font-normal text-sm text-[#4D4D4D] mt-2 ">
                    Product Management Masterclass, you will learn with Sarah
                    Johnson - Head of Product Customer Platform Gojek Indonesia.
                  </p>
                  <div className="mt-[31px] flex justify-between">
                    <p className="flex items-center gap-2">
                      <span className="text-primary font-bold text-xl">
                        $ 380
                      </span>
                      <span className="text-[#230F0F] text-xl opacity-50 line-through font-normal">
                        $ 500
                      </span>
                    </p>

                    <button
                      className={"bg-main rounded-[5px] py-2.5 px-5 text-white"}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="courses__card w-[296px] px-[17px] pb-[22px] shadow-custom flex flex-col">
                <div className="relative">
                  <img
                    className="rounded-t-[14px]"
                    src={CourseCard4}
                    alt="Course Image"
                  />
                  <div className="courses__cards__participiants absolute bg-white top-[140px] left-[20px] border-red-800 border-solid mb-7 flex items-center gap-[5px] rounded-[40px]  px-2.5 py-1.5">
                    <div>
                      <img
                        className="inline-block"
                        src={Blink1}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink2}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink3}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink4}
                        alt="Participant"
                      />
                      <img
                        className="inline-block -ml-2"
                        src={Blink5}
                        alt="Participant"
                      />
                    </div>
                    <span>+40 students</span>
                  </div>
                </div>
                <div className="courses__cards__info mt-15 flex flex-col ">
                  <span className="font-normal text-[#777795] text-sm">
                    1 - 28 July 2022
                  </span>
                  <h2 className="text-main mt-2 font-extrabold text-xl">
                    Product Management Basic - Course
                  </h2>
                  <p className="font-normal text-sm text-[#4D4D4D] mt-2 ">
                    Product Management Masterclass, you will learn with Sarah
                    Johnson - Head of Product Customer Platform Gojek Indonesia.
                  </p>
                  <div className="mt-[31px] flex justify-between">
                    <p className="flex items-center gap-2">
                      <span className="text-primary font-bold text-xl">
                        $ 380
                      </span>
                      <span className="text-[#230F0F] text-xl opacity-50 line-through font-normal">
                        $ 500
                      </span>
                    </p>

                    <button
                      className={"bg-main rounded-[5px] py-2.5 px-5 text-white"}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="category mt-[110px]">
          <div className="category__wrapper container justify-center flex flex-col gap-[60px]">
            <div>
              <h2 className="courses__title  text-main font-bold text-5xl text-center ">
                Courses Category
                <img
                  className="ml-[750px] mt-1.5"
                  src={CategoryVector}
                  alt="A line"
                />
              </h2>
              <span className="mt-10 font-normal text-[22px] text-[#696984] text-center block">
                Onlearing is one powerful online software suite that combines
                all the tools <br /> needed to run a successful school or
                office.
              </span>
            </div>

            <div className="category__cards grid grid-cols-4 items-center justify-center justify-items-center gap-10">
              <div className="category__card  py-8 px-[15px]  rounded-[15px] flex flex-col justify-center items-center">
                <div className="bg-main rounded-full">
                  <img className="p-2" src={BeautyImg} alt="Beauty Image" />
                </div>
                <h2 className="font-semibold text-[27px] text-main mt-[30px]">
                  Beauty
                </h2>
                <p className="text-lg text-center text-[#696984] mt-[23px]">
                  {" "}
                  One powerful online software suite that combines
                </p>
                <button
                  // @ts-ignore
                  onMouseEnter={() => setIsHovered(4)}
                  onMouseLeave={() => setIsHovered(null)}
                  className=" mt-[38px] text-main rounded-[10px] border border-solid py-3 px-[62px]
                    hover:bg-primary hover:text-white transition-colors duration-[1000ms] ease-in-out"
                >
                  {isHovered === 4 ? "Explore Courses" : "more"}
                </button>
              </div>
              <div className="category__card  py-8 px-[15px]  rounded-[15px] flex flex-col justify-center items-center">
                <div className="bg-pink-200 rounded-full">
                  <img className="" src={BeautyImg2} alt="Beauty Image" />
                </div>
                <h2 className="font-semibold text-[27px] text-main mt-[30px]">
                  medical
                </h2>
                <p className="text-lg text-center text-[#696984] mt-[23px]">
                  {" "}
                  One powerful online software suite that combines
                </p>
                <button
                  // @ts-ignore
                  onMouseEnter={() => setIsHovered(1)}
                  onMouseLeave={() => setIsHovered(null)}
                  className=" mt-[38px] text-main rounded-[10px] border border-solid py-3 px-[62px]
                     hover:bg-primary hover:text-white transition-colors duration-[1000ms] ease-in-out"
                >
                  {isHovered === 1 ? "Explore Courses" : "more"}
                </button>
              </div>
              <div className="category__card  py-[15px] px-[15px]  rounded-[15px] flex flex-col justify-center items-center">
                <img className="" src={BeautyImg3} alt="Beauty Image" />
                <h2 className="font-semibold text-[27px] text-main mt-[5px]">
                  sports
                </h2>
                <p className="text-lg text-center text-[#696984] mt-[23px]">
                  {" "}
                  One powerful online software suite that combines
                </p>
                <button
                  // @ts-ignore
                  onMouseEnter={() => setIsHovered(2)}
                  onMouseLeave={() => setIsHovered(null)}
                  className=" mt-[38px] text-main rounded-[10px] border border-solid py-3 px-[62px]
                     hover:bg-primary hover:text-white transition-colors duration-[1000ms] ease-in-out"
                >
                  {isHovered === 2 ? "Explore Courses" : "more"}
                </button>
              </div>
              <div className="category__card  py-[15px] px-[15px]  rounded-[15px] flex flex-col justify-center items-center">
                <img className="p-2" src={BeautyImg4} alt="Beauty Image" />
                <h2 className="font-semibold text-[27px] text-main mt-[8px]">
                  Nutrition
                </h2>
                <p className="text-lg text-center text-[#696984] mt-[23px]">
                  {" "}
                  One powerful online software suite that combines
                </p>
                <button
                  // @ts-ignore
                  onMouseEnter={() => setIsHovered(8)}
                  onMouseLeave={() => setIsHovered(null)}
                  className=" mt-[38px] text-main rounded-[10px] border border-solid py-3 px-[62px]
                     hover:bg-primary hover:text-white transition-colors duration-[1000ms] ease-in-out"
                >
                  {isHovered === 8 ? "Explore Courses" : "more"}
                </button>
              </div>
            </div>

            <div className="m-auto">
              <button className=" py-3 px-[62px] rounded-[10px] bg-white text-main border border-main hover:text-white hover:bg-primary transition-colors duration-[1000ms] ease-in-out ">
                view all
              </button>
            </div>
          </div>
        </section>
        <section className="features mt-[110px]">
          <div className="container features__wrapper flex justify-between gap-10">
            <div className="features__info  flex flex-col ">
              <button className="mr-auto bg-[#F5F5F5] py-2.5 px-[25px] text-main">
                Benefits
              </button>
              <h2 className="font-bold ml-[50px] mt-6 text-5xl text-main">
                Get Student ID card
              </h2>
              <div className="flex flex-col ">
                <div className="flex gap-3 items-center">
                  <img src={FeaturesCard1} alt="" />
                  <span className="text-[#696984] font-medium">
                    Teachers don’t get lost in the grid view and have a
                    dedicated Podium space.
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <img src={FeaturesCard2} alt="" />
                  <span className="text-[#696984] font-medium">
                    TA’s and presenters can be moved to the front of the class.
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <img src={FeaturesCard3} alt="" />
                  <span className="text-[#696984] font-medium">
                    Teachers can easily see all students and class data at one
                    time.
                  </span>
                </div>
              </div>
            </div>
            <div className="features__img w-full h-full">
              <img
                className="w-full object-cover h-full"
                src={FeaturesImg1}
                alt="Student ID Image"
              />
            </div>
          </div>
        </section>
        <section className="features mt-[110px]">
          <div className="container features__wrapper flex justify-between gap-10">
            <div className="features__img ">
              <img
                className="w-full object-cover h-full"
                src={FeaturesImg2}
                alt="Student ID Image"
              />
            </div>
            <div className="features__info  flex flex-col ">
              <button className="mr-auto bg-[#F5F5F5] py-2.5 px-[25px] text-main">
                Training
              </button>
              <h2 className="font-bold ml-[50px] mt-6 text-5xl text-primary">
                Staff training
              </h2>
              <div className="flex flex-col ">
                <div className="flex gap-3 items-center">
                  <img src={FeaturesCard1} alt="" />
                  <span className="text-[#696984] font-medium">
                    Teachers don’t get lost in the grid view and have a
                    dedicated Podium space.
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <img src={FeaturesCard2} alt="" />
                  <span className="text-[#696984] font-medium">
                    TA’s and presenters can be moved to the front of the class.
                  </span>
                </div>
                <div className="flex gap-3 items-center">
                  <img src={FeaturesCard3} alt="" />
                  <span className="text-[#696984] font-medium">
                    Teachers can easily see all students and class data at one
                    time.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="gift-card bg-[#DF1C25] mt-[141px]">
          <div className="container relative gift-card__wrapper flex items-center justify-between  ">
            <div className="gift-card__info pt-[50px] pb-[50px] flex flex-col justify-center items-center ">
              <h2 className="text-white font-bold text-5xl">
                Why You should buy gift cards ?
              </h2>
              <div className="flex gap-[9px] mt-7 items-center">
                <img src={Star} alt="Star" />
                <p className="text-white font-normal text-lg">
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                </p>
              </div>
              <div className="flex gap-[9px] mt-5 items-center">
                <img src={Star} alt="Star" />
                <p className="text-white font-normal text-lg">
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                </p>
              </div>
              <div className="flex gap-[9px] mt-5 items-center">
                <img src={Star} alt="Star" />
                <p className="text-white font-normal text-lg">
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.
                </p>
              </div>
              <button className="bg-white w-fit mr-auto text-main rounded-[10px] py-3 px-[62px] mt-10 hover:bg-primary hover:text-white transition-colors uppercase duration-[1000ms] ease-in-out">
                buy now
              </button>
            </div>
            <div className="gift-card__img">
              <img
                className="absolute right-[-35px] bottom-[0px]"
                src={GiftCard}
                alt=""
              />
            </div>
            <img
              className="absolute top-[150px] left-[100px] "
              src={DownVector}
              alt="vector line"
            />
          </div>
        </section>
        <section className="bundle mt-[93px] mx-auto">
          <div className="container bundle__wrapper flex flex-col gap-[80px]">
            <div className="flex items-center justify-between gap-[127px]">
              <div>
                <img src={Carousel1} alt="" />
              </div>

              <div className="flex w-[820px] h-[302px]  rounded-[20px] overflow-hidden shadow-lg bg-white">
              <div className="flex relative items-center justify-center w-[40%]">
                <img
                  src={CourseCard4}
                  alt="Python"
                  className="w-[409px] h-full object-cover"
                />
                <div className="absolute p-[10px] bg-white rounded-[50px] top-[220px] right-[30px] ">
                    <span className="text-primary font-bold text-2xl mr-2">
                      $380
                    </span>
                    <span className="text-gray-400 line-through text-lg">
                      $500
                    </span>
                  </div>
              </div>
              <div className="flex flex-col justify-between p-8 w-[60%]">
                <div>
                  <p className="text-xs text-gray-400 mb-2">1 - 28 July 2022</p>
                  <h3 className="text-main font-bold text-2xl mb-2">
                    Product Management Basic - Course
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Product Management Masterclass, you will learn with Sarah
                    Johnson - Head of Product Customer Platform Gojek Indonesia.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">

                    <div className="flex -space-x-2">
                      <img
                        src={Blink1}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <img
                        src={Blink2}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <img
                        src={Blink3}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      <img
                        src={Blink4}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                      
                    </div>
                    <span className="ml-2 text-gray-600 font-medium">
                      + 40 students
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img src={Carousel2} alt="" />
            </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
