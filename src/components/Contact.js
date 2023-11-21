import React from 'react';
import '../styles/about.css';
import { BsGeoAlt, BsTelephone, BsEnvelope, BsClock } from "react-icons/bs";

const Contact = () => {
    return (
        <>
            <div className=" mt-10 pb-20" id="Contact" >
                <div className="w-11/12 800px:w-10/12 md:w-800px mx-auto">
                    <div className="text-center pt-10 md:p-10">
                        <div className="flex justify-center items-center">
                            <span className="border border-red-500 w-14 me-3"></span>
                            <h1 className="text-3xl font-bold">Contact</h1>
                            <span className="border border-red-500 w-14 ms-3"></span>
                        </div>
                        <span className="text-defaultColor">
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-5" >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4 " >
                            <div className='box md:col-span-1 lg:col-span-5 bg-[#f4f4f4] '>
                                <div className='p-10'>
                                    <BsGeoAlt size={40} className='text-primaryColor' />
                                    <div className='mt-3'>
                                        <h2 className='text-[22px] font-bold'>Address</h2>
                                        <p className='text-defaultColor'>A108 Adam Street</p>
                                        <span className='text-defaultColor'>New York, NY 535022</span>
                                    </div>
                                </div>
                            </div>
                            <div className='box md:col-span-1 lg:col-span-5 bg-[#f4f4f4] '>
                                <div className='p-10'>
                                    <BsTelephone size={40} className='text-primaryColor' />
                                    <div className='mt-3'>
                                        <h2 className='text-[22px] font-bold'>Call Us
                                        </h2>
                                        <p className='text-defaultColor'>+1 5589 55488 55</p>
                                        <span className='text-defaultColor'>+1 6678 254445 41</span>
                                    </div>
                                </div>
                            </div>
                            <div className='box md:col-span-1 lg:col-span-5 bg-[#f4f4f4] '>
                                <div className='p-10'>
                                    <BsEnvelope size={40} className='text-primaryColor' />
                                    <div className='mt-3'>
                                        <h2 className='text-[22px] font-bold'>Email Us</h2>
                                        <p className='text-defaultColor'>info@example.com</p>
                                        <span className='text-defaultColor'>contact@example.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className='box md:col-span-1 lg:col-span-5 bg-[#f4f4f4] '>
                                <div className='p-10'>
                                    <BsClock size={40} className='text-primaryColor' />
                                    <div className='mt-3'>
                                        <h2 className='text-[22px] font-bold'>Open Hours
                                        </h2>
                                        <p className='text-defaultColor'>Monday - Friday</p>
                                        <span className='text-defaultColor'>9:00AM - 05:00PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#f4f4f4] pb-10'>
                            <div className="p-6" >
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 " >
                                    <div className='box col-span-1 md:col-span-1 lg:col-span-6 bg-[#f4f4f4] '>
                                        <input type="text" className='border-2 me-2 w-full px-[15px] py-[10px] text-[14px] outline-none focus:border-primaryColor bg-contactbg' placeholder='Your Name' style={{ transition: "0.3s" }} />
                                    </div>
                                    <div className='box col-span-1 md:col-span-1 lg:col-span-6 bg-[#f4f4f4] '>
                                        <input type="text" className='border-2 me-2 w-full px-[15px] py-[10px] text-[14px] outline-none focus:border-primaryColor bg-contactbg' placeholder='Your Email' style={{ transition: "0.3s" }} />
                                    </div>
                                    <div className='box col-span-1 md:col-span-2 lg:col-span-12 bg-[#f4f4f4] '>
                                        <input type="text" className='border-2 me-2 w-full px-[15px] py-[10px] text-[14px] outline-none focus:border-primaryColor bg-contactbg' placeholder='Subject' style={{ transition: "0.3s" }} />
                                    </div>
                                    <div className='box col-span-1 md:col-span-2 lg:col-span-12 bg-[#f4f4f4] '>
                                        <textarea type="text" className='border-2 outline-none me-2 w-full px-[15px] py-[10px] text-[14px] focus:border-primaryColor bg-contactbg ' rows={6} placeholder='Message' style={{ transition: "0.3s" }} />
                                    </div>
                                </div>
                            </div>
                            <div className='relative'>
                                <div className='text-center mt-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center w-[80%] 800px:w-[29%] bg-primaryColor py-3 px-8 text-white hover:bg-[#e84545b1] rounded-md' style={{ transition: "0.3s" }}>
                                    <a href="home" className='text-[14px]  font-semibold'>Send Message</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
