//Imports
import './home.css';
import CallToAction from './calltoaction/calltoaction'
import HeaderSocials from './headersocials';
import CyberSpace from '../../assets/img/cyberspace.png';
 
//Home landing page, name introduction and call to action
const Home = () => {
    return (
         <header>
                <div className="name_container">
                    <h1>Hello, I am <span className="name_highlight">Melissa</span>,</h1>
                    <h3>Full-Stack Webdeveloper</h3>
                    <p>I create beautiful things. I am a passionate creator and I believe that life is a journey of continued learning.</p>
                    <CallToAction />
                </div>
               
                <div className="image_container">
                    <img src={CyberSpace} alt="woman staring into a cyberspace setting" />
                    <p className="quote">
                        "Failure is apart of the process. You just learn to pick yourself back up." - Michelle Obama
                    </p>
                </div>
                
                <HeaderSocials />
                <a href="#contact" className="scroll__down">Scroll Down</a>
         </header>
    )
}

export default Home;