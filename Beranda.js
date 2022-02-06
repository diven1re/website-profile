import React from 'react'
import { InfoSection, Navbar } from '../../components';
import { BerandaObj1} from './data';
//import Berita from './Berita';
import HeroSection from './HeroSection';
import Footer from '../../components/Footer/Footer'
import Berita from './Berita'


const Beranda = () => {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <InfoSection {...BerandaObj1}/>
            <Berita/>
            <Footer/>
        </>
    )
}



export default Beranda;
