import React from 'react'
import Profesional from '../profesional.svg'
import Best from '../best.svg'
import Achieve from '../achieve.svg'
import Price from '../price.svg'

function Gimmick() {
    return (
        <div id='gimmick'>
            <div className='aksen-atas'></div>
            <div className='container-gimmick'>
                <div className='teks-container'>
                    <p className='dark-teks'>Why Choose Us</p>
                    <p className='teks-penjelas-gimmick'>You will get the best service from us</p>
                </div>
                <div className='icon-container'>
                    <div className='profesional-container'>
                        <img src={Profesional} alt="" className='icon-gimmick' />
                        <div className='definisi-gimmick'>
                            <p className='judul-gimmick'>Profesional</p>
                            <p className='teks-definisi-gimmick'>the project is carried out by professionals</p>
                        </div>
                    </div>
                    <div className='profesional-container'>
                        <img src={Best} alt="" className='icon-gimmick' />
                        <div className='definisi-gimmick'>
                            <p className='judul-gimmick'>Best Results</p>
                            <p className='teks-definisi-gimmick'>has many awards in his field</p>
                        </div>
                    </div>
                    <div className='profesional-container'>
                        <img src={Achieve} alt="" className='icon-gimmick' />
                        <div className='definisi-gimmick'>
                            <p className='judul-gimmick'>Achievement</p>
                            <p className='teks-definisi-gimmick'>the best results according to what you want</p>
                        </div>
                    </div>
                    <div className='profesional-container'>
                        <img src={Price} alt="" className='icon-gimmick' />
                        <div className='definisi-gimmick'>
                            <p className='judul-gimmick'>Best Price</p>
                            <p className='teks-definisi-gimmick'>offer the best and satisfying price</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='aksen-bawah'></div>
        </div>
    )
}

export default Gimmick
