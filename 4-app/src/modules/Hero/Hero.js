import React from 'react';
import Cta from '../../components/Cta/Cta';
import Icon from '../../components/Icon/Icon';
import './Hero.scss';

function Hero(props) {
  const content = props.content;
  const cssClass = 'Hero';
  const uiConfig = {
    'cta': 'secondary',
    'icon': 'terciary'
  }

  return (
    <div className={cssClass}>
      <div className={`${cssClass}-icon`}>
        <Icon icon={content.icon} type={uiConfig.icon} />
      </div>
      <h1 className={`${cssClass}-title`}>
        {content.title}
      </h1>
      <h2 className={`${cssClass}-subtitle`}>
        {content.subtitle}
      </h2>
      <div className={`${cssClass}-cta`}>
        <Cta type={uiConfig.cta} label={content.cta} />
      </div>
    </div>
  );
}

export default Hero;