import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";

const Nav = () => {
    return <nav id="page-top">
        <div className="nav-items">
            <Link to="/" className="fas fa-igloo home"></Link>
            <Link to="#about-me">About</Link>
            <Link to="#contact-me">Contact Me</Link>
            <Link to="/gallery">View Gallery</Link>
            <button className="fas fa-bars ham"></button>
        </div>
    </nav>;
};

export default Nav;