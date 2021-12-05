import React from 'react'
import desainAnime from '../desainAnime.png'
import desainKanan from '../desainKanan.png'
import desainKiri from '../desainKiri.png'
import desainVector from '../desainVector.png'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

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
                        <Zoom zoomMargin={40} >
                            <img src={desainAnime} alt="" className='desain-kiri' />
                        </Zoom>
                        <Zoom zoomMargin={40} >
                            <img src={desainKanan} alt="" className='desain-kanan' />
                        </Zoom>
                    </div>
                    <div className='desain-dua'>
                        <Zoom zoomMargin={40} >
                            <img src={desainVector} alt="" className='desain-kiri' />
                        </Zoom>
                        <Zoom zoomMargin={40} >
                            <img src={desainKiri} alt="" className='desain-kanan' />
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portofolio
