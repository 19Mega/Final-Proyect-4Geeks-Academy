import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Component, Chau } from "../component/Componentify/components-test"

import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
			<Chau />
			<Component />
		</div>
	);
};
