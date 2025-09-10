/*
  ContactForm.tsx
*/
//import { useEffect, useState } from "react";
//import type { CardProps } from "../../interfaces/cardProps";
function ContactForm() {
  //const [contactForm, setContactForm] = useState([]);
  
  //const [ projects, setProjects ] = useContext([]);
  
  return (
    <>
      <form action="/action_page.php" target="_blank">
        <div className="input-group">
          <span className="input-group-text"><i className="fa fa-user"></i></span>
          <input className="form-control" type="text" name="Name" placeholder="Name" required></input>
        </div>
        <div className="input-group">
          <span className="input-group-text"><i className="fa fa-envelope"></i></span>
          <input className="form-control " type="text" name="Email" placeholder="Email" required></input>
        </div>
        <div className="input-group">
          <span className="input-group-text"><i className="fa fa-edit"></i></span>
          <input className="form-control" type="text" name="Message" placeholder="Message" required></input>
        </div>
        <button type="submit" className="btn-dark mt-3"><i className="fa fa-paper-plane -right"></i>Send Message</button>
      </form>
    </>
  );
}

export default ContactForm;
                


          