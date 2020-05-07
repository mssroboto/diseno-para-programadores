import React from 'react';
import Cta from '../Cta/Cta';
import './Product.scss';

function Product(props) {
  const content = props.content;
  const cssClass = 'Product';
  const uiConfig = {
    'cta': 'primary'
  }

  return (
    <div className={cssClass}>
      <h4 className={`${cssClass}-title h4--dark`}>
        {content.title}
      </h4>
      <p className={`${cssClass}-description`}>
        {content.subtitle}
      </p>
      <Cta type={uiConfig.cta} label={content.price} />
    </div>
  );
}

export default Product;