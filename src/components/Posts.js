import React from 'react';
import '../styles/about.css';
import blog1 from '../assets/imgs/blog/blog-1.jpg';
import blog2 from '../assets/imgs/blog/blog-2.jpg';
import blog3 from '../assets/imgs/blog/blog-3.jpg';
import author1 from '../assets/imgs/blog/blog-author.jpg';
import author2 from '../assets/imgs/blog/blog-author-2.jpg';
import author3 from '../assets/imgs/blog/blog-author-3.jpg';

const Posts = () => {
    return (
        <>
            <div className=" mt-10 pb-20" id="Team" >
                <div className="w-11/12 800px:w-10/12 md:w-800px mx-auto">
                    <div className="text-center pt-10 md:p-10">
                        <div className="flex justify-center items-center">
                            <span className="border border-red-500 w-14 me-3"></span>
                            <h1 className="text-3xl font-bold">Recent Posts</h1>
                            <span className="border border-red-500 w-14 ms-3"></span>
                        </div>
                        <span className="text-defaultColor">
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className='col-span-1'>
                            <div className='shadow-lg'>
                            <div className='max-h-[240px] overflow-hidden'>
                            <img src={blog1} alt="blog1" className='rounded-xl rounded-b-none' />
                            </div>
                                <div className='p-7 bg-white rounded-xl rounded-t-none'>
                                    <span className='text-iconsSerivce'>Politics</span>
                                    <h1 className='text-[20px] font-semibold mb-3'>Dolorum optio tempore voluptas dignissimos</h1>
                                    <div className='float-left me-3'>
                                        <img src={author1} alt="author1" className='w-[50px] h-[50px] rounded-full' />
                                    </div>
                                    <p>Maria Doe</p>
                                    <span className='text-iconsSerivce'>Jan 1, 2022</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='shadow-lg'>
                            <div className='max-h-[240px] overflow-hidden'>
                            <img src={blog2} alt="blog1" className='rounded-xl rounded-b-none' />
                            </div>
                                <div className='p-7 bg-white rounded-xl rounded-t-none'>
                                    <span className='text-iconsSerivce'>Sports</span>
                                    <h1 className='text-[20px] font-semibold mb-3'>Nisi magni odit consequatur autem nulla dolorem</h1>
                                    <div className='float-left me-3'>
                                        <img src={author2} alt="author1" className='w-[50px] h-[50px] rounded-full' />
                                    </div>
                                    <p>Allisa Mayer</p>
                                    <span className='text-iconsSerivce'>Jun 5, 2022</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='shadow-lg'>
                            <div className='max-h-[240px] overflow-hidden'>
                            <img src={blog3} alt="blog1" className='rounded-xl rounded-b-none' />
                            </div>
                                <div className='p-7 bg-white rounded-xl rounded-t-none'>
                                    <span className='text-iconsSerivce'>Entertainment</span>
                                    <h1 className='text-[20px] font-semibold mb-3'>Possimus soluta ut id suscipit ea ut in quo quia et soluta</h1>
                                    <div className='float-left me-3'>
                                        <img src={author3} alt="author1" className='w-[50px] h-[50px] rounded-full' />
                                    </div>
                                    <p>Mark Dower</p>
                                    <span className='text-iconsSerivce'>Jun 22, 2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Posts;
