import React from 'react'
import Snapgram from '../Snapgram.svg'
import CharacterIcon from '../Character.svg'
import FeedIcon from '../Feed.svg'
import LogoDesain from '../LogoDesain.svg'
import PosterIcon from '../Poster.svg'
import Uicon from '../UI.svg'

function Service() {
    return (
        <div id="service">
            <div className='teks-container'>
                <p className='dark-teks-service'>Our Service</p>
                <p className='teks-penjelas-service'>The service we provide</p>
            </div>
            <div className='container-col'>
                <div className='kolom'>
                    <div className='baris'>
                        <a href="https://www.instagram.com/p/COJoyAmnS1L/?utm_medium=copy_link" rel="noopener noreferrer" target="_blank" className='container-pilihan'>
                            <div className='container-icon'>
                                <img src={Uicon} alt="" className='icon-service' />
                            </div>
                            <div className='container-teks-pilihan'>
                                <p className='judul-service'>UI & UX Design</p>
                                <p className='teks-definisi-service'>the project is carried out by professionals</p>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/p/CM1IpW8HsD2/?utm_medium=copy_link" rel="noopener noreferrer" target="_blank" className='container-pilihan'>
                            <div className='container-icon'>
                                <img src={PosterIcon} alt="" className='icon-service' />
                            </div>
                            <div className='container-teks-pilihan'>
                                <p className='judul-service'>Poster Design</p>
                                <p className='teks-definisi-service'>the project is carried out by professionals</p>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/p/CMqg_c8nMXn/?utm_medium=copy_link" rel="noopener noreferrer" target="_blank" className='container-pilihan'>
                            <div className='container-icon'>
                                <img src={FeedIcon} alt="" className='icon-service' />
                            </div>
                            <div className='container-teks-pilihan'>
                                <p className='judul-service'>Feed design</p>
                                <p className='teks-definisi-service'>the project is carried out by professionals</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className='kolom'>
                    <div className='baris'>
                        <a href="https://www.instagram.com/p/CNCXeqXn3cq/?utm_medium=copy_link" rel="noopener noreferrer" target="_blank" className='container-pilihan'>
                            <div className='container-icon'>
                                <img src={Snapgram} alt="" className='icon-service' />
                            </div>
                            <div className='container-teks-pilihan'>
                                <p className='judul-service'>InstaStory Design</p>
                                <p className='teks-definisi-service'>the project is carried out by professionals</p>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/p/CMgFP1bHwBb/?utm_medium=copy_link" rel="noopener noreferrer" target="_blank" className='container-pilihan'>
                            <div className='container-icon'>
                                <img src={LogoDesain} alt="" className='icon-service' />
                            </div>
                            <div className='container-teks-pilihan'>
                                <p className='judul-service'>Logo Design</p>
                                <p className='teks-definisi-service'>the project is carried out by professionals</p>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/p/CSL4MnCHXiD/?utm_medium=copy_link" rel="noopener noreferrer" target="_blank" className='container-pilihan'>
                            <div className='container-icon'>
                                <img src={CharacterIcon} alt="" className='icon-service' />
                            </div>
                            <div className='container-teks-pilihan'>
                                <p className='judul-service'>Character Design</p>
                                <p className='teks-definisi-service'>the project is carried out by professionals</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service
