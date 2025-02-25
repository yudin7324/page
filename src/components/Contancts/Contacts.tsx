import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";
import './contacts.scss';

function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <div className="contacts__wrap">
        <div className="contacts__title">Contacts</div>

        <p className="contacts__text">Got a question, project idea, or just want to chat about code? Feel free to drop me an email! Whether it’s collaboration, feedback, or just sharing ideas, I’d love to hear from you. Let’s connect!</p>

        <ul className="contacts__list">
          <li className='contacts__item'>
            <a href="/" className='contacts__link'><FaLinkedinIn/></a>
          </li>
          <li className='contacts__item'>
            <a href="/" className='contacts__link'><IoMdMail/></a>
          </li>
          <li className='contacts__item'>
            <a href="/" className='contacts__link'><TbBrandGithubFilled/></a>
          </li>
        </ul>
        </div>
      </div>
    </section>
  )
}

export default Contacts
