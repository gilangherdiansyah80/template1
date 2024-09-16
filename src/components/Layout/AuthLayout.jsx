/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Icon from '../Elements/Icon';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AuthLayout = ({ children }) => {
    AOS.init();

    const [open, setShowOpen] = useState(false);

    const handleOpen = () => {
        setShowOpen(!open);
    }

    const scrollMenu = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleClick = (id, e) => {
        e.preventDefault();
        scrollMenu(id);
    };

    return (
        <div className=''>
            <header data-aos="fade-down" className="fixed z-20 w-screen bg-slate-900 xl:flex lg:justify-around justify-between lg:px-10 items-center overflow-x-hidden">
                <div className="flex justify-between items-center p-3">
                    <a href='#home' onClick={(e) => handleClick('home', e)} className='flex items-center gap-x-3'>
                        <img src="images/logo-catering.png" alt="Dapoer Ghaitsa Catering" className="w-14" />
                        <h1 className='hidden md:block text-white text-3xl font-bold font-briem'>Dapoer Ghaitsa Catering</h1>
                    </a>
                    <div className='mr-6 xl:hidden'>
                        {open ? (
                        <Icon icon='fas fa-times' size='text-3xl' color='text-white' handleOpen={handleOpen} />
                        ) : (
                        <Icon icon='fas fa-bars' size='text-3xl' color='text-white' handleOpen={handleOpen} />
                        )}
                    </div>
                </div>
                {open && (
                    <nav className="bg-white p-3">
                    <ul className="text-black flex flex-col gap-y-3">
                        <h1 className="text-2xl font-bold md:hidden">Dapoer Ghaitsa Catering</h1>
                        <a href='#home' onClick={(e) => handleClick('home', e)}><li className="hover:text-yellow-700 md:text-xl" onClick={handleOpen}>Home</li></a>
                        <a href='#about' onClick={(e) => handleClick('about', e)}><li className="hover:text-yellow-700 md:text-xl" onClick={handleOpen}>About Us</li></a>
                        <a href='#menu' onClick={(e) => handleClick('menu', e)}><li className="hover:text-yellow-700 md:text-xl" onClick={handleOpen}>Menu</li></a>
                        <a href='#contact' onClick={(e) => handleClick('contact', e)}><li className="hover:text-yellow-700 md:text-xl" onClick={handleOpen}>Contact Us</li></a>
                    </ul>
                    </nav>
                )}
                <nav className="hidden xl:block xl:px-3">
                    <ul className="text-black flex flex-col gap-y-3 xl:flex-row xl:text-white xl:gap-x-14">
                        <h1 className="text-2xl font-bold md:hidden">Dapoer Ghaitsa Catering</h1>
                        <a href='#home' onClick={(e) => handleClick('home', e)}><li className="hover:text-yellow-700 text-3xl">Home</li></a>
                        <a href='#about' onClick={(e) => handleClick('about', e)}><li className="hover:text-yellow-700 text-3xl">About Us</li></a>
                        <a href='#menu' onClick={(e) => handleClick('menu', e)}><li className="hover:text-yellow-700 text-3xl">Menu</li></a>
                        <a href='#contact' onClick={(e) => handleClick('contact', e)}><li className="hover:text-yellow-700 text-3xl">Contact Us</li></a>
                    </ul>
                </nav>
        </header>

        <main className='bg-yellow-700 flex flex-col overflow-x-hidden'>
                    {children}

                    <div className='fixed bottom-5 right-5 bg-green-500 rounded-full w-14 h-14 flex justify-center items-center md:w-16 md:h-16'>
                        <a href="https://wa.me/+6281222535507">
                            <Icon icon='fab fa-whatsapp' color='text-white' size='text-3xl md:text-4xl' />
                        </a>
                    </div>
        </main>

        <footer className='bg-slate-900 flex flex-col'>
                    <section className='p-3 text-white md:p-5 lg:flex lg:justify-center lg:items-center'>
                        <div className='flex flex-col gap-y-3 my-5 lg:w-1/2'>
                            <h1 className='text-xl font-bold md:text-4xl font-briem'>Dapoer Ghaitsa Catering</h1>
                            <p className='text-base text-gray-300 md:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus porro dolore omnis odio nostrum quas? Aut eveniet vitae voluptates!</p>
                        </div>
                        <div className='flex gap-y-5 flex-col lg:flex-row lg:w-1/3 lg:justify-around'>
                            <div className='flex flex-col'>
                                <h2 className='font-semibold md:text-lg'>Explore Our Page</h2>
                                <ul className='text-gray-300 text-sm'>
                                    <li className="hover:text-yellow-700 md:text-base">
                                        <a href='#home' onClick={(e) => handleClick('home', e)}>Home</a>
                                    </li>
                                    <li className="hover:text-yellow-700 md:text-base">
                                        <a href='#about' onClick={(e) => handleClick('about', e)}>About Us</a>
                                    </li>
                                    <li className="hover:text-yellow-700 md:text-base">
                                        <a href='#menu' onClick={(e) => handleClick('menu', e)}>Menu</a>
                                    </li>
                                    <li className="hover:text-yellow-700 md:text-base">
                                        <a href='#contact' onClick={(e) => handleClick('contact', e)}>Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='font-semibold md:text-lg'>Social Media</h3>
                                <div className='text-sm text-gray-300'>
                                    <a href='https://www.instagram.com/dapoer_ghaitsa?igsh=NDZ4MXpoMDMxcGhk' className='flex items-center gap-x-2 hover:text-yellow-700 md:text-base'>
                                        <Icon icon='fab fa-instagram' />
                                        <span>Instagram</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='bg-yellow-700 p-3'>
                        <p className="text-white text-center md:text-xl">Copyright © 2024 Dapoer Ghaitsa Catering</p>
                    </section>
                </footer>
        </div>
    )
}

export default AuthLayout;