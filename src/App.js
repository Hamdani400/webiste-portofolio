import LandingPage from 'page/LandingPage';
import AboutMe from 'page/AboutMe';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './assets/scss/style.scss';
import ExperiencePage from 'page/ExperiencePage';

function App () {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutMe} />
        <Route path="/experience/:exp" component={ExperiencePage} />
      </Router>
    </div>
  );
}

export default App;
