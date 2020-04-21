import React from 'react';
import Cta from '../Cta/Cta';
import './Product.scss';

function Product(props) {
  return (
    <div className="Product">
      <h4 className="Product-title h4--dark">{props.title}</h4>
      <p className="Product-description">{props.content}</p>
      <Cta type="primary" label={props.price} />
    </div>
  );
}

export default Product;