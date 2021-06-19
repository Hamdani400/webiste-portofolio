import React from 'react';

export default function ExperienceCard (props) {
  return (
    <div>
      {props.data.map ((data, index) => {
        if (data.route === props.location.pathname) {
          return <h1>{data.company[1]}</h1>;
        }
      })}
    </div>
  );
}
