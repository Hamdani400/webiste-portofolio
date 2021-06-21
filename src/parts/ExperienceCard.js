import React from 'react';

export default function ExperienceCard (props) {
  return (
    <section>
      {props.data.map ((data, index) => {
        if (data.route === props.location.pathname) {
          return (
            <div className="experience-card container mt-5">
              <div className="row pt-4">
                <div className="col-4">
                  <img src={data.imgUrl} alt={data.imgName} />
                </div>
                <div className="col">
                  <h5 className="company fw-bold">
                    {data.company}
                  </h5>
                  <p>{data.time}</p>
                  <p>Division: {data.division}</p>
                  <p>{data.desc}</p>
                </div>
              </div>
            </div>
          );
        }
        return null;
      })}
    </section>
  );
}
