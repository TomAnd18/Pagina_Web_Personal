import React from 'react';
import '../styles/sectionPortfolio.css';
import { MediaCard } from './MediaCard';

export default function Portfolio() {
    const proyectos = [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-img-games.appspot.com/o/imggames%2FCaptura%20de%20pantalla%20(41).png?alt=media&token=210fe037-d1d5-4641-ac78-9ec33d039df0',
            tittle: 'E-commerce',
            description: 'E-commerce de videojuegos fisicos y digitales',
            technologies: ['Html', 'Css', 'JavaScript', 'React', 'MySql', 'Material UI', 'Firebase', 'Auth0'],
            url: 'https://tiendaonlinereactspringboot-production.up.railway.app/'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-img-games.appspot.com/o/imggames%2FCaptura%20de%20pantalla%20(90).png?alt=media&token=56016056-2d08-4f56-936c-297f5fdc9430',
            tittle: 'E-commerce',
            description: 'E-commerce de ropa deportiva y accesorios',
            technologies: ['Html', 'Css', 'JavaScript', 'Php', 'MySql', 'Bootstrap'],
            url: 'http://tomander.eshost.com.ar/'
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/react-img-games.appspot.com/o/imggames%2FCaptura%20de%20pantalla%20(91).png?alt=media&token=81dcbac3-aa07-4d65-9e0b-464f724a0970',
            tittle: 'PokeApi',
            description: 'Pagina consumiendo una Api de Pokemons',
            technologies: ['Html', 'Css', 'JavaScript'],
            url: 'https://tomand18.github.io/PokeApi/'
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
                    />;
                })
            }
        </div>
    </div>
    )
}
