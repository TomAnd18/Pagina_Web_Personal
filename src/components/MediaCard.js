import * as React from 'react';
import '../styles/sectionPortfolio.css';
import Link from '@mui/material/Link';

export function MediaCard( { image, tittle, description, technologies } ) {
  return (
    <div className='card-proyecto'>
      <div className='img-proyecto'>
        <img alt={tittle} src={image}></img>
      </div>
      <div className='data-proyecto'>
        <h3> { tittle } </h3>
        <p> { description } </p>
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
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Demo
          </Link>
        </div>
      </div>
    </div>
  );
}