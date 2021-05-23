import React, {Component} from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Skills from 'parts/Skills'
import LandingPageJson from 'json/LandingPage'
import Experience from 'parts/Experience'
import Education from 'parts/Education'
import Footer from 'parts/Footer'

export default class LandingPage extends Component {
  render () {
    return (
      <>
        <Header {...this.props} />
        <Hero></Hero>
        <Skills data={LandingPageJson.skills}></Skills>
        <Experience></Experience>
        <Education></Education>
        <Footer></Footer>
      </>
    );
  }
}
