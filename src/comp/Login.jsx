import React from "react";
import Template from "./Template";
import img from "../asset/loginn.jpg";

const Login = (props) => {
	let setLogged = props.set;

	return (
		<Template
			title="Welcome To Fun-Notion"
			d1="Learning Things in a Fun way"
			d2="Keep Going"
			FormType="login"
			setLoggedin={setLogged}
			img={img}
		></Template>
	);
};

export default Login;
