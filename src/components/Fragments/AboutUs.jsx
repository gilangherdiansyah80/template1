/* eslint-disable react/prop-types */
const AboutUs = () => {
    return (
       <section className="p-3 mt-10 md:p-10 xl:w-3/4 xl:self-center">
            <div className="flex justify-center gap-x-3 items-center mb-5">
                <div className="bg-white h-20 w-0.5 rounded-md md:h-24"></div>
                <h1 data-aos='flip-up' data-aos-duration="1000" className="text-3xl font-bold text-white text-center md:text-5xl">Tentang Kami <span className="block text-base font-semibold md:text-xl mt-2">Dapoer Ghaitsa Catering</span></h1>
            </div>
            <div data-aos='zoom-in' data-aos-duration="1000" className="text-center text-white p-3 flex flex-col gap-y-5 md:text-lg">
                <p>
                    Selamat datang di Dapoer Ghaitsa Catering, tempat di mana kami mempersembahkan kelezatan dan keanekaragaman rasa dari seluruh Nusantara. Sebagai penyedia layanan catering makanan nusantara, kami bangga akan warisan kuliner Indonesia yang kaya dan beragam.
                    Kami percaya bahwa makanan tidak hanya tentang mengisi perut, tetapi juga tentang merayakan budaya dan tradisi. Dengan setiap hidangan yang kami sajikan, kami berusaha untuk menghadirkan pengalaman kuliner yang menggugah selera dan merayakan keindahan masakan Indonesia.
                    Di Dapoer Ghaitsa Catering, kami mengutamakan kualitas dan keaslian bahan baku. Setiap hidangan disiapkan dengan teliti oleh koki berpengalaman yang tidak hanya mahir dalam seni memasak, tetapi juga memiliki dedikasi untuk mempertahankan cita rasa autentik setiap hidangan.
                    Kami menyediakan layanan catering untuk berbagai acara, mulai dari pesta pernikahan, acara korporat, hingga pertemuan keluarga. Dengan beragam menu yang disesuaikan dengan kebutuhan dan preferensi Anda, kami berkomitmen untuk menyajikan pengalaman kuliner yang tak terlupakan bagi setiap tamu Anda.
                </p>
            </div>

            <div id='menu'></div>
       </section> 
    )
}

export default AboutUs;