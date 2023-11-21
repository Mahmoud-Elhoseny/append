import React from 'react'
import styles from '../styles/styles'
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='bg-[#f4f4f4]'>
                <div className={`${styles.section} py-10`}>
                    <div className='grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12 gap-4'>
                        <ul className='col-span-2 md:col-span-8 lg:col-span-5'>
                            <h1 className='text-[30px] font-bold mb-2'>Append</h1>
                            <li className='text-iconsSerivce'>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</li>
                            <div className='flex space-x-4 mt-3'>
                                <li className='group cursor-pointer border-grayColor w-[45px] h-[45px] border rounded-full flex justify-center items-center hover:border-primaryColor' style={{ transition: "0.3s" }}><a href="#"><FaTwitter className='text-grayColor group-hover:text-primaryColor' size={22} style={{ transition: "0.3s" }} /></a></li>
                                <li className='group cursor-pointer border-grayColor w-[45px] h-[45px] border rounded-full flex justify-center items-center hover:border-primaryColor' style={{ transition: "0.3s" }}><a href="#"><FaFacebook className='text-grayColor group-hover:text-primaryColor' size={22} style={{ transition: "0.3s" }} /></a></li>
                                <li className='group cursor-pointer border-grayColor w-[45px] h-[45px] border rounded-full flex justify-center items-center hover:border-primaryColor' style={{ transition: "0.3s" }}><a href="#"><FaInstagram className='text-grayColor group-hover:text-primaryColor' size={22} style={{ transition: "0.3s" }} /></a></li>
                                <li className='group cursor-pointer border-grayColor w-[45px] h-[45px] border rounded-full flex justify-center items-center hover:border-primaryColor' style={{ transition: "0.3s" }}><a href="#"><FaLinkedin className='text-grayColor group-hover:text-primaryColor' size={22} style={{ transition: "0.3s" }} /></a></li>
                            </div>
                        </ul>
                        <ul className=' col-span-1 md:col-span-4 lg:col-span-2'>
                            <h1 className='text-[16px] mb-2 font-semibold mt-5 800px:mt-0'>Useful Links</h1>
                            <li className='flex text-[14px] items-center text-iconsSerivce mb-3'><a href='#Home' className='hover:text-primaryColor'>Home</a></li>
                            <li className='flex text-[14px] items-center text-iconsSerivce mb-3'><a href="#About" className='hover:text-primaryColor'>About us</a></li>
                            <li className='flex text-[14px] items-center text-iconsSerivce mb-3'><a href="#Services" className='hover:text-primaryColor'>Services</a></li>
                            <li className='flex text-[14px] items-center text-iconsSerivce mb-3'><a href="#1" className='hover:text-primaryColor'>Terms of service</a></li>
                            <li className='flex text-[14px] items-center text-iconsSerivce'><a href="#1" className='hover:text-primaryColor'>Privacy policy</a></li>
                        </ul>
                        <ul className='col-span-1 md:col-span-4 lg:col-span-2'>
                            <h1 className='text-[16px] mb-2 font-semibold mt-5 800px:mt-0'>Our Services</h1>
                            <li className='flex text-[14px] items-center text-iconsSerivce mb-3'><a href='#Home' className='hover:text-primaryColor'>Web Design</a></li>
                            <li className='flex text-[14px] items-center text-iconsSerivce mb-3'><a href="#1" className='hover:text-primaryColor'>Web Development</a></li>
                            <li className='flex text-[14px] items-center text-iconsSerivce mb-3'><a href="#1" className='hover:text-primaryColor'>Product Management</a></li>
                            <li className='flex text-[14px] items-center text-iconsSerivce mb-3'><a href="#1" className='hover:text-primaryColor'>Marketing</a></li>
                            <li className='flex text-[14px] items-center text-iconsSerivce'><a href="#1" className='hover:text-primaryColor'>Graphic Design</a></li>
                        </ul>
                        <ul className='col-span-2 text-center lg:text-start  md:text-start md:col-span-8 lg:col-span-2'>
                            <h1 className='text-[16px] mb-2 font-semibold mt-5 800px:mt-0'>Contact Us</h1>
                            <li className='text-iconsSerivce text-[14px]'>A108 Adam Street</li>
                            <li className='text-iconsSerivce text-[14px]'>New York, NY 535022</li>
                            <li className='text-iconsSerivce text-[14px]'>United States</li>
                            <li className='text-iconsSerivce text-[14px] mt-8'><span className='text-black font-semibold'>Phone:</span> +1 5589 55488 55</li>
                            <li className='text-iconsSerivce text-[14px]'><span className='text-black font-semibold'>Email:</span> info@example.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer