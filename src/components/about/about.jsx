import './about.css';
import ME from '../../assets/img/headshot_melissa.png';
import Experience from './experience';
import {RiNewspaperLine} from 'react-icons/ri'
 



const About = () => {
  return (
    <section id='about'>
      <h2 className="about__h2">ABOUT ME</h2>
          <div className="about_me">
                <img src={ME} className="about_image" alt="portriat headshot of Melissa" />
                <article>
                  <h3>A little bit about me...</h3>
                  I have a rich employment history in customer service, with a sprinkling of healthcare and sales in-between. I have always sought and found a way to influence each position I have held with empathy, passion, and a never-give-up mindset. 'Never give up' means to me that even when you are at your lowest, you pause and allow yourself a moment, then you get back up and persist. This frame of mind has helped me get through some of the lowest points in my life.
                  <br />
                  <br />
                  The one thing I have always wanted is to really make a difference and work in an industry where I can also have a creative outlet. After sacrificing time, money, and lots of hard work, I have found it. I look forward to entering the tech industry as a Full-Stack Web Developer. I am open to similar or adjacent positions.
                  <br />
                  <a href="https://docs.google.com/document/d/1-shVOjoOlQq7u8NIBQBxMce9EQgkb8HSRTHdh_h4kd4/edit?usp=sharing" className=" btn btn-primary about_btn" target="_blank" rel="noreferrer">View My Resume <RiNewspaperLine className="header_icon"/></a>
                  
               </article> 
               <Experience />
          </div>
          
          <div>     
</div>  
      
    </section>
  )
}

export default About