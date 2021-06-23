import React from 'react';
import Fade from 'react-reveal/Fade';

import Unej from 'assets/image/unej.png';
import Skensa from 'assets/image/smkn1.png';

export default function Education () {
  return (
    <div className="edu-bg">
      <section className="container" style={{marginTop: '270px'}}>
        <div className="row">
          <div className="col">
            <Fade left>
              <h1 className="fw-bold">
                Education
              </h1>
            </Fade>
          </div>
          <div className="col justify-content-center">
            <Fade bottom>
              <aside>
                <div className="img-wrapper">
                  <img
                    src={Skensa}
                    alt="smkn1"
                    style={{width: 85, margin: '0 0 40px 172px'}}
                  />
                </div>
                <p className="fw-bold text-center">SMKN 1 Pasuruan</p>
                <p className="text-center">Major in Chemical Industry</p>
                <p className="fw-bold text-center">2013-2016</p>
              </aside>
            </Fade>
          </div>
          <div className="col">
            <Fade bottom delay={300}>
              <aside className="justify-content-center">
                <div className="img-wrapper">
                  <img
                    src={Unej}
                    alt="smkn1"
                    style={{width: 100, margin: '0 0 40px 155px'}}
                  />
                </div>
                <p className="fw-bold text-center">Universitas Jember</p>
                <p className="text-center">Major in Electrical Engineering</p>
                <p className="fw-bold text-center">2017-on going</p>
              </aside>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
}
