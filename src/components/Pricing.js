import React, { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web';
import '../styles/about.css'
import { BsBox, BsRocket, BsSend } from "react-icons/bs";
import { FaCheck } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const Pricing = () => {
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
            const targetElement = document.getElementById('Pricing');
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
            <div className='bg-[#ffffff] mt-10' id='Pricing'>
                <div className='w-11/12 800px:w-11/12 mx-auto'>
                    <div className='text-center pt-10 800px:p-10 '>
                        <div className='flex justify-center items-center'>
                            <span className='border border-red-500 w-[60px] me-3'></span>
                            <animated.h1 style={springProps} className='text-[30px] font-bold'>Pricing</animated.h1>
                            <span className='border border-red-500 w-[60px] ms-3'></span>
                        </div>
                        <animated.span style={springProps} className='text-defaultColor'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</animated.span>
                    </div>
                    <animated.ul style={springProps} className='flex 800px:flex-row flex-col w-full'>
                        <li className='bg-white 800px:w-[32%] shadow-2xl rounded-2xl my-10'>
                            <div className='p-10'>
                                <h2 className='text-[20px] text-center'>Free Plan</h2>
                                <div className='flex justify-center mt-5 '>
                                    <div className='bg-backlessRed flex justify-center items-center rounded-full w-[100px] h-[100px]'>
                                        <div className='bg-redCircle flex justify-center items-center rounded-full w-[80px] h-[80px]'>
                                            <div className=' bg-red-600 flex justify-center items-center rounded-full w-[60px] h-[60px]'>
                                                <BsBox color='white' size={30} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h1 className='text-center mb-10 relative text-[50px] ms-8 text-primaryColor font-bold'>
                                    <span className='absolute -top-1 left-[50px] 800px:left-[97px] text-[35px]'>
                                        $</span>0
                                    <span className='text-[25px] font-normal text-grayColor'>
                                        /</span>
                                    <span className='font-normal text-grayColor text-[22px]'>month</span>
                                </h1>
                                <ul>
                                    <li className='flex items-center text-[17px] text-iconsSerivce'><FaCheck className='me-2' color='green' /> Quam adipiscing vitae proin</li>
                                    <li className='flex items-center text-[17px] mt-3 text-iconsSerivce'><FaCheck className='me-2' color='green' /> Nec feugiat nisl pretium</li>
                                    <li className='flex items-center text-[17px] mt-3 text-iconsSerivce'><FaCheck className='me-2' color='green' /> Nulla at volutpat diam uteera</li>
                                    <li className='flex items-center text-[17px] mt-3 text-grayColor'><FaTimes className='me-2' /> <del>Pharetra massa massa ultricies</del> </li>
                                    <li className='flex items-center text-[17px] mt-3 text-grayColor'><FaTimes className='me-2' /> <del>Massa ultricies mi quis hendrerit</del></li>
                                </ul>
                                <div className='800px:mx-20 mt-20  text-center group' ><a href='#Home' className='rounded-sm border-2 text-[20px] px-10 py-2 font-semibold group-hover:bg-red-600 group-hover:text-white' style={{ transition: "0.3s" }}>Buy Now</a></div>
                            </div>
                        </li>
                        <li className='bg-white 800px:w-[36%] shadow-2xl rounded-2xl border-4 border-red-600'>
                            <div className='p-10'>
                                <h2 className='text-[20px] text-center'>Free Plan</h2>
                                <div className='flex justify-center mt-5 '>
                                    <div className='bg-backlessRed flex justify-center items-center rounded-full w-[100px] h-[100px]'>
                                        <div className='bg-redCircle flex justify-center items-center rounded-full w-[80px] h-[80px]'>
                                            <div className=' bg-red-600 flex justify-center items-center rounded-full w-[60px] h-[60px]'>
                                                <BsRocket color='white' size={30} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h1 className='text-center mb-10 relative text-[50px] ms-8 text-primaryColor font-bold'>
                                    <span className='absolute -top-1 left-[30px] 800px:left-[107px] text-[35px] '>
                                        $</span>29
                                    <span className='text-[25px] font-normal text-grayColor'>
                                        /</span>
                                    <span className='font-normal text-grayColor text-[22px]'>month</span>
                                </h1>
                                <ul>
                                    <li className='flex 800px:text-[20px] text-[17px] items-center text-iconsSerivce'><FaCheck className='me-2' color='green' /> Quam adipiscing vitae proin</li>
                                    <li className='flex 800px:text-[20px] text-[17px] items-center mt-5 text-iconsSerivce'><FaCheck className='me-2' color='green' /> Nec feugiat nisl pretium</li>
                                    <li className='flex 800px:text-[20px] text-[17px] items-center mt-5 text-iconsSerivce'><FaCheck className='me-2' color='green' /> Nulla at volutpat diam uteera</li>
                                    <li className='flex 800px:text-[20px] text-[17px] items-center mt-5 text-iconsSerivce'><FaCheck className='me-2' color='green' /> Pharetra massa massa ultricies </li>
                                    <li className='flex 800px:text-[20px] text-[17px] items-center mt-5 text-iconsSerivce'><FaCheck className='me-2' color='green' /> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <div className='group 800px:mx-28 mt-20 text-center' ><a href='#Home' className=' rounded-sm text-[20px] px-10 py-2 font-semibold bg-red-600 text-white group-hover:bg-red-500' style={{ transition: "0.3s" }}>Buy Now</a></div>
                            </div>
                        </li>
                        <li className='bg-white 800px:w-[32%] shadow-2xl rounded-2xl my-10'>
                            <div className='p-10'>
                                <h2 className='text-[20px] text-center'>Free Plan</h2>
                                <div className='flex justify-center mt-5 '>
                                    <div className='bg-backlessRed flex justify-center items-center rounded-full w-[100px] h-[100px]'>
                                        <div className='bg-redCircle flex justify-center items-center rounded-full w-[80px] h-[80px]'>
                                            <div className=' bg-red-600 flex justify-center items-center rounded-full w-[60px] h-[60px]'>
                                                <BsSend color='white' size={30} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h1 className='text-center mb-10 relative text-[50px] ms-8 text-primaryColor font-bold'>
                                    <span className='absolute -top-1 left-[40px] 800px:left-[85px] text-[35px]'>
                                        $</span>49
                                    <span className='text-[25px] font-normal text-grayColor'>
                                        /</span>
                                    <span className='font-normal text-grayColor text-[22px]'>month</span>
                                </h1>
                                <ul>
                                    <li className='flex items-center text-[17px] text-iconsSerivce'><FaCheck className='me-2' color='green' /> Quam adipiscing vitae proin</li>
                                    <li className='flex items-center text-[17px] mt-3 text-iconsSerivce'><FaCheck className='me-2' color='green' /> Nec feugiat nisl pretium</li>
                                    <li className='flex items-center text-[17px] mt-3 text-iconsSerivce'><FaCheck className='me-2' color='green' /> Nulla at volutpat diam uteera</li>
                                    <li className='flex items-center text-[17px] mt-3 text-iconsSerivce'><FaCheck className='me-2' color='green' /> Pharetra massa massa ultricies </li>
                                    <li className='flex items-center text-[17px] mt-3 text-iconsSerivce'><FaCheck className='me-2' color='green' /> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <div className='800px:mx-24 mt-20 text-center group' ><a href='#Home' className='rounded-sm border-2 text-[20px] px-10 py-2 font-semibold group-hover:bg-red-600 group-hover:text-white' style={{ transition: "0.3s" }}>Buy Now</a></div>
                            </div>
                        </li>
                    </animated.ul>
                </div>
            </div>
        </>
    )
}

export default Pricing