/* eslint-disable react/prop-types */
import dataMenu from "../../utils/dataMenu"
import Button from "../Elements/Button"
import { useState, useEffect } from "react"

const Menu = () => {
    const [card, setCard] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (Array.isArray(dataMenu)) {
            setCard(dataMenu);
        }
    }, []);

    const handleCard = () => {
        setShowAll(!showAll);
    };

    const displayedCards = showAll ? card : card.slice(0, 6);

    return (
        <section className="p-3 mt-10 md:p-10 xl:w-3/4 xl:self-center">
            <div className="flex justify-center items-center gap-x-3 mb-10">
                <div className="w-0.5 h-20 bg-white md:h-24"></div>
                <h1 data-aos='fade-down' data-aos-duration="1000" className="text-white text-center text-3xl font-bold md:text-5xl">Menu <span className="block text-base font-semibold md:text-xl">Beberapa menu bisa anda nikmati di Dapoer Ghaitsa Catering</span></h1>
            </div>
            <div className="xl:grid xl:grid-cols-3 xl:gap-5">
                {displayedCards.length > 0 ? (
                    displayedCards.map((menu) => (
                        <div key={menu.id} data-aos='flip-left' data-aos-duration="1000" className="flex flex-col justify-center shadow-lg rounded-lg p-5 border-solid border-2 border-gray-700 gap-y-2 items-center mt-5 hover:scale-105 xl:justify-between">
                            <div className="w-full flex flex-col items-center gap-y-3">
                                <img src={menu.image} alt={menu.name} className='h-52 w-96 rounded-md object-cover md:w-full md:h-60 md:object-cover cursor-pointer xl:w-full xl:h-60' />
                                <h2 className="text-white md:text-xl">{menu.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</h2>
                        </div>
                        <p className="text-white font-bold text-xl text-center justify-self-center">{menu.name}</p>
                    </div>
                    ))
                ) : (
                    <p>No certificates available</p>
                )}
            </div>
            <div className="mt-5 text-center md:mt-10" data-aos='zoom-out' data-aos-duration="1000">
                <Button className="md:text-2xl" onClick={handleCard}>
                    {showAll ? 'Show Less' : 'See More'}
                </Button>
            </div>
            

            <div id='contact'></div>
        </section>
    )
}

export default Menu