/* eslint-disable react/prop-types */
import { useState, useEffect, Fragment } from 'react';
import Button from '../Elements/Button';

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
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  const scrollAction = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Fragment>
      <section id='home' className='flex flex-col items-center p-3 gap-y-5' style={heroStyle}>
        <h2 data-aos="fade-left" data-aos-duration="1000" className="text-3xl font-bold text-center font-briem md:text-7xl">Food and Snack</h2>
        <p data-aos='fade-right' data-aos-duration="1000" className='md:text-xl'>Puaskan rasa lapar anda dengan Dapoer Ghaitsa Catering</p>
        <a data-aos='fade-up' data-aos-duration="1000" href="#menu" onClick={(e) => scrollAction('menu', e)}><Button><span className='text-2xl'>Lihat Menu</span></Button></a>
      </section>

      <div id='about'></div>
    </Fragment>
    
  );
};

export default Hero;
