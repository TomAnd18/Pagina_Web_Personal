import React from 'react';
import '../styles/sectionPortfolio.css';
import { MediaCard } from './MediaCard';

export default function SectionPortfolio() {
    const proyectos = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-img-games.appspot.com/o/imggames%2FCaptura%20de%20pantalla%20(41).png?alt=media&token=e4afbfab-95a1-4c79-ad09-147a6056b35c',
            tittle: 'E-commerce',
            description: 'E-commerce de videojuegos fisicos y digitales',
            technologies: ['Html', 'Css', 'JavaScript', 'React', 'MySql', 'Material UI', 'Firebase', 'Auth0']
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-img-games.appspot.com/o/imggames%2FCaptura%20de%20pantalla%20(41).png?alt=media&token=e4afbfab-95a1-4c79-ad09-147a6056b35c',
            tittle: 'E-commerce',
            description: 'E-commerce de ropa deportiva y accesorios',
            technologies: ['Html', 'Css', 'JavaScript', 'Php', 'MySql', 'Bootstrap']
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-img-games.appspot.com/o/imggames%2FCaptura%20de%20pantalla%20(41).png?alt=media&token=e4afbfab-95a1-4c79-ad09-147a6056b35c',
            tittle: 'PokeApi',
            description: 'Pagina consumiendo una Api de Pokemons',
            technologies: ['Html', 'Css', 'JavaScript']
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
                    />;
                })
            }
            <div></div>
        </div>
    </div>
    )
}
