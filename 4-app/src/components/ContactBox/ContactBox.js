import React from 'react';
import './ContactBox.scss';

function ContactBox(props) {
  return (
    <div className="ContactBox">
      <div className="ContactBox-block">
        <h4 className="h4--dark">Teléfono.</h4>
        <p className="ContactBox-description">{props.phone}</p>
      </div>
      <div className="ContactBox-block">
        <h4 className="h4--dark">Dirección.</h4>
        <p className="ContactBox-description">{props.address}</p>
      </div>
    </div>
  );
}

export default ContactBox;