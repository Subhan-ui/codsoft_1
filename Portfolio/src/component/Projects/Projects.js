import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import EffectCoverflow from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Projects.css";

import { BsArrowRight } from "react-icons/bs";

const Projects = (props) => {
  return (
    <>
      {/* <Particle /> */}
      <div className="project">
        <h2 style={{ marginTop: "25px" }} className="purple">{props.heading}</h2>
        {props.description} <br />
        <Swiper
          centeredSlides
          slidesPerView="auto"
          effect="coverflow"
          loop
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={{ EffectCoverflow }}
        >
          <div className="swiper-wrapper">
            {props.images.map((image) => {
              return (
                <SwiperSlide
                  key={image.id}
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${image.img})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    border: "3px solid transparent",
                  }}
                />
              );
            })}
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
        <p className="slide">
          Slide to watch more Images
          <BsArrowRight />
        </p>
        <a href={props.href} target="_blank" rel="noreferrer" className="link1234">
          Visit
          <BsArrowRight />
        </a>
      </div>
    </>
  );
};

export default Projects;
