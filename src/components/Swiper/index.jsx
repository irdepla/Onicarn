import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// @ts-ignore
import CourseCard1 from "../../assets/images/card1.svg";
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

import { EffectCoverflow, Pagination } from "swiper/modules";

const CardSlider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="w-full border border-solid">
        <div className="courses__card w-[10px] px-[17px] pb-[22px] shadow-custom flex flex-col">

        </div>
      </SwiperSlide>
      <SwiperSlide className="w-[300px]">
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
                  <span className="text-primary font-bold text-xl">$ 380</span>
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
      </SwiperSlide>
      <SwiperSlide className="w-[300px]">
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
                  <span className="text-primary font-bold text-xl">$ 380</span>
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
      </SwiperSlide>
      <SwiperSlide className="w-[300px]">
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
                  <span className="text-primary font-bold text-xl">$ 380</span>
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
      </SwiperSlide>
    </Swiper>
  );
};

export default CardSlider;
