import React, { useState } from 'react';
import "../../styles/global.css";
import "./global.js";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { SideBar } from '../component/sideBar';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const BadgesView = () => {
  const [copiedIndexes, setCopiedIndexes] = useState([]);

  const handleCopy = (i) => {
    setCopiedIndexes([...copiedIndexes, i]);

    setTimeout(() => {
      setCopiedIndexes((prevIndexes) => prevIndexes.filter((index) => index !== i));
      console.log('Texto revertido después de 3 segundos');
    }, 3000); // 3 seconds delay

  };

  const badgeList = [
    '<p>Example Text <span class="c-badge text-risk bg-risk">New</span></p>',
    '<p>Example Text <span class="c-badge text-caution bg-caution">New</span></p>',
    '<p>Example Text <span class="c-badge text-silver bg-silver">New</span></p>',
    '<p>Example Text <span class="c-badge text-gold bg-gold">New</span></p>',
    '<p>Example Text <span class="c-badge text-lime bg-lime">New</span></p>',
    '<p>Example Text <span class="c-badge text-azure bg-azure">New</span></p>',
    '<p>Example Text <span class="c-badge text-mocca bg-mocca">New</span></p>',
    '<p>Example Text <span class="c-badge text-aqua bg-aqua">New</span></p>',
    '<p>Example Text <span class="c-badge text-slate bg-slate">New</span></p>'
  ]

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

                                        {/* MAP >>> ACA HACE UN ROW POR CADA COMPONENTE CON SUS COSITAS*/}
                                        {badgeList.map((item, i) => (
                                        <div key={i} className='row'>

                                            {/* component */}
                                            <div className='col-3'>
                                                {/* Utiliza dangerouslySetInnerHTML para mostrar el HTML */}
                                                <div dangerouslySetInnerHTML={{ __html: item }} />
                                            </div>

                                            {/* code */}
                                            <div className='col-8'>
                                                <div>
                                                    <SyntaxHighlighter className="mt-0 c-alert" language="html" style={prism}>
                                                    {item}
                                                    </SyntaxHighlighter>
                                                </div>
                                            </div>

                                            {/* copy to clipboard */}
                                            <div className='col-1'>
                                                <CopyToClipboard text={item} onCopy={() => handleCopy(i)}>
                                                {copiedIndexes.includes(i) ? <i class="fa-solid fa-check"></i>: <i class="fa-regular fa-clipboard"></i>}
                                                </CopyToClipboard>
                                            </div>

                                        </div>

                                        ))}


                      {/* proximo subtitulo */}
                      <div className="row">
                          <h1 className="mt-3">Título del componente</h1>
                          <p className="fs-5 mt-2 mb-3">Párrafo explicando el componente.</p>
                      </div>

                                              








                  </div>
            </div>
        </div>
    </div>
  );
};

