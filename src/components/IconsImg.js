import React from 'react';

import bootstrap from 'assets/image/skills/bootstrap.png';
import css from 'assets/image/skills/css.png';
import git from 'assets/image/skills/git.png';
import github from 'assets/image/skills/github.png';
import html from 'assets/image/skills/html.png';
import javascript from 'assets/image/skills/javascript.png';
import react from 'assets/image/skills/react.png';
import scss from 'assets/image/skills/scss.png';
import sourcetree from 'assets/image/skills/sourcetree.png';

export default function IconsImg (props) {
  const frontEndImage = [bootstrap, css, html, javascript, react, scss];
  const versionControlImage = [git, github, sourcetree];
  return (
    <aside>
      {props.skills === 'FE'
        ? frontEndImage.map ((item, index) => {
            return (
              <img src={item} alt={item} key={index} className="skills-img" />
            );
          })
        : versionControlImage.map ((item, index) => {
            return index === 2
              ? <img
                  src={item}
                  alt={item}
                  key={index}
                  style={{width: '23%', marginLeft: '1rem'}}
                />
              : <img
                  src={item}
                  alt={item}
                  key={index}
                  style={{width: '12%', marginLeft: '1rem'}}
                />;
          })}
    </aside>
  );
}
