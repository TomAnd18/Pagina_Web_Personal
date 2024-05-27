import React from 'react';
import Typed from 'react-typed';
import '../styles/sectionHome.css';
import miCV from '../pdf/CV_Tomas_Regalado_Manay_04_2024.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import photo from '../images/photox3.png';

export default function SectionHome() {
  return (
    <div className='container-global-sectionhome'>
        <div className='img-container-sectionhome'>
          <div className='div-soporte-profile'>  </div>
          <img className='img-profile-home' alt='profile' src={photo}></img>
        </div>
        <div className='datos-container-sectionhome'>
            <h5> ¡Hola!, soy </h5>
            <h2> Tomas Regalado</h2>
            <h1>
              Programador <Typed strings={['Front-End', 'Back-End']} typeSpeed={120} backSpeed={120} loop />
            </h1>
            <div className='misredes-sectionhome-low'>
              <a href='https://www.linkedin.com/in/tomas-regalado-manay/' target='_blank' rel="noopener noreferrer" className='btn-low-redes'> <FontAwesomeIcon style={{width: '100%', height: '100%'}} icon={faLinkedin} /> </a>
              <a href='https://github.com/TomAnd18/' target='_blank' rel="noopener noreferrer" className='btn-low-redes'> <FontAwesomeIcon style={{width: '100%', height: '100%'}} icon={faGithub} /> </a>
              <a href='https://api.whatsapp.com/send?phone=2216748479&text=¡Hola Tomas! Estoy interesado en tus servicios.' target='_blank' rel="noopener noreferrer"className='btn-low-redes'> <FontAwesomeIcon style={{width: '100%', height: '100%'}} icon={faWhatsapp} /> </a>
            </div>
            <a className='btn-cv-download' href={miCV} download={'CVTomasRegaladoManay.pdf'}>
              <FontAwesomeIcon style={{color: '#1572b6', marginRight: '8px', fontSize: '20px'}} icon={faCircleDown}/>
              Descargá mi CV
            </a>
        </div>
    </div>
  )
}
