import React from 'react';

const DisplayQuote = ({ quote }) => {
  return (
    <div>
        <img src={quote.image} alt="character"/>
        <h2>{quote.character}</h2>
        <p>{quote.quote}</p>
    </div>
  );
    
  }
export default DisplayQuote;