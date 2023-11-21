import features1 from '../assets/imgs/features-light-2.jpg'
import features2 from '../assets/imgs/features-light-1.jpg'
import features3 from '../assets/imgs/features-light-3.jpg'
import '../styles/about.css'
import { IoIosCheckmark } from "react-icons/io";
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
const Features = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [springProps, set] = useSpring(() => ({
        opacity: 0,
        transform: 'translateY(300px)',
    }));
    useEffect(() => {
        set({
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translate(0px, 0px)" : "translate(0px, 300px)",
            config: {
                duration: 1000,
            },
        });
    }, [isVisible, set]);

    useEffect(() => {
        const handleScroll = () => {
            const targetElement = document.getElementById('Features');
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                setIsVisible(targetPosition < windowHeight);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='bg-[#ffffff]' id='Features'>
                <div className='w-11/12 800px:w-11/12 mx-auto'>
                    <div className='text-center pt-10 800px:p-10 '>
                        <div className='flex justify-center items-center'>
                            <span className='border border-red-500 w-[60px] me-3'></span>
                            <animated.h1 style={springProps} className='text-[30px] font-bold'>Features</animated.h1>
                            <span className='border border-red-500 w-[60px] ms-3'></span>
                        </div>
                        <animated.span style={springProps} className='text-defaultColor'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</animated.span>
                    </div>
                    <animated.div style={springProps} className={`flex 800px:flex-row flex-col justify-between`}>
                        <div className='hidden 800px:block 800px:w-[35%] pt-10 800px:pt-28'>
                            <h2 className='mt-5 text-[30px] font-bold'>Corporis temporibus maiores provident</h2>
                            <p className='mt-5 text-defaultColor'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            <div className='group cursor-pointer flex items-center justify-center w-40  mt-5 py-3  text-white bg-primaryColor hover:bg-[#e84545b1] rounded-md' style={{ transition: "0.5s" }}>
                                <a href="#Home" className='text-[16px]'>Get Started</a>
                            </div>
                        </div>
                        <div className='800px:w-[40%]' >
                            <animated.div style={springProps} className='flex relative mt-10 800px:mt-0 '>
                                <img src={features1} alt="" className=' w-[80%] ms-[80px] 800px:ms-0 800px:w-full border-[6px] border-white shadow-lg ' />
                                <img src={features2} alt="" className=' absolute  top-14 800px:right-[300px] 800px:top-[100px] w-[80%] border-[6px] border-white shadow-lg' />
                            </animated.div>
                        </div>
                        <animated.div style={springProps} className='800px:hidden 800px:w-[35%] pt-10 800px:pt-28'>
                            <h2 className='mt-5 text-[30px] font-bold'>Corporis temporibus maiores provident</h2>
                            <p className='mt-5 text-defaultColor'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            <div className='group cursor-pointer flex items-center justify-center w-40  mt-5 py-3  text-white bg-primaryColor hover:bg-[#e84545b1] rounded-md' style={{ transition: "0.5s" }}>
                                <a href="#Home" className='text-[16px]'>Get Started</a>
                            </div>
                        </animated.div>
                    </animated.div>
                    <animated.div style={springProps} className={`flex 800px:flex-row flex-col justify-between mt-[60px] 800px:mt-[200px]`}>
                        <div className='800px:w-[55%]'>
                            <div className='flex relative '>
                                <img src={features3} alt="" className=' border-[6px] border-white shadow-lg w-full' />
                            </div>
                        </div>
                        <div className='800px:w-[35%] 800px:pt-28'>
                            <h2 className='mt-5 text-[30px] font-bold'>Sunt consequatur ad ut est nulla</h2>
                            <p className='mt-5 text-defaultColor'>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                            <p className='mt-5 flex items-center text-defaultColor'><IoIosCheckmark size={23} color='red' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className='mt-2 flex items-center text-defaultColor'><IoIosCheckmark size={23} color='red' /> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            <p className='mt-2 flex items-center text-defaultColor'><IoIosCheckmark size={23} color='red' /> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</p>
                            <div className='group cursor-pointer flex items-center justify-center w-40  mt-5 py-3  text-white bg-primaryColor hover:bg-[#e84545b1] rounded-md' style={{ transition: "0.5s" }}>
                                <a href="#Home" className='text-[16px]'>Get Started</a>
                            </div>
                        </div>
                    </animated.div>
                </div>
            </div>
        </>
    )
}

export default Features