import LandingPage from 'page/LandingPage';
import AboutMe from 'page/AboutMe';
import React from 'react';
import ExperiencePage from 'page/ExperiencePage';
import Contact from 'page/Contact';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './assets/scss/style.scss';
import Certificate from 'page/Certificate';

function App () {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutMe} />
        <Route path="/contact" component={Contact} />
        <Route path="/certificate" component={Certificate} />
        <Route path="/experience/:exp" component={ExperiencePage} />
      </Router>
    </div>
  );
}

export default App;
