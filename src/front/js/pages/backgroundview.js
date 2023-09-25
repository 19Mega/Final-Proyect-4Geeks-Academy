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
                     <p className="fs-5 mt-2 mb-3"> 
                     Express meaning using <span style={{ "color": "#FD5812" }}>background-color</span> and enhance visuals with gradients. Just like the contextual text color classes, you can apply a contextual class to set the background of an element. Background utilities do not affect text color, so in certain situations, you may need to use     <code>.text-* </code>  
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
                             {`<div class="p-3 mb-2 bg-lime text-lime">.bg-gold</div>`}
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


                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-mocca text-mocca">.bg-mocca</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-mocca text-mocca">.bg-mocca</div>`}
                         </SyntaxHighlighter>
                     </div>



                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-aqua text-aqua">.bg-aqua</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-aqua text-aqua">.bg-aqua</div>`}
                         </SyntaxHighlighter>
                     </div>



                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-slate text-slate">.bg-slate</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-slate text-slate">.bg-slate</div>`}
                         </SyntaxHighlighter>
                     </div>


                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-lollypop text-lollypop">.bg-lollypop</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-lollypop text-lollypop">.bg-lollypop</div>`}
                         </SyntaxHighlighter>
                     </div>


                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-mint text-mint">.bg-mint</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-mint text-mint">.bg-mint</div>`}
                         </SyntaxHighlighter>
                     </div>


                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-gloomy text-gloomy">.bg-gloomy</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-gloomy text-gloomy">.bg-gloomy</div>`}
                         </SyntaxHighlighter>
                     </div>


                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-fog text-fog">.bg-fog</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-fog text-fog">.bg-fog</div>`}
                         </SyntaxHighlighter>
                     </div>


                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>`}
                         </SyntaxHighlighter>
                     </div>


                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-win text-win">.bg-win</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-win text-win">.bg-win</div>`}
                         </SyntaxHighlighter>
                     </div>


                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-lavender text-lavender">.bg-lavender</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-lavender text-lavender">.bg-lavender</div>`}
                         </SyntaxHighlighter>
                     </div>


                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-purple text-purple">.bg-purple</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-purple text-purple">.bg-purple</div>`}
                         </SyntaxHighlighter>
                     </div>


                     <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                         <div class="p-3 mb-2 bg-componentify text-componentify">.bg-componentify</div>
                     </div>
                     <div className="col-lg-9 col-md-9 col-sm-9 col-12">
                         <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                             {`<div class="p-3 mb-2 bg-componentify text-componentify">.bg-componentify</div>`}
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