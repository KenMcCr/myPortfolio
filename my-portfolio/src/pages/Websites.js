
import React, { useEffect } from 'react'
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

function Websites() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='hero-container hero-websites'>
                <Hero />
            </div>
            <Cards />
            <Footer />

        </>
    )
}

export default Websites
