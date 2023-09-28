import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TbHexagonLetterF } from "react-icons/tb";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
	const navi = useNavigate();
	let logged = props.logged;
	let setLogged = props.set;

	function LoginH() {
		navi("/login");
	}

	function SignupH() {
		navi("/signup");
	}

	function DboardH() {
		navi("/dashboard");
	}

	function LogoutH() {
		navi("/login");
		setLogged(false);
		toast.success("Logged out");
	}

	return (
		<div>
			<div className="w-11/12  max-w-[1160px] py-4 flex justify-between text-white items-center mb-8 mx-auto">
				<div>
					<Link
						to="/"
						className="flex items-center font-semibold text-xl"
					>
						<TbHexagonLetterF className="text-3xl"></TbHexagonLetterF>
						unNotion
					</Link>
				</div>
				<div className="flex items-center gap-4 text-gray-200">
					<Link to="/">Home</Link>
					<p>About</p>
					<p>Contact</p>
				</div>
				<div className="flex gap-4 text-gray-200">
					{!logged && (
						<button
							onClick={LoginH}
							className="bg-gray-700 py-[8px] px-[12px] rounded-[8px] border border-gray-500"
						>
							Log in
						</button>
					)}
					{!logged && (
						<button
							onClick={SignupH}
							className="bg-gray-700 py-[8px] px-[12px] rounded-[8px] border border-gray-500"
						>
							Sign up
						</button>
					)}
					{logged && (
						<button
							onClick={DboardH}
							className="bg-gray-700 py-[8px] px-[12px] rounded-[8px] border border-gray-500"
						>
							Dashboard
						</button>
					)}
					{logged && (
						<button
							onClick={LogoutH}
							className="bg-gray-700 py-[8px] px-[12px] rounded-[8px] border border-gray-500"
						>
							Log out
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
