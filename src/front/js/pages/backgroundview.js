import React from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';



export const BackgroundView = () => {
    return (

<div className="container">
     <div className="row">
     <SideBar />
         <div className="col-10">
             <div className="container">
                 <div className="row">
                     <h1 className="mt-3">Título del componente</h1>
                     <p className="fs-5 mt-2 mb-3">Párrafo explicando el componente.</p>
                 </div>
                 <div className="row">
                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         Acá va el componente
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`Acá va el código`}
                         </SyntaxHighlighter>
                     </div>
                 </div>
             </div>
         </div>
     </div>
 </div>


    )
}


export default BackgroundView