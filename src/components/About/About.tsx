import "./about.scss"

function About() {
  return (
    <section id="about" className="about">
        <div className="container">
            <div className="about__wrap">
                <div className="about__title title">About me</div>

                <p className="about__text">Hi! My name is Ilya, and I’m a frontend developer with over 4 years of experience in web development. I specialize in building interactive user interfaces using React, TypeScript, and JavaScript.</p>
                <p className="about__text">My goal is to create fast, user-friendly, and visually appealing web applications that help people solve their problems. I focus on clean code, intuitive UI/UX, and performance optimization.</p>
                <p className="about__text">Currently, I am:</p>
                <ul className="about__list">
                  <li className="about__list-item">Improving my skills in React, TypeScript, and application architecture</li>
                  <li className="about__list-item">Exploring OOP principles and cybersecurity</li>
                  <li className="about__list-item">Working on my portfolio website and personal projects</li>
                </ul>
                <p className="about__text">Besides coding, I enjoy cycling, hiking, and photography.</p>
                <p className="about__text">If you have an exciting project, let’s collaborate!</p>
            </div>
        </div>
    </section>
  )
}

export default About
