import React, { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web';
import { BsBriefcase, BsBarChart, BsBrightnessHigh, BsCardChecklist, BsBinoculars, BsCalendar4Week } from 'react-icons/bs';
const Services = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [springProps, set] = useSpring(() => ({
        opacity: 0,
        transform: 'translateY(500px)',
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
            const targetElement = document.getElementById('Services');
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
            <div className='bg-[#ffffff]' id='Services'>
                <div className='w-12/12 800px:w-11/12 mx-auto'>
                    <div className='text-center p-10'>
                        <div className='flex justify-center items-center'>
                            <span className='border border-red-500 w-[60px] me-3'></span>
                            <animated.h1 style={springProps} className='text-[30px] font-bold'>Services</animated.h1>
                            <span className='border border-red-500 w-[60px] ms-3'></span>
                        </div>
                        <animated.span style={springProps} className='text-defaultColor'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</animated.span>
                    </div>
                    <animated.div style={springProps} className='flex 800px:flex-row flex-col'>
                        <div className='left 800px:w-[49%]'>
                            <div className='group p-5'>
                                <div className='flex'>
                                    <span className='border border-red-500 w-[60px] 800px:w-[25px] mb-3'></span>
                                    <span className='border w-[800px] mb-3'></span>
                                </div>
                                <div className='items-center mt-8 '>
                                    <div className='float-left mb-9 me-5 800px:me-10 relative'>
                                        <BsBriefcase size={50} className='text-iconsSerivce' />
                                        <span className='absolute -bottom-2 left-7 bg-redCircle w-[30px] h-[30px] rounded-full'></span>
                                    </div>
                                    <a href='##'>
                                        <h2 className='font-semibold mb-2 text-[20px] group-hover:text-red-500' style={{ transition: "0.3s" }}>Lorem Ipsum</h2>
                                        <p className='text-defaultColor leading-5 text-[13px] font-medium '>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                    </a>
                                </div>
                            </div>
                            <div className='group p-5'>
                                <div className='flex'>
                                    <span className='border border-red-500 w-[60px] 800px:w-[25px] mb-3'></span>
                                    <span className='border w-[800px] mb-3'></span>
                                </div>
                                <div className='items-center mt-8 '>
                                    <div className='float-left mb-9 me-5 800px:me-10 relative'>
                                        <BsBarChart size={50} className='text-iconsSerivce' />
                                        <span className='absolute -bottom-2 left-7 bg-redCircle w-[30px] h-[30px] rounded-full'></span>
                                    </div>
                                    <a href='##'>
                                        <h2 className='font-semibold mb-2 text-[20px] group-hover:text-red-500' style={{ transition: "0.3s" }}>Sed ut perspiciatis</h2>
                                        <p className='text-defaultColor leading-5 text-[13px] font-medium '>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                    </a>
                                </div>
                            </div>
                            <div className='group p-5'>
                                <div className='flex'>
                                    <span className='border border-red-500 w-[60px] 800px:w-[25px] mb-3'></span>
                                    <span className='border w-[800px] mb-3'></span>
                                </div>
                                <div className='items-center mt-8 '>
                                    <div className='float-left mb-9 me-5 800px:me-10 relative'>
                                        <BsBrightnessHigh size={50} className='text-iconsSerivce' />
                                        <span className='absolute -bottom-2 left-7 bg-redCircle w-[30px] h-[30px] rounded-full'></span>
                                    </div>
                                    <a href='##'>
                                        <h2 className='font-semibold mb-2 text-[20px] group-hover:text-red-500' style={{ transition: "0.3s" }}>Nemo Enim</h2>
                                        <p className='text-defaultColor leading-5 text-[13px] font-medium '>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='right 800px:w-[49%]'>
                            <div className='group p-5'>
                                <div className='flex'>
                                    <span className='border border-red-500 w-[60px] 800px:w-[25px] mb-3'></span>
                                    <span className='border w-[800px] mb-3'></span>
                                </div>
                                <div className='items-center mt-8 '>
                                    <div className='float-left mb-9 me-5 800px:me-10 relative'>
                                        <BsCardChecklist size={50} className='text-iconsSerivce' />
                                        <span className='absolute -bottom-2 left-7 bg-redCircle w-[30px] h-[30px] rounded-full'></span>
                                    </div>
                                    <a href='##'>
                                        <h2 className='font-semibold mb-2 text-[20px] group-hover:text-red-500' style={{ transition: "0.3s" }}>Dolor Sitema</h2>
                                        <p className='text-defaultColor leading-5 text-[13px] font-medium '>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                    </a>
                                </div>
                            </div>
                            <div className='group p-5'>
                                <div className='flex'>
                                    <span className='border border-red-500 w-[60px] 800px:w-[25px] mb-3'></span>
                                    <span className='border w-[800px] mb-3'></span>
                                </div>
                                <div className='items-center mt-8 '>
                                    <div className='float-left mb-9 me-5 800px:me-10 relative'>
                                        <BsBinoculars size={50} className='text-iconsSerivce' />
                                        <span className='absolute -bottom-2 left-7 bg-redCircle w-[30px] h-[30px] rounded-full'></span>
                                    </div>
                                    <a href='##'>
                                        <h2 className='font-semibold mb-2 text-[20px] group-hover:text-red-500' style={{ transition: "0.3s" }}>Magni Dolores</h2>
                                        <p className='text-defaultColor leading-5 text-[13px] font-medium '>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                    </a>
                                </div>
                            </div>
                            <div className='group p-5'>
                                <div className='flex'>
                                    <span className='border border-red-500 w-[60px] 800px:w-[25px] mb-3'></span>
                                    <span className='border w-[800px] mb-3'></span>
                                </div>
                                <div className='items-center mt-8 '>
                                    <div className='float-left mb-9 me-5 800px:me-10 relative'>
                                        <BsCalendar4Week size={50} className='text-iconsSerivce' />
                                        <span className='absolute -bottom-2 left-7 bg-redCircle w-[30px] h-[30px] rounded-full'></span>
                                    </div>
                                    <a href='##'>
                                        <h2 className='font-semibold mb-2 text-[20px] group-hover:text-red-500' style={{ transition: "0.3s" }}>Eiusmod Tempor</h2>
                                        <p className='text-defaultColor leading-5 text-[13px] font-medium '>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                </div>
            </div>
        </>
    )
}

export default Services