import React from 'react'
import Gambar from '../gambarAbout.png'

function About() {
    return (
        <div id='aboutus'>
            <div className='hero-kanan'>
                <div className='aksen-about'>
                    <div className='kotak-bawah-about'></div>
                    <div className='circle-putus-about'></div>
                    <div className='kotak-atas-about'></div>
                    <div className='circle-full-about'></div>
                    <img src={Gambar} alt="" className='gambar-about' />
                </div>
                <div className='kanan'>
                    <p className='dark-teks'>About Us</p>
                    <p className='teks-definisi-about'>Desain Doang is a design service business that was established in 2021, Desain Doang provides several design services. Ordering designs is quite easy, just make contact through the information on this website. Orders will be processed by experts and completed within the deadline desired by the customer. </p>
                    <button className='button-gts' onClick={() => {
                        window.open("https://www.instagram.com/p/CMeU4HJH3LW/?utm_medium=copy_link");
                    }}>More Info</button>
                </div>
            </div>
        </div>
    )
}

export default About
