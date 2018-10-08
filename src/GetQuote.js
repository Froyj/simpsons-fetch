import React from 'react';

const GetQuote = ({ selectQuote }) => {
  return (
    <div>
      <button
        onClick = { selectQuote }
      >
        Get a quote
        </button>
    </div>
  );
};


export default GetQuote;