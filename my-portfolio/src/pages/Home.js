import React, { useEffect } from 'react'
import '../App.css';
// import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Hero from '../components/Hero';



function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='hero-container hero-home '>
                <Hero />
                <h1>Kenneth McCray JR</h1>
            </div>
            <div className='aboutMe'>
                <h3>About Me</h3>
                <p>Non aut sed ducimus nesciunt atque. Architecto sed quae possimus vel deserunt consequatur. Et ut a. Harum ea mollitia voluptatem rerum nihil non quos optio. Voluptas sint eaque.Non aut sed ducimus nesciunt atque. Architecto sed quae possimus vel deserunt consequatur. Et ut a. Harum ea mollitia voluptatem rerum nihil non quos optio. Voluptas sint eaque</p>
            </div>
            {/* <Cards /> */}
            <Footer />
        </>

    )
}

export default Home;