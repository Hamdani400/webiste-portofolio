import React, {Component} from 'react';

import Header from 'parts/Header';

import myPhoto from 'assets/image/skills/fotoku.JPG';

export default class Contact extends Component {
  render () {
    return (
      <div className="about-me">
        <Header {...this.props} />
        <section className="container dp-flex">
          <div className="info-wrapper">
            <div className="row">
              <div className="col-4 photo" style={{overflow: 'hidden'}}>
                <img src={myPhoto} alt="me" style={{width: '130%'}} />
              </div>
              <div className="col">
                <article>
                  <strong><p className="pt-3">Contact me</p></strong>
                  <p
                    className="self-description"
                    style={{lineHeight: 2, fontSize: '1.1em'}}
                  >
                    Gmail   : dinulhaqhamdani41@gmail.com <br />
                    No. Hp  : 085157600519 <br />
                    Github page :
                    {' '}
                    <a
                      style={{textDecoration: 'none'}}
                      href="https://github.com/hamdani400"
                    >
                      github.com/hamdani400
                    </a>
                    {' '}{' '}
                    <br />
                    LinkedIn :
                    {' '}
                    <a
                      style={{textDecoration: 'none'}}
                      href="https://www.linkedin.com/in/hamdani-dinul-haq-12b6821b2/"
                    >
                      https://www.linkedin.com/in/hamdani-dinul-haq-12b6821b2/
                    </a>
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
