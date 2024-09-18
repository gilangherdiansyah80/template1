import AuthLayout from "../components/Layout/AuthLayout";

/* eslint-disable react/prop-types */
const About = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/about1.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
      <AuthLayout>
        <section id='about' className='flex flex-col p-3 gap-y-5 justify-center text-white mt-24' style={heroStyle}>
            <h1 data-aos="fade-left" data-aos-duration="1000" className="text-2xl font-bold font-briem md:text-7xl text-center">About Us</h1>
            <p data-aos='fade-right' data-aos-duration="1000" className='md:text-xl text-center'>Meskipun industri kuliner terus berkembang, kami di SteakHouse Delight selalu berpegang teguh pada prinsip kualitas dan keunggulan. Kami percaya bahwa sajian steak terbaik berasal dari daging berkualitas yang diproses dengan teknik masak sempurna.</p>
        </section>

        <section className="flex flex-col gap-y-5 p-5 mt-7">
            <img src="/images/about4.jpg" alt="SteakHouse Delight" />
            <img src="/images/about3.jpg" alt="SteakHouse Delight" />
        </section>

        <section className='p-5 flex flex-col gap-y-5 mt-7'>
            <article className='flex flex-col justify-center gap-y-2'>
                <h1 className='font-bold text-xl'>About Us</h1>
                <hr className='border-red w-24 border-2 rounded-xl' />
            </article>

            <article>
                <h2 className='w-92 text-2xl font-semibold'>Our Story</h2>
            </article>

            <article>
                <p>Demi menjaga standar tinggi dalam setiap sajian, kami bekerja sama dengan peternakan yang menerapkan praktik peternakan berkelanjutan. Kami memastikan bahwa setiap steak yang sampai ke meja Anda tidak hanya lezat, tetapi juga diproduksi secara etis dan bertanggung jawab terhadap lingkungan.</p>
            </article>

            <article>
                <p>Melalui rantai pasokan yang transparan dan terjamin, kami berkomitmen untuk menjaga kualitas daging terbaik dan metode memasak yang presisi, sehingga setiap steak yang disajikan tetap segar, juicy, dan penuh rasa.</p>
            </article>

            <div className="flex flex-col gap-y-3">
                <img src="/images/founder.jpg" alt="Founder" />
                <article className="flex flex-col gap-y-1">
                    <h3 className="font-bold text-xl">Aditya Sofyan</h3>
                    <hr className="border-red w-32 border-2 rounded-xl" />
                    <h4>Ceo of SteakHouse Delight</h4>
                </article>

                <article>
                    <p>Menciptakan rantai pasokan yang transparan dan terjamin untuk memastikan bahwa setiap steak yang kami sajikan tidak hanya enak, tetapi juga diproduksi secara bertanggung jawab</p>
                </article>
            </div>
        </section>
      </AuthLayout>
  );
};

export default About;
