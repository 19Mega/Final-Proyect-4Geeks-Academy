import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import ComponentifyLogo from "../../img/logo-componentify-2.png"

import algoliasearch from 'algoliasearch';


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const client = algoliasearch('E7UWR5K9DY', 'edc673ca333fd55924b94e54e5c95c64');
	const index = client.initIndex('componentes');

	const [searchResults, setSearchResults] = useState([ ]);
	
	const search = async (event,query) => {
		event.preventDefault()		
	  try {
		const response = await index.search(query);
		console.log(response)
		setSearchResults(response.hits);
	  } catch (error) {
		console.error(error);
	  }
	};
	
	async function logout(event) { // al presionar el botón logout, redirecciona al home y tiene que aparecer el botón login en la barra
        event.preventDefault()
		actions.logout()
        navigate("/")
    }

	return (
    <nav className="navbar navbar-expand-md bg-warning">
    <div className="container">
      <Link to="/">
        <img src={ComponentifyLogo} alt="Logo" width="46" height="38" className="d-inline-block align-text-center me-2" />
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/docs/getting-started/introduction" className="nav-link text-white align-items-left">
              Docs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contribute" className="nav-link text-white">
              Contribute
            </Link>
          </li>
          <li className="nav-item">
            <a href="https://github.com/Componentify-23/Componentify" className="nav-link text-white align-items-left">
              GitHub
            </a>
          </li>
          <li className="nav-item">
            <a href="https://opencollective.com/growingupcomponentify#category-CONNECT" className="nav-link text-white align-items-leftr">
              Open Collective
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      
	);
};





{/* <div className="nav-item justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <form className="" role="search">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => search(e, e.target.value)}
                  />
                </form>
              </li>
            </ul>
          </div> */}


              {/* <li  className="nav-item ms-1 pt-2 mb-1 ml-auto">
                {store.auth ?
                  <div className="btn-group">
                    <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent" >
                      <i className="fa fa-user"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right" style={{ right: "0", left: "auto" }}>
                      <li><a className="dropdown-item" href="#">Account settings</a></li>
                      <li><a className="dropdown-item" href="#">Favorites</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a onClick={logout} className="dropdown-item" href="#">Log Out</a></li>
                    </ul>
                  </div> :
                  <Link to="/login" className="btn btn-outline-light" type="submit">Login</Link>
                }
              </li> */}