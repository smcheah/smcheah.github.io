import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Portfolio from "../../images/portrait.jpg";

const HomePage = () => {
    return <div>

        <header>
            <Nav />

            <ul className="letter">
                <li>S</li>
                <li>I</li>
                <li>M</li>
                <li>O</li>
                <li>N</li>
                <li>E</li>
            </ul>
        </header>

        <main id="about-me">
            <h1>About Me</h1>
            <div className="main-content">
                <img src={ Portfolio } alt="Simone Cheah portrait" />
                <div className="main-text">
                    <p>
                        Computer Science graduate, majoring in Robotics and Cyber-physical computing with interests in IoT, Robotics and Web
                        Development looking for new opportunities for a career in tech.
                </p>
                    <p>
                        Experienced working in team projects involving agile methodologies to create programs on embedded systems such as the Raspberry Pi and Arduino.
                </p>
                    <p>
                        Recently completed a course in full stack web development as I wanted to learn a bit more about the trending technologies that are used in production today.
                </p>
                    <p>
                        I really enjoy using technology creatively, mainly to find new ways to solve problems but currently, I’d like to just be able to expand my skills and develop my learning a bit more. There are so many directions you could take in technology and I’m pretty curious to find out more about them.
                </p>
                </div>
            </div>
        </main>

        <section id="contact-me">
            <h1>Contact Me</h1>
            <form>
                <label htmlFor="Name">Name</label>
                <input type="text" id="Name" placeholder="Name" />
                <label htmlFor="Email">Email</label>
                <input type="text" id="Email" placeholder="Email" />
                <label htmlFor="Message">Message</label>
                <textarea id="Message" rows="6" placeholder="Please enter your query here"></textarea>

                <button type="submit">Submit</button>
            </form>

            <aside className="profile-links">
                <a href="https://github.com/smcheah" target="_blank" className="fab fa-github-square">
                    <p>github</p>
                </a>
                <a href="https://www.linkedin.com/in/simone-cheah-13607215b/" target="_blank" className="fab fa-linkedin">
                    <p>linkedin</p>
                </a>
                <a href="mailto:simone_cheah@hotmail.com" target="_blank" className="fas fa-envelope">
                    <p>email</p>
                </a>
                <a href="tel:+61405525068" target="_blank" className="fas fa-phone-square">
                    <p>mobile</p>
                </a>
                <a href="https://drive.google.com/file/d/1x5of5sr_nalQ4RfwGRQ5z2KINPeC0ngq/view?usp=sharing" target="_blank" className="fas fa-file">
                    <p>resume</p>
                </a>
            </aside>
        </section>

        <Footer />
    </div>;
};

export default HomePage;