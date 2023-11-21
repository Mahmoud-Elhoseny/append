import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import styles from '../styles/styles';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import testimonials1 from '../assets/imgs/testimonials/testimonials-1.jpg';
import testimonials2 from '../assets/imgs/testimonials/testimonials-2.jpg';
import testimonials3 from '../assets/imgs/testimonials/testimonials-3.jpg';
import testimonials4 from '../assets/imgs/testimonials/testimonials-4.jpg';
import testimonials5 from '../assets/imgs/testimonials/testimonials-5.jpg';
import { TiStarFullOutline } from "react-icons/ti";
import '../App.css'
const Testimonials = () => {
    return (
        <div className=' flex flex-row 800px:flex-col'>
            <div className='bg-[#f4f4f4] h-full w-full pt-36'>
                <div className={`${styles.section}`}>
                    <div className='800px:w-[40%] 800px:float-left'>
                        <h1 className='text-[35px] text-[#32353a] font-bold'>Testimonials</h1>
                        <p className='text-iconsSerivce'>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </div>
                    <div className='800px:w-[58%] 800px:float-right relative mt-5 800px:mt-0 800px:-top-16 mb-10'>
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2000 }}
                        >
                            <SwiperSlide className='w-full'>
                                <div className='relative p-5 pb-10 800px:pb-36 bg-white shadow-2xl w-full'>
                                    <div className='800px:float-left me-2'>
                                        <img src={testimonials1} alt="testimonials1" className=' w-[80px] border-4 rounded-full' />
                                    </div>
                                    <div className='ms-2'>
                                        <h2 className='font-semibold text-[20px]'>Saul Goodman</h2>
                                        <p className='text-[#999] text-[15px]'>Ceo & Founder</p>
                                        <ul className='flex'>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                        </ul>
                                        <div className='800px:float-left mt-6'>
                                            <p className='flex'>
                                                <span><BiSolidQuoteAltLeft className='text-semicolon me-1' size={20} /></span>
                                                <span className='italic text-[15px]'>Proin iaculis purus consequat sem cure dignissim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                            </p>
                                            <span><BiSolidQuoteAltRight className='text-semicolon' size={20} /></span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='w-full'>
                                <div className='relative p-5 pb-10 800px:pb-36 bg-white shadow-2xl w-full'>
                                    <div className='800px:float-left me-2'>
                                        <img src={testimonials2} alt="testimonials1" className=' w-[80px] border-4 rounded-full' />
                                    </div>
                                    <div className='ms-2'>
                                        <h2 className='font-semibold text-[20px]'>Sara Wilsson</h2>
                                        <p className='text-[#999] text-[15px]'>Designer</p>
                                        <ul className='flex'>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                        </ul>
                                        <div className='800px:float-left mt-6'>
                                            <p className='flex'>
                                                <span><BiSolidQuoteAltLeft className='text-semicolon me-1' size={20} /></span>
                                                <span className='italic text-[15px]'>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                            </p>
                                            <span><BiSolidQuoteAltRight className='text-semicolon' size={20} /></span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='w-full'>
                                <div className='relative p-5 pb-10 800px:pb-36 bg-white shadow-2xl w-full'>
                                    <div className='800px:float-left me-2'>
                                        <img src={testimonials3} alt="testimonials1" className=' w-[80px] border-4 rounded-full' />
                                    </div>
                                    <div className='ms-2'>
                                        <h2 className='font-semibold text-[20px]'>jena karlis</h2>
                                        <p className='text-[#999] text-[15px]'>Store Owner</p>
                                        <ul className='flex'>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                        </ul>
                                        <div className='800px:float-left mt-6'>
                                            <p className='flex'>
                                                <span><BiSolidQuoteAltLeft className='text-semicolon me-1' size={20} /></span>
                                                <span className='italic text-[15px]'>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                                            </p>
                                            <span><BiSolidQuoteAltRight className='text-semicolon' size={20} /></span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='w-full'>
                                <div className='relative p-5 pb-10 800px:pb-36 bg-white shadow-2xl w-full'>
                                    <div className='800px:float-left me-2'>
                                        <img src={testimonials4} alt="testimonials1" className=' w-[80px] border-4 rounded-full' />
                                    </div>
                                    <div className='ms-2'>
                                        <h2 className='font-semibold text-[20px]'>Matt Brandon</h2>
                                        <p className='text-[#999] text-[15px]'>freelancer</p>
                                        <ul className='flex'>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                        </ul>
                                        <div className='800px:float-left mt-6'>
                                            <p className='flex'>
                                                <span><BiSolidQuoteAltLeft className='text-semicolon me-1' size={20} /></span>
                                                <span className='italic text-[15px]'>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                                            </p>
                                            <span><BiSolidQuoteAltRight className='text-semicolon' size={20} /></span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='w-full'>
                                <div className='relative p-5 pb-10 800px:pb-36 bg-white shadow-2xl w-full'>
                                    <div className='800px:float-left me-2'>
                                        <img src={testimonials5} alt="testimonials1" className=' w-[80px] border-4 rounded-full' />
                                    </div>
                                    <div className='ms-2'>
                                        <h2 className='font-semibold text-[20px]'>John Larson</h2>
                                        <p className='text-[#999] text-[15px]'>Entrepreneur</p>
                                        <ul className='flex'>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                            <li> <TiStarFullOutline size={18} className='mt-1 text-[#ffc107]' /> </li>
                                        </ul>
                                        <div className='800px:float-left mt-6'>
                                            <p className='flex'>
                                                <span><BiSolidQuoteAltLeft className='text-semicolon me-1' size={20} /></span>
                                                <span className='italic text-[15px]'>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                                            </p>
                                            <span><BiSolidQuoteAltRight className='text-semicolon' size={20} /></span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonials;
