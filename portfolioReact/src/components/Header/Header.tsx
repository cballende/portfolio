/* 
  Header.tsx
 */
import { useEffect, useState } from "react";
import type { HeaderProps } from "../../interfaces/headerProps";
//import "./Header.css";

const Header = () => {
  const [subjets, setSubjets] = useState([]);
  const API_URL_IMG = 'avatar/';
  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.subjets);
        setSubjets(data.subjets);
        console.log(subjets);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);// on render

  return (
    <>
      <header id="portfolio">
        <div className="d-flex justify-content-between d-lg-none">
          <a href="#" className="btn m-4 " id="open-nav"> <span className="display-5 "><i className="fa fa-bars"></i></span> </a>
          <a href="#" className=""><img src="src/assets/images/avatars/box.jpeg" className="profile rounded-circle m-4 "></img></a>
        </div>
        <div className="">
          <h1><b>My Portfolio</b></h1>
          <div className="" id="subjet-list">
            <span className="-right">Filter:</span> 
            <button className=" ">ALL</button>
            {
              subjets.map( (subjet: HeaderProps) => (
                <button className=" "><i className={subjet.icon+" me-1"}></i>{subjet.title}</button>
              ))          
            }
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;