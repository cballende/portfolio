/* 
  CardList.tsx
 */
import { useEffect, useState } from "react";
import type { CardProps } from "../../interfaces/cardProps";
function CardPastList() {
  const API_URL_IMG = 'products/proyects/';
  const API_URL_IMG_P = 'past/';
  const [projects, setProjects] = useState([]);
  
  //const [ projects, setProjects ] = useContext([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.projects);
        setProjects(data.projects.past          
        );
        console.log(projects);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);// on render

  return (
    <>
      <div className="row p-3" id="past-list">
        {
          projects.map( (project: CardProps) => (
            <div key={project.id} className="card col-xl-4 col-md-6 col-12 mb-4">
              <img src={"src/assets/images/"+API_URL_IMG+API_URL_IMG_P+project.img} alt="Proyect"  className="images"></img>
              <div className="container bg-clear  pb-1">
                <p><b>{project.title}</b></p>
                <p>{project.description}</p>
              </div>
            </div>
          ))          
        }
      </div>
    </>
  );
}

export default CardPastList;