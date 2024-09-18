/* eslint-disable react/prop-types */
import { useState, useEffect, Fragment } from 'react';

const images = [
  'images/hero1.jpg',
  'images/hero2.jpg',
  'images/hero3.jpg',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images[currentImage]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '83vh',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <Fragment>
      <section id='home' className='flex flex-col p-3 gap-y-3 justify-center text-white mt-24' style={heroStyle}>
        <h1 data-aos="fade-left" data-aos-duration="1000" className="text-2xl font-bold font-briem md:text-7xl">SteakHouse Delightk</h1>
        <hr className='w-52 border-red border-2 rounded-lg' />
        <h2 className='text-3xl font-bold w-2/3'>Surga Steak Pilihan Anda!</h2>
        <p data-aos='fade-right' data-aos-duration="1000" className='md:text-xl text-left'>Nikmati suasana yang nyaman dan hangat bersama keluarga, teman, atau kolega sambil menikmati hidangan steak favorit Anda. Di halaman ini, Anda bisa mendapatkan informasi terkini mengenai promo, event spesial, dan penawaran menarik yang sedang berlangsung di restoran kami. Selalu ada sesuatu yang baru untuk dinikmati!</p>
        <button data-aos='fade-up' data-aos-duration="1000" className='bg-red self-start px-3 py-2 rounded-lg flex gap-x-3 items-center justify-center'>
          <span className='text-xl'>Product</span>
          <i className='fas fa-arrow-right'></i>
        </button>
      </section>
    </Fragment>
    
  );
};

export default Hero;
