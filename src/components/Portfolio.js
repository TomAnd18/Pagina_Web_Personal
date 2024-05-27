import React, { useRef } from 'react';
import '../styles/sectionPortfolio.css';
import { MediaCard } from './MediaCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
    const proyectos = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-img-games.appspot.com/o/imggames%2FCaptura%20de%20pantalla%20(41).png?alt=media&token=210fe037-d1d5-4641-ac78-9ec33d039df0',
            tittle: 'E-commerce',
            description: 'E-commerce de videojuegos fisicos y digitales',
            technologies: ['React', 'SpringBoot', 'Material UI', 'Firebase', 'Auth0'],
            url: 'https://tiendaonlinereactspringboot-production.up.railway.app/',
            git: 'https://github.com/TomAnd18/Tienda_Online_React_SpringBoot'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-img-games.appspot.com/o/imggames%2FCaptura%20de%20pantalla%20(90).png?alt=media&token=56016056-2d08-4f56-936c-297f5fdc9430',
            tittle: 'E-commerce',
            description: 'E-commerce de ropa deportiva y accesorios',
            technologies: ['Html', 'Css', 'JavaScript', 'Php', 'MySql', 'Bootstrap'],
            url: 'http://tomander.eshost.com.ar/',
            git: 'https://github.com/TomAnd18/tpFinalBackendPotreroEDLP'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-img-games.appspot.com/o/imggames%2FCaptura%20de%20pantalla%20(102).png?alt=media&token=4fd77b68-78f5-4eb9-b8ba-0681153700e3',
            tittle: 'PokeApi',
            description: 'Aplicación web consumiendo una Api de Pokemons',
            technologies: ['React', 'Material UI'],
            url: 'https://pokeapi-reacttr.netlify.app/',
            git: 'https://github.com/TomAnd18/PokeApi-React'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-img-games.appspot.com/o/fortnite-app%2Fappweb-pavitos-firebase.png?alt=media&token=64da9bce-4dfd-41dd-8e60-17e8e88db1bf',
            tittle: 'Landing Page',
            description: 'Landing Page para venta de monedas de Fortnite',
            technologies: ['React', 'Material UI'],
            url: 'https://pavitos.netlify.app/',
            git: 'https://github.com/TomAnd18/Pavos-Fortnite-React'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-img-games.appspot.com/o/fortnite-app%2Fappweb-cursospython.png?alt=media&token=aa530480-8b0e-4117-ac31-3c744ed5cce3',
            tittle: 'E-commerce',
            description: 'E-commerce de cursos online',
            technologies: ['Python', 'Boostrap'],
            url: 'http://cursositonline.pythonanywhere.com/courses',
            git: 'https://github.com/TomAnd18/App_Web_Cursos_IT_Python'
        }
    ]

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -600, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    };

    return (
    <div className='container-global-sectionportfolio'>
        <h2> Mis Proyectos </h2>
        <div className='scroll-buttons'>
            <button className='scroll-button' onClick={scrollLeft}> <FontAwesomeIcon className='sb-ico' icon={faCircleChevronLeft}/> </button>
            <div className='proyectos-sectionportfolio' ref={scrollRef}>
                {
                    proyectos.map((p, index) => {
                        return <MediaCard
                            key={index}
                            image={p.img} 
                            tittle={p.tittle} 
                            description={p.description}
                            technologies={p.technologies}
                            url={p.url}
                            git={p.git}
                        />;
                    })
                }
            </div>
            <button className='scroll-button right' onClick={scrollRight}> <FontAwesomeIcon className='sb-ico' icon={faCircleChevronRight}/> </button>
        </div>
    </div>
    )
}
