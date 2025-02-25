import './skills.scss';

function Skills() {
  return (
    <div id="skills" className="skills">
      <div className="container">
        <div className="skills__wrap">
          <div className="skills__title">Skills</div>
          <p className="skills__text">🖥️ Frontend Development</p>
          <ul className="skills__list">
            <li className="skills__item">Languages: JavaScript (ES6+), TypeScript</li>
            <li className="skills__item">Frameworks & Libraries: React, Redux, Next.js, Vue</li>
            <li className="skills__item">Styling: CSS, SCSS, Tailwind, Material-UI, Chakra UI</li>
            <li className="skills__item">State Management: Redux, React Context</li>
            <li className="skills__item">Build Tools: Vite, Webpack</li>
            <li className="skills__item">Testing: Jest, React Testing Library</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
