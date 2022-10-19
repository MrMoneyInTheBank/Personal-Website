
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-s.png';

import './index.scss'
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['n', 's', 'h', ',']
    const jobArray = ['A', 'n', ' ', 'I', 'n', 't', 'e', 'r', 'e', 's', 't', 'i', 'n', 'g', ' ', 'p', 'e', 'r', 's', 'o', 'n', '.']

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span> 
                <br /> 
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span> 
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={19} />
                </h1>
                <h2>Quantitative Researcher / Mathematician / Software Engineer</h2> 
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home