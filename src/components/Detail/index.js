import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch, useParams } from "react-router-dom";
import content from "../../util/dev-process";
import List from "../List";
import ImageList from '../ImageList';
import "./style.css";

const Detail = () => {

    let { detail } = useParams();
    const { title, lastUpdated, description, planning, wireframeImgs, prototypeImgs, issues, siteImgs, siteLink } = content[detail];

    const designHeader = () => {
        if (planning.length > 0 || wireframeImgs.length > 0 || prototypeImgs.length > 0) {
            return (<h3>Design process</h3>);
        } return null;
    }

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

                    { designHeader() }

                    { planning.length > 0 ? (<>
                        <h4>Planning / Market research</h4>
                        <p>{ planning }</p>
                    </>
                    ) : null }

                    { wireframeImgs.length > 0 ? (<>
                        <h4>Wireframes</h4>
                        <div className="horizontal-scroll">
                            <ul className="imagelist">
                                <ImageList props={ wireframeImgs } />
                            </ul>
                        </div>
                    </>) : null }

                    { prototypeImgs.length > 0 ? (<>
                        <h4>Prototype / Mock up</h4>
                        <div className="horizontal-scroll">
                            <ul className="imagelist">
                                <ImageList props={ prototypeImgs } />
                            </ul>
                        </div>
                    </>) : null }

                    { issues.length > 0 ? (<>
                        <h3>Issues / Future improvements</h3>
                        <ul>
                            <List props={ issues } />
                        </ul>
                    </>) : null }

                    { siteImgs.length > 0 ? (<>
                        <h3>Site images</h3>
                        <div>
                            <ul className="imagelist">
                                <ImageList props={ siteImgs } />
                            </ul>
                        </div>
                    </>) : null }

                    { siteLink.length > 0 ? (
                        <h3><Link to={ siteLink }>view site</Link></h3>
                    ) : null }
                </div>
            </div>
        </div>
    </div >;
};

export default Detail;