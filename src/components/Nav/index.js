import { BrowserRouter as HashRouter, Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";

const Nav = () => {
    return <nav id="page-top">
        <div className="nav-items">
            <Link to="/" className="fas fa-igloo home"></Link>
            <a href="#about-me">About</a>
            <a href="#contact-me">Contact Me</a>
            <Link to="/gallery">View Gallery</Link>
        </div>
    </nav>;
};

export default Nav;