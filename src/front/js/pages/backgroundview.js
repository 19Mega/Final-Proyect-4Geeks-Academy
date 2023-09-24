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
                     <h1 className="mt-3"> <strong>Background</strong></h1>
                     <p className="fs-5 mt-2 mb-3">Convey meaning through <span style={{ "color": "#FD5812" }}>background-color</span> and add decoration with gradients.
                     Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities do not set color, so in some cases you’ll want to use <code>.text-* </code>  
                     <a href="/docs/utilities/colors">color utilities.</a>
                    </p>
                 </div>
                 <div className="row">

                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-risk text-risk">.bg-risk</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-risk text-risk">.bg-risk</div>`}
                         </SyntaxHighlighter>
                     </div>


                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-caution text-caution">.bg-caution</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-caution text-caution">.bg-caution</div>`}
                         </SyntaxHighlighter>
                     </div>


                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-silver text-silver">.bg-silver</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-silver text-silver">.bg-silver</div>`}
                         </SyntaxHighlighter>
                     </div>


                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-gold text-gold">.bg-gold</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-gold text-gold">.bg-gold</div>`}
                         </SyntaxHighlighter>
                     </div>


                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-lime text-lime">.bg-lime</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-lime text-lime">.bg-lime</div>`}
                         </SyntaxHighlighter>
                     </div>


                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-azure text-azure">.bg-azure</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-azure text-azure">.bg-azure</div>`}
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