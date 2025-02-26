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
          <p className='hero__subtitle'>Hi, my name is </p>
          <h1 className="hero__title">
            Ilya Yudin
          </h1>
          <p className='hero__subtitle'>I'm a frontend developer</p>
          <div 
            className="hero__btns"
          >
            <a href="#" className="btn">view my work</a>
            <a href="#" className="btn btn--secondary">resume</a>
          </div>

          <div className='color'></div>
          <ToggleBulb />
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
