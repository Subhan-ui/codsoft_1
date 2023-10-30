import React, { useEffect } from "react";
import classes from "./About.module.css";

import ImageExample from "./ImageExample";
import Particle from "../UI/Particle";

import Icon from "../../Assets/Icon.svg";
import HTML from "../../Assets/HTML.svg";
import CSS from "../../Assets/css3.svg";
import Javascript from "../../Assets/Javascript.svg";
import react from "../../Assets/React.svg";
import Git from '../../Assets/Git-Icon.svg';

const About = () => {
  useEffect(()=>{
    document.title = "My About Page";
  })
  const skillset = [
    { id: 1, icon: HTML , alt:'this is html icon'},
    { id: 2, icon: CSS , alt:'this is css icon'},
    { id: 3, icon: Javascript , alt:'this is javascript icon'},
    { id: 4, icon: react , alt:'this is react icon'},
    { id: 5, icon: Git , alt:'this is Git icon'},
  ];
  
  return (
    <>
      <Particle />
      <div className={classes.AboutSection}>
        <div className={classes.about}>
          <div>
            <center>
              <h1><span className="purple">Know</span> Who I am</h1>
            </center>
            <p>
              Hi Everyone, I am <span className="purple">Subhan Shoukat</span> from Faisalabad, Pakistan. <br />{" "}
              I am a <span className="purple">7th Semester</span> Student pursuing <span className="purple">B.S in Software Engineer</span>{" "}
              <br /> from UAF. <br />
              Additionaly I am enthusiastic about <span className="purple">React.</span>
              <br />
              <br /> <b>Some of My <span className="purple">Hobbies</span> are </b> <br />{" "}
              <img className={classes.small} src={Icon} alt="" />
              Watching Movies <br />
              <img className={classes.small} src={Icon} alt="" /> R & D New Technologies
            </p>
          </div>
          <ImageExample />
        </div>
        <div className={classes.skills}>
          <center>
            <h1>Professional Skillset</h1>
          </center>
          <div className={classes.icons}>
          {skillset.map((skill) => {
            return (
              <img
                key={skill.id}
                src={skill.icon}
                alt={skill.alt}
                className={classes.iconsOfImg}
              ></img>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
