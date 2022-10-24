import {
  faPython,
  faGolang,
  faReact,
  faRust,
  faJsSquare,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
// import CPP from '../About/svg-icons/cplusplus.svg'
// import TF from '../About/svg-icons/tensorflow.svg'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a mathematician and data scientist specializing in statistical
            analysis and machine learning. I have experience with statistical
            modelling, fullstack development, backend development, and deep
            learning. I'm currently looking to expand my skills as a
            quantitative researcher and developer, and a machine learning
            engineer.
          </p>
          <p>
            Within statistics, I specialize in modelling stochastic processes
            and its applications. Within ML, I specialize in sentiment analysis,
            deep learning models, and CT classification.
          </p>
          <p>
            I am insatiably curious and always learning. Outside tech, I am an
            avid chess player and speedcuber. After mathematics, my favorite
            thing in the whole wide world is ice cream.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#FFD343" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faRust} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faGolang} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
