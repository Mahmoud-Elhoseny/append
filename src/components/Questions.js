import React, { useState } from 'react'
import styles from '../styles/styles'
import { GoChevronDown, GoChevronRight } from "react-icons/go";

const Questions = () => {
    const [activeTab, setActiveTab] = useState(1);
    const toggleTab = (tab) => {
        if (activeTab === tab) {
            setActiveTab(0);
        } else {
            setActiveTab(tab);
        }
    };
    return (
        <div className={`${styles.section} pt-36 800px:flex`}>
            <div className='800px:w-[30%] 800px:float-left'>
                <h1 className='text-[35px]'>Frequently Asked <span className='font-bold'>Questions</span></h1>
                <p className='text-iconsSerivce'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
            </div>
            <div className='800px:float-right 800px:w-[65%] pt-10 800px:pt-0'>
                <div className='800px:px-[10px] bg-white shadow-lg '>
                    <div className='group p-5 cursor-pointer rounded-md' >
                        <div className=' flex items-center' onClick={() => toggleTab(1)}>
                            <div className='flex justify-between items-center w-full '>
                                <div>
                                    <p className={` me-1 text-[18px] font-semibold group-hover:text-primaryColor ${activeTab === 1 ? "text-primaryColor" : "text-[#343a40]"}`}><span className='text-primaryColor'>1.</span> Non consectetur a erat nam at lectus urna duis?</p>
                                </div>
                                <div>
                                    {activeTab === 1 ? (
                                        <GoChevronRight className={`${activeTab === 1 ? "text-primaryColor" : ""}`} size={20} />
                                    ) : <GoChevronDown className='group-hover:text-primaryColor' size={20} />}
                                </div>
                            </div>
                        </div>
                        {activeTab === 1 ? (
                            <div className='text-[#444444] mt-2 cursor-text'>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</div>
                        ) : null}
                    </div>
                </div>
                <div className='800px:px-[10px] bg-white shadow-lg mt-5'>
                    <div className='group bg-white p-5 cursor-pointer rounded-md ' >
                        <div className=' flex items-center' onClick={() => toggleTab(2)}>
                            <div className='flex justify-between items-center w-full '>
                                <div>
                                    <p className={` me-1  text-[18px] font-semibold group-hover:text-primaryColor ${activeTab === 2 ? "text-primaryColor" : "text-[#343a40]"}`}>
                                        <span className='text-primaryColor'>2.</span> Feugiat scelerisque varius morbi enim nunc?</p>
                                </div>
                                <div>
                                    {activeTab === 2 ? (
                                        <GoChevronRight className={`${activeTab === 2 ? "text-primaryColor" : ""}`} size={20} />
                                    ) : <GoChevronDown className='group-hover:text-primaryColor' size={20} />}
                                </div>
                            </div>
                        </div>
                        {activeTab === 2 ? (
                            <div className='text-[#444444] mt-2 cursor-text'>
                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</div>
                        ) : null}
                    </div>
                </div>
                <div className='800px:px-[10px] bg-white shadow-lg mt-5'>
                    <div className='group bg-white p-5 cursor-pointer rounded-md ' >
                        <div className=' flex items-center' onClick={() => toggleTab(3)}>
                            <div className='flex justify-between items-center w-full '>
                                <div>
                                    <p className={` me-1  text-[18px] font-semibold group-hover:text-primaryColor ${activeTab === 3 ? "text-primaryColor" : "text-[#343a40]"}`}><span className='text-primaryColor'>3.</span> Dolor sit amet consectetur adipiscing elit?</p>
                                </div>
                                <div>
                                    {activeTab === 3 ? (
                                        <GoChevronRight className={`${activeTab === 3 ? "text-primaryColor" : ""}`} size={20} />
                                    ) : <GoChevronDown className='group-hover:text-primaryColor' size={20} />}
                                </div>
                            </div>
                        </div>
                        {activeTab === 3 ? (
                            <div className='text-[#444444] mt-2 cursor-text'>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</div>
                        ) : null}
                    </div>
                </div>
                <div className='800px:px-[10px] bg-white shadow-lg mt-5'>
                    <div className='group bg-white p-5 cursor-pointer rounded-md ' >
                        <div className=' flex items-center' onClick={() => toggleTab(4)}>
                            <div className='flex justify-between items-center w-full '>
                                <div>
                                    <p className={` me-1  text-[18px] font-semibold group-hover:text-primaryColor ${activeTab === 4 ? "text-primaryColor" : "text-[#343a40]"}`}><span className='text-primaryColor'>4.</span> Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</p>
                                </div>
                                <div>
                                    {activeTab === 4 ? (
                                        <GoChevronRight className={`${activeTab === 4 ? "text-primaryColor" : ""}`} size={20} />
                                    ) : <GoChevronDown className='group-hover:text-primaryColor' size={20} />}
                                </div>
                            </div>
                        </div>
                        {activeTab === 4 ? (
                            <div className='text-[#444444] mt-2 cursor-text'>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.</div>
                        ) : null}
                    </div>
                </div>
                <div className='800px:px-[10px] bg-white shadow-lg mt-5'>
                    <div className='group bg-white p-5 cursor-pointer rounded-md ' >
                        <div className=' flex items-center' onClick={() => toggleTab(5)}>
                            <div className='flex justify-between items-center w-full '>
                                <div>
                                    <p className={` me-1  text-[18px] font-semibold group-hover:text-primaryColor ${activeTab === 5 ? "text-primaryColor" : "text-[#343a40]"}`}><span className='text-primaryColor'>5.</span> Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?</p>
                                </div>
                                <div>
                                    {activeTab === 5 ? (
                                        <GoChevronRight className={`${activeTab === 5 ? "text-primaryColor" : ""}`} size={20} />
                                    ) : <GoChevronDown className='group-hover:text-primaryColor' size={20} />}
                                </div>
                            </div>
                        </div>
                        {activeTab === 5 ? (
                            <div className='text-[#444444] mt-2 cursor-text'>Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.</div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions