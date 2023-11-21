import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import styles from '../styles/styles'
import { useSpring, animated } from '@react-spring/web';

const Hero = () => {
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
            const targetElement = document.getElementById('Home');
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
            <div className='bg-hero relative bg-cover h-[100vh] bg-no-repeat bg-center' id='Home'>
                <div className='absoulte top-0 right-0 bottom-0 left-0 bg-[#0000007d] h-full w-full'>
                    <NavBar />
                    <animated.div style={springProps} className={`${styles.section} pt-48`}>
                        <h1 className='text-white font-bold text-[30px] 800px:text-[50px]'>Welcome to Our Website</h1>
                        <p className='text-navcolor text-[20px] mb-5'>We are team of talented designers making websites with Bootstrap</p>
                        <div className='w-full 800px:w-[40%] py-2 px-3 bg-white rounded-md flex justify-between'>
                            <input type="text" placeholder='Enter email address' className='outline-none' />
                            <button className='bg-primaryColor py-3 px-6 text-white hover:bg-[#e84545b1] rounded-md' style={{ transition: "0.3s" }}>Sign up</button>
                        </div>
                    </animated.div>
                </div>
            </div>
        </>
    )
}

export default Hero