/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Icon from '../Elements/Icon';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const AuthLayout = ({ children }) => {
    AOS.init();

    const [open, setShowOpen] = useState(false);

    const handleToggle = () => {
        setShowOpen(!open);
    }

    return (
        <div className=''>
            <header className="bg-[#384B70] top-0 left-0 w-full lg:flex lg:justify-center font-inter fixed z-10 h-24 md:h-20" data-aos="fade-down">
                <div className="w-full lg:w-1/2 h-full flex justify-center lg:justify-between items-center">
                <div className='w-full flex justify-between lg:justify-start items-center'>
                    <img src="/images/logo.png" alt="CodeExpress" className="w-44 -ms-5" />
                    <div className='mr-3 lg:hidden'>
                        {open ? (
                            <Icon style="fas fa-times text-3xl md:text-4xl text-white mr-2 cursor-pointer text-red" handleIcon={handleToggle}></Icon>
                        ) : (
                            <Icon style="fas fa-bars text-3xl md:text-4xl text-white mr-2 cursor-pointer text-red" handleIcon={handleToggle}></Icon>
                        )}
                    </div>
                </div>
                {open && (
                    <nav className="bg-[#507687] w-full mt-80 md:mt-52 absolute lg:hidden">
                        <ul className='text-white flex flex-col font-bold md:text-xl'>
                            <Link to='/'>
                                <li className={`hover:bg-slate-700 w-full p-2 md:p-4 px-4 ${location.pathname === '/' ? 'bg-slate-500' : 'hover:bg-slate-700'}`}>Home</li>
                            </Link>
                            <Link to='/menu'>
                                <li className={`hover:bg-slate-700 w-full p-2 md:p-4 px-4 ${location.pathname === '/menu' ? 'bg-slate-500' : 'hover:bg-gray'}`}>About Us</li>
                            </Link>
                            <Link to='/menu'>
                                <li className={`hover:bg-slate-700 w-full p-2 md:p-4 px-4 ${location.pathname === '/menu' ? 'bg-slate-500' : 'hover:bg-gray'}`}>Product List</li>
                            </Link>
                            <Link to='/menu'>
                                <li className={`hover:bg-slate-700 w-full p-2 md:p-4 px-4 ${location.pathname === '/menu' ? 'bg-slate-500' : 'hover:bg-gray'}`}>Newa</li>
                            </Link>
                            <Link to='/menu'>
                                <li className={`hover:bg-slate-700 w-full p-2 md:p-4 px-4 ${location.pathname === '/menu' ? 'bg-slate-500' : 'hover:bg-gray'}`}>Contact Us</li>
                            </Link>
                        </ul>
                    </nav>
                )}

                    <nav className="hidden w-full lg:block">
                        <ul className='text-white flex justify-end gap-x-10 font-bold'>
                            <Link to='/'>
                                <li className={`w-full p-2 md:p-4 px-4 text-xl ${location.pathname === '/' ? 'text-gray' : 'hover:text-gray'}`}>Home</li>
                            </Link>
                            <Link to='/menu'>
                                <li className={`w-full p-2 md:p-4 px-4 text-xl ${location.pathname === '/menu' ? 'text-gray' : 'hover:text-gray'}`}>Menu</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className='bg-[#ECDFCC] flex flex-col overflow-x-hidden'>
                {children}

                <div className='fixed bottom-5 right-5 bg-green-500 rounded-full w-10 h-10 flex justify-center items-center md:w-16 md:h-16'>
                    <a href="https://wa.me/+6281222535507">
                        <Icon style="fab fa-whatsapp text-white text-2xl" />
                    </a>
                </div>
            </main>

            <footer className="bg-[#384B70] text-white p-3 flex flex-col gap-y-5">
                <div>
                    <img src="/images/logotext.png" alt="CodeExpress" className="w-52 -mt-20 -ms-10" />
                    <p className="-mt-20">Mari wujudkan impian kalian bersama CodeExpress</p>
                </div>

                <hr />

                <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col gap-y-1">
                        <h1 className="text-xl font-semibold">Menu Kami</h1>
                        <hr className="w-20 rounded-xl bg-purple-800 border-purple-800 border-y-2" />
                    </div>
                    <ul className="flex flex-col gap-y-2">
                        <li className="hover:text-purple-800">Home</li>
                        <li className="hover:text-purple-800">Help</li>
                    </ul>
                </div>

                <hr />

                <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col gap-y-1">
                        <h1 className="text-xl font-semibold">Hubungi Kami</h1>
                        <hr className="w-20 rounded-xl bg-purple-800 border-purple-800 border-y-2" />
                    </div>
                    <ul className="flex flex-col gap-y-3">
                        <li className="flex gap-x-3 items-center">
                        <img src="/images/email.png" alt="Email" className="w-6" />
                        <p>codeexpress@gmai.com</p>
                        </li>
                        <li className="flex gap-x-3 items-center">
                        <i className="fab fa-whatsapp text-2xl text-green-600 hover:text-purple-800"></i>
                        <p>+62 858 66244363</p>
                        </li>
                    </ul>
                </div>

                <hr />

                <div className="text-center flex justify-center items-start">
                    <p className="text-sm">© Copyright 2024. All Rights Reserved by CodeExpress</p>
                </div>
            </footer>
        </div>
    )
}

export default AuthLayout;