import React from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';



export const ColorsView = () => {
  return (
<div className="container">
     <div className="row">
     <SideBar />
         <div className="col-10">
             <div className="container">
                 <div className="row">
                     <h1 className="mt-3"><strong>Colors</strong></h1>
                     <p className="fs-5 mt-2 mb-3">Express significance using <span className="text-componentify">color</span> through a selection of color utility classes.</p>
                 </div>

                 <div className="container border rounded my-3 py-3">
                 <div className="row">
                     <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <p className="text-risk"> .text-risk </p>
                    <p className="text-caution"> .text-caution </p>
                    <p className="text-silver"> .text-silver </p>
                    <p className="text-gold"> .text-gold </p>
                    <p className="text-lime"> .text-lime </p>
                    <p className="text-azure"> .text-azure </p>
                    <p className="text-mocca"> .text-mocca </p>
                    <p className="text-aqua"> .text-aqua  </p>
                    <p className="text-slate"> .text-slate  </p>
                    <p className="text-componentify"> .text-componentify  </p>
                    <p className="text-lollypop"> .text-lollypop  </p>
                    <p className="text-mint"> .text-mint </p>
                    <p className="text-gloomy"> .text-gloomy </p>
                    <p className="text-fog"> .text-fog </p>
                    <p className="text-dark"> .text-dark </p>
                    <p className="text-win"> .text-win </p>
                    <p className="text-lavender"> .text-lavender </p>
                    <p className="text-purple"> .text-purple  </p>

                     </div>
                 </div>
              </div>
             </div>
         </div>
     </div>
 </div>


  )
}

export default ColorsView;