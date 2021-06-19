import React from 'react';
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
          <h1>Working <br /> and Internship Experience</h1>
        </div>
      </div>
      <div className="row justify-content-end">
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
      </div>

    </section>
  );
}
