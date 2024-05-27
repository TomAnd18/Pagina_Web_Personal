import * as React from 'react';
import '../styles/sectionPortfolio.css';
import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function MediaCard( { image, tittle, description, technologies, url, git } ) {
  return (
    <div className='card-proyecto'>
    <div className='title-des-up'>
      <h3> { tittle } </h3>
      <p> { description } </p>
    </div>
      <div className='img-proyecto'>
        <img alt={tittle} src={image}></img>
      </div>
      <div className='data-proyecto'>
        {/* <h3> { tittle } </h3>
        <p> { description } </p> */}
        <div className='icons-del-proyecto'>
          {
            technologies.map(item => {
              return <span> {item} </span>;
            })
          }
        </div>
        <div className='btn-link-mediacard'>
          <Link
            component="button"
            variant="body2"
            onClick={() => { window.open(git, '_blank') }}
          >
            <FontAwesomeIcon style={{fontSize: '1rem', marginRight: '3px'}} icon={faGithub} />
            Github
          </Link>
          <Link
            component="button"
            variant="body2"
            onClick={() => { window.open(url, '_blank') }}
          >
            Ver
            <FontAwesomeIcon style={{fontSize: '0.8rem', marginLeft: '5px'}} icon={faArrowUpRightFromSquare} />
          </Link>
        </div>
      </div>
    </div>
  );
}