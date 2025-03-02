import Title from "../Title/Title"
import "./about.scss"

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__wrap">
          <Title text="About"/>

          <p className="about__text main-text">I am a frontend developer with over 4 years of experience in web development. I specialize in building interactive user interfaces using JavaScript. My goal is to create fast, user-friendly, and visually appealing web applications that help people solve their problems. I focus on clean code, intuitive UI/UX, and performance optimization.</p>

          <div className="about__improving">
            <p className="about__improving-text main-text">Currently, I am:</p>
            <ul className="about__list">
              <li className="about__list-item">- Improving my skills in React, TypeScript, and application architecture</li>
              <li className="about__list-item">- Exploring OOP principles and cybersecurity</li>
              <li className="about__list-item">- Working on my portfolio website and personal projects</li>
            </ul>
          </div>
          <p className="about__text h4">Besides coding, I enjoy cycling, hiking, and photography. <br/> If you have an exciting project, let’s collaborate!</p>
        </div>
      </div>
    </section>
  )
}

export default About
