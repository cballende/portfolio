/*
  Contact.tsx
*/
import { useEffect, useState } from "react";
//import type { CardProps } from "../../interfaces/cardProps";
function Contact() {
  const [contact, setContact] = useState([]);
  
  //const [ projects, setProjects ] = useContext([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.contact);
        setContact(data.contact);
        //console.log(setContact(data.contact));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);// on render

  return (
    <>
      <div className="row text-center" >
        <div className="col-md-4 col-12 ">
          <p><i className="fa fa-envelope" ></i></p> 
          <p id="contactEmail">{contact.hasOwnProperty("email")? contact.email:"Consultar"}</p>
        </div>
        <div className="col-md-4 col-12">
          <p><i className="fa fa-map-marker"></i></p>
          <p id="contactLoc">{contact.hasOwnProperty("locate")? contact.locate:"Consultar"}</p>
        </div>
        <div className="col-md-4 col-12">
          <p><i className="fa fa-phone  -light-grey"></i></p> <p id="contactPhone">{contact.hasOwnProperty("phone")? contact.phone:"Consultar"}</p>        
        </div>
      </div>
    </>
  );
}

export default Contact;
                


          