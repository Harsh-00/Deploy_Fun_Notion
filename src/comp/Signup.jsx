import React from "react";

import img from "../asset/signupp.png";
import Template from "./Template";

const Signup = (props) => {
	let setLogged = props.set;

	return (
		<Template
			title="Joint the Millions of People to code with FUN"
			d1="Enhance skills By Collabrating with Others"
			d2="Sign Up Now"
			FormType="signup"
			setLoggedin={setLogged}
			img={img}
		></Template>
	);
};

export default Signup;
