import React from 'react';
import '../styles/sectionAbout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faNode, faJs, faReact, faPhp, faJava } from '@fortawesome/free-brands-svg-icons';
import photo from '../images/photo.jpg';

export default function About() {
  const tecnologias = [
    {
      "name": "HTML",
      "color": "#E34F26",
      "ico": faHtml5
    },
    {
      "name": "CSS",
      "color": "#1572B6",
      "ico": faCss3Alt
    },
    {
      "name": "JavaScript",
      "color": "#F7DF1E",
      "ico": faJs
    },
    {
      "name": "React JS",
      "color": "#61DAFB",
      "ico": faReact
    },
    {
      "name": "Node JS",
      "color": "#339933",
      "ico": faNode
    },
    {
      "name": "PHP",
      "color": "#8892BF",
      "ico": faPhp
    },
    {
      "name": "Java",
      "color": "#007396",
      "ico": faJava
    }
  ];

  return (
    <div className='container-global-sectionabout'>
        <div className='me-redes-sectionabout'>
          <div className='me-sectionabout'>
            <h2> Sobre mi </h2>
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
          {/* <div className='container-img-photoabout'>
            <img alt='myphoto' src={photo}></img>
          </div> */}
          {/* <div className='redes-sectionabout'>
            <h2> Mis Redes </h2>
            <div className='icons-redes-sectionabout'>
              <a href='https://www.linkedin.com/in/tomas-regalado-manay/' target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon style={{color: '#0077B5', fontSize: '1.5rem'}} icon={faLinkedin}/> <h4>Linkedin</h4> </a>
              <a href='https://github.com/TomAnd18/' target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon style={{color: '#181717', fontSize: '1.5rem'}} icon={faGithub}/> <h4>GitHub</h4> </a>
              <a href="https://api.whatsapp.com/send?phone=2216748479&text=¡Hola Tomas! Estoy interesado en tus servicios." target='_blank' rel="noopener noreferrer"> <FontAwesomeIcon style={{color: '#25D366', fontSize: '1.5rem'}} icon={faWhatsapp}/> <h4>Whatsapp</h4> </a>
            </div>
          </div> */}
        </div>

        <div className='icons-tittle-sectionabout'>
          <h2> Tecnologias que manejo </h2>
          <div className='icons-container-sectionabout'>
          
            <div class="marquee-container">
              <div class="marquee">
                {
                  tecnologias.map((t, index) => {
                    return (
                      <div key={index+1} className='icons-sectionabout'>
                        <span> <FontAwesomeIcon style={{color: t.color}} icon={t.ico}/> <h3> { t.name } </h3> </span>
                      </div>
                    );
                  })
                }
                {/* -- Duplicating the icons for a continuous effect -- */}
                {
                  tecnologias.map((t, index) => {
                    return (
                      <div key={index+2} className='icons-sectionabout'>
                        <span> <FontAwesomeIcon style={{color: t.color}} icon={t.ico}/> <h3> { t.name } </h3> </span>
                      </div>
                    );
                  })
                }
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}
