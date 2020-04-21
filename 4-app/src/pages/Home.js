import React, { Component } from 'react';
import Quote from '../components/Quote/Quote';
import Reto from '../components/Reto/Reto';
import ContactBox from '../components/ContactBox/ContactBox';
import Hero from '../modules/Hero/Hero'
import Menu from '../modules/Menu/Menu'
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Hero title="Steam" subtitle="Hamburgesas artesanales" cta="Ver menú" icon="lightHamburger" />
        <Quote type="primary" content="Hamburguesas de pura carne con el toque secreto." />
        <Menu title="Menu" />
        <Reto title="#RetoSteam" content="Cuentanos en redes sociales lo que mas te gusta de steam y obtén 15% de descuento." />
        <div className="Home-contact grid">
          <h3 className="Home-contact-title">Contáctanos.</h3>
          <ContactBox address="cra 11 # 10 Sur" phone="2338617" />
        </div>
      </div>
    );
  }
}

export default Home;