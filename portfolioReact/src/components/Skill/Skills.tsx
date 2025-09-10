/*
  Skills.tsx
*/
import { useEffect, useState } from "react";
import type { SkillProps } from "../../interfaces/skillProps";
function Skills() {
  const [skills, setSkills] = useState([]);
  
  //const [ projects, setProjects ] = useContext([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.skills);
        setSkills(data.skills);
        //setSkills(data.Skills);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);// on render

  return (
    <>
      {
        skills.map( (skill: SkillProps) => (
          <div>
            <h6>{skill.type}</h6>
            <div className="mb-3">
              {
                skill.list.map(item => (
                  <span className="tag">{item}</span>
                ))
              }
            </div>
         </div>
        ))
      }
    </>
  );
}

export default Skills;
                
