import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";
import Detail from "../website-detail";

const GalleryPage = () => {
    let { path, url } = useRouteMatch();

    return <div>
        <nav id="page-top">
            <div class="nav-items">
                <Link to="/" class="fas fa-igloo home"></Link>
                {/* <!-- <a href="#design-sites">Design</a>
            <a href="#technical-sites">Technical</a> --> */}
                <button class="fas fa-bars ham"></button>
            </div>
        </nav>

        <ul>
            <li>
                <Link to={ `${url}/website1` }>website 1 details</Link>
            </li>
            <li>
                <Link to={ `${url}/website2` }>website 2 details</Link>
            </li>
            <li>
                <Link to={ `${url}/website3` }>website 3 details</Link>
            </li>
        </ul>

        <Switch>
            <Route exact path={ path }>
                <h3>Please select a topic.</h3>
            </Route>
            <Route exact path={ `${path}/:detail` }>
                <Detail />
            </Route>
        </Switch>

        <main class="gallery-list">
            <div class="gallery-item">
                <img src="images/burger-restaurant.png" alt="burger restaurant interface" />

                <div class="content">
                    <div class="heading">
                        <h2>Burger Restaurant</h2>
                        <a href="https://github.com/smcheah/burger-restaurant" class="fab fa-github-square" target="_blank"></a>
                    </div>

                    <p>Last Updated: 08/11/2020</p>
                    <a href="product-description">Overview</a>
                    <a href="https://thawing-cliffs-82345.herokuapp.com/" target="_blank">Site link</a>
                </div>
            </div>

            <div class="gallery-item">
                <img src="images/meal-budgeter.gif" alt="meal budgeter interface" />

                <div class="content">
                    <div class="heading">
                        <h2>Meal Budgeter</h2>
                        <a href="https://github.com/smcheah/Meal-Budgeter-Project-2" class="fab fa-github-square" target="_blank"></a>
                    </div>

                    <p>Last Updated: 22/11/2020</p>
                    <a href="product-description">Overview</a>
                    <a href="https://vast-crag-85624.herokuapp.com/" target="_blank">Site link</a>
                </div>
            </div>

            <div class="gallery-item">
                <img src="images/team-summary.gif" alt="team summary interface" />

                <div class="content">
                    <div class="heading">
                        <h2>Team Summary</h2>
                        <a href="https://github.com/smcheah/team-summary-template-engine" class="fab fa-github-square" target="_blank"></a>
                    </div>

                    <p>Last Updated: 11/10/2020</p>
                    <a href="product-description">Overview</a>
                    <p>This application works in the terminal</p>
                </div>
            </div>

            <div class="gallery-item">
                <img src="images/BandEaR.png" alt="band ear interface" />

                <div class="content">
                    <div class="heading">
                        <h2>BandEaR</h2>
                        <a href="https://github.com/smcheah/BandEaR-Project-1" class="fab fa-github-square" target="_blank"></a>
                    </div>

                    <p>Last Updated: 20/09/2020</p>
                    <a href="product-description">Overview</a>
                    <a href="https://chrisjmckeown.github.io/BandEaR_Discover_live_artists/" target="_blank">Site link</a>
                </div>
            </div>

            <div class="gallery-item">
                <img src="images/code-quiz.gif" alt="code quiz interface" />

                <div class="content">
                    <div class="heading">
                        <h2>Code Quiz</h2>
                        <a href="https://github.com/smcheah/Code-Quiz" class="fab fa-github-square" target="_blank"></a>
                    </div>

                    <p>Last Updated: 27/09/2020</p>
                    <a href="product-description">Overview</a>
                    <a href="https://smcheah.github.io/Code-Quiz/" target="_blank">Site link</a>
                </div>
            </div>

            <div class="gallery-item">
                <img src="images/work-planner.gif" alt="work planner interface" />

                <div class="content">
                    <div class="heading">
                        <h2>Work Planner</h2>
                        <a href="https://github.com/smcheah/Work-Planner" class="fab fa-github-square" target="_blank"></a>
                    </div>

                    <p>Last Updated: 06/09/2020</p>
                    <a href="product-description">Overview</a>
                    <a href="https://smcheah.github.io/Work-Planner/" target="_blank">Site link</a>
                </div>
            </div>

            <div class="gallery-item">
                <img src="images/weather-dashboard.png" alt="Weather dashboard" />

                <div class="content">
                    <div class="heading">
                        <h2>Weather Dashboard</h2>
                        <a href="https://github.com/smcheah/Weather-Dashboard" class="fab fa-github-square" target="_blank"></a>
                    </div>

                    <p>Last Updated: 13/09/2020</p>
                    <a href="product-description">Overview</a>
                    <a href="https://smcheah.github.io/Weather-Dashboard/" target="_blank">Site link</a>
                </div>
            </div>

            <div class="gallery-item">
                <img src="images/bird-facts.gif" alt="Bird facts website" />

                <div class="content">
                    <div class="heading">
                        <h2>Bird Facts</h2>
                        <a href="https://github.com/smcheah/project0" class="fab fa-github-square" target="_blank"></a>
                    </div>

                    <p>Last Updated: 03/11/2019</p>
                    <a href="product-description">Overview</a>
                    <a href="https://smcheah.github.io/project0/birds.html" target="_blank">site link</a>
                </div>
            </div>

        </main>

        <div class="decor"></div>
        <footer>
            <div>Simone Cheah &copy; Copyright 2020</div>
        </footer>
    </div>;

};

export default GalleryPage;