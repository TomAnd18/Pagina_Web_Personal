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
                    <ul>
                        <li> <a href='#!'> Home </a> </li>
                        <li> <a href='#!'> About </a> </li>
                        <li> <a href='#!'> Portfolio </a> </li>
                        <li> <a href='#!'> Experience </a> </li>
                    </ul>
                    <div className='menu-nav'>
                        <Menu/>
                    </div>
                </nav>
            </header>
        </>
    )
}