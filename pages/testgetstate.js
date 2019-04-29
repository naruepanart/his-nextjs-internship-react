import React from "react";

const About = props => {
  return (
    <div>
      <p>ID : {props.item.id}</p>
      <p>Name : {props.item.name}</p>
      <p>Price : {props.item.price}</p>
    </div>
  );
};

export default About;
