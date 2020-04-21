import React from 'react';
import Cta from '../../components/Cta/Cta';
import Nav from '../../components/Nav/Nav';
import Icon from '../../components/Icon/Icon';
import './Hero.scss';

function Hero(props) {
  return (
    <div className="Hero">
      <Nav icon="nav" type="light" items={['Home', 'Nosotros', 'Menú', 'Promociones', 'Contacto']}/>
      <div className="Hero-icon">
        <Icon icon={props.icon} type="terciary" />
      </div>
      <h1 className="Hero-title">{props.title}</h1>
      <h2 className="Hero-subtitle">{props.subtitle}</h2>
      <Cta type="secondary" label={props.cta} />
    </div>
  );
}

export default Hero;