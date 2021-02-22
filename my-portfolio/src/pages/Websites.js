import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

function Websites() {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);
    return (
        <>
            <div className='hero-container hero-websites'>
                <Hero />
            </div>
            <Footer />

        </>
    )
}

export default Websites
