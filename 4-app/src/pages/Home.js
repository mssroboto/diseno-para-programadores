import React, { Component } from 'react';
import Challenge from '../components/Challenge/Challenge';
import Contact from '../modules/Contact/Contact';
import Hero from '../modules/Hero/Hero';
import Menu from '../modules/Menu/Menu';
import Nav from '../components/Nav/Nav';
import Quote from '../components/Quote/Quote';

class Home extends Component {
  render() {
    const content = this.props.content;
    const cssClass = 'Home';
    const uiConfig = {
      'nav': 'light',
      'quote': 'primary'
    }

    return (
      <div className={cssClass}>
        <Nav content={content.nav} type={uiConfig.nav} />
        <Hero content={content.hero} />
        <Quote content={content.quote} type={uiConfig.quote} />
        <Menu content={content.menu} />
        <Challenge content={content.challenge} />
        <Contact content={content.contact} />
      </div>
    );
  }
}

export default Home;