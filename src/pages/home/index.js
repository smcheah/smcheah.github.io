import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Portfolio from "../../images/portrait.jpg";
import ContactForm from "../../components/ContactForm";

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
                        Full stack web developer with a Computer Science background educated at Deakin University and a recently earned certificate in full stack web development at Monash University.
                </p>
                    <p>
                        Skills in JavaScript, Python, HTML5, CSS and responsive web design, and proficiency in IoT, robotics and embedded systems including the Raspberry Pi, Arduino and ROS.

                </p>
                    <p>
                        My involvement in the World Solar car challenge brought in a fresh perspective in low energy technology with the use of electronic paper and the Raspberry Pi 4 to build a modular car dash.

                </p>
                    <p>
                        I am passionate about new ideas, problem solving and project development where teamwork, creativity and meticulous work ethic are my strengths. Positioned to leverage my skills in emerging technologies as part of a dedicated team to enhance the user experience on websites and other software platforms.
                </p>
                </div>
            </div>
        </main>

        <section id="contact-me">
            <h1>Contact Me</h1>
            <ContactForm />

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