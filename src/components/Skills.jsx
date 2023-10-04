import React from "react";

const Skills = (props) => {
    const { skills } = props;

  return (
    <div className="skills">
      <h2>My Skills</h2>
      <ul>
        {props.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
