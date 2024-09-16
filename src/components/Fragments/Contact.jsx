/* eslint-disable react/prop-types */
const Contact = () => {
    return (
        <section className="p-3 mt-10 md:p-10 xl:w-3/4 xl:self-center">
            <div className="flex justify-center items-center gap-x-3 mb-10">
                <div className="w-0.5 h-20 bg-white md:h-24"></div>
                <h1 data-aos='fade-down' data-aos-duration="1000" className="text-white text-center font-bold text-3xl md:text-5xl">Contact <span className="block text-base font-semibold md:text-xl">Anda bisa menemukan dan menhungi kami</span></h1>
            </div>
            <div className="text-white">
                <hr />
                <div className="flex justify-between my-3 md:text-xl">
                    <span data-aos='fade-left' data-aos-duration="1000">No.Telp</span>
                    <span data-aos='fade-right' data-aos-duration="1000">0812-2253-5507</span>
                </div>
                <hr />
                <div className="flex justify-between my-3 md:text-xl">
                    <span data-aos='fade-right' data-aos-duration="1000">Alamat</span>
                    <span data-aos='fade-left' data-aos-duration="1000" className="text-right">Komp. Bukit Cinunuk Indah Blok B-6 RT/RW 006/018 Desa Cinunuk Kec.Cileunyi Kab.Bandung</span>
                </div>
                <hr />
                <div className="flex flex-col justify-between my-3 md:text-xl">
                    <span data-aos='flip-left' data-aos-duration="1000">Google Maps</span>
                    <span data-aos='flip-right' data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, enim.</span>
                </div>
            </div>
        </section>
    )
}

export default Contact;