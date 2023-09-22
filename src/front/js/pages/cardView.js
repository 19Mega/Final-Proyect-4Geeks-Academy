import React from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ComponentifyLogoDark from "../../img/componentify-logo-dark.png";
import Sky from "../../img/sky.jpeg";
import cardImage from "../../img/card-image.png";


const CardView = () => {
    
    return (
        //ESTRUCTURA
<div className="container">
    <div className="row">
    <SideBar />
        <div className="col-10">
            <div className="container">
                <div className="row">
                    <h1 className="mt-3">Cards</h1>
                    <p className="fs-5 mt-2 mb-3">The <span className="text-componentify">c-card</span> component is a versatile and enhanced version
                        that provides a simple interface for headings, text, images, icons, and more.
                    </p>
                </div>
                <div className="container border rounded my-5 py-3">
                    <h3 className="mt-3 mb-3">Classic card with image</h3>
                    <div className="row">
                        <div className="col-lg-12 col-md-4 col-sm-4 col-12">
                            <div class="c-card">
                                <img src={Sky} alt="Image" class="c-card-image"/>
                                <div class="c-card-content">
                                    <h2 class="c-card-title">Card Title</h2>
                                    <p class="c-card-description text-slate">Card content. You can add text, links, or any other content here.</p>
                                    <button class="c-btn c-btn-aqua">Go!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-8 col-sm-8 col-12 mt-2">
                            <SyntaxHighlighter className="pt-0" language="html" style={prism}>
                                {
                                `
    <div class="c-card">
        <img src="..." alt="Image" class="c-card-image"/>
        <div class="c-card-content">
            <h2 class="c-card-title">Card Title</h2>
            <p class="c-card-description text-slate">Card content. You can add text, links, or any other content here.</p>
            <button class="c-btn c-btn-aqua">Go!</button>
        </div>
    </div>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
                <div className="container border rounded my-5 py-3">
                    <h3 className="mt-3 mb-3">Simplicity</h3>
                    <div className="row">
                        <div className="col-3">
                            <div class="c-card c-card-brd-purple">
                                <div class="c-card-header">
                                    <h2 class="c-card-brd-title text-purple">Card title</h2>
                                </div>
                                    <p className="c-card-brd-description text-purple c-card-content">Card content. You can add text, links, or any other content here.
                                        The size of the card depends on what you add here.
                                        You can get creative
                                    </p>
                            </div>
                        </div>
                        <div className="col-3">
                                <div class="c-card c-card-brd-purple">
                                    <div class="c-card-header">
                                        <h2 class="c-card-brd-title text-purple">Card title</h2>
                                    </div>
                                        <p className="c-card-brd-description text-purple c-card-content">Card content. You can add text, links, or any other content here.
                                            The size of the card depends on what you add here.
                                            You can get creative
                                        </p>
                                </div>
                        </div>   
                        <div className="col-3">
                                <div class="c-card c-card-brd-purple">
                                    <div class="c-card-header">
                                        <h2 class="c-card-brd-title text-purple">Card title</h2>
                                    </div>
                                        <p className="c-card-brd-description text-purple c-card-content">Card content. You can add text, links, or any other content here.
                                            The size of the card depends on what you add here.
                                            You can get creative
                                        </p>
                                </div>
                        </div>
                        <div className="col-3">
                                <div class="c-card c-card-brd-purple">
                                    <div class="c-card-header">
                                        <h2 class="c-card-brd-title text-purple">Card title</h2>
                                    </div>
                                        <p className="c-card-brd-description text-purple c-card-content">Card content. You can add text, links, or any other content here.
                                            The size of the card depends on what you add here.
                                            You can get creative
                                        </p>
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-8 col-sm-8 col-12 mt-2">
                            <SyntaxHighlighter className="pt-0" language="html" style={prism}>
                                {
                                `
<div class="c-card c-card-brd-purple">
    <div class="c-card-header">
        <h2 class="c-card-brd-title text-purple">Card title</h2>
    </div>
    <p className="c-card-brd-description text-purple c-card-content">Card content. You can add text, links, or any other content here.
        The size of the card depends on what you add here.
        You can get creative
    </p>
</div>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
                <div className="container border rounded mb-2">
                    <h3 className="mt-3 mb-3">Credit card style</h3>
                    <div className="row">
                        <div className="col-lg-12 col-md-4 col-sm-4 col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h2 class="card-title">Título de la Tarjeta</h2>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">Contenido de la tarjeta. Puedes agregar texto, enlaces o cualquier otro contenido aquí.</p>
                                </div>
                                <div class="card-footer">
                                    <button class="btn btn-primary">Botón</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-8 col-sm-8 col-12 mt-2">
                            <SyntaxHighlighter className="pt-0" language="html" style={prism}>
                                {
                                `
    <div class="c-card">
        <img src="..." alt="Image" class="c-card-image"/>
        <div class="c-card-content">
            <h2 class="c-card-title">Card Title</h2>
            <p class="c-card-description">Card content. You can add text, links, or any other content here.</p>
            <button class="c-btn c-btn-aqua">Go!</button>
        </div>
    </div>`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default CardView;

// ESTRUCTURA
// <div className="container">
//     <div className="row">
//     <SideBar />
//         <div className="col-10">
//             <div className="container">
//                 <div className="row">
//                     <h1 className="mt-3">Título del componente</h1>
//                     <p className="fs-5 mt-2 mb-3">Párrafo explicando el componente.</p>
//                 </div>
//                 <div className="row">
//                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
//                         Acá va el componente
//                     </div>
//                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
//                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
//                             {`Acá va el código`}
//                         </SyntaxHighlighter>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>