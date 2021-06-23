import React from 'react';
import Fade from 'react-reveal/Fade';

import Dicoding from 'assets/image/dicoding.png';

export default function CertificateCard (props) {
  return (
    <div className="d-flex justify-content-between">
      <div className="col">
        {props.data.map ((data, index) => {
          return (
            <div className="row">
              <Fade left delay={700 * index}>
                <div
                  className="card mt-3"
                  style={{width: 'auto', height: '80%'}}
                >
                  <img
                    src={Dicoding}
                    alt="dicodng-img"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <a href={data.url} className="btn btn-primary">Details</a>
                  </div>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
      <div className="col">
        {props.data2.map ((data, index) => {
          return (
            <div className="row">
              <Fade right delay={900 * index}>
                <div
                  className="card mt-3"
                  style={{width: 'auto', height: '80%'}}
                >
                  <img
                    src={Dicoding}
                    alt="dicodng-img"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <a href={data.url} className="btn btn-primary">Details</a>
                  </div>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
}
