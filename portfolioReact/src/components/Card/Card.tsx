/* 
Card.tsx
 */
import { useContext} from "react";

import { ProjectContext } from "../../hooks/theme-context";
import type { CardProps } from "../../interfaces/cardProps";

function CardNode() {
   const { projects, setProjects } = useContext(ProjectContext);
  return (
    {
      projects.map( (project: CardProps) => (
        <div key={project.id} className="card col-xl-4 col-md-6 col-12 mb-4">
          <img src="assets/images/products/proyects/${project.path+project.img}" alt="Proyect"  className="images"></img>
          <div className="container bg-clear  pb-1">
            <p><b>{project.title}</b></p>
            <p>{project.description}</p>
          </div>
        </div>
      ))
    }
}

export default CardNode;

// props = {
  //   title: "Card Title",
  //   description: "This is a description of the card."
  //   path: 
  //   img:
// }