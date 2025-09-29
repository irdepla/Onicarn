import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
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
import CourseCard1 from "../../assets/images/card1.svg";
// @ts-ignore
import CourseCard2 from "../../assets/images/card2.svg";
// @ts-ignore
import CourseCard3 from "../../assets/images/card3.svg";
// @ts-ignore
import CourseCard4 from "../../assets/images/card4.svg";

import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";


const CardSlider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      // @ts-ignore
      slidesPerView={"2"}
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
      <SwiperSlide className="w-full">
        <div className="flex w-[820px] h-[302px]  rounded-[20px] overflow-hidden shadow-lg bg-white">
          <div className="flex relative items-center justify-center w-[40%]">
            <img
              src={CourseCard4}
              alt="Python"
              className="w-[409px] h-full object-cover"
            />
            <div className="absolute p-[10px] bg-white rounded-[50px] top-[220px] right-[30px] ">
              <span className="text-primary font-bold text-2xl mr-2">$380</span>
              <span className="text-gray-400 line-through text-lg">$500</span>
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
      </SwiperSlide>
      <SwiperSlide className="w-[300px]">
        <div className="flex w-[820px] h-[302px]  rounded-[20px] overflow-hidden shadow-lg bg-white">
          <div className="flex relative items-center justify-center w-[40%]">
            <img
              src={CourseCard4}
              alt="Python"
              className="w-[409px] h-full object-cover"
            />
            <div className="absolute p-[10px] bg-white rounded-[50px] top-[220px] right-[30px] ">
              <span className="text-primary font-bold text-2xl mr-2">$380</span>
              <span className="text-gray-400 line-through text-lg">$500</span>
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
      </SwiperSlide>
      <SwiperSlide className="w-[300px]">
        <div className="flex w-[820px] h-[302px]  rounded-[20px] overflow-hidden shadow-lg bg-white">
          <div className="flex relative items-center justify-center w-[40%]">
            <img
              src={CourseCard4}
              alt="Python"
              className="w-[409px] h-full object-cover"
            />
            <div className="absolute p-[10px] bg-white rounded-[50px] top-[220px] right-[30px] ">
              <span className="text-primary font-bold text-2xl mr-2">$380</span>
              <span className="text-gray-400 line-through text-lg">$500</span>
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
      </SwiperSlide>
      <SwiperSlide className="w-[300px]">
        <div className="flex w-[820px] h-[302px]  rounded-[20px] overflow-hidden shadow-lg bg-white">
          <div className="flex relative items-center justify-center w-[40%]">
            <img
              src={CourseCard4}
              alt="Python"
              className="w-[409px] h-full object-cover"
            />
            <div className="absolute p-[10px] bg-white rounded-[50px] top-[220px] right-[30px] ">
              <span className="text-primary font-bold text-2xl mr-2">$380</span>
              <span className="text-gray-400 line-through text-lg">$500</span>
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
      </SwiperSlide>
    </Swiper>
  );
};

export default CardSlider;
