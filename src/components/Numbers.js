import CountUp from 'react-countup';
import React, { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web';
import ScrollTrigger from 'react-scroll-trigger';

const Numbers = () => {
    const [counterOn, setCounterOn] = useState(false)

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
            const targetElement = document.getElementById('Numbers');
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
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
            <div className='bg-stats relative bg-cover 800px:h-[50vh] bg-no-repeat bg-center' id='Numbers'>
                <div className='absolute top-0 right-0 bottom-0 left-0 bg-[#000000ac] h-full w-full flex justify-center items-center'>
                    <animated.div style={springProps} className=' w-[80%] mx-auto text-center pt-5 flex flex-col 800px:flex-row 800px:pt-0'>
                        <div className='box 800px:w-[25%] pb-11 800px:pe-7'>
                            <div className='relative'>
                                <div className=' pt-[30px] text-center'>
                                    <h1 className='font-semibold text-[50px] text-white'>
                                        {counterOn && <CountUp start={0} end={232} duration={3} delay={0} />}</h1>
                                    <p className='text-navcolor font-semibold text-[20px]'>Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className='box 800px:w-[25%] pb-11 800px:pe-7'>
                            <div className='relative'>
                                <div className=' pt-[30px] text-center'>
                                    <h1 className='font-semibold text-[50px] text-white'>
                                        {counterOn && <CountUp start={0} end={521} duration={3} delay={0} />}</h1>
                                    <p className='text-navcolor font-semibold text-[20px]'>Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className='box 800px:w-[25%] pb-11 800px:pe-7'>
                            <div className='relative'>
                                <div className=' pt-[30px] text-center'>
                                    <h1 className='font-semibold text-[50px] text-white'>
                                        {counterOn && <CountUp start={0} end={1453} duration={3} delay={0} />}</h1>
                                    <p className='text-navcolor font-semibold text-[20px]'>Hours Of Support</p>
                                </div>
                            </div>
                        </div>
                        <div className='box 800px:w-[25%] pb-11 800px:pe-7'>
                            <div className='relative'>
                                <div className=' pt-[30px] text-center'>
                                    <h1 className='font-semibold text-[50px] text-white'>
                                        {counterOn && <CountUp start={0} end={32} duration={3} delay={0} />}</h1>
                                    <p className='text-navcolor font-semibold text-[20px]'>Workers</p>
                                </div>
                            </div>
                        </div>
                    </animated.div>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default Numbers