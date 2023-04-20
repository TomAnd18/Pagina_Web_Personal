import React, { useEffect, useRef } from 'react'
import Nav from '../components/Nav';
import SectionHome from '../components/SectionHome';
import About from '../components/About';
import '../styles/home.css';
import Portfolio from '../components/Portfolio';
import Contacto from '../components/Contacto';

export default function Home() {

  const observer = useRef(null);
  
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navigationLinks = document.querySelectorAll('#nav-wrap a');

    const options = {
      rootMargin: '0px',
      threshold: 0.50
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeSection = entry.target;
          const activeLink = document.querySelector(`#nav-wrap a[href="#${activeSection.id}"]`);

          if (activeLink && activeLink.parentElement) {
            navigationLinks.forEach(link => {
              link.parentElement.removeAttribute('id');
            });
            activeLink.parentElement.setAttribute('id', 'active');
          }
          
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, options);

    sections.forEach(section => {
      observer.current.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.current.unobserve(section);
      });
    };

  }, []);

  return (
    <>
        <Nav/>
        <div className='secciones-page-home'>
            <section className='seccion' id='home'>
                <SectionHome/>
            </section>
            <section className='seccion' id='about'>
                <About/>
            </section>
            <section className='seccion' id='portfolio'>
                <Portfolio/>
            </section>
            <section className='seccion' id='contacto'>
                <Contacto/>
            </section>
        </div>
    </>
  )
}
