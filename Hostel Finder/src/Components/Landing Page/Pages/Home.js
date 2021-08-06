import '../../../App.css';
import BigHero from '../BigHero';
import React from 'react';
import Cards from '../Cards';
import Footer from '../Footer/Footer'

function Home(){
    return(
        <>
        <BigHero />
        <Cards/>
        <Footer/>
        </>
    )
}
export default Home;