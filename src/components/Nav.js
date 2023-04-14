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
                        <li> <a href='#home'> Home </a> </li>
                        <li> <a href='#about'> About </a> </li>
                        <li> <a href='#portfolio'> Portfolio </a> </li>
                        <li> <a href='#experience'> Experience </a> </li>
                    </ul>
                    <div className='menu-nav'>
                        <Menu/>
                    </div>
                </nav>
            </header>
        </>
    )
}