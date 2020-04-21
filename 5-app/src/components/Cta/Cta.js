import React from 'react';
import Icon from '../Icon/Icon';
import './Cta.scss';

function Cta(props) {
  const type = `Cta Cta--${props.type}`;
  const content = props.icon ? <Icon icon={props.icon} type={props.iconType} /> : props.label;

  return (
    <button className={type}>
      {content}
    </button>
  );
}

export default Cta;