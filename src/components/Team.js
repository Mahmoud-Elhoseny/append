import React from 'react';
import '../styles/about.css';
import team1 from '../assets/imgs/team/team-1.jpg';
import team2 from '../assets/imgs/team/team-2.jpg';
import team3 from '../assets/imgs/team/team-3.jpg';
import team4 from '../assets/imgs/team/team-4.jpg';
import team5 from '../assets/imgs/team/team-5.jpg';
import team6 from '../assets/imgs/team/team-6.jpg';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Team = () => {
    return (
        <>
            <div className="bg-[#f4f4f4] mt-20 pb-20" id="Team" >
                <div className="w-11/12 800px:w-10/12 md:w-800px mx-auto">
                    <div className="text-center pt-10 md:p-10">
                        <div className="flex justify-center items-center">
                            <span className="border border-red-500 w-14 me-3"></span>
                            <h1 className="text-3xl font-bold">Team</h1>
                            <span className="border border-red-500 w-14 ms-3"></span>
                        </div>
                        <span className="text-defaultColor">
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-11">
                        <div className='col-span-1'>
                            <div className='group flex flex-col items-center text-center'>
                                <div className='relative'>
                                    <img src={team1} alt="team1" className='border-2 border-white rounded-full w-[270px]' />
                                    <div className='absolute group-hover:bg-overlay rounded-full w-[100%] top-0 bottom-0 ' style={{ transition: "0.3s" }}>
                                        <ul className='hidden group-hover:flex justify-center items-center space-x-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ transition: "0.3s" }} >
                                            <li><a href="#Home"> <FaTwitter size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaFacebook size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaInstagram size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaLinkedin size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <h1 className='text-[20px] font-bold mt-3'>Walter White</h1>
                                <h2 className='text-[17px] mt-1 text-iconsSerivce italic'>Chief Executive Officer</h2>
                                <p className='text-[14px] mt-2'>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='group flex flex-col items-center text-center'>
                                <div className='relative'>
                                    <img src={team2} alt="team2" className='border-2 border-white rounded-full w-[270px]' />
                                    <div className='absolute group-hover:bg-overlay rounded-full w-[100%] top-0 bottom-0 ' style={{ transition: "0.3s" }}>
                                        <ul className='hidden group-hover:flex justify-center items-center space-x-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ transition: "0.3s" }} >
                                            <li><a href="#Home"> <FaTwitter size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaFacebook size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaInstagram size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaLinkedin size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <h1 className='text-[20px] font-bold mt-3'>Sarah Jhonson</h1>
                                <h2 className='text-[17px] mt-1 text-iconsSerivce  italic'>Product Manager</h2>
                                <p className='text-[14px] mt-2'>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='group flex flex-col items-center text-center'>
                                <div className='relative'>
                                    <img src={team3} alt="team3" className='border-2 border-white rounded-full w-[270px]' />
                                    <div className='absolute group-hover:bg-overlay rounded-full w-[100%] top-0 bottom-0 ' style={{ transition: "0.3s" }}>
                                        <ul className='hidden group-hover:flex justify-center items-center space-x-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ transition: "0.3s" }} >
                                            <li><a href="#Home"> <FaTwitter size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaFacebook size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaInstagram size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaLinkedin size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <h1 className='text-[20px] font-bold mt-3'>William Anderson</h1>
                                <h2 className='text-[17px] mt-1 text-iconsSerivce  italic'>CTO</h2>
                                <p className='text-[14px] mt-2'>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='group flex flex-col items-center text-center'>
                                <div className='relative'>
                                    <img src={team4} alt="team4" className='border-2 border-white rounded-full w-[270px]' />
                                    <div className='absolute group-hover:bg-overlay rounded-full w-[100%] top-0 bottom-0 ' style={{ transition: "0.3s" }}>
                                        <ul className='hidden group-hover:flex justify-center items-center space-x-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ transition: "0.3s" }} >
                                            <li><a href="#Home"> <FaTwitter size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaFacebook size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaInstagram size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaLinkedin size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <h1 className='text-[20px] font-bold mt-3'>Amanda Jepson</h1>
                                <h2 className='text-[17px] mt-1 text-iconsSerivce  italic'>Accountant</h2>
                                <p className='text-[14px] mt-2'>Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur</p>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='group flex flex-col items-center text-center'>
                                <div className='relative'>
                                    <img src={team5} alt="team5" className='border-2 overflow-hidden border-white rounded-full w-[270px] ' />
                                    <div className='absolute group-hover:bg-overlay rounded-full w-[100%] top-0 bottom-0 ' style={{ transition: "0.3s" }}>
                                        <ul className='hidden group-hover:flex justify-center items-center space-x-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ transition: "0.3s" }} >
                                            <li><a href="#Home"> <FaTwitter size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaFacebook size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaInstagram size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaLinkedin size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <h1 className='text-[20px] font-bold mt-3'>Brian Doe
                                </h1>
                                <h2 className='text-[17px] mt-1 text-iconsSerivce  italic'>Marketing</h2>
                                <p className='text-[14px] mt-2'>Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit</p>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='group flex flex-col items-center text-center'>
                                <div className='relative'>
                                    <img src={team6} alt="team6" className='border-2 border-white rounded-full w-[270px]' />
                                    <div className='absolute group-hover:bg-overlay rounded-full w-[100%] top-0 bottom-0 ' style={{ transition: "0.3s" }}>
                                        <ul className='hidden group-hover:flex justify-center items-center space-x-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' style={{ transition: "0.3s" }} >
                                            <li><a href="#Home"> <FaTwitter size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaFacebook size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaInstagram size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                            <li><a href="#Home"> <FaLinkedin size={23} className='text-white hover:text-primaryColor' /> </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <h1 className='text-[20px] font-bold mt-3'>Josepha Palas</h1>
                                <h2 className='text-[17px] mt-1 text-iconsSerivce  italic'>Operation</h2>
                                <p className='text-[14px] mt-2'>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;
