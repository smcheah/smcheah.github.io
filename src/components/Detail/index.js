import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";
import content from "../../util/dev-process";
import List from "../List";
import ImageList from '../ImageList';
import "./style.css";

const Detail = () => {

    let { detail } = useParams();
    const { title, lastUpdated, description, planning, wireframeImgs, prototypeImgs, issues, siteImgs, siteLink } = content[detail];

    // console.log(title, lastUpdated, description, planning, wireframeImgs, prototypeImgs, issues, siteImgs, siteLink);

    return <div>
        <div className="modal-bg"></div>
        <div className="modal-full">
            <div>
                <div className="header-links">
                    <div>
                        <Link to={ '/gallery' }>gallery</Link> / { detail }
                    </div>
                    <div>
                        <Link to={ '/gallery' }><i className="fas fa-times"></i></Link>
                    </div>
                </div>

                <div className="modal-content">
                    <h1>{ title }</h1>
                    <p>last updated: { lastUpdated }</p>
                    <h3>Description</h3>
                    <p>{ description }</p>
                    <h3>Design process</h3>
                    <h4>Planning / Market research</h4>
                    <p>{ planning }</p>
                    <h4>Wireframes</h4>
                    <div className="horizontal-scroll">
                        <ul>
                            <ImageList props={ wireframeImgs } />
                        </ul>
                    </div>

                    <h4>high fidelity prototype / Mock up</h4>
                    <div className="horizontal-scroll">
                        <ul>
                            <ImageList props={ prototypeImgs } />
                        </ul>
                    </div>

                    <h3>Issues / Future improvements</h3>
                    <ul>
                        <List props={ issues } />
                    </ul>
                    <h3>Site images</h3>
                    <div>
                        <ul>
                            <ImageList props={ siteImgs } />
                        </ul>
                    </div>
                    <h3><Link to={ siteLink }>view site</Link></h3>
                </div>
            </div>
        </div>
    </div >;
};

export default Detail;