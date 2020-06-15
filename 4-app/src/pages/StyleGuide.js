import React, { Component } from 'react';
import Challenge from '../components/Challenge/Challenge';
import Contact from '../modules/Contact/Contact';
import Cta from '../components/Cta/Cta';
import Hero from '../modules/Hero/Hero';
import Menu from '../modules/Menu/Menu';
import Nav from '../components/Nav/Nav';
import Quote from '../components/Quote/Quote';
import Product from '../components/Product/Product';
import './StyleGuide.scss';

class StyleGuide extends Component {
  render() {
    const content = this.props.content;
    const sections = content.styleguide.sections;
    const cssClass = 'StyleGuide';

    /**
     * Sets the UI config for customizable components.
     */
    const uiConfig = {
      'nav': 'dark',
      'quote': 'primary'
    };

    /**
     * Creates the color palette component for the styleguide.
     */
    const Colors = (() => {
      const colors = [
        '$color-white',
        '$color-black',
        '$color-primary',
        '$color-secondary',
        '$color-terciary',
        '$color-cuaternary'
      ];

      return (
        <div className={`${cssClass}__colors`}>
          {colors.map((item, index) => {
            const colorClassName = `${cssClass}__color ${cssClass}__color--${index}`;
            return (
              <span
                key={index}
                className={colorClassName}>
                  {item}
              </span>
            )
          })}
        </div>
      )
    })();

    /**
     * Creates the typography showcase component for the styleguide.
     */
    const Typography = (() => {
      const typographyClassName = `${cssClass}__typography`;
      const titleClassName = `${typographyClassName}-title`;
      const headingClassName = `${typographyClassName}-heading`;
      const title = 'Ejemplo de título'

      return (
        <div className={`${typographyClassName} subgrid`}>
          <h3 className={titleClassName}>Tipografía principal: Arvo Font Family</h3>
          <h5 className={titleClassName}>Tipografía secundaria: Open Sans</h5>
          <h1 className={headingClassName}>{`${title} h1`}</h1>
          <h2 className={headingClassName}>{`${title} h2`}</h2>
          <h3 className={headingClassName}>{`${title} h3`}</h3>
          <h3 className={`${headingClassName} h3--primary`}>{`${title} h3 primary`}</h3>
          <h4 className={headingClassName}>{`${title} h4`}</h4>
          <h4 className={`${headingClassName} h4--dark`}>{`${title} h4 dark`}</h4>
        </div>
      )
    })();

    /**
     * Creates the grid showcase component for the styleguide.
     */
    const Grid = (() => {
      const columnNumber = 12;
      const columns = [...Array(columnNumber).keys()];

      return (
        <div className={`${cssClass}__grid subgrid`}>
          {columns.map((item, index) => {
            const colorClassName = `${cssClass}__column`;
            return (
              <span
                key={index}
                className={colorClassName}>
                  {item + 1}
              </span>
            )
          })}
        </div>
      )
    })();

    /**
     * Creates the ctas showcase component for the styleguide.
     */
    const Ctas = (() => {
      return (
        <div className={`${cssClass}__ctas`}>
          <Cta type="primary" label="Primary!" />
          <Cta type="secondary" label="Secondary" />
          <Cta type="terciary" icon="hamburger" iconType="primary" />
          <Cta type="cuaternary" icon="nav" iconType="secondary" />
          <Cta type="cuaternary" icon="facebook" iconType="primary" />
        </div>
      )
    })();

    /**
     * Lists the components used in the styleguide.
     */
    const components = {
      'challenge': <Challenge content={content.challenge} />,
      'contactbox': <Contact content={content.contact} />,
      'hero': <Hero content={content.hero} />,
      'menu': <Menu content={content.menu} />,
      'nav': <Nav content={content.nav} type={uiConfig.nav} />,
      'quote': <Quote content={content.quote} type={uiConfig.quote} />,
      'product': <Product content={content.menu.products[0]} />,
      'colores': Colors,
      'tipografia': Typography,
      'grid': Grid,
      'botones': Ctas
    }

    /**
     * Creates the sections of the styleguide.
     */
    const Sections = (() => {
      return sections.map((item, index) => {
        return (
          <section key={index} className={`${cssClass}__section`}>
            <div className={`${cssClass}__masthead`}>
              <h3 className={`${cssClass}__section-title`}>{item.title}</h3>
              <p className={`${cssClass}__section-subtitle`}>{item.subtitle}</p>
            </div>
            <div className={`${cssClass}__wrapper`}>
              {components[item.title.toLowerCase()]}
            </div>
          </section>
        )
      })
    })();

    /**
     * Returns the styleguide markup.
     */
    return (
      <div className={cssClass}>
        <h1 className={`${cssClass}__main-title`}>{content.styleguide.title}</h1>
        <div className={`${cssClass}__wrapper grid`}>
          {Sections}
        </div>
      </div>
    );
  }
}

export default StyleGuide;