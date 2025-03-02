import { FC } from "react"
import Title from "../Title/Title"
import "./skills.scss"

const Skills: FC = () => {
  return (
    <div id="skills" className="skills">
      <div className="container">
        <div className="skills__wrap">
          <Title text="Skills"/>
          <ul className="skills__list main-text">
            <li className="skills__item"><span className="mark">Languages:</span> JavaScript (ES6+), TypeScript</li>
            <li className="skills__item"><span className="mark">Frameworks & Libraries:</span> React, Redux, Next.js, Vue</li>
            <li className="skills__item"><span className="mark">Styling:</span> CSS, SCSS, Tailwind, Material-UI, Chakra UI, Bootstrap</li>
            <li className="skills__item"><span className="mark">State Management:</span> Redux, React Context</li>
            <li className="skills__item"><span className="mark">Build Tools:</span> Vite, Webpack, Gulp</li>
            <li className="skills__item"><span className="mark">Testing:</span> Jest, React Testing Library</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills
