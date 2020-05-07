import React from 'react';
import './Quote.scss';

function Quote(props) {
  const content = props.content;
  const cssClass = 'Quote';

  return (
    <div className={cssClass}>
      <h4>{content.title}</h4>
    </div>
  );
}

export default Quote;