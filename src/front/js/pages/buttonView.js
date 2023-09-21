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
              <h1 className="mt-3"> <strong>Buttons</strong></h1>
              <p className="fs-5 mt-2 mb-3">The classic <strong>button</strong>, in different colors, sizes, and states. The button is an essential element of any design. It's meant to look and behave as an interactive element of your page.</p>
              <p className="fs-5 mt-2 mb-3">Componentify styles the different states of its buttons. Each state is available as a pseudo-class and a CSS class.</p>
              <p className="fs-5 mt-2 mb-3">This allows you to obtain the style of a certain state without having to trigger it.</p>
            </div>

       


            <h2 className="mt-3" style={{ marginTop: '2rem', marginBottom: '2rem'}}> <strong>Normal</strong></h2>
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem' }}>
                <button type="button" class="c-btn c-btn-dark">Dark</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%',  marginRight: '9rem' }}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-dark">Dark</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
                <button type="button" class="c-btn c-btn-slate">Slate</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                  {`<button type="button" class="c-btn c-btn-slate">Slate</button> `}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
                <button type="button" class="c-btn c-btn-gloomy">Gloomy</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-gloomy">Gloomy</button>`} 
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-silver">Silver</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-silver">Silver</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-risk">Risk</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-risk">Risk</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-caution">Caution</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {` <button type="button" class="c-btn c-btn-caution">Caution</button>`} 
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-gold">Gold</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-gold">Gold</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-lime">Lime</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-lime">Lime</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-mint">Mint</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-mint">Mint</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-win">Win</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-win">Win</button>`}
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-azure">Azure</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-azure">Aqua</button>`}
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-aqua">Aqua</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-aqua">Aqua</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
            <button type="button" class="c-btn c-btn-lavender">Lavender</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-lavender">Lavender</button>`}
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-purple">Purple</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {` <button type="button" class="c-btn c-btn-purple">Purple</button>`} 
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-lollypop">Lollypop</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-lollypop">Lollypop</button>`}
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-fog">Fog</button>              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-fog">Fog</button>`}
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-componentify">Compify</button>
            </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-componentify">Compify</button>`} 
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-mocca">Mocca</button>
            </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '72%', marginRight: '9rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-mocca">Mocca</button>`}
                </SyntaxHighlighter>
              </div>


<hr style={{ marginTop: '4rem', marginBottom: '3rem'}} ></hr>



              <h2 className="mt-3" style={{ marginTop: '2rem', marginBottom: '2rem'}}> <strong>Hover</strong></h2>

              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-dark c-btn-dark-hover">Dark</button>
            </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-dark c-btn-dark-hover">Dark</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-slate c-btn-slate-hover">Slate</button>
            </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-slate c-btn-slate-hover">Slate</button>`} 
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-gloomy c-btn-gloomy-hover">Gloomy</button>
            </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-gloomy c-btn-gloomy-hover">Gloomy</button>`}
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-silver c-btn-silver-hover">Silver</button>
            </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-silver c-btn-silver-hover">Silver</button>`} 
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-risk c-btn-risk-hover">Risk</button>
            </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {` <button type="button" class="c-btn c-btn-risk c-btn-risk-hover">Risk</button>`} 
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-caution c-btn-caution-hover">Caution</button>          
                </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-caution c-btn-caution-hover">Caution</button>`}
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-gold c-btn-gold-hover">Gold</button>          
                </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-gold c-btn-gold-hover">Gold</button>`}
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-lime c-btn-lime-hover">Lime</button>          
                </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-lime c-btn-lime-hover">Lime</button>`} 
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-mint c-btn-mint-hover">Mint</button>         
                </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-mint c-btn-mint-hover">Mint</button>`}             
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-win c-btn-win-hover">Win</button>
                </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-win c-btn-win-hover">Win</button>`}          
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-azure c-btn-azure-hover">Azure</button>
               </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-azure c-btn-azure-hover">Azure</button>`}         
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-aqua c-btn-aqua-hover">Aqua</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-aqua c-btn-aqua-hover">Aqua</button>`}       
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-lavender c-btn-lavender-hover">Lavender</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {` <button type="button" class="c-btn c-btn-lavender c-btn-lavender-hover">Lavender</button>`}    
                </SyntaxHighlighter>
              </div>


              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-purple c-btn-purple-hover">Purple</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-purple c-btn-purple-hover">Purple</button>`}    
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-lollypop c-btn-lollypop-hover">Lollypop</button>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-lollypop c-btn-lollypop-hover">Lollypop</button>`}  
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-fog c-btn-fog-hover">Fog</button>
                            </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-fog c-btn-fog-hover">Fog</button>`}
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-componentify c-btn-componentify-hover">Compify</button>
                            </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-componentify c-btn-componentify-hover">Componentify</button>`} 
                </SyntaxHighlighter>
              </div>



              <div className="col-lg-1 col-md-1 col-sm-1 col-12" style={{ marginRight: '3rem'  }}>
              <button type="button" class="c-btn c-btn-mocca c-btn-mocca-hover">Mocca</button>
                            </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-12" style={{ width: '80%', marginRight: '0rem'}}>
                <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                {`<button type="button" class="c-btn c-btn-mocca c-btn-mocca-hover">Mocca</button>`} 
                </SyntaxHighlighter>
              </div>





            </div>
          </div>
        </div>
      </div>
    </div>











  )
}
