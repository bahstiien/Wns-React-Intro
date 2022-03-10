import React from "react";
import Proptypes from "prop-types";

function Skills({ name, votes }) {
  return (
    <li className="skills">
      {name}
      <span className="votes">{votes}</span>
    </li>
  );
}

Skills.propTypes = {
  name: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};

export default Skills;
