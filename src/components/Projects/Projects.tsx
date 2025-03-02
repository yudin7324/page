import { FC } from "react"
import Title from "../Title/Title";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import "./projects.scss";

const Projects:FC = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__wrap">

          <Title text="Projects"/>

          <ul className="projects__cards">
            <li className="projects__card">
              <div className="projects__card-img">
                <img src="./images/quiz-app.jpg" alt="project" />
              </div>
              <div className="projects__card-title">Quiz app</div>
              
                <ul className="projects__card-links">
                  <li className="projects__card-item">
                    <a href="#" className="projects__card-link"><FaLinkedinIn/></a>
                  </li>
                  <li className="header__socials-item">
                    <a href="#" className="projects__card-link"><TbBrandGithubFilled/></a>
                  </li>
                </ul>
            </li>
            <div className="projects__card">2</div>
            <div className="projects__card">3</div>
            <div className="projects__card">4</div>
          </ul>

        </div>
      </div>
    </section>
  )
}

export default Projects;
