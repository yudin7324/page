import { FC } from "react"
import "./header.scss"

const Header:FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
            <a className="header__link main-text" href="#home">Ilya Yudin</a>
            <nav className="header__menu">
              <ul className="header__menu-list">
                <li className="header__menu-item">
                  <a href="#about" className="header__menu-link">About</a>
                </li>
                <li className="header__menu-item">
                  <a href="#skills" className="header__menu-link">Skills</a>
                </li>
                <li className="header__menu-item">
                  <a href="#projects" className="header__menu-link">Projects</a>
                </li>
                <li className="header__menu-item">
                  <a href="#contacts" className="header__menu-link">Contacts</a>
                </li>
              </ul>
            </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;
