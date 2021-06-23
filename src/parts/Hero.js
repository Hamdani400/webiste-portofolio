import Fade from 'react-reveal/Fade';

import React from 'react';
import Circle from 'assets/image/circle.png';
import heroImg from 'assets/image/hero-img.png';
import Button from 'elements/Button';

export default function Hero (props) {
  return (
    <div className="hero-bg">
      <section className="container pt-5">
        <div className="row justify-content-between align-items-start">
          <Fade bottom>
            <div className="col-auto pe-3 mt-5 py-2" style={{width: 550}}>
              <h1 className="fw-bold pt-5">
                Hi, I'm <span>Dani</span>
              </h1>
              <h5 style={{lineHeight: 1.5}}>
                Front end website enthusiast, article writer,
                also have interest in design
              </h5>
              <p className="pt-1">
                this is my personal website. Feel free to know me more.
              </p>
              <div className="button-wrapper row pt-2">
                <Button
                  type="link"
                  style={{padding: '0'}}
                  href="experience/front-end-exp"
                  hasShadow
                  isPrimary
                >
                  My Projects
                </Button>
                <Button className="button-outline" type="link" isPrimary>
                  Resume
                </Button>
              </div>
            </div>
          </Fade>
          <Fade>
            <div
              className="col d-flex justify-content-center"
              style={{marginLeft: 30}}
            >
              <img className="circle img-fluid" src={Circle} alt="circle" />
              <img
                className="photo poisition-relative mx-auto d-block"
                src={heroImg}
                alt="heroImg"
              />
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}
