import React from 'react';
import logo from '../images/logo-alone.png';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faHouse, faCode, faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div style={{width: '100%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className='container-footer'>
                <div className='container-logo-footer'>
                    <div> <img alt='logo' src={logo}></img> </div>
                    <div className='icons-footer'>
                        <a href='https://www.linkedin.com/in/tomas-regalado-manay/' target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon style={{color: '#0077B5'}} icon={faLinkedin}/> </a>
                        <a href='https://github.com/TomAnd18/' target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon style={{color: '#181717'}} icon={faGithub}/> </a>
                        <a href="https://api.whatsapp.com/send?phone=2216748479&text=¡Hola Tomas! Estoy interesado en tus servicios." target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon style={{color: '#25D366'}} icon={faWhatsapp}/> </a>
                    </div>
                </div>
                <div className='explore-footer'>
                    <h5> Explorar </h5>
                    <a href='#home'> <FontAwesomeIcon style={{color: '#1572b6', fontSize: '1rem', marginRight: '5px'}} icon={faHouse}/> Inicio </a>
                    <a href='#about'> <FontAwesomeIcon style={{color: '#1572b6', fontSize: '1rem', marginRight: '5px'}} icon={faUser}/> Sobre Mi </a>
                    <a href='#portfolio'> <FontAwesomeIcon style={{color: '#1572b6', fontSize: '1rem', marginRight: '5px'}} icon={faCode}/> Portfolio </a>
                </div>
                <div className='explore-footer'>
                    <h5> Contacto </h5>
                    <a href="mailto:tomasregaladodev@gmail.com"> <FontAwesomeIcon style={{color: '#1572b6', fontSize: '1rem', marginRight: '5px'}} icon={faEnvelope}/> tomasregaladodev@gmail.com </a>
                    <a href='#!'> <FontAwesomeIcon style={{color: '#1572b6', fontSize: '1rem', marginRight: '7px'}} icon={faLocationDot}/> La Plata - Argentina </a>
                    <a href="tel:+542216748479"> <FontAwesomeIcon style={{color: '#1572b6', fontSize: '1rem', marginRight: '3px'}} icon={faPhone}/> +54 - 221 6748479 </a>
                </div>
            </div>
            <div className='copy-footer'>
                <p> Copyright © { currentYear }. All Rights Reserved Tomas Regalado </p>
            </div>
        </div>
    )
}
