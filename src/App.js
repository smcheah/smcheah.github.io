import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";
import HomePage from "./pages/home";
import GalleryPage from "./pages/gallery";

function App () {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/gallery">
                    <GalleryPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
