import React from 'react';
import Cta from '../Cta/Cta';
import './Reto.scss';

function Reto(props) {
  return (
    <div className="Reto">
      <h4 className="Reto-title">{props.title}</h4>
      <p className="Reto-content p--light">{props.content}</p>
      <div className="Reto-icons">
        <Cta type="cuaternary" icon="facebook" iconType="primary" />
        <Cta type="cuaternary" icon="instagram" iconType="primary" />
        <Cta type="cuaternary" icon="tiktok" iconType="primary" />
      </div>
    </div>
  );
}

export default Reto;