import React, { useState, useEffect } from 'react'
import Logo from '../LogoDesainDoang.svg'
import MenuIcon from '../Menu.svg'
import CloseIcon from '../Close.svg'
import { Link, useLocation } from "react-router-dom";
import { WindowView, SmoothScroll } from "./Viewport";
import { bubble as Menu } from 'react-burger-menu'

function Navbar() {
    const [nav, setnav] = useState(false);
    const [isOpen, setOpen] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
            setOpen(false);
        } else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    const { y_top } = WindowView();
    const { pathname } = useLocation();
    let timer = 0;

    //NAVI WITH WIDTH 800px
    useEffect(() => {
        const links = document.querySelectorAll(".link-con .navi-link");

        if (pathname !== "/") {
            timer = 100;
        }

        //TOGGLE LINK ACTIVE
        links.forEach((link, i) => {
            link.addEventListener("click", () => {
                //SMOOTH SCROLL
                const targetId = link.getAttribute("name");
                const duration = 1000;
                setTimeout(() => {
                    SmoothScroll({ targetId, duration });
                    timer = 0;
                }, timer);
            });
        });
    }, []);

    //TOGGLE NAV BACKGROUND COLOR
    useEffect(() => {
        const navigation = document.querySelector("nav");

        if (y_top > 0) {
            navigation.classList.add("active");
        } else {
            navigation.classList.remove("active");
        }
    }, [y_top]);

    const handleIsOpen = () => {
        setOpen(!isOpen)
    }

    const closeSideBar = () => {
        setOpen(false)
    }

    return (
        <>
            <nav className={nav ? 'nav active' : 'nav'}>
                <div className="link-con logo-gambar">
                    <Link to="/" className="navi-link" name="main">
                        <img className="logo" src={Logo} alt="" />
                    </Link>
                </div>

                <div className="link-con menu">
                    <Link to="/" className="navi-link" name="aboutus">
                        About
                    </Link>
                    <Link to="/" className="navi-link" name="service">
                        Service
                    </Link>
                    <Link to="/" className="navi-link" name="porto">
                        Portofolio
                    </Link>
                    <a href="https://wa.me/6285790428078" rel="noopener noreferrer" className="navi-link" target="_self">Contact</a>
                </div>

                <button className='btn-subs' onClick={() => {
                    window.open("https://www.instagram.com/p/CMeU4HJH3LW/?utm_medium=copy_link", "_blank");
                }}>Subscribe</button>
            </nav>

            <Menu
                customBurgerIcon={<img className="menu-icon" src={MenuIcon} alt="" />}
                customCrossIcon={<img className="close-icon" src={CloseIcon} alt="" />}
                width={'80%'}
                isOpen={isOpen}
                onOpen={handleIsOpen}>
                <nav className='navi'>
                    <div className="link-con menu">
                        <Link to="/" className="navi-link" name="main" onClick={closeSideBar}>
                            <img className="logo" src={Logo} alt="" />
                        </Link>
                        <Link to="/" className="navi-link" name="aboutus" onClick={closeSideBar}>
                            About
                        </Link>
                        <Link to="/" className="navi-link" name="service" onClick={closeSideBar}>
                            Service
                        </Link>
                        <Link to="/" className="navi-link" name="porto" onClick={closeSideBar}>
                            Portofolio
                        </Link>
                        <a href="https://wa.me/6285790428078" rel="noopener noreferrer" className="navi-link" target="_self">Contact</a>
                        <button className='btn-subs' onClick={() => {
                            window.open("https://www.instagram.com/p/CMeU4HJH3LW/?utm_medium=copy_link", "_blank");
                        }}>Subscribe</button>
                    </div>
                </nav>
            </Menu>
        </>
    )
}

export default Navbar
