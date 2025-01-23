import { FC } from 'react';
import './about.scss'
import photo from '../../images/my-photo.jpg';

const About: FC = () => {
  return (
    <section id="about" className="about">
        <div className="container">
            <div className='about__wrap'>

                <div className='about__photo'>
                    <img src={photo} alt="photo" />
                </div>

                <div className='about__name'>Ilya Yudin</div>
                <p className='about__text'>I’m a frontend developer, using JavaScript and React to create interactive and functional user interfaces. I focus on building user-friendly, high-quality solutions that enhance site interaction and improve performance.</p>
            </div>
        </div>
    </section>
  )
}

export default About
