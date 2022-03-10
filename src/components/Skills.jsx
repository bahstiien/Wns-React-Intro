import React from "react";
import Proptypes from "prop-types";

function Skills({ votes, title }) {
  return (
    <li className="skills">
      {title}
      <span className="votes">{votes}</span>
    </li>
  );
}

Skills.propTypes = {
  title: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};

export default Skills;
