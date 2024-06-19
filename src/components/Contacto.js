import React from 'react';
import '../styles/contacto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Contacto() {
  return (
    <div className='container-global-contacto'>
        <div className='back-for-img'>
            <div className='container-name-contacto'>
                <h2>Contactame</h2>
            </div>
        </div>
        <div className='container-infocards'>
            <div className='info-card-contacto'>
                <div className='container-ico-contacto'> 
                    <FontAwesomeIcon style={{color: '#1572b6', fontSize: '2rem'}} icon={faEnvelope}/>
                </div>
                <div className='info-contacto'>
                    <h3 style={{margin: '0', marginBottom: '8px'}}> Mi Email </h3>
                    <p style={{margin: '0'}}> <a href="mailto:tomasregaladodev@gmail.com"> tomasregaladodev@gmail.com  </a> </p>
                </div>
            </div>
            <div className='info-card-contacto'>
                <div className='container-ico-contacto'> 
                    <FontAwesomeIcon style={{color: '#1572b6', fontSize: '2rem'}} icon={faLocationDot}/>
                </div>
                <div className='info-contacto'>
                    <h3 style={{margin: '0', marginBottom: '8px'}}> Mi Ubicación </h3>
                    <p style={{margin: '0'}}> La Plata - Argentina </p>
                </div>
            </div>
            <div className='info-card-contacto'>
                <div className='container-ico-contacto'> 
                    <FontAwesomeIcon style={{color: '#1572b6', fontSize: '2rem'}} icon={faPhone}/>
                </div>
                <div className='info-contacto'>
                    <h3 style={{margin: '0', marginBottom: '8px'}}> Mi Teléfono </h3>
                    <p style={{margin: '0'}}> <a href="tel:+542216748479"> +54 - 221 6748479 </a> </p>
                </div>
            </div>
        </div>
    </div>
  )
}
