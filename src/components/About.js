import React from 'react';
import '../styles/sectionAbout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faNode, faJs, faReact, faPhp, faJava, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <div className='container-global-sectionabout'>
        <div className='me-redes-sectionabout'>
          <div className='me-sectionabout'>
            <h2> Sobre mi </h2>
            {/* <p>
              Soy desarrollador Front-End con conocimientos en Back-End, lo que me permite trabajar en 
              proyectos web de forma integral, estoy comprometido con el aprendizaje continuo y la actualización constante de mis habilidades 
              para poder ofrecer soluciones de calidad combinando buenas prácticas de programación y aprender más sobre el desarrollo en el 
              lado del servidor y las bases de datos para poder brindar una solución completa.
              Como persona autónoma, estoy acostumbrado a trabajar de manera independiente y soy capaz de tomar la iniciativa y ser responsable 
              en mi trabajo. Estoy dispuesto a trabajar en equipo y colaborar con otros desarrolladores y diseñadores para lograr los objetivos del proyecto.
            </p> */}
            <p style={{marginTop: '1rem'}}>
              Soy un desarrollador Front-End apasionado por crear interfaces de usuario atractivas y funcionales para 
              proyectos web. Además, cuento con conocimientos en Back-End que me permiten tener una visión integral 
              del desarrollo y brindar soluciones completas.
            </p>
            <p>
              Estoy comprometido con el aprendizaje continuo y la actualización constante de mis habilidades para estar
              al día con las últimas tendencias y tecnologías. Me considero una persona autónoma, capaz de trabajar de 
              manera independiente y tomar decisiones de manera efectiva. Al mismo tiempo, disfruto trabajar 
              en equipo y colaborar con otros desarrolladores y diseñadores para lograr los objetivos del proyecto.
            </p>
            <p>
              Mi enfoque es siempre en la calidad del código y en crear una experiencia de usuario fluida y atractiva. Me 
              apasiona trabajar en proyectos retadores que me permitan aprender y crecer como desarrollador.
            </p>
          </div>
          <div className='redes-sectionabout'>
            <h2> Mis Redes </h2>
            <div className='icons-redes-sectionabout'>
              <a href='https://www.linkedin.com/in/tomas-regalado-manay/' target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon style={{color: '#0077B5'}} icon={faLinkedin}/> <h4>Linkedin</h4> </a>
              <a href='https://github.com/TomAnd18/' target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon style={{color: '#181717'}} icon={faGithub}/> <h4>GitHub</h4> </a>
              <a href="https://api.whatsapp.com/send?phone=2216748479&text=¡Hola Tomas! Estoy interesado en tus servicios." target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon style={{color: '#25D366'}} icon={faWhatsapp}/> <h4>Whatsapp</h4> </a>
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
