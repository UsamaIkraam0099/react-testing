import { useState, useEffect, Fragment } from "react";
import { SkillsProps } from "./skills.types";

export const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1001);
  }, []);

  return (
    <Fragment>
      <ul role="list">
        {skills.map((skill) => {
          return (
            <li role="list-item" key={skill}>
              {skill}
            </li>
          );
        })}
      </ul>

      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </Fragment>
  );
};
