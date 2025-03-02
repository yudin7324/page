import { FC } from "react";
import "./hero.scss";

const Hero:FC = () => {
  return (
    <div className="hero" id="home">
      <div className="container">
        <div className="hero__wrap">
          <h1 className="hero__title h1">
            I am Ilya – a frontend developer passionate about creating interactive and user-friendly web interfaces.
          </h1>
        </div>
      </div>
      <div className="hero__decoration">
        <div className="container">
          <div className="hero__decoration-wrap">
            <div>
            <div className="hero__btns">
              <a href="#projects" className="btn">View my work</a>
              <a href="#" className="btn">Resume</a>
            </div>
            </div>
            <p className="hero__text main-text">Welcome to my portfolio. I enjoy working on various projects and am always open to new opportunities. Feel free to explore my work and reach out if you’d like to connect.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
