import React from 'react';
import Cta from '../Cta/Cta';
import './Challenge.scss';

function Challenge(props) {
  const content = props.content;
  const cssClass = 'Challenge';
  const uiConfig = {
    'cta': 'cuaternary',
    'icon': 'primary'
  }

  const List = (() => {
    return content.social.map((item, index) => {
      return(
        <li key={index} className={`${cssClass}-social-item`}>
          <Cta type={uiConfig.cta} icon={item.icon} iconType={uiConfig.icon}/>
        </li>
      )
    })
  })();

  return (
    <div className={cssClass}>
      <h4 className={`${cssClass}-title`}>
        {content.title}
      </h4>
      <p className={`${cssClass}-content p--light`}>
        {content.subtitle}
      </p>
      <ul className={`${cssClass}-icons`}>
        {List}
      </ul>
    </div>
  );
}

export default Challenge;