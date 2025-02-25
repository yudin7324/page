import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";
import { motion } from 'framer-motion';
import './header.scss'

function Header() {
  return (
    <motion.section
      className="header"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className='container'>
        <div className='header__wrap'>
            <ul className='header__socials'>
                <li className='header__socials-item'>
                  <a href="#" className='header__socials-link'><FaLinkedinIn/></a>
                </li>
                <li className='header__socials-item'>
                  <a href="#" className='header__socials-link'><IoMdMail/></a>
                </li>
                <li className='header__socials-item'>
                  <a href="#" className='header__socials-link'><TbBrandGithubFilled/></a>
                </li>
            </ul>
            
            <nav className='header__menu'>
              <ul className='header__menu-list'>
                <li className='header__menu-item'>
                  <a href="#home" className='header__menu-link'>Home</a>
                </li>
                <li className='header__menu-item'>
                  <a href="#about" className='header__menu-link'>About Me</a>
                </li>
                <li className='header__menu-item'>
                  <a href="#skills" className='header__menu-link'>Skills</a>
                </li>
                <li className='header__menu-item'>
                  <a href="#projects" className='header__menu-link'>Projects</a>
                </li>
                <li className='header__menu-item'>
                  <a href="#contacts" className='header__menu-link'>Contacts</a>
                </li>
              </ul>
            </nav>
        </div>
      </div>
      </motion.section>
  )
}

export default Header;
