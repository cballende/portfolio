/*
  About.tsx
*/
import { useEffect, useState } from "react";
//import type { CardProps } from "../../interfaces/cardProps";
function About() {
  const [about, setAbout] = useState([]);
  
  //const [ projects, setProjects ] = useContext([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.about);
        setAbout(data.about);
        //console.log(setAbout(data.about));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);// on render

  return (
    <>
        <p>{about.text}</p><hr></hr>
    </>
  );
}

export default About;
                
