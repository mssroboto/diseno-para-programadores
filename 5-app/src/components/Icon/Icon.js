import React from 'react';
import facebook from '../../images/facebook.svg';
import fries from '../../images/fries.svg';
import hamburger from '../../images/hamburger.svg';
import lightHamburger from '../../images/light-hamburger.svg';
import iceCream from '../../images/ice-cream.svg';
import instagram from '../../images/instagram.svg';
import nav from '../../images/nav.svg';
import soda from '../../images/soda.svg';
import tiktok from '../../images/tiktok.svg';
import './Icon.scss';

function Icon(props) {
  const type = `Icon Icon--${props.type}`;
  const setIcon = (() => {
    if (props.icon === 'instagram') {
      return instagram
    }

    if (props.icon === 'facebook') {
      return facebook
    }

    if (props.icon === 'tiktok') {
      return tiktok
    }

    if (props.icon === 'hamburger') {
      return hamburger
    }

    if (props.icon === 'lightHamburger') {
      return lightHamburger
    }

    if (props.icon === 'soda') {
      return soda
    }

    if (props.icon === 'fries') {
      return fries
    }

    if (props.icon === 'iceCream') {
      return iceCream
    }

    if (props.icon === 'nav') {
      return nav
    }
  })

  return (
    <img className={type} src={setIcon()} alt={props.icon} />
  );
}

export default Icon;