import React, { useEffect } from "react";

import Particle from "../UI/Particle";
import Projects from "./Projects";

import bg1 from "../../Assets/POS/screenshot1.png";
import bg2 from "../../Assets/POS/screenshot2.png";
import bg3 from "../../Assets/POS/screenshot3.png";
import bg4 from "../../Assets/POS/screenshot4.png";
import bg5 from "../../Assets/POS/screenshot5.png";
import bg6 from "../../Assets/POS/screenshot6.png";
import bg7 from "../../Assets/POS/screenshot7.png";
import bg8 from "../../Assets/POS/screenshot8.png";
import bg9 from "../../Assets/POS/screenshot9.png";

import mg1 from "../../Assets/Movies/screenshot1.png";
import mg2 from "../../Assets/Movies/screenshot2.png";
import mg3 from "../../Assets/Movies/screenshot3.png";
import mg4 from "../../Assets/Movies/screenshot4.png";
import mg5 from "../../Assets/Movies/screenshot5.png";
import mg6 from "../../Assets/Movies/screenshot6.png";
import mg7 from "../../Assets/Movies/screenshot7.png";
import mg8 from "../../Assets/Movies/screenshot8.png";
import mg9 from "../../Assets/Movies/screenshot9.png";
import mg10 from "../../Assets/Movies/screenshot10.png";
import mg11 from "../../Assets/Movies/screenshot11.png";
import mg12 from "../../Assets/Movies/screenshot12.png";

import bb1 from "../../Assets/BurgerBuilder/screenshot1.png";
import bb2 from "../../Assets/BurgerBuilder/screenshot2.png";
import bb3 from "../../Assets/BurgerBuilder/screenshot3.png";
import bb4 from "../../Assets/BurgerBuilder/screenshot4.png";
import bb5 from "../../Assets/BurgerBuilder/screenshot5.png";
import bb6 from "../../Assets/BurgerBuilder/screenshot6.png";
import bb7 from "../../Assets/BurgerBuilder/screenshot7.png";
import bb8 from "../../Assets/BurgerBuilder/screenshot8.png";

import cc1 from "../../Assets/Calculator/screenshot1.png";
import cc2 from "../../Assets/Calculator/screenshot2.png";
import cc3 from "../../Assets/Calculator/screenshot3.png";
import cc4 from "../../Assets/Calculator/screenshot4.png";
import cc5 from "../../Assets/Calculator/screenshot5.png";

import ll1 from "../../Assets/Layout/screenshot1.png";
import ll2 from "../../Assets/Layout/screenshot2.png";
import ll3 from "../../Assets/Layout/screenshot3.png";
import ll4 from "../../Assets/Layout/screenshot4.png";
import ll5 from "../../Assets/Layout/screenshot5.png";
import ll6 from "../../Assets/Layout/screenshot6.png";

import nn1 from "../../Assets/NewsAPI/screenshot1.png";
import nn2 from "../../Assets/NewsAPI/screenshot2.png";
import nn3 from "../../Assets/NewsAPI/screenshot3.png";
import nn4 from "../../Assets/NewsAPI/screenshot4.png";
import nn5 from "../../Assets/NewsAPI/screenshot5.png";
import nn6 from "../../Assets/NewsAPI/screenshot6.png";

import tt1 from "../../Assets/TextUtils/screenshot1.png";
import tt2 from "../../Assets/TextUtils/screenshot2.png";
import tt3 from "../../Assets/TextUtils/screenshot3.png";
import tt4 from "../../Assets/TextUtils/screenshot4.png";
import tt5 from "../../Assets/TextUtils/screenshot5.png";
import tt6 from "../../Assets/TextUtils/screenshot6.png";
import tt7 from "../../Assets/TextUtils/screenshot7.png";
import tt8 from "../../Assets/TextUtils/screenshot8.png";

const POS = [
  { id: 1, img: bg1 },
  { id: 2, img: bg2 },
  { id: 3, img: bg3 },
  { id: 4, img: bg4 },
  { id: 5, img: bg5 },
  { id: 6, img: bg6 },
  { id: 7, img: bg7 },
  { id: 8, img: bg8 },
  { id: 9, img: bg9 },
];

const Movies = [
  { id: 1, img: mg1 },
  { id: 2, img: mg2 },
  { id: 3, img: mg3 },
  { id: 4, img: mg4 },
  { id: 5, img: mg5 },
  { id: 6, img: mg6 },
  { id: 7, img: mg7 },
  { id: 8, img: mg8 },
  { id: 9, img: mg9 },
  { id: 10, img: mg10 },
  { id: 11, img: mg11 },
  { id: 12, img: mg12 },
];

const Burgers = [
  { id: 1, img: bb1 },
  { id: 2, img: bb2 },
  { id: 3, img: bb3 },
  { id: 4, img: bb4 },
  { id: 5, img: bb5 },
  { id: 6, img: bb6 },
  { id: 7, img: bb7 },
  { id: 8, img: bb8 },
];
const Calculater = [
  { id: 1, img: cc1 },
  { id: 2, img: cc2 },
  { id: 3, img: cc3 },
  { id: 4, img: cc4 },
  { id: 5, img: cc5 },
];

const Layout = [
  { id: 1, img: ll1 },
  { id: 2, img: ll2 },
  { id: 3, img: ll3 },
  { id: 4, img: ll4 },
  { id: 5, img: ll5 },
  { id: 6, img: ll6 },
];

const News = [
  { id: 1, img: nn1 },
  { id: 2, img: nn2 },
  { id: 3, img: nn3 },
  { id: 4, img: nn4 },
  { id: 5, img: nn5 },
  { id: 6, img: nn6 },
];

const TextUtils = [
  { id: 1, img: tt1 },
  { id: 2, img: tt2 },
  { id: 3, img: tt3 },
  { id: 4, img: tt4 },
  { id: 5, img: tt5 },
  { id: 6, img: tt6 },
  { id: 7, img: tt7 },
  { id: 8, img: tt8 },
];

const ProjectMain = () => {
  useEffect(() => {
    document.title = "My Previous Projects";
  });
  return (
    <div className="projectMain">
      <Particle />
      <Projects
        images={POS}
        heading="POS Website"
        description="This is My Food Ordering website in which i also have a functionality of creating new accounts, then loggin in using those account details."
        href='https://pos-web-1908.web.app/'
      />
      <Projects
        images={Movies}
        heading="Movies Website"
        description="This is My Movies Website. this website shows us the latest movies that are going to release, that are top trending movies and the latest movies. Moreover this website also shows the furthermore details of these movies as shown in the following images. Furtermore this website also shows us the detail of TV Series. I use React-redux, custom-hooks, react-router-dom and some other libraries in this website"
        href="https://movies-1908.web.app/"
      />
      <Projects
        images={Burgers}
        heading="Burger Builder Website"
        description="This is a kind of a website in which we can create our own burger by choosing ingredients made with CSS. and after that simply predict price based on ingredients we use in our burger"
        href="https://burger-1908.web.app/"
      />
      <Projects
        images={Calculater}
        heading="Calculator Website"
        description="This is a website for calculating stuff. You can see almost all the scientific methods that I included in this website. "
        href="https://calculator-1908.web.app/"
      />
      <Projects
        images={Layout}
        heading="Simple Layout Website"
        description="This is a simple website in which I made a basic layout for large scale website. I didn't add any data in it because it is a simple layout website. "
        href="https://react-http-72f72.web.app/"
      />
      <Projects
        images={News}
        heading="Simple News Website"
        description="This is simple news website in which we can watch latest news through a API that I integrate in it."
        href="#"
      />
      <Projects
        images={TextUtils}
        heading="Text Utility Website"
        description="This is a simple website where we can transform our texts into different formats using buttons given below. and also preview the numbers of characters and words that we write in our given box."
        href="https://textutilities-d32ce.web.app/"
      />
    </div>
  );
};

export default ProjectMain;
