import { useState } from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import Product from "../utils/product";

const ProductList = () => {
    const [isOpen, setIsOpen] = useState([]);

    const handleIsOpen = (id) => {
        if (isOpen.includes(id))  {
            setIsOpen(isOpen.filter((item) => item !== id));
        } else {
            setIsOpen([...isOpen, id]);
        }
    }

    const heroStyle = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/product.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      };
    

    return (
        <AuthLayout>
            <section id='about' className='flex flex-col p-3 gap-y-5 justify-center text-white mt-24' style={heroStyle}>
                <h1 data-aos="fade-left" data-aos-duration="1000" className="text-2xl font-bold font-briem md:text-7xl text-center">Product List</h1>
                <p data-aos='fade-right' data-aos-duration="1000" className='md:text-xl text-center'>Kami dengan senang hati akan menyajikan steak terbaik untuk Anda dan menciptakan pengalaman makan yang tak terlupakan! Terima kasih telah memilih SteakHouse Delight.</p>
            </section>

            <article className="p-3 flex flex-col gap-y-3 mt-7">
                <h2 className="text-xl font-bold">Menu List - SteakHouse Delight</h2>
                <hr className="border-red w-72 border-2 rounded-xl" />
            </article>

            <section className='p-3 flex flex-col gap-y-5 mb-7'>
                {Product.map((product) => (
                    <div className="flex flex-col gap-y-3" key={product.id}>
                        <article className="flex justify-between items-center" onClick={() => handleIsOpen(product.id)}>
                            <h3 className="text-lg font-semibold">{product.menu}</h3>
                            {isOpen.includes(product.id) ? (
                                <i className="fas fa-chevron-down"></i>
                            ) : (
                                <i className="fas fa-chevron-up"></i>
                            )}
                        </article>
                        {isOpen.includes(product.id) && (
                            product.list.map((item) => (
                                <div className="bg-gray1 p-3 rounded-lg text-white flex flex-col gap-y-3" key={item.id}>
                                    <img src={item.image} alt="Garlic Bread" className="w-full h-96 rounded-lg" />
                                    <article className="flex flex-col gap-y-3">
                                        <div className="flex justify-between gap-y-3">
                                            <h4 className="text-red font-semibold">{item.name}</h4>
                                            <p>Rp. {item.price.toLocaleString('id-ID', {styles: 'currency', currrency: 'IDR'})}</p>
                                        </div>
                                        <p>{item.desc}</p>
                                    </article>
                                </div>
                            ))
                        )}
                    </div>
                ))}
            </section>
        </AuthLayout>
    )
}

export default ProductList;