import React from 'react';
import ContactBox from '../../components/ContactBox/ContactBox'
import './Contact.scss';

function Contact(props) {
  const content = props.content;
  const cssClass = 'Contact';

  return (
    <div className={`${cssClass} grid`}>
      <h3 className={`${cssClass}-title`}>
        {content.title}
      </h3>
      <div className={`${cssClass}-box`}>
        <ContactBox content={content.items} />   
      </div>
    </div>
  );
}

export default Contact;