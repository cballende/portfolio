/* 
  Header.tsx
 */
import { useEffect, useState } from "react";
import type { NavProps } from "../../interfaces/navProps";

const Nav = () => {
  const [socials, setSocials] = useState([]);
  const API_URL_IMG = 'src/assets/images/avatars/';
  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.socials);
        setSocials(data.socials);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);// on render

  return (
    <>
      <nav className="sidebar collapse" id="menuSidebar"><br></br>
        <div className="container mb-3 ">
          <div className="d-flex justify-content-between mb-4">
            <img src={API_URL_IMG+"box.jpeg"} className="avatar rounded"></img><br></br><br></br>
            <a className="d-lg-none hover pointer" id="close-nav" title="close menu"><i className="fa fa-remove"></i></a>
          </div>
          <h4><b>PORTFOLIO</b></h4>
        </div>
        <div className="list-group">
          <a href="#portfolio" className="btn list-group-item-action"><i className="fa fa-th-large fa-fw me-3"></i>PORTFOLIO</a>
          <a href="#about" className="btn list-group-item-action"><i className="fa fa-user fa-fw me-3"></i>ABOUT</a>
          <a href="#contact" className="btn list-group-item-action "><i className="fa fa-envelope fa-fw me-3"></i>CONTACT</a>
        </div>
        <div className="container ms-1 mt-3" id="social-list">
          {
            socials.map((social:NavProps)=>(
              <a className="nodeco" href={"https://"+social.link} target="_blank"><i className={social.icon+" hover"} ></i></a>
            ))
          }
        </div>
      </nav>
    </>
  );
}

export default Nav;