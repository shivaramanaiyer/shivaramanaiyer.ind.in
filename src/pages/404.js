import React from "react";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Helmet from "react-helmet";

export default class PageNotFound extends React.Component{

    render(){
        return (
            <Layout>
                <Helmet title={`Error 404 | ${config.siteTitle}`} />
                <div className="container">
                    <h1>
                        Damn! - Seems like what you are looking for isn't here yet
                    </h1>
                    Please use any of the links on the top navigation to go to the available pages.
                </div>
            </Layout>
        );
    }
}

