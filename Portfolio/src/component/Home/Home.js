import React, { useEffect } from "react";
import classes from "./Home.module.css";
import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import Particle from "../UI/Particle";
import Type from "./Type";
import ContactButton from "../UI/ContactButton";
import Download from '../../Assets/SubhanShoukat.pdf'

import Animation from "../../Assets/Animations.gif";
import DownloadButton from "../UI/DownloadButton";

const arrays = [
  { id: 1, name: <FaGithub />, href: "https://github.com/Subhan-ui/" },
  {
    id: 2,
    name: <FaFacebook />,
    href: "https://www.facebook.com/subhan.shoukat.7/",
  },
  {
    id: 3,
    name: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/subhan-shoukat-725aa0218/",
  },
  { id: 4, name: <BiLogoGmail />, href: "mailto:subhanshoukat1908@gmail.com" },
];

const Home = () => {
  useEffect(() => {
    document.title = "Subhan's Portfolio";
  });
  return (
    <>
      <Particle />
      <div className={classes.itsWholeComponent}>
        <div className={classes.wholeHomeComponent}>
          <div className={classes.introPart}>
            <h1 className={classes.heading}>
              <span className="purple">Hi,</span> There!
              <span className={classes.wave} role="img" aria-labelledby="wave">
                👋🏻
              </span>
              <br />
              I'm <span className="purple">
                Subhan Shoukat <br />
                </span>
              <br />
                
              <Type />
            </h1>
          </div>
          <div>
            <img src={Animation} className={classes.Animation} alt="" />
          </div>
        </div>
        <div className={classes.findMeOn}>
          <h1><span className="purple">FIND ME</span> ON</h1>
          <p>
            Feel free to <b className="purple"> Contact </b> with me{" "}
          </p>
          <div className={classes.contacts}>
            {arrays.map((arr) => {
              return (
                <ContactButton href={arr.href} key={arr.id}>
                  {arr.name}
                </ContactButton>
              );
            })}
          </div>
          <div className={classes.Downloading} style={{marginTop:'12px', marginBottom:'35px'}}>
            <h1><b className="purple">Or</b></h1>
            <p><b className="purple">Download</b> My CV</p>
          <DownloadButton href={Download} name='Subhan.pdf'/>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
