import React, {useEffect} from 'react';
import Button from 'elements/Button';

export default function Header (props) {
  useEffect (() => {
    const hamburger = document.querySelector ('.hamburger');
    const ul = document.querySelector ('ul');

    hamburger.addEventListener ('click', () => {
      ul.classList.toggle ('slide');
    });
  }, []);
  const getNavLinkClass = path => {
    return props.location.pathname === path ? ' active' : '';
  };

  function scrollToSkills () {
    window.scrollTo ({
      top: 50,
      behavior: 'smooth',
    });
  }

  function scrollToExperience () {
    window.scrollTo ({
      top: 1450,
      behavior: 'smooth',
    });
  }

  return (
    <header className="container spacing-sm pt-2">
      <div className="hamburger" id="hamburger">
        <input type="checkbox" />
        <div />
        <div />
        <div />
      </div>
      <ul className="nav justify-content-end">
        <li className={`nav-item${getNavLinkClass ('/')}`}>
          <Button className="nav-link" type="link" href="/">Home</Button>
        </li>
        <li className={`nav-item${getNavLinkClass ('/skill')}`}>
          <Button className="nav-link" type="link" href={scrollToSkills}>
            Skill
          </Button>
        </li>
        <li className={`nav-item${getNavLinkClass ('/about')}`}>
          <Button className="nav-link" type="link" href="/about">
            About
          </Button>
        </li>
        <li className={`nav-item${getNavLinkClass ('/certificate')}`}>
          <Button className="nav-link" type="link" href="/certificate">
            Certificate
          </Button>
        </li>
        <li
          className={`nav-item${getNavLinkClass ('/experience/electrical-exp')}${getNavLinkClass ('/experience/front-end-exp')}${getNavLinkClass ('/experience/writing-exp')}`}
        >
          <Button className="nav-link" type="link" href={scrollToExperience}>
            Experience
          </Button>
        </li>
        <li className={`nav-item${getNavLinkClass ('/contact')}`}>
          <Button className="nav-link" type="link" href="/contact">
            Contact
          </Button>
        </li>
      </ul>
    </header>
  );
}
