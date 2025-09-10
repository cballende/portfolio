import { useState } from 'react';
//import './App.css';
import Nav             from "./components/Nav/Nav";
import Header          from "./components/Header/Header";
import CardPastList    from "./components/CardList/CardList";
import CardActualyList from "./components/CardActualyList/CardActualyList";
import CardNextList    from "./components/CardNextList/CardNextList";

import About           from "./components/About/About";
import Skills          from "./components/Skill/Skills";
import Contact         from "./components/Contact/Contact";
import ContactForm     from "./components/ContactForm/ContactForm";
import Footer          from "./components/Footer/Footer";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <div className="overlay opacity" title="close side menu" id="main-overlay"></div>
      <div className="main" id="main">
        <Header/>
        <div className="row p-3" id="past-list">
          <CardPastList/>
        </div>
        <div className="" >
          <hr></hr>
          <h4>I'm Working On</h4>
          <div className="row p-3" id="actualy-list">
            <CardActualyList/>
          </div>
        </div>
        <div className="" id="">
          <hr></hr>
          <h4>On Planning</h4>
          <div className="row p-3" id="past-list">
            <CardNextList/>
          </div>
        </div>

        <div className="containerMain">
          <h4><b>About Me</b></h4>    
          <div className="container" id="about"> <About/> </div>
          <hr></hr> 
        
          <h4>Technical Skills</h4>
          <div className="container" id="skill-list"><Skills/> </div>
          <p>
            <button className="hide">
              <i className="fa fa-download "></i>Download Resume
            </button>
          </p>
          <hr></hr>
          
        </div>
        <div className="containerMain">
          <h4 id="contact"><b>Contact Me</b></h4>
          <Contact/>
          <hr className=""></hr>
          <ContactForm/>
        </div>

        <Footer/>
        <div className="bg-dark text-center p-5"> <a href="" title="" target="_blank" className=""></a></div>
      </div>
      
    </>
  )
}

export default App
