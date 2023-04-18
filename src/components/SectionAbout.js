import React from 'react';
import '../styles/sectionAbout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faNode, faJs, faReact, faPhp, faJava, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function SectionAbout() {
  return (
    <div className='container-global-sectionabout'>
        <div className='me-redes-sectionabout'>
          <div className='me-sectionabout'>
            <h2> Sobre mi </h2>
            <p>
                Soy un desarrollador Full Stack apasionado por crear soluciones web innovadoras. 
                Con experiencia en desarrollo Front-end y Back-end, mi objetivo es ofrecer un 
                servicio personalizado y de calidad a mis clientes, combinando tecnologías de 
                última generación y buenas prácticas de programación.
            </p>
          </div>
          <div className='redes-sectionabout'>
            <h2> Mis Redes </h2>
            <div className='icons-redes-sectionabout'>
              <a href='https://www.linkedin.com/in/tomas-regalado-manay/' target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon style={{color: '#0077B5'}} icon={faLinkedin}/> <h4>Linkedin</h4> </a>
              <a href='https://github.com/TomAnd18/' target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon style={{color: '#181717'}} icon={faGithub}/> <h4>GitHub</h4> </a>
            </div>
          </div>
        </div>
        <div className='icons-tittle-sectionabout'>
          <h2> Tecnologias que manejo </h2>
          <div className='icons-container-sectionabout'>
            <div className='icons-sectionabout'>
              <span> <FontAwesomeIcon style={{color: '#E34F26'}} icon={faHtml5}/> <h3>Html</h3> </span>
            </div>
            <div className='icons-sectionabout'>
              <span> <FontAwesomeIcon style={{color: '#1572B6'}} icon={faCss3Alt}/> <h3>Css</h3> </span>
            </div>
            <div className='icons-sectionabout'>
              <span> <FontAwesomeIcon style={{color: '#F7DF1E'}} icon={faJs} /> <h3>JavaScript</h3> </span>
            </div>
            <div className='icons-sectionabout'>
              <span> <FontAwesomeIcon style={{color: '#61DAFB'}} icon={faReact} /> <h3>React JS</h3> </span>
            </div>
            <div className='icons-sectionabout'>
              <span> <FontAwesomeIcon style={{color: '#339933'}} icon={faNode} /> <h3>Node JS</h3> </span>
            </div>
            <div className='icons-sectionabout'>
              <span> <FontAwesomeIcon style={{color: '#8892BF'}} icon={faPhp} /> <h3>PHP</h3> </span>
            </div>
            <div className='icons-sectionabout'>
              <span> <FontAwesomeIcon style={{color: '#007396'}} icon={faJava} /> <h3>Java</h3> </span>
            </div>
          </div>
        </div>
    </div>
  )
}
