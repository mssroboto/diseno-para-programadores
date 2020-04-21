import React from 'react';
import Cta from '../../components/Cta/Cta';
import Product from '../../components/Product/Product';
import './Menu.scss';

function Menu(props) {
  return (
    <div className="Menu">
      <h3>{props.title}</h3>
      <div className="Menu-tabs">
        <Cta type="terciary" icon="hamburger" iconType="primary"/>
        <Cta type="terciary" icon="fries" iconType="primary"/>
        <Cta type="terciary" icon="soda" iconType="primary"/>
        <Cta type="terciary" icon="iceCream" iconType="primary"/>
      </div>
      <div className="Menu-products grid">
        <Product title="Steam sencilla" content="1 lb de res con queso, verdura y pan." price="$10.00"/>
        <Product title="Steam doble" content="1 lb de res con queso, verdura y pan." price="$15.00"/>
        <Product title="Steam especial" content="1 lb de res, tocineta, queso, verdura y pan." price="$20.00"/>
      </div>
      <Cta type="secondary" label="Ver mi pedido (2)" />
    </div>
  );
}

export default Menu;