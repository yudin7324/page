import { motion } from 'framer-motion';
import './hero.scss';
import ToggleBulb from '../ToggleBulb/ToggleBulb';


function Hero() {
  return (
    <motion.section 
      className='hero'
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="container">
        <div className="hero__wrap">
          <p className='hero__subtitle h2'>Hi, my name is </p>
          <h1 className="hero__title h1">
            Ilya Yudin
          </h1>
          <p className='hero__subtitle h3'>I'm a frontend developer</p>
          <p className='hero__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta molestias obcaecati placeat ratione, quam at deleniti sed magnam praesentium natus!</p>
          <div 
            className="hero__btns"
          >
            <a href="#" className="btn">View my work</a>
            <a href="#" className="btn">Resume</a>
          </div>

          <div className='color'></div>
          {/* <ToggleBulb /> */}
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
