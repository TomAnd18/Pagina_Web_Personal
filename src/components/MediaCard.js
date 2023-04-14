import * as React from 'react';
import '../styles/sectionPortfolio.css';

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
      </div>
    </div>
  );
}