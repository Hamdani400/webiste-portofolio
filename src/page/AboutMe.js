import React, {Component} from 'react';
import Fade from 'react-reveal/Fade';

import Header from 'parts/Header';
import ImageSkill from 'components/IconsImg';

import myPhoto from 'assets/image/skills/fotoku.JPG';

export default class AboutMe extends Component {
  render () {
    return (
      <div className="about-me">
        <Header {...this.props} />
        <Fade>
          <section className="container dp-flex">
            <div className="info-wrapper">
              <div className="row">
                <div className="col-4 photo" style={{overflow: 'hidden'}}>
                  <img src={myPhoto} alt="me" style={{width: '130%'}} />
                </div>
                <div className="col">
                  <article>
                    <strong><p>About me</p></strong>
                    <p className="self-description">
                      Hi, I’m Dani <br />
                      I’m final year student of Jember University, major in Electrical
                      Engineering. Currently working in TukangKonten.com as part time article
                      content writer. Besides that, I also working on my individual projects
                      websites which you can check them in my github account.
                      <br /> <br />
                      Im passionate on programming and keep learning about it in the last a
                      year. I have good skills on HTML, CSS, and Javascript. I also able to use
                      some framework such as RectJS and Bootstrap.
                    </p>
                  </article>
                  <div className="row">
                    <article>
                      <strong>My Technicall Skill</strong>
                    </article>

                    <div className="col-2">
                      <p>Front-end    :</p>
                    </div>
                    <div className="col"><ImageSkill skills="FE" /></div>
                    <div className="row" style={{marginTop: 20}}>
                      <div className="col-3">
                        <p>Version Control    :</p>
                      </div>
                      <div className="col"><ImageSkill /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
      </div>
    );
  }
}
