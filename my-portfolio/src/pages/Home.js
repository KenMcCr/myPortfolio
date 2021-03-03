import React, { useEffect } from 'react'
import '../App.css';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Headshot from '../media/HeadShot.JPG';
import Resume from '../media/Resume.png'



function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <body className="home-body">
                <div className='hero-container hero-home '>
                    <Hero />
                </div>

                <div className="home-picture">
                    <img className="profile-picture" src={Headshot}></img>
                </div>

                <div className='aboutMe'>
                    <h3 className="about-title">Who am I?</h3>
                    <p>Non aut sed ducimus nesciunt atque. Architecto sed quae possimus vel deserunt consequatur. Et ut a. Harum ea mollitia voluptatem rerum nihil non quos optio. Voluptas sint eaque.Non aut sed ducimus nesciunt atque. Architecto sed quae possimus vel deserunt consequatur. Et ut a. Harum ea mollitia voluptatem rerum nihil non quos optio. Voluptas sint eaque</p>
                </div>
            </body>

            <Footer />
        </>

    )
}

export default Home;