import Hero from '../components/Fragments/Hero'
import AuthLayout from '../components/Layout/AuthLayout'

const Home = () => {
  return (
      <AuthLayout>
            <Hero />
            <section className='p-5 flex flex-col gap-y-8 mt-7'>
              <div className='bg-[#ECDFCC] shadow-[3px_3px_10px_2px_black,-3px_-3px_0px_0px_red] p-5 flex flex-col gap-y-5'>
                <i className='fas fa-utensils text-5xl text-red'></i>
                <h1 className='font-bold text-xl'>Food Product</h1>
                <p>Kemampuan steak untuk memberikan rasa yang kaya dan tekstur lembut menjadikannya pilihan utama dalam industri kuliner. Kami memastikan setiap steak yang kami sajikan memiliki kualitas premium dan diproses secara higienis untuk memberikan pengalaman kuliner yang tak terlupakan.</p>
              </div>

              <div className='bg-[#ECDFCC] shadow-[3px_3px_10px_2px_black,-3px_-3px_0px_0px_red] p-5 flex flex-col gap-y-5'>
                <i className='fab fa-wordpress-simple text-5xl text-red'></i>
                <h1 className='font-bold text-xl'>Gourmet Experience</h1>
                <p>Kelezatan steak yang sempurna tidak hanya memuaskan selera, tetapi juga memberikan pengalaman makan yang tak tertandingi. Steak premium yang kami sajikan dimasak dengan teknik terbaik untuk menjaga rasa dan teksturnya.</p>
              </div>

              <div className='bg-[#ECDFCC] shadow-[3px_3px_10px_2px_black,-3px_-3px_0px_0px_red] p-5 flex flex-col gap-y-5'>
                <i className='fas fa-grin-stars text-5xl text-red'></i>
                <h1 className='font-bold text-xl'>Cosmetic</h1>
                <p>Sama seperti makanan lainnya, kami percaya bahwa estetika penyajian steak memiliki peran penting. Hidangan steak yang disajikan secara menarik akan memperkaya pengalaman Anda. Kami mengutamakan kualitas, mulai dari bahan-bahan hingga penyajian yang memikat.</p>
              </div>
            </section>

            <section className="p-3 flex flex-col gap-y-8 mt-7">
              <div className='bg-red absolute mt-28 text-white -ms-2 p-5 w-52'>
                <div className='flex items-center gap-x-3'>
                  <i className='fas fa-check'></i>
                  <h2>Top Quality</h2>
                </div>

                <div className='flex items-center gap-x-3'>
                  <i className='fas fa-check'></i>
                  <h2>Top Quality</h2>
                </div>

                <div className='flex items-center gap-x-3'>
                  <i className='fas fa-check'></i>
                  <h2>Top Quality</h2>
                </div>
              </div>
              
              <div className='w-11/12 self-end'>
                <img src="./images/steak.jpg" alt="Steak" className='w-full h-80' />
              </div>
            </section>

            <section className='p-3 flex flex-col gap-y-5 mt-7'>
              <article className='flex flex-col justify-center gap-y-2'>
                <h1 className='font-bold text-xl'>About Us</h1>
                <hr className='border-red w-24 border-2 rounded-xl' />
              </article>

              <article>
                  <h2 className='w-92 text-2xl font-semibold'>SteakHouse Delight&#39;s Commitment to Culinary Excellence</h2>
              </article>

              <article>
                <p>Di SteakHouse Delight, kami percaya bahwa setiap steak harus disajikan dengan penuh kesempurnaan. Steak kami dipilih dari daging sapi berkualitas tinggi yang diolah dengan teknik profesional untuk menghasilkan tekstur yang empuk dan cita rasa yang khas. Setiap steak yang kami hidangkan adalah bukti dari komitmen kami terhadap kelezatan dan kualitas.</p>
              </article>

              <article>
                <p>Kami juga berkomitmen pada keberlanjutan dalam setiap langkah bisnis kami, mulai dari pemilihan bahan baku yang bertanggung jawab hingga proses memasak yang efisien. Kami ingin memastikan bahwa dengan setiap steak yang Anda nikmati, Anda juga berkontribusi pada masa depan yang lebih baik.</p>
              </article>

              <button className='p-3 flex gap-x-3 items-center bg-red rounded-lg w-36 justify-center text-white'>
                <span>Learn More</span>
                <i className='fas fa-arrow-right'></i>
              </button>
            </section>

            <section className='bg-gray1 p-3 flex flex-col gap-y-5 text-white mt-7'>
              <article className='flex flex-col justify-center gap-y-2'>
                <h1 className='font-bold text-xl'>Testimoni</h1>
                <hr className='border-red w-24 border-2 rounded-xl' />
              </article>

              <article>
                <h2 className='w-92 text-2xl font-semibold'>Juicy and Tender Steak with Passion</h2>
              </article>

              <article>
                <p>Bekerja sama dengan pemasok daging sapi berkualitas tinggi telah semakin memperkuat komitmen kami terhadap keunggulan kuliner. Transparansi dan ketertelusuran rantai pasokan memberi kami keyakinan bahwa setiap steak yang kami sajikan tidak hanya lezat, tetapi juga dihasilkan secara etis dan berkelanjutan.</p>
              </article>

              <div className='bg-[#ECDFCC] rounded-md text-black p-3 text-center flex flex-col gap-y-3'>
                <img src="/images/testimoni1.jpg" alt="Testimoni" className='w-full' />
                <h3 className='text-red font-semibold'>David M.</h3>
                <p>&quot;Sebagai koki di sebuah restoran terkenal, saya harus memastikan setiap steak yang disajikan memenuhi standar tertinggi. SteakHouse Delight tidak pernah mengecewakan. Kualitas daging dan metode memasaknya benar-benar sempurna.&quot;</p>
              </div>

              <div className='bg-[#ECDFCC] rounded-md text-black p-3 text-center flex flex-col gap-y-3 mb-5'>
                <img src="/images/testimoni2.jpg" alt="Testimoni" className='w-full' />
                <h3 className='text-red font-semibold'>Lisa P.</h3>
                <p>&quot;Sebagai CEO dari Gourmet Bites, produsen makanan berkualitas, bekerja sama dengan SteakHouse Delight menunjukkan komitmen kami terhadap kualitas dan kelezatan. Kami senang bekerja dengan pemasok steak yang bertanggung jawab dan selalu memberikan produk terbaik.&quot;</p>
              </div>
            </section>

            <section className='p-3 flex flex-col gap-y-5 mt-7 mb-7'>
              <article className='flex flex-col justify-center items-center gap-y-2'>
                <h1 className='font-bold text-xl'>News Update</h1>
                <hr className='border-red w-32 border-2 rounded-xl' />
              </article>

              <article>
                <p className='text-center'>Kolaborasi kami dengan pemasok daging sapi berkualitas tinggi memperkuat komitmen kami terhadap keberlanjutan dan keunggulan dalam setiap hidangan. Transparansi dalam rantai pasokan kami memberikan kepercayaan bahwa steak yang kami sajikan tidak hanya lezat, tetapi juga diproduksi secara etis.</p>
              </article>

              <div className='bg-[#ECDFCC] rounded-md text-black flex flex-col gap-y-3 drop-shadow-lg'>
                <img src="/images/news1.jpg" alt="News Update" className='w-full h-52 rounded-t-md' />
                <h3 className='text-red font-semibold p-3'>From Farm to Table: The Journey of Our Premium Steaks</h3>
              </div>

              <div className='bg-[#ECDFCC] rounded-md text-black flex flex-col gap-y-3 drop-shadow-lg'>
                <img src="/images/nes2.jpg" alt="News Update" className='w-full h-52 rounded-t-md' />
                <h3 className='text-red font-semibold p-3'>The Art of Cooking the Perfect Steak</h3>
              </div>

              <div className='bg-[#ECDFCC] rounded-md text-black flex flex-col gap-y-3 drop-shadow-lg'>
                <img src="/images/news3.jpg" alt="News Update" className='w-full h-52 rounded-t-md' />
                <h3 className='text-red font-semibold p-3'>Steak in Your Kitchen: How to Choose and Cook It Like a Pro</h3>
              </div>

              <div className='bg-[#ECDFCC] rounded-md text-black flex flex-col gap-y-3 drop-shadow-lg'>
                <img src="/images/news4.jpg" alt="News Update" className='w-full h-52 rounded-t-md' />
                <h3 className='text-red font-semibold p-3'>Sustainable Sourcing: Ensuring the Best Steak for You and the Planet</h3>
              </div>
            </section>
      </AuthLayout>
  )
}

export default Home
