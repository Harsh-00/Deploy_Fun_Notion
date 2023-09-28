import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { TbLetterF } from "react-icons/tb";

const Main = () => {
	return (
		<div>
			<Outlet></Outlet>
		</div>
	);
};

export default Main;
