import React from 'react'
import desainAnime from '../desainAnime.png'
import desainKanan from '../desainKanan.png'
import desainKiri from '../desainKiri.png'
import desainVector from '../desainVector.png'

function Portofolio() {
    return (
        <div id='porto'>
            <div className='container-porto'>
                <div className='teks-porto'>
                    <p className='dark-teks'>Our Portofolio</p>
                    <p className='teks-definisi'>Handpicked Product Latest Work</p>
                </div>
                <div className='container-desain'>
                    <div className='desain-satu'>
                        <img src={desainAnime} alt="" className='desain-kiri' />
                        <img src={desainKanan} alt="" className='desain-kanan' />
                    </div>
                    <div className='desain-dua'>
                        <img src={desainVector} alt="" className='desain-kiri' />
                        <img src={desainKiri} alt="" className='desain-kanan' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portofolio
