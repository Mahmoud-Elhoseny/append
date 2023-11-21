import portfolio1 from '../assets/imgs/masonry-portfolio/masonry-portfolio-1.jpg';
import portfolio2 from '../assets/imgs/masonry-portfolio/masonry-portfolio-2.jpg';
import portfolio4 from '../assets/imgs/masonry-portfolio/masonry-portfolio-6.jpg';
import portfolio3 from '../assets/imgs/masonry-portfolio/masonry-portfolio-3.jpg';
import portfolio6 from '../assets/imgs/masonry-portfolio/masonry-portfolio-4.jpg';
import portfolio5 from '../assets/imgs/masonry-portfolio/masonry-portfolio-5.jpg';
import portfolio7 from '../assets/imgs/masonry-portfolio/masonry-portfolio-7.jpg';
import portfolio8 from '../assets/imgs/masonry-portfolio/masonry-portfolio-9.jpg';
import portfolio9 from '../assets/imgs/masonry-portfolio/masonry-portfolio-8.jpg';
import '../styles/about.css';
import React, { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web';
const Portfolio = () => {
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
            const targetElement = document.getElementById('Portfolio');
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
    const [active, setActive] = useState(1);
    return (
        <>
            <div className="bg-white pt-20" id="Portfolio" >
                <div className="w-11/12 md:w-800px mx-auto">
                    <div className="text-center pt-10 md:p-10">
                        <div className="flex justify-center items-center">
                            <span className="border border-red-500 w-14 me-3"></span>
                            <animated.h1 style={springProps} className="text-3xl font-bold">Portfolio</animated.h1>
                            <span style={springProps} className="border border-red-500 w-14 ms-3"></span>
                        </div>
                        <animated.span style={springProps} className="text-defaultColor">
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                        </animated.span>
                    </div>
                    <div >
                        <ul className="flex justify-center mt-10">
                            <li
                                className={`${active === 1 ? 'bg-red-500' : ''
                                    } me-7 rounded-full text-center w-16 cursor-pointer hover:bg-red-500`}
                                onClick={() => setActive(1)}
                            >
                                All
                            </li>
                            <li
                                className={`${active === 2 ? 'bg-red-500' : ''
                                    } me-7 rounded-full text-center w-16 cursor-pointer hover:bg-red-500`}
                                onClick={() => setActive(2)}
                            >
                                App
                            </li>
                            <li
                                className={`${active === 3 ? 'bg-red-500' : ''
                                    } me-7 rounded-full text-center w-16 cursor-pointer hover:bg-red-500`}
                                onClick={() => setActive(3)}
                            >
                                Card
                            </li>
                            <li
                                className={`${active === 4 ? 'bg-red-500' : ''
                                    } rounded-full text-center w-16 cursor-pointer hover:bg-red-500`}
                                onClick={() => setActive(4)}
                            >
                                Web
                            </li>
                        </ul>
                        {active === 1 ? (
                            <animated.h1 style={springProps} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
                                <div className="group col-span-1  ">
                                    <div className='relative'>
                                        <img src={portfolio1} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block  absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">App 1</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group col-span-1 ">
                                    <div className='relative'>
                                        <img src={portfolio2} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block  absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">Product 1</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group col-span-1 ">
                                    <div className='relative'>
                                        <img src={portfolio3} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block  absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">Branding 1</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group col-span-1 ">
                                    <div className='relative'>
                                        <img src={portfolio4} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block  absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">Branding 2</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group col-span-1 relative 800px:bottom-36">
                                    <div className='relative'>
                                        <img src={portfolio5} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">Product 2</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group col-span-1 relative 800px:bottom-48">
                                    <div className='relative'>
                                        <img src={portfolio6} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">App 2</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group col-span-1 relative">
                                    <div className='relative'>
                                        <img src={portfolio7} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block  absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">App 3</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group col-span-1 relative 800px:bottom-32">
                                    <div className='relative'>
                                        <img src={portfolio8} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block  absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">Branding 3</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group col-span-1 relative 800px:bottom-[560px]">
                                    <div className='relative'>
                                        <img src={portfolio9} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block  absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">Product 3</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                            </animated.h1>
                        ) : null}
                        {active === 2 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7" style={{ transition: "0.3s" }}>
                                <div className="group col-span-1  ">
                                    <div className='relative'>
                                        <img src={portfolio1} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block  absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">App 1</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group col-span-1 relative ">
                                    <div className='relative'>
                                        <img src={portfolio6} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">App 2</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group col-span-1 relative">
                                    <div className='relative'>
                                        <img src={portfolio7} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block  absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">App 3</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}

                        {active === 3 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7" style={{ transition: "0.3s" }}>
                                <div className="group col-span-1 ">
                                    <div className='relative'>
                                        <img src={portfolio2} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block  absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">Product 1</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group col-span-1 relative">
                                    <div className='relative'>
                                        <img src={portfolio5} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">Product 2</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group col-span-1 relative ">
                                    <div className='relative'>
                                        <img src={portfolio9} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block  absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">Product 3</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                        {active === 4 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7" style={{ transition: "0.3s" }}>
                                <div className="group col-span-1 ">
                                    <div className='relative'>
                                        <img src={portfolio3} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block  absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">Branding 1</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group col-span-1 ">
                                    <div className='relative'>
                                        <img src={portfolio4} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">Branding 2</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="group col-span-1 relative">
                                    <div className='relative'>
                                        <img src={portfolio8} className="w-full h-auto " alt="App 1" />
                                        <div className="hidden group-hover:block  absolute bottom-0 left-0 w-full bg-white p-4">
                                            <h4 className="text-xl font-bold">Branding 3</h4>
                                            <p>Lorem ipsum, dolor sit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
