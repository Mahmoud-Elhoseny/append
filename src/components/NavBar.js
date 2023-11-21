import React, { useState } from 'react'
import styles from '../styles/styles'
import { BsList } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx'

const NavBar = () => {
    const [active, setActive] = useState(false)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 120) {
            setActive(true)
        } else {
            setActive(false)
        }
    })

    const [Open, setOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`${active ? 'fixed w-full bg-white' : 'bg-transparent'} shadow-lg z-50 flex justify-between px-6 py-6 items-center `} style={{ transition: "0.5s" }}>
                <div className='flex items-end'>
                    <h2 className={`${styles.h1}  cursor-pointer ${active ? 'text-black' : 'text-white'} `}>Append </h2>
                    <span className='ms-[2px] w-1 h-1 border rounded-full bg-red-700 border-red-700'></span>
                </div>
                <div className='hidden 800px:flex'>
                    <ul className='flex'>
                        <li className={`${active ? 'text-red-500' : 'text-white'} me-8`}><a href="#Home">Home</a></li>
                        <li className={`${active ? 'text-black hover:text-red-500' : 'text-navcolor hover:text-white'} me-8`}><a href="#About">About</a></li>
                        <li className={`${active ? 'text-black hover:text-red-500' : 'text-navcolor hover:text-white'} me-8`}><a href="#Services">Services</a></li>
                        <li className={`${active ? 'text-black hover:text-red-500' : 'text-navcolor hover:text-white'} me-8`}><a href="#Portfolio">Portfolio</a></li>
                        <li className={`${active ? 'text-black hover:text-red-500' : 'text-navcolor hover:text-white'} me-8`}><a href="#Team">Team</a></li>
                        <li className={`${active ? 'text-black hover:text-red-500' : 'text-navcolor hover:text-white'} me-8`}><a href="#Blog">Blog</a></li>
                        <div className="group inline-block relative text-navcolor">
                            <button className="inline-flex items-center">
                                <span className={`${active ? 'text-black hover:text-red-500' : 'text-navcolor hover:text-white'} flex items-center`}>Dropdown
                                    <svg
                                        className='fill-current h-4 w-4 me-3'
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                        />
                                    </svg>
                                </span>

                            </button>
                            <ul className="absolute hidden pt-1 group-hover:block w-[190px] bg-white rounded-md" >
                                <li >
                                    <a
                                        className="text-black hover:text-red-500 py-2 px-4 block whitespace-no-wrap"
                                        href="#One"
                                    >Drop Down 1</a>
                                </li>
                                <button className="inline-flex items-center py-2 px-4 whitespace-no-wrap"
                                    onMouseEnter={handleDropdown}
                                    onMouseLeave={handleDropdown}
                                >
                                    <span className=" text-black hover:text-red-500 flex items-center  ">Deep Dropdown
                                        <svg
                                            className="fill-current h-4 w-4 me-3 "
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                            />
                                        </svg>
                                    </span>
                                </button>
                                <ul className={`absolute ${isOpen ? 'block' : 'hidden'} pt-1 w-[200px] bg-white rounded-md top-11 right-[190px]`}>
                                    <li>
                                        <a
                                            className="text-black hover:text-red-500 py-2 px-4 block whitespace-no-wrap"
                                            href="#One"
                                        >
                                            Drop Down 1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-black hover:text-red-500 py-2 px-4 block whitespace-no-wrap"
                                            href="#One"
                                        >
                                            Drop Down 2
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-black hover:text-red-500 py-2 px-4 block whitespace-no-wrap"
                                            href="#One"
                                        >
                                            Drop Down 3
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-black hover:text-red-500 py-2 px-4 block whitespace-no-wrap"
                                            href="#One"
                                        >
                                            Drop Down 4
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-black hover:text-red-500 py-2 px-4 block whitespace-no-wrap"
                                            href="#One"
                                        >
                                            Drop Down 5
                                        </a>
                                    </li>
                                </ul>
                                <li>
                                    <a
                                        className="text-black hover:text-red-500 py-2 px-4 block whitespace-no-wrap"
                                        href="#three"
                                    >Drop Down 2</a>
                                </li>
                                <li>
                                    <a
                                        className="text-black hover:text-red-500 py-2 px-4 block whitespace-no-wrap"
                                        href="#four"
                                    >Drop Down 3</a>
                                </li>
                                <li>
                                    <a
                                        className="text-black hover:text-red-500 py-2 px-4 block whitespace-no-wrap"
                                        href="#five"
                                    >Drop Down 4</a>
                                </li>
                            </ul>
                        </div>
                        <li className={`${active ? 'text-black hover:text-red-500' : 'text-navcolor hover:text-white'}`}><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
                <div className='bg-primaryColor py-2 px-9 text-white hover:bg-[#e84545b1] rounded-md' style={{ transition: "0.5s" }}>
                    <a href="home" className='text-[14px] font-semibold'>Get Started</a>
                </div>

                {/* mobile sidebar */}
                <div className='flex 800px:hidden'>
                    <BsList size={30} className={`${active ? 'text-black' : 'text-navcolor'}`} onClick={() => setOpen(true)} />
                    {Open && (
                        <div className="w-full fixed bg-[#0000005f] z-20 h-full top-0 left-0">
                            <div className='bg-white fixed w-[90%] h-screen top-9 left-5 z-10 rounded-md'>
                                <RxCross1 size={20} color='white' className=' fixed right-5 top-2' onClick={() => setOpen(false)} />
                                <ul className='p-5'>
                                    <li className='mb-5 text-red-500'><a href="#Home">Home</a></li>
                                    <li className='mb-5 text-black hover:text-red-500' onClick={() => setOpen(false)}><a href="#About">About</a></li>
                                    <li className='mb-5 text-black hover:text-red-500' onClick={() => setOpen(false)}><a href="#Services">Services</a></li>
                                    <li className='mb-5 text-black hover:text-red-500' onClick={() => setOpen(false)}><a href="#Portfolio">Portfolio</a></li>
                                    <li className='mb-5 text-black hover:text-red-500' onClick={() => setOpen(false)}><a href="#Team">Team</a></li>
                                    <li className='mb-5 text-black hover:text-red-500' onClick={() => setOpen(false)}><a href="#Blog">Blog</a></li>
                                    <li className='text-black hover:text-red-500' onClick={() => setOpen(false)}><a href="#Contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>

        </>

    )
}

export default NavBar