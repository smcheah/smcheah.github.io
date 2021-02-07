import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";

const Detail = () => {
    let { detail } = useParams();

    return <div>
        { detail } - web url header
    </div>;
};

export default Detail;