import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Main from "./comp/Main";
import Home from "./comp/Home";
import Dashboard from "./comp/Dashboard";
import Login from "./comp/Login";
import Signup from "./comp/Signup";
import PrivateRoute from "./comp/PrivateRoute";
import Navbar from "./comp/Navbar";

function App() {
	const [logged, setLogged] = useState(false);
	console.log("Log: ", logged);

	return (
		<div className=" text-white bg-[#000814] w-screen min-h-screen  ">
			<Navbar logged={logged} set={setLogged}></Navbar>

			<Routes>
			
				<Route path="/" element={<Main />}>
					<Route index element={<Home />} />
					<Route
						path="/login"
						element={<Login logged={logged} set={setLogged} />}
					/>
					<Route
						path="/signup"
						element={<Signup logged={logged} set={setLogged} />}
					/>
					<Route
						path="/dashboard"
						element={
							<PrivateRoute logged={logged}>
								<Dashboard />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
