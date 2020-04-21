import React from 'react';
import './Quote.scss';

function Quote(props) {
  const content = props.content;

  return (
    <div className="Quote">
      <h4>{content}</h4>
    </div>
  );
}

export default Quote;