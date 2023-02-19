import "./HeroImgStyles.css";
import IntroImg from "../assets/backg.jpg"
import React from 'react';
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img"
            src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Welcome To My Portfolio Website.</p>
            <h1>Let's create something amazing.</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  );
};

export default HeroImg;