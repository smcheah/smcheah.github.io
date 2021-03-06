import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Detail from "../../components/Detail";
import burgerPic from '../../images/burger-restaurant.png';
import mealPic from '../../images/meal-budgeter.gif';
import teamsummaryPic from '../../images/team-summary.gif';
import bandearPic from '../../images/BandEaR.png';
import codequizPic from '../../images/code-quiz.gif';
import weatherdashPic from '../../images/weather-dashboard.png';
import birdfactsPic from '../../images/bird-facts.gif';

const GalleryPage = () => {
    let { path, url } = useRouteMatch();
    const [modal, setModal] = useState(false);

    const showModal = (e) => {
        e.preventDefault();
        setModal(true);
    };
    const closeModal = (e) => {
        e.preventDefault();
        setModal(false);
    };

    return <>
        <nav id="page-top">
            <div className="nav-items">
                <Link to="/" className="fas fa-igloo home"></Link>
                {/* <button className="fas fa-bars ham"></button> */ }
            </div>
        </nav>
        <Router>


            <Switch>
                <Route exact path={ `${path}/:detail` }>
                    <Detail
                        showModal={ showModal }
                        closeModal={ closeModal } />
                </Route>
            </Switch>

            <main className="gallery-list">
                <div className="gallery-item">
                    <img src={ burgerPic } alt="burger restaurant interface" />

                    <div className="content">
                        <div className="heading">
                            <h2>Burger Restaurant</h2>
                            <a href="https://github.com/smcheah/burger-restaurant" className="fab fa-github-square" target="_blank"></a>
                        </div>

                        <p>Last Updated: 08/11/2020</p>
                        <Link to={ `${url}/burger-restaurant` }>More Information</Link>
                        <a href="https://thawing-cliffs-82345.herokuapp.com/" target="_blank">Site link</a>
                    </div>
                </div>

                <div className="gallery-item">
                    <img src="https://raw.githubusercontent.com/smcheah/employee-directory/main/public/demo.PNG" alt="employee directory interface" />

                    <div className="content">
                        <div className="heading">
                            <h2>Employee Directory</h2>
                            <a href="https://github.com/smcheah/employee-directory" className="fab fa-github-square" target="_blank"></a>
                        </div>

                        <p>Last Updated: 4/1/2021</p>
                        <Link to={ `${url}/employee-directory` }>More Information</Link>
                        <a href="https://cocky-ride-50e407.netlify.app" target="_blank">Site link</a>
                    </div>
                </div>

                <div className="gallery-item">
                    <img src={ weatherdashPic } alt="Weather dashboard" />

                    <div className="content">
                        <div className="heading">
                            <h2>Weather Dashboard</h2>
                            <a href="https://github.com/smcheah/Weather-Dashboard" className="fab fa-github-square" target="_blank"></a>
                        </div>

                        <p>Last Updated: 13/09/2020</p>
                        <Link to={ `${url}/weather-dashboard` }>More Information</Link>
                        <a href="https://smcheah.github.io/Weather-Dashboard/" target="_blank">Site link</a>
                    </div>
                </div>

                <div className="gallery-item">
                    <img src={ mealPic } alt="meal budgeter interface" />

                    <div className="content">
                        <div className="heading">
                            <h2>Meal Budgeter</h2>
                            <a href="https://github.com/smcheah/Meal-Budgeter-Project-2" className="fab fa-github-square" target="_blank"></a>
                        </div>

                        <p>Last Updated: 22/11/2020</p>
                        <Link to={ `${url}/meal-budgeter` }>More Information</Link>
                        <a href="https://vast-crag-85624.herokuapp.com/" target="_blank">Site link</a>
                    </div>
                </div>

                <div className="gallery-item">
                    <img src={ teamsummaryPic } alt="team summary interface" />

                    <div className="content">
                        <div className="heading">
                            <h2>Team Summary</h2>
                            <a href="https://github.com/smcheah/team-summary-template-engine" className="fab fa-github-square" target="_blank"></a>
                        </div>

                        <p>Last Updated: 11/10/2020</p>
                        <Link to={ `${url}/team-summary` }>More Information</Link>
                        <p>This application works in the terminal</p>
                    </div>
                </div>

                <div className="gallery-item">
                    <img src={ bandearPic } alt="band ear interface" />

                    <div className="content">
                        <div className="heading">
                            <h2>BandEaR</h2>
                            <a href="https://github.com/smcheah/BandEaR-Project-1" className="fab fa-github-square" target="_blank"></a>
                        </div>

                        <p>Last Updated: 20/09/2020</p>
                        <Link to={ `${url}/BandEaR` }>More Information</Link>
                        <a href="https://chrisjmckeown.github.io/BandEaR_Discover_live_artists/" target="_blank">Site link</a>
                    </div>
                </div>

                <div className="gallery-item">
                    <img src={ codequizPic } alt="code quiz interface" />

                    <div className="content">
                        <div className="heading">
                            <h2>Code Quiz</h2>
                            <a href="https://github.com/smcheah/Code-Quiz" className="fab fa-github-square" target="_blank"></a>
                        </div>

                        <p>Last Updated: 27/09/2020</p>
                        <Link to={ `${url}/code-quiz` }>More Information</Link>
                        <a href="https://smcheah.github.io/Code-Quiz/" target="_blank">Site link</a>
                    </div>
                </div>

                <div className="gallery-item">
                    <img src={ birdfactsPic } alt="Bird facts website" />

                    <div className="content">
                        <div className="heading">
                            <h2>Bird Facts</h2>
                            <a href="https://github.com/smcheah/project0" className="fab fa-github-square" target="_blank"></a>
                        </div>

                        <p>Last Updated: 03/11/2019</p>
                        <Link to={ `${url}/bird-facts` }>More Information</Link>
                        <a href="https://smcheah.github.io/project0/birds.html" target="_blank">site link</a>
                    </div>
                </div>

            </main>

        </Router>

        <Footer />
    </>;

};

export default GalleryPage;