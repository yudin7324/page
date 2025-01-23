import { FC } from 'react';
import './hero.scss';

const Hero: FC = () => {
    return (
        <section className="hero">
            <div className='container'>
                <div className='hero__wrap'>
                    {/* <h2 className='hero__subtitle'>&lt;Hello World&gt;</h2> */}
                    <h2 className='hero__subtitle'>console.log(‘Hi there!’)</h2>
                    <h1 className='hero__title'>My name is Ilya, and I a Front-end Developer.</h1>
                </div>
            </div>
        </section>
    )
}

export default Hero
