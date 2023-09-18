import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import imgSize from "../../img/240x120.png";
import { ButtonAdmin } from "../component/buttonAdmin";

export const Components = () => {
	const navigate = useNavigate();

	const component_category = [
		{
			title: 'Alerts',
			description: 'Different types of alerts', 
			image: imgSize,
			path: "login" 
		},
		{
			title: 'Badges', 
			description: 'Small count indicators',
			image: imgSize,
			path: "badges"
		},
		{
			title: 'Breadcrumbs',
			description: 'Indicates page location',
			image: imgSize, 
			path: "breadcrumbs"
		},
		{
			title: 'Buttons',
			description: 'Various button styles',
			image: imgSize,
			path: "buttons"
		},
		{
			title: 'Button Groups',
			description: 'Grouped buttons',
			image: imgSize,
			path: "button-groups"
		},
		{
			title: 'Cards',
			description: 'Flexible content containers',
			image: imgSize,
			path: "cards"
		},
		{
			title: 'Carousels', 
			description: 'Rotating content slides',
			image: imgSize,
			path: "carousels"
		},
		{
			title: 'Collapses',
			description: 'Toggleable content sections', 
			image: imgSize,
			path: "collapses"
		},
		{
			title: 'Dropdowns',
			description: 'Toggleable menu buttons',
			image: imgSize,
			path: "dropdowns"
		},
		{
			title: 'List Groups',
			description: 'List element styles', 
			image: imgSize,
			path: "list-groups" 
		},
		{
			title: 'Modals',
			description: 'Overlay pop up windows',
			image: imgSize,
			path: "modals"
		},
		{
			title: 'Navs & Navbars',
			description: 'Navigation components',
			image: imgSize,
			path: "navs-navbars"
		},
		{
			title: 'Pagination', 
			description: 'Page number indicators',
			image: imgSize,
			path: "pagination"
		},
		{
			title: 'Popovers',
			description: 'Small overlay content',
			image: imgSize, 
			path: "popovers"
		},
		{
			title: 'Progress Bars',
			description: 'Progress indicators',
			image: imgSize,
			path: "progress-bars"
		}
	]

	const getting_started =[
		{
			title: 'Introduction',
			path: "introduction" 
		},
		{
			title: 'Download',
			path: "download" 
		},
		{
			title: 'Contents',
			path: "components" 
		},
		
	]

	const handleMouseOver = (e) => {
		e.target.style.backgroundColor = 'rgb(254,236,189)';
		e.target.style.borderRadius = '5px';
		e.target.style.cursor = 'pointer'; 
	}
		
	const handleMouseOut = (e) => {
		e.target.style.backgroundColor = '';
		e.target.style.borderRadius = ''; 
		e.target.style.cursor = 'default';
		e.target.style.padding = ''; 
	}

	const handleClick = (e, path) => {
		e.target.style.backgroundColor = 'rgb(254,236,189)';
		e.target.style.borderRadius = '5px'; 
		e.target.style.fontWeight = 'bold';
		navigate(`/${path}`);
	}

	return (
			
		<div className="col-2 rounded m-3" style={{backgroundColor: "rgb(255,243,218)"}}>

			<nav className="nav flex-column mt-3">
			<h5 className="fw-medium" style={{fontSize: '1.1rem'}}>
				<i className="bi bi-boxes"></i>
				Getting started
			</h5>

			<ul className="list-unstyled">
				{getting_started.map(item => (
				<li 
					className="ps-2 fw-lighter"
					style={{fontSize: '0.95rem'}}
					onMouseOver={handleMouseOver}  
					onMouseOut={handleMouseOut}
					onClick={e => handleClick(e, item.path)}
				>
					{item.title}
				</li>
				))}
			</ul>
			</nav>

			<nav className="nav flex-column mt-3">
			<h5 className="fw-medium" style={{fontSize: '1.1rem'}}>
				Components
			</h5>

			<ul className="list-unstyled">
				{component_category.map(item => (
				<li
					className="ps-2 fw-lighter" 
					style={{fontSize: '0.95rem'}}
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
					onClick={e => handleClick(e, item.path)}
				>
					{item.title}
				</li>
				))}
			</ul>
			</nav>

		</div>
		
	)
}




{/* <div>
<p className="text-warning fw-bolder mt-5">/Components</p>
<h2 className="fw-bolder" >Beautifully crafted UI components, ready for your next project.</h2>
<p>Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.	</p>
<p className="text-warning fw-bolder">Browse all components →</p>

<ButtonAdmin/>


<div class="row mt-5">
	{component_category.map((item) => (
		<div className="col-12 col-md-6 col-lg-3 mb-4">
			<div class="card h-100 mx-1 shadow">
				<img src={item.image} class="card-img-top" alt={item.title}/>
				<div class="card-body pt-2">
					<h5 class="card-title text-warning">{item.title}</h5>
					<p class="card-text text-muted">{item.description}</p>
				</div>
			</div>
		</div>
	))}
	
</div>
</div> */}


	{/* <ul>
      <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Item 1</li>
      <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Item 2</li>
      <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Item 3</li>
    </ul> */}