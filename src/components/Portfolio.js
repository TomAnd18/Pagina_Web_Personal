import React from 'react';
import '../styles/sectionPortfolio.css';
import { MediaCard } from './MediaCard';

export default function Portfolio() {
    const proyectos = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-img-games.appspot.com/o/imggames%2FCaptura%20de%20pantalla%20(41).png?alt=media&token=210fe037-d1d5-4641-ac78-9ec33d039df0',
            tittle: 'E-commerce',
            description: 'E-commerce de videojuegos fisicos y digitales',
            technologies: ['React', 'MySql', 'Material UI', 'Firebase', 'Auth0'],
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
            description: 'Aplicación web consumiendo una Api de Pokemones',
            technologies: ['React', 'Material UI'],
            url: 'https://pokeapi-reacttr.netlify.app/',
            git: 'https://github.com/TomAnd18/PokeApi-React'
        },
    ]

    return (
    <div className='container-global-sectionportfolio'>
        <h2> Mis Trabajos </h2>
        <div className='proyectos-sectionportfolio'>
            {
                proyectos.map((p) => {
                    return <MediaCard
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
    </div>
    )
}
