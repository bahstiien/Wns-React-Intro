import React from "react";
import Skills from "./Skills";
import avatar from "../assets/avatar.png";

const WilderCard = (props) => {
  return (
    <div>
      <article className="card">
        <img src={avatar} alt="Jane Doe Profile" />
        <h3>{props.name}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h4>Wild Skills</h4>

        <Skills name="HTML" votes="4" />
        <Skills name="CSS" votes="7" />
        <Skills name="Typescript" votes="2" />
      </article>
    </div>
  );
};

export default WilderCard;
