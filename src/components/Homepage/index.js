import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi <br /> I'm
                <img src={LogoTitle} alt="developer" />
                nsh,
                <br />
                An interesting person.
                </h1>
                <h2>Quantitative Researcher / Mathematician / Software Engineer</h2> 
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home