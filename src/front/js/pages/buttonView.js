import React from "react";
import "../../styles/global.css"
import "./global.js"
import { SideBar } from "../component/sideBar"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';



export const ButtonView = () => {
  return (
    <div className="container">
      <div className="row">
        <SideBar />
        <div className="col-10">
          <div className="container">
            <div className="row">
              <h1 className="mt-3 mb-3"><strong>Buttons</strong></h1>

              <h4 className="mb-1"> Base class </h4>
              <p className="fs-5 mt-2 mb-3">Componentify has a base <span style={{ "color": "#FD5812" }}>c-btn</span>   class that sets up basic styles such as padding and content alignment. By default, .btn controls have a transparent border and background color, and lack any explicit focus and hover styles.</p>
            </div>

            <h4 className="mb-1">Variants</h4>
            <p className="fs-5 mt-2 mb-3"> Componentify includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.</p>

            <div className="row">
              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-dark">Dark</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-dark">Dark</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-slate">Slate</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-slate">Slate</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-gloomy">Gloomy</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-gloomy">Gloomy</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12 d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-silver">Silver</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-silver">Silver</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12 d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-risk">Risk</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-risk">Risk</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12 d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-caution">Caution</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {` <button type="button" class="c-btn c-btn-caution">Caution</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12 d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-gold">Gold</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-gold">Gold</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12 d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-lime">Lime</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-lime">Lime</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12 d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-mint">Mint</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-mint">Mint</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12 d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-win">Win</button>
              </div>

              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-win">Win</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12 d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-azure">Azure</button>
              </div>

              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-azure">Azure</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12 d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-aqua">Aqua</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-aqua">Aqua</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12 d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-lavender">Lavender</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-lavender">Lavender</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12 d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-purple">Purple</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {` <button type="button" class="c-btn c-btn-purple">Purple</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12 d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-lollypop">Lollypop</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-lollypop">Lollypop</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12 d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-fog">Fog</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-fog">Fog</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-componentify">Componentify</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-componentify">Componentify</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-mocca">Mocca</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-mocca">Mocca</button>`}
                </SyntaxHighlighter>
              </div>


              <hr className="mb-5 mt-5"></hr>
              {/* COMIENZA CODIGO BOTTONS HOVER */}

              <h4 className="mb-1"> <strong>Hover</strong></h4>
              <p className="fs-5 mt-2 mb-3">Hovered buttons are used throughout the website to highlight
                interactive elements, such as links, calls to action, or buttons, making it clear to users
                that they can interact with the content.</p>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-dark c-btn-dark-hover">Dark</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-dark c-btn-dark-hover">Dark</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-slate c-btn-slate-hover">Slate</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-slate c-btn-slate-hover">Slate</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-gloomy c-btn-gloomy-hover">Gloomy</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-gloomy c-btn-gloomy-hover">Gloomy</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-silver c-btn-silver-hover">Silver</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-silver c-btn-silver-hover">Silver</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-risk c-btn-risk-hover">Risk</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {` <button type="button" class="c-btn c-btn-risk c-btn-risk-hover">Risk</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-caution c-btn-caution-hover">Caution</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-caution c-btn-caution-hover">Caution</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-gold c-btn-gold-hover">Gold</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-gold c-btn-gold-hover">Gold</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-lime c-btn-lime-hover">Lime</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-lime c-btn-lime-hover">Lime</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-mint c-btn-mint-hover">Mint</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-mint c-btn-mint-hover">Mint</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-win c-btn-win-hover">Win</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-win c-btn-win-hover">Win</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-azure c-btn-azure-hover">Azure</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-azure c-btn-azure-hover">Azure</button>`}
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-aqua c-btn-aqua-hover">Aqua</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-aqua c-btn-aqua-hover">Aqua</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-lavender c-btn-lavender-hover">Lavender</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {` <button type="button" class="c-btn c-btn-lavender c-btn-lavender-hover">Lavender</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-purple c-btn-purple-hover">Purple</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-purple c-btn-purple-hover">Purple</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-lollypop c-btn-lollypop-hover">Lollypop</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-lollypop c-btn-lollypop-hover">Lollypop</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-fog c-btn-fog-hover">Fog</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-fog c-btn-fog-hover">Fog</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-componentify c-btn-componentify-hover">Componentify</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-componentify c-btn-componentify-hover">Componentify</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-2 col-md-1 col-sm-1 col-12  d-flex justify-content-end">
                <button type="button" class="c-btn c-btn-mocca c-btn-mocca-hover">Mocca</button>
              </div>
              <div className="col-lg-10 col-md-10 col-sm-10 col-12">
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-mocca c-btn-mocca-hover">Mocca</button>`}
                </SyntaxHighlighter>
              </div>

              <hr className="mb-5 mt-5"></hr>

            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

