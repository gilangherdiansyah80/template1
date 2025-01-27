/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Icon from "../Elements/Icon";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AuthLayout = ({ children }) => {
  AOS.init();

  const [open, setShowOpen] = useState(false);

  const handleToggle = () => {
    setShowOpen(!open);
  };

  return (
    <div className="w-full">
      <header
        className="bg-[#384B70] top-0 left-0 w-full lg:flex lg:justify-center font-inter fixed z-30 h-24 md:h-20"
        data-aos="fade-down"
      >
        <div className="w-full xl:w-3/5 h-full flex justify-center lg:justify-between items-center">
          <div className="w-full flex justify-between lg:justify-start items-center">
            <img
              src="/images/logo.png"
              alt="code.express"
              className="w-32 -ms-2"
            />
            <div className="mr-3 lg:hidden">
              {open ? (
                <Icon
                  style="fas fa-times text-3xl md:text-4xl mr-2 cursor-pointer text-red"
                  handleIcon={handleToggle}
                ></Icon>
              ) : (
                <Icon
                  style="fas fa-bars text-3xl md:text-4xl mr-2 cursor-pointer text-red"
                  handleIcon={handleToggle}
                ></Icon>
              )}
            </div>
          </div>
          {open && (
            <nav className="bg-[#507687] w-full mt-72 md:mt-96 absolute lg:hidden">
              <ul className="text-white flex flex-col font-bold md:text-xl">
                <Link to="/">
                  <li
                    className={`hover:bg-slate-700 w-full p-2 md:p-4 px-4 ${
                      location.pathname === "/"
                        ? "bg-slate-500"
                        : "hover:bg-slate-700"
                    }`}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li
                    className={`hover:bg-slate-700 w-full p-2 md:p-4 px-4 ${
                      location.pathname === "/about"
                        ? "bg-slate-500"
                        : "hover:bg-gray"
                    }`}
                  >
                    About Us
                  </li>
                </Link>
                <Link to="/product">
                  <li
                    className={`hover:bg-slate-700 w-full p-2 md:p-4 px-4 ${
                      location.pathname === "/product"
                        ? "bg-slate-500"
                        : "hover:bg-gray"
                    }`}
                  >
                    Product List
                  </li>
                </Link>
                <Link to="/contact">
                  <li
                    className={`hover:bg-slate-700 w-full p-2 md:p-4 px-4 ${
                      location.pathname === "/contact"
                        ? "bg-slate-500"
                        : "hover:bg-gray"
                    }`}
                  >
                    Contact Us
                  </li>
                </Link>
              </ul>
            </nav>
          )}

          <nav className="hidden w-full lg:block">
            <ul className="text-white flex font-bold justify-center items-center gap-x-1">
              <Link to="/" className="flex justify-center items-center w-32">
                <li
                  className={`hover:bg-slate-700 rounded-lg p-3 ${
                    location.pathname === "/"
                      ? "bg-slate-500"
                      : "hover:bg-slate-700"
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link
                to="/about"
                className="flex justify-center items-center w-32"
              >
                <li
                  className={`hover:bg-slate-700 rounded-lg p-3 ${
                    location.pathname === "/about"
                      ? "bg-slate-500"
                      : "hover:bg-gray"
                  }`}
                >
                  About Us
                </li>
              </Link>
              <Link
                to="/product"
                className="flex justify-center items-center w-32"
              >
                <li
                  className={`hover:bg-slate-700 rounded-lg p-3 ${
                    location.pathname === "/product"
                      ? "bg-slate-500"
                      : "hover:bg-gray"
                  }`}
                >
                  Product List
                </li>
              </Link>
              <Link
                to="/contact"
                className="flex justify-center items-center w-32"
              >
                <li
                  className={`hover:bg-slate-700 rounded-lg p-3 ${
                    location.pathname === "/contact"
                      ? "bg-slate-500"
                      : "hover:bg-gray"
                  }`}
                >
                  Contact Us
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>

      <main className="bg-[#ECDFCC] flex flex-col overflow-x-hidden overflow-y-hidden">
        {children}

        <div className="fixed bottom-5 right-5 bg-green-500 rounded-full w-10 h-10 flex justify-center items-center">
          <a href="https://wa.me/+6281222535507">
            <Icon style="fab fa-whatsapp text-white text-2xl" />
          </a>
        </div>
      </main>

      <footer className="bg-[#384B70] text-white p-3 md:p-5 flex flex-col gap-y-5 w-full">
        <section className="flex flex-col md:flex-row gap-y-5 md:gap-x-10 lg:justify-between xl:w-3/5 xl:self-center">
          <div className="flex flex-col">
            <img
              src="/images/logo.png"
              alt="code.express"
              className="w-52 -mt-14 -ms-12"
            />
            <p className="-mt-10">
              Mari wujudkan impian kalian bersama code.express
            </p>
          </div>

          <hr className="md:hidden" />

          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1">
              <h1 className="text-xl font-semibold">Menu Kami</h1>
              <hr className="w-20 rounded-xl border-red border-y-2" />
            </div>
            <ul className="flex flex-col gap-y-2">
              <li className="hover:text-red">Home</li>
              <li className="hover:text-red">About Us</li>
              <li className="hover:text-red">Product List</li>
              <li className="hover:text-red">Contact Us</li>
            </ul>
          </div>

          <hr className="md:hidden" />

          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-1">
              <h1 className="text-xl font-semibold">Hubungi Kami</h1>
              <hr className="w-20 rounded-xl border-red border-y-2" />
            </div>
            <ul className="flex flex-col gap-y-3">
              <li className="cursor-pointer">
                <a
                  href="https://wa.me/+6281222535507"
                  className="flex gap-x-3 items-center"
                >
                  <img src="/images/email.png" alt="Email" className="w-6" />
                  <p>codeexpress2025@gmail.com</p>
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="https://wa.me/+6281222535507"
                  className="flex gap-x-3 items-center"
                >
                  <i className="fab fa-whatsapp text-2xl text-green-600"></i>
                  <p>+6281222535507</p>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <hr />

        <div className="text-center flex justify-center items-start">
          <p className="text-sm md:text-lg md:-mt-3 lg:mt-1">
            © Copyright 2024. All Rights Reserved by code.express
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
