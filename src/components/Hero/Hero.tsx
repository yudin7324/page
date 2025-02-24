import { motion } from 'framer-motion';
import './hero.scss';

function Hero() {
  return (
    <motion.section 
      className='hero'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="container">
        <div className="hero__wrap">
          <h1 className="hero__title">
            Ilya Yudin
          </h1>
          <p className='hero__subtitle'>Frontend developer</p>
          {/* <p 
            className='hero__text'
          >
          <span>I’m a front-end developer</span>. I specialize in <span>JavaScript</span>, and building <span>user interfaces</span> that help businesses achieve their goals. I believe that every application should be <span>simple to use, efficient</span>, and <span>highly scalable.</span> Check out my projects below, and if you like what you see, feel free to get in touch!
          </p> */}
          <div 
            className="hero__btns"
          >
            <a href="#" className="btn">view my work</a>
            <a href="#" className="btn btn--secondary">resume</a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
