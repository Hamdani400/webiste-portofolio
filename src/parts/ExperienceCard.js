import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';

export default function ExperienceCard (props) {
  return (
    <section>
      {props.data.map ((data, index) => {
        if (data.route === props.location.pathname) {
          return (
            <div className="experience-card container mt-5">
              <Fade bottom delay={300 * index}>
                <div className="row pt-4">
                  <div className="col-4">
                    <Button type="link" href={data.url} isExternal>
                      <img src={data.imgUrl} alt={data.imgName} />
                    </Button>
                  </div>
                  <div className="col">
                    <Button
                      type="link"
                      href={data.url}
                      style={{
                        textDecoration: 'none',
                        color: '#212529',
                      }}
                      isExternal
                    >
                      <h5 className="company fw-bold">
                        {data.company}
                      </h5>
                    </Button>
                    <p style={{color: '#adb5bd'}}>{data.time}</p>
                    <p>Division: {data.division}</p>
                    <p>{data.desc}</p>
                  </div>
                </div>
              </Fade>
            </div>
          );
        }
        return null;
      })}
    </section>
  );
}
