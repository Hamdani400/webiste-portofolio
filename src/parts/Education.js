import React from 'react';
import Unej from 'assets/image/unej.png';
import Skensa from 'assets/image/smkn1.png';

export default function Education () {
  return (
    <div className="edu-bg">
      <section className="container" style={{marginTop: '270px'}}>
        <div className="row">
          <div className="col">
            <h1 className="fw-bold" style={{fontSize: '48px', lineHeight: 1.5}}>
              My <br /> Education
            </h1>
          </div>
          <div className="col justify-content-center">
            <aside>
              <img
                src={Skensa}
                alt="smkn1"
                style={{width: 85, margin: '0 0 40px 172px'}}
              />
              <p className="fw-bold text-center">SMKN 1 Pasuruan</p>
              <p className="text-center">Majoring in Chemical Industry</p>
              <p className="fw-bold text-center">2013-2016</p>
            </aside>
          </div>
          <div className="col">
            <aside className="justify-content-center">
              <img
                src={Unej}
                alt="smkn1"
                style={{width: 100, margin: '0 0 40px 155px'}}
              />
              <p className="fw-bold text-center">Universitas Jember</p>
              <p className="text-center">Majoring in Electrical Engineering</p>
              <p className="fw-bold text-center">2017-on going</p>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}