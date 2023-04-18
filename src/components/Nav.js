import React, { useEffect, useRef } from 'react';
import '../styles/nav.css';
import Menu from '../components/Menu';

export default function Nav() {

    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                headerRef.current.classList.add('down');
            } else {
                headerRef.current.classList.remove('down');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <header ref={headerRef} className='header-nav'>
                <a className='name-logo-nav' href='#!'>Developer</a>
                <nav className='nav-nav'>
                    <ul id='nav-wrap'>
                        <li> <a href='#home'> Inicio </a> </li>
                        <li> <a href='#about'> Sobre Mi </a> </li>
                        <li> <a href='#portfolio'> Portfolio </a> </li>
                        <li> <a href='#experience'> Contacto </a> </li>
                    </ul>
                    <div className='menu-nav'>
                        <Menu/>
                    </div>
                </nav>
            </header>
        </>
    )
}