import "./WorkCardStyles.css";
import React from 'react';
import Calculator from "../assets/calculator.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={Calculator} alt="Calculator"/>
                <h2 className="project-title">Simple Calculator Design</h2>
                <div className="pro-details">
                  <p>A simple calculator made by using react with minimalistic designs.</p>
                  <div className="pro-btns">
                  <NavLink to="url.com" className="btn">
                    View    
                  </NavLink>
                  <NavLink to="url.com" className="btn">
                      Source
                  </NavLink>
                  </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default WorkCard;