import React from 'react';
// @ts-ignore
import CoursesVector from '../../assets/icons/courses-vector.svg';



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
                    <div className="courses__card w-[296px] flex flex-col">
                        <img src="" alt="" />
                    </div>
                </div>
                </div>
            </section>
        </main>
        </>
    );
}

export default Home;
