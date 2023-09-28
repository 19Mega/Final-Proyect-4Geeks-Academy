import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const AdminComponent = () => {
  const [component, setComponent] = useState({}) // deprecateddd
  const [searchResult, setSearchResult] = useState([]) 

  const [search, setSearch] = useState("")

  const [searchId, setSearchId] = useState("")
  const [searchName, setSearchName]= useState("")
  const [searchType, setSearchType]= useState("")

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setJs] = useState("")
  const [react, setReact] = useState("")


  // CREATE COMPONENT
  const fetchComponentCreate = async () =>{
    const response = await fetch(process.env.BACKEND_URL + "/api/component/add",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name, 
        type: type, 
        html_code: html,
        css_code: css,  
        js_code: js,  
        react_code: react 
      })
    })
    console.log(response)
    if (response.status) {
      alert("Component created.")
      clearForm();
    }
 
    
  }

  // DELETE COMPONENT
  const fetchComponentDelete = async (id) =>{
    try { 
        const response = await fetch(process.env.BACKEND_URL + "/api/component/delete/" + id,{method: "DELETE"})
        const data = await response.json();
        alert(data.results)

        if (data.response === 200) {
            alert("Component deleted successfully");
            clearForm();
          } else {
            alert("Failed to delete component");
          }
    } catch (error) {
        console.log(error)
    }
  }

  // GET COMPONENT (SEARCH)
  const fetchComponent = async (id) => {
    const response = await fetch(process.env.BACKEND_URL + "/api/component/" + id);
    const data = await response.json();
    setComponent(data.results);

    setId(data.results.id);
    setName(data.results.name);
    setType(data.results.type);
    setHtml(data.results.html_code);
    setCss(data.results.css_code);
    setJs(data.results.js_code);
    setReact(data.results.react_code);

    console.log(response)
  };

  // UPDATE COMPONENT
  const fetchComponentUpdate = async (id) => {
    const response = await fetch(process.env.BACKEND_URL + "/api/component/update/" + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name, 
        type: type, 
        html_code: html,
        css_code: css,  
        js_code: js,  
        react_code: react 
      })
    })
    console.log(response)
    if (response.status) {
      alert("Update done.")
      
    }
  }


  //
  // SEARCH SECTION 🟥🟧🟨🟩🟦🟪

  // COMPONENTS BY NAME
  const fetchComponentsByName = async (searchName) => {
    const response = await fetch(process.env.BACKEND_URL + "/api/components/" + searchName);
    const data = await response.json();
    setSearchResult(data.results);
    //console.log("BY NAME: ", response)
    console.log("BY NAME: ", data.results)
  };





  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "id":
        setId(value);
        break;
      case "name":
        setName(value);
        break;
      case "type":
        setType(value);
        break;
      case "html":
        setHtml(value);
        break;
      case "css":
        setCss(value);
        break;
      case "js":
        setJs(value);
        break;
      case "react":
        setReact(value);
        break;
      default:
        break;
    }
  };


  const clearForm = () => {
    setId('');
    setName('');
    setType('');
    setHtml('');
    setCss('');
    setJs('');
    setReact('');
  };


  return (
    <div >
    <div className="container" >


      <div className="m-5 p-3 border border-4 border-warning rounded text-light bg-dark">
        <strong>Alert!</strong> This is a dangerous section that directly affects the database and is exclusively for administrators.
      </div>



      <form className="mt-2 shadow ps-4 pe-2 pt-4 pb-4 border-bottom border-4 border-warning" style={{backgroundColor:"rgb(212,212,212)"}}>
        <div className="input-group mb-2">
          <div className="me-2">
            <div className="input-group-text">#id</div>
            <input
              type="text"
              className="form-control"
              name="id"
              value={id}
              onChange={handleInputChange}
            />
          </div>

          <div className="me-2">
            <div className="input-group-text">Name</div>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </div>

          <div className="me-2">
            <div className="input-group-text">Type</div>
            <input
              type="text"
              className="form-control"
              name="type"
              value={type}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-1 col-form-label">HTML</label>
          <div className="col-sm-11">
            <textarea
              className="form-control"
              rows="3"
              name="html"
              value={html}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-1 col-form-label">CSS</label>
          <div className="col-sm-11">
            <textarea
              className="form-control"
              rows="3"
              name="css"
              value={css}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-1 col-form-label">JS</label>
          <div className="col-sm-11">
            <textarea
              className="form-control"
              rows="3"
              name="js"
              value={js}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-1 col-form-label">REACT</label>
          <div className="col-sm-11">
            <textarea
              className="form-control"
              rows="3"
              name="react"
              value={react}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        <div className="d-flex justify-content-between">
        <button className="btn btn-secondary me-3" onClick={(e) => { e.preventDefault(); fetchComponent(id); }} >Search by ID</button> 
        <button type="submit" className="btn btn-success me-3" onClick={(e) => { e.preventDefault(); fetchComponentCreate()}}>Add Component</button>
        <button type="submit" className="btn btn-warning me-3" onClick={(e) => { e.preventDefault(); fetchComponentUpdate(id)}}>Modify Component</button>
        <button type="submit" className="btn btn-danger me-3 ms-auto" onClick={(e) => { e.preventDefault(); fetchComponentDelete(id)}}>Delete Component</button>
        </div>
      </form>
   


      {/**** search section ****/}
      <form className="my-5 pt-2 shadow border-bottom border-4 border-warning" style={{backgroundColor:"rgb(212,212,212)"}}> 


        <div className="m-4 p-3 border border-4 border-warning rounded text-light bg-dark" >    
            <strong>🔎 SEARCH SECTION</strong>
        </div>

        {/* TODO: cambiar los fetchs */}
        <form className="d-flex justify-content-between align-items-center">
          <div className="input-group mb-3 mx-3">
            <input type="text" className="form-control" placeholder="ID" onChange={(e) => setSearchId(e.target.value)} />
            <button type="submit" className="btn btn-dark btn-sm" onClick={(e) => { e.preventDefault(); fetchComponent(search); }}>
              By ID
            </button>
          </div>

          <div className="input-group mb-3 ">
            <input type="text" className="form-control" placeholder="Name" onChange={(e) => setSearchName(e.target.value)} />
            <button type="submit" className="btn btn-dark btn-sm" onClick={(e) => { e.preventDefault(); fetchComponentsByName(searchName); }}>
              By Name
            </button>
          </div>

          <div className="input-group mb-3 mx-3">
            <input type="text" className="form-control" placeholder="Type" onChange={(e) => setSearchType(e.target.value)} />
            <button type="submit" className="btn btn-dark btn-sm" onClick={(e) => { e.preventDefault(); fetchComponent(search); }}>
              By Type
            </button>
          </div>
        </form>

        {/* SEARCH RESULT MAP */}
        <div className="mt-3 mb-5 mx-3">
            <textarea
              className="form-control"
              rows="12"
              name="result"
              value={JSON.stringify(searchResult, null, 5)} // El tercer argumento (2) agrega espaciado para una mejor legibilidad
              readOnly 
            ></textarea>
        </div>


      {/* end form search */}
      </form>

      



      <br></br>
      <br></br>
      <br></br>

      {/* end cointainer */}
      </div> 
      </div> 
  );
};




{/* <div className="container">
{components.map(component => (
    <div key={component.id}>
        {component.id} - {component.type} - {component.name}        
        {component.type} 
        <code>{component.html_code}</code>
        <code>{component.css_code}</code>
        <code>{component.js_code}</code>
        <code>{component.react_code}</code>   
    </div>
))
}
</div> */}