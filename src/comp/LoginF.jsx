import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginF = (props) => {
	let setLogged = props.set;

	const [pass, setPass] = useState(false);
	const [info, setInfo] = useState({
		email: "",
		pass: "",
	});
	const navi = useNavigate();
	function ChangeHandler(ev) {
		setInfo((prev) => {
			const { name, value } = ev.target;
			return { ...prev, [name]: value };
		});
	}
	function SubmitHandler(ev) {
		ev.preventDefault();
		// console.log(info);
		console.log("Log in data :", info);
		toast.success("Logged In");
		navi("/dashboard");
		setLogged(true);
	}

	const ShowHandler = () => {
		setPass((prev) => !prev);
	};
	return (
		<div>
			<form onSubmit={SubmitHandler} className="flex flex-col ">
				<label
					htmlFor="em"
					className="text-[0.875rem] text-gray-300 mb-1 leading-[1.375rem] font-semibold"
				>
					Email Address<sup className="text-red-600">*</sup>
				</label>
				<input
					type="email"
					name="email"
					id="em"
					value={info.email}
					onChange={ChangeHandler}
					required
					placeholder="Enter Here..."
					className="bg-gray-800 rounded-[0.5rem] p-[12px] border-b-2 border-gray-500"
				></input>

				<label
					htmlFor="pas"
					className="text-[0.875rem] mt-4 text-gray-300 mb-1 leading-[1.375rem] font-semibold"
				>
					Password<sup className="text-red-600">*</sup>
				</label>
				<div className="w-full relative">
					<input
						type={pass ? "text" : "password"}
						name="pass"
						id="pas"
						value={info.pass}
						onChange={ChangeHandler}
						placeholder="Enter Here..."
						className="bg-gray-800 rounded-[0.5rem] p-[12px] border-b-2 border-gray-500 w-full"
					></input>
					<span
						onClick={ShowHandler}
						className="absolute z-10 top-3.5 right-3.5 text-2xl cursor-pointer"
					>
						{pass ? <BiHide></BiHide> : <BiShow></BiShow>}
					</span>
				</div>
				<p className="text-xs mt-1 text-blue-500 ml-auto">
					Forgot Password ?
				</p>
				<input
					type="submit"
					value="Sign In"
					className="bg-yellow-400 rounded-[8px] font-semibold text-gray-800  py-[8px] mt-12"
				></input>
			</form>
		</div>
	);
};

export default LoginF;
