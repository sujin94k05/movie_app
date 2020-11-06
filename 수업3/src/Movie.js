import React from 'react';
import propTypes from 'prop-types';

function Movie({id, title, year, summary, poster}) {
   return (
      <>
         <img src={poster} alt={title} title={title}/>
         <h1>영화제목: {title}</h1>
         <h2>연도: {year}</h2>
         <p>{summary.slice(0, 180)}...</p>
      </>
   );
}

Movie.propsTypes = {
   id: propTypes.number.isRequired,
   year: propTypes.number.isRequired,
   title: propTypes.string.isRequired,
   summary: propTypes.string.isRequired,
   poster: propTypes.string.isRequired,
   genres: propTypes.string.isRequired
};

export default Movie;