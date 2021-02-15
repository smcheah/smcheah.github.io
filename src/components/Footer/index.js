import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";

const Footer = () => {
    return <div>
        <div className="decor"></div>
        <footer>
            <div className="copyright">
                <p className="company">Simone Cheah &copy; Copyright 2020</p>
                <a href="#page-top" className="page-top fas fa-chevron-up"></a>
            </div>
        </footer>
    </div>;
};

export default Footer;