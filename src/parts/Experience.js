import React from 'react';
import Fade from 'react-reveal/Fade';

import Lightning from 'assets/image/icon/Vector 1.svg';
import Arrow from 'assets/image/icon/Arrow 1.svg';
import writing from 'assets/image/icon/WRITING.svg';
import frontend from 'assets/image/icon/FRONT-END.svg';
import Button from 'elements/Button';

export default function Experience (props) {
  return (
    <section className="container mt-3">
      <div className="row">
        <div className="exp-title">
          <Fade left>
            <h1>Working, Project, <br /> and Internship Experience</h1>
          </Fade>
        </div>
      </div>

      <div className="row justify-content-end">
        <Fade bottom>
          <div className="card">
            <div className="card-img-wrapper">
              <img
                src={Lightning}
                alt="Lightning-icon"
                className="card-img-top"
                style={{width: '50px'}}
              />
            </div>
            <div className="card-body">
              <p className="card-text">
                Electrical Engineer
              </p>
              <div className="card-meta">
                <Button
                  type="link"
                  className="stretched-link"
                  href="/experience/electrical-exp"
                >
                  Discover more
                </Button>
                <img src={Arrow} alt="arrow" />
              </div>

            </div>
          </div>
        </Fade>
        <Fade bottom delay={300}>
          <div className="card">
            <div className="card-img-wrapper">
              <img
                src={frontend}
                alt="Lightning-icon"
                className="card-img-top"
                style={{width: '100px'}}
              />
            </div>
            <div className="card-body">
              <p className="card-text">
                Front-End Developer
              </p>
              <div className="card-meta">
                <Button
                  type="link"
                  className="stretched-link"
                  href="/experience/front-end-exp"
                >
                  Discover more
                </Button>
                <img src={Arrow} alt="arrow" />
              </div>

            </div>
          </div>
        </Fade>
        <Fade bottom delay={500}>
          <div className="card">
            <div className="card-img-wrapper">
              <img
                src={writing}
                alt="Lightning-icon"
                className="card-img-top"
                style={{width: '125px'}}
              />
            </div>
            <div className="card-body">
              <p className="card-text">
                Writer
              </p>
              <div className="card-meta">
                <Button
                  type="link"
                  className="stretched-link"
                  href="/experience/writing-exp"
                >
                  Discover more
                </Button>
                <img src={Arrow} alt="arrow" />
              </div>

            </div>
          </div>
        </Fade>
      </div>

    </section>
  );
}
