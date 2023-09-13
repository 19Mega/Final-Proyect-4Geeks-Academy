import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {Component1} from "../component/component-test/component-test"; 
import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Component1 />
			
		</div>
	);
};
