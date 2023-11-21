import React, { useEffect, useState } from 'react'
import client1 from '../assets/imgs/clients/client-1.png'
import client2 from '../assets/imgs/clients/client-2.png'
import client3 from '../assets/imgs/clients/client-3.png'
import client4 from '../assets/imgs/clients/client-4.png'
import client5 from '../assets/imgs/clients/client-5.png'
import client6 from '../assets/imgs/clients/client-6.png'
import '../styles/about.css'
import { useSpring, animated } from '@react-spring/web';
import { BsArrowRight, BsBuildings, BsFillClipboard2PulseFill, BsCommand, BsGraphUpArrow } from 'react-icons/bs';
const About = () => {
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
            const targetElement = document.getElementById('About');
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
        <div id='About'>
            <animated.div style={springProps} className='flex items-center w-full px-10 py-10 overflow-hidden'>
                <span className='800px:flex block w-full items-center 800px:me-0 me-8'>
                    <img src={client1} alt="client1" className='800px:me-24 800px:mb-0 mb-10  800px:mt-5 grayscale-image 800px:w-[20%]' style={{ transition: "0.3s" }} />
                    <img src={client2} alt="client2" className='800px:me-24 800px:mb-0 mb-10   grayscale-image 800px:w-[20%]' style={{ transition: "0.3s" }} />
                    <img src={client3} alt="client3" className='800px:me-24 800px:mb-0 mb-10  grayscale-image 800px:w-[20%]' style={{ transition: "0.3s" }} />
                </span>
                <span className='800px:flex block w-full items-center'>
                    <img src={client4} alt="client4" className=' 800px:mb-0 mb-10  800px:me-24 grayscale-image 800px:w-[20%]' style={{ transition: "0.3s" }} />
                    <img src={client5} alt="client5" className=' 800px:mb-0 mb-10  800px:me-24 grayscale-image 800px:w-[20%]' style={{ transition: "0.3s" }} />
                    <img src={client6} alt="client6" className=' 800px:mb-0 mb-10   grayscale-image 800px:w-[20%]' style={{ transition: "0.3s" }} />
                </span>
            </animated.div>
            <div className='bg-[#f4f4f4] pb-10' id='About'>
                <div className={` w-11/12 800px:w-11/12 mx-auto  flex 800px:flex-row flex-col justify-between`}>
                    <animated.div style={springProps} className='800px:w-[35%] pt-20 800px:pt-56'>
                        <span className='text-red-500 text-[16px] bg-backlessRed px-5 py-3 rounded-md' >About Us</span>
                        <h2 className='mt-5 text-[35px] font-bold'>Ducimus rerum libero <br /> reprehenderit cumque</h2>
                        <p className='mt-5 text-defaultColor'>Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>
                        <div className='group cursor-pointer w-44 mt-5 py-3 px-7 text-white bg-primaryColor hover:bg-[#e84545b1] rounded-md' style={{ transition: "0.5s" }}>
                            <a href="#Home" className='flex items-center text-[18px] font-semibold'>Read More <span className='ms-1 relative group-hover:left-2'><BsArrowRight size={20} /></span></a>
                        </div>
                    </animated.div>
                    <div className='800px:w-[65%]'>
                        <div className='cards '>
                            <div style={springProps} className='top-cards flex 800px:flex-row flex-col'>
                                <animated.div style={springProps} className='group  bg-white 800px:ms-10 mt-[60px] 800px:w-[50%] h-[340px] rounded-2xl shadow-2xl'>
                                    <div className='ps-10 p-12'>
                                        <div className='bg-backlessRed group-hover:bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mb-3' style={{ transition: "0.5s" }}>
                                            <BsBuildings className='text-red-500 group-hover:text-white' size={35} />
                                        </div>
                                        <h2 className='mb-3 text-[25px] font-bold'>Eius provident</h2>
                                        <p className='text-defaultColor text-[15px]'>Magni repellendus vel ullam hic officia accusantium ipsa dolor omnis dolor voluptatem</p>
                                    </div>
                                </animated.div>
                                <animated.div style={springProps} className='group bg-white 800px:ms-5 mt-[20px] 800px:w-[50%] h-[340px] rounded-2xl shadow-2xl'>
                                    <div className='ps-10 p-12'>
                                        <div className='bg-backlessRed group-hover:bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mb-3' style={{ transition: "0.5s" }}>
                                            <BsFillClipboard2PulseFill className='text-red-500 group-hover:text-white' size={35} />
                                        </div>
                                        <h2 className='mb-3 text-[25px] font-bold'>Rerum aperiam</h2>
                                        <p className='text-defaultColor text-[15px]'>Autem saepe animi et aut aspernatur culpa facere. Rerum saepe rerum voluptates quia</p>
                                    </div>
                                </animated.div>
                            </div>
                            <div className='bottom-cards flex 800px:flex-row flex-col'>
                                <animated.div style={springProps} className='group bg-white 800px:ms-10 mt-[20px] 800px:w-[50%] h-[340px] rounded-2xl shadow-2xl'>
                                    <div className='ps-10 p-12'>
                                        <div className='bg-backlessRed group-hover:bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mb-3' style={{ transition: "0.5s" }}>
                                            <BsCommand className='text-red-500 group-hover:text-white' size={35} />
                                        </div>
                                        <h2 className='mb-3 text-[25px] font-bold'>Veniam omnis</h2>
                                        <p className='text-defaultColor text-[15px]'>Omnis perferendis molestias culpa sed. Recusandae quas possimus. Quod consequatur corrupti</p>
                                    </div>
                                </animated.div>
                                <animated.div style={springProps} className='card group bg-white 800px:ms-5 800px:mt-0 mt-[20px] 800px:w-[50%] h-[340px] rounded-2xl shadow-2xl'>
                                    <div className='ps-10 p-12'>
                                        <div className='bg-backlessRed group-hover:bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mb-3' style={{ transition: "0.5s" }}>
                                            <BsGraphUpArrow className='text-red-500 group-hover:text-white' size={35} />
                                        </div>
                                        <h2 className='mb-3 text-[25px] font-bold'>Delares sapiente</h2>
                                        <p className='text-defaultColor text-[15px]'>Sint et dolor voluptas minus possimus nostrum. Reiciendis commodi eligendi omnis quideme lorenda</p>
                                    </div>
                                </animated.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About