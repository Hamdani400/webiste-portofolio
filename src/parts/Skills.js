/* eslint-disable array-callback-return */
import React from 'react';
import uiIcon from 'assets/image/UIImg.png';
import feIcon from 'assets/image/webImg.png';
import vidIcon from 'assets/image/videoImg.png';
import writingIcon from 'assets/image/writingImg.png';

export default function Skills (props) {
  const icon = [feIcon, uiIcon, writingIcon, vidIcon];
  return (
    <article className="container mb-5">
      <h2 className="my-5 fw-bold text-center">Skills</h2>
      <div className="skills justify-content-between">
        <div className="first-row row justify-content-between">
          {props.data.map ((item, index) => {
            if (index <= 1) {
              return (
                <div className="col-5 position-relative" key={`ke-${index}`}>

                  <img src={icon[index]} alt={`icon-${index}`} />
                  <h5 className="pt-2 mt-3 mb-2 fw-bold text-center">
                    {item.title}
                  </h5>
                  <p className="my-2 fw-normal text-center">
                    {item.des}
                  </p>
                </div>
              );
            }
          })}
        </div>
        <div className="second-row row justify-content-between">
          {props.data.map ((item, index) => {
            if (index > 1) {
              return (
                <div className="col-5" key={`ke-${index}`}>

                  <img src={icon[index]} alt={`icon-${index}`} />
                  <h5 className="pt-2 mt-3 mb-2 fw-bold text-center">
                    {item.title}
                  </h5>
                  <p className="my-2 fw-normal text-center">
                    {item.des}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </article>
  );
}
