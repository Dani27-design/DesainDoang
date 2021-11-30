import React from 'react'
import ServiceIcon from '../iconService.svg'

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
                        <div className='container-pilihan'>
                            <div className='container-icon'>
                                <img src={ServiceIcon} alt="" className='icon-service' />
                            </div>
                            <div className='container-teks-pilihan'>
                                <p className='judul-service'>UI & UX Design</p>
                                <p className='teks-definisi-service'>the project is carried out by professionals</p>
                            </div>
                        </div>
                        <div className='container-pilihan'>
                            <div className='container-icon'>
                                <img src={ServiceIcon} alt="" className='icon-service' />
                            </div>
                            <div className='container-teks-pilihan'>
                                <p className='judul-service'>Poster Design</p>
                                <p className='teks-definisi-service'>the project is carried out by professionals</p>
                            </div>
                        </div>
                        <div className='container-pilihan'>
                            <div className='container-icon'>
                                <img src={ServiceIcon} alt="" className='icon-service' />
                            </div>
                            <div className='container-teks-pilihan'>
                                <p className='judul-service'>Feed design</p>
                                <p className='teks-definisi-service'>the project is carried out by professionals</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='kolom'>
                    <div className='baris'>
                        <div className='container-pilihan'>
                            <div className='container-icon'>
                                <img src={ServiceIcon} alt="" className='icon-service' />
                            </div>
                            <div className='container-teks-pilihan'>
                                <p className='judul-service'>Video Edit</p>
                                <p className='teks-definisi-service'>the project is carried out by professionals</p>
                            </div>
                        </div>
                        <div className='container-pilihan'>
                            <div className='container-icon'>
                                <img src={ServiceIcon} alt="" className='icon-service' />
                            </div>
                            <div className='container-teks-pilihan'>
                                <p className='judul-service'>Logo Design</p>
                                <p className='teks-definisi-service'>the project is carried out by professionals</p>
                            </div>
                        </div>
                        <div className='container-pilihan'>
                            <div className='container-icon'>
                                <img src={ServiceIcon} alt="" className='icon-service' />
                            </div>
                            <div className='container-teks-pilihan'>
                                <p className='judul-service'>Character Design</p>
                                <p className='teks-definisi-service'>the project is carried out by professionals</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service
