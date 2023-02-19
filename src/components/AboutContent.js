import "./AboutContentStyles.css";
import React from 'react';
import { Link } from "react-router-dom";
import About from "../assets/about.jpg";
import About2 from "../assets/about2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Hey there!My name is Thousif Thaj, and I'm a MERN Full stack
                developer with a focus on front-end development using React.
                Welcome to my portfolio Website, which I've built using React. 
            </p>
            <p>
                My technical skills include expertise in React, HTML, CSS, 
                JavaScript and other front-end technologies.I'm always learning and 
                staying up to date with the latest trends and best practices in the 
                industry to ensure that the websites I create are of highest quality.
            </p>
            <p>
                My mission is to create beautiful, functional, responsive, secure and 
                intuitive websites that provide seamless user experience.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={About2} className="img" alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={About} className="img" alt="true" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutContent;