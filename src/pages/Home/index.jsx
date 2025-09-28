import React from 'react';
// @ts-ignore
import CoursesVector from '../../assets/icons/courses-vector.svg';
// @ts-ignore
import CourseCard1 from '../../assets/images/card1.svg';
// @ts-ignore
import CourseCard2 from '../../assets/images/card2.svg';
// @ts-ignore
import CourseCard3 from '../../assets/images/card3.svg';
// @ts-ignore
import CourseCard4 from '../../assets/images/card4.svg';
// @ts-ignore
import Blink1 from '../../assets/icons/Blink1.svg';
// @ts-ignore
import Blink2 from '../../assets/icons/Blink2.svg';
// @ts-ignore
import Blink3 from '../../assets/icons/Blink3.svg';
// @ts-ignore
import Blink4 from '../../assets/icons/Blink4.svg';
// @ts-ignore
import Blink5 from '../../assets/icons/Blink5.svg';
// @ts-ignore
import CategoryVector from '../../assets/icons/category-vector.svg';



const Home = () => {
    return (
        <>
        <main className=''>
            <section className='courses mt-[150px]'>
                <div className='container courses__wrapper flex flex-col'>

                <div className='courses__info'>
                    <h2 className='courses__title  text-primary font-bold text-5xl text-center '>
                        Popular Courses
                        <img className='ml-[680px] mt-1.5' src={CoursesVector} alt="A line" />
                    </h2>
                    <div className='courses__list flex items-center gap-6 justify-center mt-[40px]'>
                        <button className={"bg-main rounded-[5px] py-2.5 px-5 text-white"}  >
                            All Programme
                        </button>
                        <button className={"bg-white border-[1px] border-solid border-[#C4C4C4] rounded-[5px] py-2.5 px-5 text-[#818C96]"}  >
                            Ui/Ux Design
                        </button>
                        <button className={"bg-white border-[1px] border-solid border-[#C4C4C4] rounded-[5px] py-2.5 px-5 text-[#818C96]"}  >
                            Program Design
                        </button>
                        <button className={"bg-white border-[1px] border-solid border-[#C4C4C4] rounded-[5px] py-2.5 px-5 text-[#818C96]"}  >
                            Program Design
                        </button>
                        <button className={"bg-white border-[1px] border-solid border-[#C4C4C4] rounded-[5px] py-2.5 px-5 text-[#818C96]"}  >
                            Program Design
                        </button>
                        <button className={"bg-white border-[1px] border-solid border-[#C4C4C4] rounded-[5px] py-2.5 px-5 text-[#818C96]"}  >
                            Program Design
                        </button>
                    </div>
                </div>

                
                <div className='courses__cards mt-[60px] grid grid-cols-4 gap-[25px]'>
                    <div className="courses__card w-[296px] px-[17px] pb-[22px] shadow-custom flex flex-col">
                        <div className='relative'>
                            <img className='rounded-t-[14px]' src={CourseCard1} alt="Course Image" />
                        <div className='courses__cards__participiants absolute bg-white top-[140px] left-[20px] border-red-800 border-solid mb-7 flex items-center gap-[5px] rounded-[40px]  px-2.5 py-1.5'>
                            <div>
                            <img className='inline-block' src={Blink1} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink2} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink3} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink4} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink5} alt="Participant" />
                            </div>
                            <span>
                                +40 students
                            </span>
                        </div>
                        </div>
                        <div className='courses__cards__info mt-15 flex flex-col '>
                            <span className='font-normal text-[#777795] text-sm'>1 - 28 July 2022</span>
                            <h2 className='text-main mt-2 font-extrabold text-xl'>Product Management Basic - Course</h2>
                            <p className='font-normal text-sm text-[#4D4D4D] mt-2 '>
                                Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
                            </p>
                            <div className='mt-[31px] flex justify-between'>
                                <p className='flex items-center gap-2'>
                                    <span className='text-primary font-bold text-xl'>$ 380</span>
                                    <span className='text-[#230F0F] text-xl opacity-50 line-through font-normal'>$ 500</span>
                                </p>

                                <button className={"bg-main rounded-[5px] py-2.5 px-5 text-white"}  >
                            Enroll Now
                        </button>

                            </div>
                        </div>
                    </div>
                    <div className="courses__card w-[296px] px-[17px] pb-[22px] shadow-custom flex flex-col">
                        <div className='relative'>
                            <img className='rounded-t-[14px]' src={CourseCard2} alt="Course Image" />
                        <div className='courses__cards__participiants absolute bg-white top-[140px] left-[20px] border-red-800 border-solid mb-7 flex items-center gap-[5px] rounded-[40px]  px-2.5 py-1.5'>
                            <div>
                            <img className='inline-block' src={Blink1} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink2} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink3} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink4} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink5} alt="Participant" />
                            </div>
                            <span>
                                +40 students
                            </span>
                        </div>
                        </div>
                        <div className='courses__cards__info mt-15 flex flex-col '>
                            <span className='font-normal text-[#777795] text-sm'>1 - 28 July 2022</span>
                            <h2 className='text-main mt-2 font-extrabold text-xl'>Product Management Basic - Course</h2>
                            <p className='font-normal text-sm text-[#4D4D4D] mt-2 '>
                                Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
                            </p>
                            <div className='mt-[31px] flex justify-between'>
                                <p className='flex items-center gap-2'>
                                    <span className='text-primary font-bold text-xl'>$ 380</span>
                                    <span className='text-[#230F0F] text-xl opacity-50 line-through font-normal'>$ 500</span>
                                </p>

                                <button className={"bg-main rounded-[5px] py-2.5 px-5 text-white"}  >
                            Enroll Now
                        </button>

                            </div>
                        </div>
                    </div>
                    <div className="courses__card w-[296px] px-[17px] pb-[22px] shadow-custom flex flex-col">
                        <div className='relative'>
                            <img className='rounded-t-[14px]' src={CourseCard3} alt="Course Image" />
                        <div className='courses__cards__participiants absolute bg-white top-[140px] left-[20px] border-red-800 border-solid mb-7 flex items-center gap-[5px] rounded-[40px]  px-2.5 py-1.5'>
                            <div>
                            <img className='inline-block' src={Blink1} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink2} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink3} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink4} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink5} alt="Participant" />
                            </div>
                            <span>
                                +40 students
                            </span>
                        </div>
                        </div>
                        <div className='courses__cards__info mt-15 flex flex-col '>
                            <span className='font-normal text-[#777795] text-sm'>1 - 28 July 2022</span>
                            <h2 className='text-main mt-2 font-extrabold text-xl'>Product Management Basic - Course</h2>
                            <p className='font-normal text-sm text-[#4D4D4D] mt-2 '>
                                Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
                            </p>
                            <div className='mt-[31px] flex justify-between'>
                                <p className='flex items-center gap-2'>
                                    <span className='text-primary font-bold text-xl'>$ 380</span>
                                    <span className='text-[#230F0F] text-xl opacity-50 line-through font-normal'>$ 500</span>
                                </p>

                                <button className={"bg-main rounded-[5px] py-2.5 px-5 text-white"}  >
                            Enroll Now
                        </button>

                            </div>
                        </div>
                    </div>
                    <div className="courses__card w-[296px] px-[17px] pb-[22px] shadow-custom flex flex-col">
                        <div className='relative'>
                            <img className='rounded-t-[14px]' src={CourseCard4} alt="Course Image" />
                        <div className='courses__cards__participiants absolute bg-white top-[140px] left-[20px] border-red-800 border-solid mb-7 flex items-center gap-[5px] rounded-[40px]  px-2.5 py-1.5'>
                            <div>
                            <img className='inline-block' src={Blink1} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink2} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink3} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink4} alt="Participant" />
                            <img className='inline-block -ml-2' src={Blink5} alt="Participant" />
                            </div>
                            <span>
                                +40 students
                            </span>
                        </div>
                        </div>
                        <div className='courses__cards__info mt-15 flex flex-col '>
                            <span className='font-normal text-[#777795] text-sm'>1 - 28 July 2022</span>
                            <h2 className='text-main mt-2 font-extrabold text-xl'>Product Management Basic - Course</h2>
                            <p className='font-normal text-sm text-[#4D4D4D] mt-2 '>
                                Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.
                            </p>
                            <div className='mt-[31px] flex justify-between'>
                                <p className='flex items-center gap-2'>
                                    <span className='text-primary font-bold text-xl'>$ 380</span>
                                    <span className='text-[#230F0F] text-xl opacity-50 line-through font-normal'>$ 500</span>
                                </p>

                                <button className={"bg-main rounded-[5px] py-2.5 px-5 text-white"}  >
                            Enroll Now
                        </button>

                            </div>
                        </div>
                    </div>
                    
                </div>

                </div>
            </section>
            <section className='category mt-[110px]'>
                <h2 className='courses__title  text-main font-bold text-5xl text-center '>
                        Courses Category
                        <img className='ml-[750px] mt-1.5' src={CategoryVector} alt="A line" />
                    </h2>
            </section>
        </main>
        </>
    );
}

export default Home;
