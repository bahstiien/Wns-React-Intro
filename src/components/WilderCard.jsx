import React from "react";
import Skills from "./Skills";
import avatar from "../assets/avatar.png";

const WilderCard = ({ name, description, city, skills }) => {
  return (
    <div>
      <article className="card">
        <img src={avatar} alt="Jane Doe Profile" />
        <h3>{name}</h3>
        <p>{description}</p>
        <p> {city} </p>
        <h4>Wild Skills</h4>
        {skills.map((skill, index) => (
          <Skills key={index} title={skill.title} votes={skill.votes} />
        ))}
      </article>
    </div>
  );
};

export default WilderCard;
