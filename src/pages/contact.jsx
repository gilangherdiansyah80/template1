import AuthLayout from "../components/Layout/AuthLayout";

/* eslint-disable react/prop-types */
const Contact = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/contact.jpg')`,
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

        <section className='p-5 flex flex-col gap-y-5 mt-7'>
            <article className='flex flex-col justify-center gap-y-2'>
                <h1 className='font-bold text-xl'>Pemesanan</h1>
                <hr className='border-red w-24 border-2 rounded-xl' />
            </article>

            <article>
                <h2 className='w-92 text-2xl font-bold'>Contact Us</h2>
            </article>

            <article>
                <p>Demi menjaga standar tinggi dalam setiap sajian, kami bekerja sama dengan peternakan yang menerapkan praktik peternakan berkelanjutan. Kami memastikan bahwa setiap steak yang sampai ke meja Anda tidak hanya lezat, tetapi juga diproduksi secara etis dan bertanggung jawab terhadap lingkungan.</p>
            </article>

            <article>
                <p>Melalui rantai pasokan yang transparan dan terjamin, kami berkomitmen untuk menjaga kualitas daging terbaik dan metode memasak yang presisi, sehingga setiap steak yang disajikan tetap segar, juicy, dan penuh rasa.</p>
            </article>

            <div className="flex flex-col gap-y-3">
                <article className="flex flex-col gap-y-1">
                    <h3 className="font-bold text-xl">Restaurant</h3>
                    <hr className="border-red w-32 border-2 rounded-xl" />
                    <h4>Alamat SteakHouse Delight</h4>
                    <p>Tubagus ismail dalam no 28/153B RT 0/3 RW 07 sekeloa coblong Gang 3 (Kos Ibu Uceu) COBLONG, 40134NG, Kota Bandung, Jawa Barat 40134</p>
                </article>

                <article className="flex flex-col gap-y-3">
                    <div className="flex flex-col gap-y-1">
                        <h3 className="font-bold text-xl">Follow Us</h3>
                        <hr className="border-red w-20 border-2 rounded-xl" />
                    </div>
                    <ul className="flex gap-x-3">
                        <li className="fab fa-instagram"></li>
                        <li className="fab fa-youtube"></li>
                        <li className="fab fa-facebook"></li>
                    </ul>
                </article>
            </div>

            <div className="w-full h-[300px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0312722109497!2d107.61420767573907!3d-6.886857667391647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7002c9ac3d9%3A0x319031a21ec4a344!2sKost%20Ade%2086!5e0!3m2!1sid!2sid!4v1726869927860!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    className="rounded-xl"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps - Restaurant SteakHouse Delight"
                ></iframe>
            </div>
        </section>
      </AuthLayout>
  );
};

export default Contact;
