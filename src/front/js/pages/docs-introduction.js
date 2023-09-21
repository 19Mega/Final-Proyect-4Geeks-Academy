import React from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';



const DocsIntro = () => {
    return (


        <div className="container">
            <div className="row">
                <SideBar />
                <div className="col-10">
                    {/* seccion derecha de la pagina */}
                    <div className="container">
                        <div className="row">
                            {/* titulo */}

                            <h1 className="mt-3">Getting started with <span className="text-componentify">Componentify</span></h1>
                            <p className="fs-5 mt-2 mb-3">Componentify is the world’s most popular component framework for building feature rich, blazing fast applications. Build anything—from prototype to production—in minutes.</p>
                            <h5 className="text-componentify">No CSS knowledge required.</h5>
                            <h2 className="mt-3">Quick & easy start</h2>
                            <p>Get started by including Componentify's production-ready CSS via CDN without the need for any build steps.</p>
                            <p><span className="text-componentify">1. </span>Create a new index.html file in your project root. Include the <code className="text-componentify">{`<meta name="viewport">`}</code> tag as well for proper responsive behavior in 
                            mobile devices.</p>
                            <div className="col-9">
                                <SyntaxHighlighter language="html" style={prism}>
                                {`<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Componentify example</title>
    </head>
    <body>
        <h1>Hello, world of components!</h1>
    </body>
</html>`}
                                </SyntaxHighlighter>
                            </div>
                            <p className="mt-3"><span className="text-componentify">2. </span>Include Componentify’s CSS. Place the <code className="text-componentify">{`<link>`}</code> tag in the <code className="text-componentify">{`<head>`}</code> for our CSS and start using our components and classes.</p>
                            <div className="col-12">
                                <SyntaxHighlighter language="html" style={prism}>
                                {`<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Componentify example</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    </head>
    <body>
        <h1>Hello, world of components!</h1>
    </body>
</html>`}
                                </SyntaxHighlighter>
                            </div>
                            <p className="mt-3"><span className="text-componentify">3. </span><strong>Hello Componentify!</strong> Open the page in your browser of choice to see your componetified page. Now you can start building with Componentify by creating your own layout, adding dozens of components, and utilizing our official examples.</p>
                            <h2 className="mt-3"><svg style={{ "color": "#FD5812" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                                </svg> CDN link
                            </h2>
                            <p>As reference, here is our primary CDN link: <code>{`https://cdn.componentify`}</code></p>
                            
                            <h2 className="mt-2"><svg  style={{ "color": "#FD5812" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                                </svg> Install
                            </h2>
                            <p className="pe-lg-5">
                                Install Componentify's CSS Source and JavaScript files via npm. Package managed installs don’t include documentation or our full build scripts.
                            </p>
                            <div class="c-alert c-alert-gloomy col-5" role="alert" style={{ height: "60px" }}>
                                npm install Componentify@5.3.2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default DocsIntro;