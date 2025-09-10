/* 
  Footer.tsx
 */
import { useEffect, useState } from "react";
import type { FooterProps } from "../../interfaces/footerProps";
//import "./Header.css";

const Footer = () => {

  const API_URL_IMG = "src/assets/images/";
  const API_URL_IMG_PO = 'posts/';
  const API_URL_IMG_PA = 'partners/';

  const [posts, setPosts] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPosts(data.posts);
        setPartners(data.partners);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);// on render

  return (
    <>
      <footer className="container containerMain">
        <div className="row">
        
          <div className="col-md-6 col-12">
            <h3>BLOG POSTS</h3>
            <ul className="postList " id="post-list">
              {
                posts.map((post:FooterProps) =>(
                  <li className="-16 nodeco">
                    <img src={API_URL_IMG+API_URL_IMG_PO+post.img} className=" -right" ></img>
                    <span className=""><a className="nodeco" href={"https://"+post.link} target="_blank">{post.name}</a></span><br></br>
                    <p>{post.description}.</p>
                  </li>
                ))
              }
            </ul>
          </div>    

          <div className="col-md-6 col-12">
            <h3>PARTNERS AND COLLABORATIONS</h3>
            <ul className="postList " id="partner-list">
              {
                partners.map((partner:FooterProps) =>(
                  <li className="-16 nodeco">
                    <img src={API_URL_IMG+API_URL_IMG_PA+partner.img} className=" -right" ></img>
                    <span className=""><a className="nodeco" href={"https://"+partner.link} target="_blank">{partner.name}</a></span><br></br>
                    <p>{partner.description}.</p>
                  </li>
                ))
              }
            </ul>  
          </div>

        </div>
      </footer>  
    </>
  );
}

export default Footer;