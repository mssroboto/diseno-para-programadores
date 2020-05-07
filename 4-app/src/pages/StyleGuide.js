import React, { Component } from 'react';
import Cta from '../components/Cta/Cta';
import Quote from '../components/Quote/Quote';
import Challenge from '../components/Challenge/Challenge';
import Product from '../components/Product/Product';
import ContactBox from '../components/ContactBox/ContactBox';
import Nav from '../components/Nav/Nav';
import Hero from '../modules/Hero/Hero'
import './StyleGuide.scss';

class StyleGuide extends Component {
  render() {
    return (
      <div className="StyleGuide">
        <h1 className="StyleGuide-main-title">Steam Burger.</h1>
        <div className="grid StyleGuide-section">
          <h3 className="StyleGuide-title">Colors.</h3>
          <h4 className="StyleGuide-subtitle h4--dark">Añade acá tu paleta de color. Debes reemplazar las variables de color en colors.scss</h4>
          <div className="StyleGuide-wrapper StyleGuide-colors">
            <span className="StyleGuide-swatch StyleGuide-swatch--1"></span>
            <span className="StyleGuide-swatch StyleGuide-swatch--2"></span>
            <span className="StyleGuide-swatch StyleGuide-swatch--3"></span>
            <span className="StyleGuide-swatch StyleGuide-swatch--4"></span>
            <span className="StyleGuide-swatch StyleGuide-swatch--5"></span>
            <span className="StyleGuide-swatch StyleGuide-swatch--6"></span>
          </div>
        </div>
        <div className="grid StyleGuide-section">
          <h3 className="StyleGuide-title">Typography.</h3>
          <h4 className="StyleGuide-subtitle h4--dark">Añade acá tus fuentes. Debes reemplazar las variables de tipografía en typography.scss</h4>
          <div className="StyleGuide-wrapper subgrid">
            <h3 className="StyleGuide-typography">Tipografía principal: Arvo Font Family</h3>
            <h5 className="StyleGuide-typography">Tipografía secundaria: Open Sans</h5>
          </div>
        </div>
        <div className="grid StyleGuide-section">
          <h3 className="StyleGuide-title">Grid.</h3>
          <h4 className="StyleGuide-subtitle h4--dark">Este proyecto utiliza 4 columnas en dispositivos móviles y 12 columnas a partir de tablet. Escala la página para ver como funciona.</h4>
          <div className="StyleGuide-wrapper subgrid">
            <span className="StyleGuide-column"></span>
            <span className="StyleGuide-column"></span>
            <span className="StyleGuide-column"></span>
            <span className="StyleGuide-column"></span>
            <span className="StyleGuide-column"></span>
            <span className="StyleGuide-column"></span>
            <span className="StyleGuide-column"></span>
            <span className="StyleGuide-column"></span>
            <span className="StyleGuide-column"></span>
            <span className="StyleGuide-column"></span>
            <span className="StyleGuide-column"></span>
            <span className="StyleGuide-column"></span>
          </div>
        </div>
        <div className="grid StyleGuide-section">
          <h3 className="StyleGuide-title">Headings.</h3>
          <h4 className="StyleGuide-subtitle h4--dark">Cambia los estilos de los headings en typography.scss</h4>
          <div className="StyleGuide-wrapper subgrid">
            <h1 className="StyleGuide-heading">This is an H1</h1>
            <h2 className="StyleGuide-heading">This is an H2</h2>
            <h3 className="StyleGuide-heading">This is an H3</h3>
            <h3 className="StyleGuide-heading h3--primary">This is an H3</h3>
            <h4 className="StyleGuide-heading">This is an H4</h4>
            <h4 className="StyleGuide-heading h4--dark">This is an H4</h4>
          </div>
        </div>
        <div className="grid StyleGuide-section">
          <h3 className="StyleGuide-title">Botones.</h3>
          <h4 className="StyleGuide-subtitle h4--dark">Cambia los estilos de los botones en Cta.scss</h4>
          <div className="StyleGuide-ctas StyleGuide-wrapper">
            <Cta type="primary" label="Primary!" />
            <Cta type="secondary" label="Secondary" />
            <Cta type="terciary" icon="hamburger" iconType="primary" />
            <Cta type="cuaternary" icon="nav" iconType="secondary" />
            <Cta type="cuaternary" icon="facebook" iconType="primary" />
          </div>
        </div>
        <div className="grid StyleGuide-section">
          <h3 className="StyleGuide-title">Quote.</h3>
          <div className="StyleGuide-wrapper">
            <Quote type="primary" content="Hamburguesas de pura carne con el toque secreto." />
          </div>
        </div>
        <div className="grid StyleGuide-section">
          <h3 className="StyleGuide-title">Product.</h3>
          <div className="StyleGuide-wrapper subgrid">
            <div className="StyleGuide-product-1">
              <Product title="Steam sencilla" content="1 lb de res con queso, verdura y pan." price="$10.00" />
            </div>
            <div className="StyleGuide-product-2">
              <Product title="Steam sencilla" content="1 lb de res con queso, verdura y pan." price="$10.00" />
            </div>
            <div className="StyleGuide-product-3">
              <Product title="Steam sencilla" content="1 lb de res con queso, verdura y pan." price="$10.00" />
            </div>
          </div>
        </div>
        <div className="grid StyleGuide-section">
          <h3 className="StyleGuide-title">Challenge.</h3>
          <div className="StyleGuide-wrapper">
            <Challenge title="#RetoSteam" content="Cuentanos en redes sociales lo que mas te gusta de steam y obtén 15% de descuento." />
          </div>
        </div>
        <div className="grid StyleGuide-section">
          <h3 className="StyleGuide-title">Contact Box.</h3>
          <div className="StyleGuide-wrapper">
            <ContactBox address="cra 11 # 10 Sur" phone="2338617" />
          </div>
        </div>
        <div className="grid StyleGuide-section">
          <h3 className="StyleGuide-title">Navigation.</h3>
          <div className="StyleGuide-wrapper">
            <Nav icon="nav" items={['Home', 'Nosotros', 'Menú', 'Promociones', 'Contacto']} />
            <div className="StyleGuide-bg">
              <Nav icon="nav" type="light" items={['Home', 'Nosotros', 'Menú', 'Promociones', 'Contacto']} />
            </div>
          </div>
        </div>
        <div className="grid StyleGuide-section">
          <h3 className="StyleGuide-title">Hero.</h3>
          <div className="StyleGuide-wrapper">
            <Hero title="Steam" subtitle="Hamburgesas artesanales" cta="Ver menú" icon="lightHamburger" />
          </div>
        </div>
      </div>
    );
  }
}

export default StyleGuide;