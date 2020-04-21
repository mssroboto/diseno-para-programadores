import React from 'react';
import Cta from '../Cta/Cta';
import './Nav.scss';

function Nav(props) {
  const type = `Nav Nav--${props.type} subgrid`;
  const navItems = props.items;
  const list = () => {
    return navItems.map((item, index) => {
      return <li key={index} className="Nav-item"><a href="http://www.google.com">{item}</a></li>
    })
  }

  return (
    <div className={type}>
      <div className="Nav-button">
        <Cta type="cuaternary" icon={props.icon} iconType="secondary" />
      </div>
      <ul className="Nav-list">
        {list()}
      </ul>
    </div>
  );
}

export default Nav;