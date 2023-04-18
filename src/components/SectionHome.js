import React from 'react';
import Typed from 'react-typed';
import '../styles/sectionHome.css';
import miCV from '../pdf/CV_Tomas_Regalado_Manay_04_2023.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

export default function SectionHome() {
  return (
    <div className='container-global-sectionhome'>
        <div className='img-container-sectionhome'>
            <img alt='profile' src='https://firebasestorage.googleapis.com/v0/b/react-img-games.appspot.com/o/imggames%2FnoEncontrado1.png?alt=media&token=38e834e9-0374-46bb-a1af-1f354bde285c'></img>
        </div>
        <div className='datos-container-sectionhome'>
            <h5> ¡Hola!, soy </h5>
            <h2> Tomas Regalado</h2>
            <h1>
              Programador <Typed strings={['Front-End', 'Back-End']} typeSpeed={120} backSpeed={120} loop />
            </h1>
            {/* <p>
              Soy un desarrollador Full Stack apasionado por crear soluciones web innovadoras. 
              Con experiencia en desarrollo Front-end y Back-end, mi objetivo es ofrecer un 
              servicio personalizado y de calidad a mis clientes, combinando tecnologías de 
              última generación y buenas prácticas de programación.
            </p> */}
            <a href={miCV} download={'CVTomasRegaladoManay.pdf'}>
              <FontAwesomeIcon style={{color: '#fff', marginRight: '8px', fontSize: '20px'}} icon={faCircleDown}/>
              Descarga mi CV
            </a>
        </div>
    </div>
  )
}
