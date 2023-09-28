import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BiShow, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const SignupF = (props) => {
	const setLogged = props.set;
	const [info, setInfo] = useState({
		first: "",
		last: "",
		email: "",
		pass: "",
		repass: "",
	});

	const [pass, setPass] = useState(false);
	const [pass2, setPass2] = useState(false);
	const navi = useNavigate();

	const [account, setAccount] = useState("student");

	function ChangeHandler(ev) {
		setInfo((prev) => {
			const { name, value } = ev.target;
			return { ...prev, [name]: value };
		});
	}
	const ShowHandler = () => {
		setPass((prev) => !prev);
	};
	const ShowHandler2 = () => {
		setPass2((prev) => !prev);
	};
	const finalInfo = { ...info, account };

	function SubmitHandler(ev) {
		ev.preventDefault();
		if (info.pass !== info.repass) {
			toast.error("Password do no match");
			return;
		}
		toast.success("Account Created");
		navi("/dashboard");
		setLogged(true);
		console.log("Sign up data :", finalInfo);
	}

	return (
		<div>
			<form onSubmit={SubmitHandler} className="w-full max-w-[450px]">
				<div className="flex bg-gray-900 p-2 gap-1 px-4 my-2 rounded-full w-fit text-gray-400">
					<button
						onClick={(ev) => {
							ev.preventDefault();
							setAccount("student");
						}}
						className={`${
							account === "student"
								? "bg-gray-700 text-white rounded-full "
								: "bg-transparent text-gray-400 "
						}py-2 px-5 transition-all duration-200`}
					>
						Student
					</button>
					<button
						onClick={(ev) => {
							ev.preventDefault();
							setAccount("instructor");
						}}
						className={`${
							account === "instructor"
								? "bg-gray-700 text-white rounded-full "
								: "bg-transparent text-gray-400 "
						}py-2 px-5 transition-all duration-200`}
					>
						Instructor
					</button>
				</div>

				<div className="w-full flex gap-4 mt-1">
					<div className="flex flex-col w-full">
						<label className="text-[0.875rem] mt-2 text-gray-300 mb-1 leading-[1.375rem] font-semibold">
							First Name <sup className="text-red-600">*</sup>
						</label>
						<input
							type="text"
							id="first"
							name="first"
							value={info.first}
							onChange={ChangeHandler}
							placeholder="Enter Here..."
							required
							className="bg-gray-800 rounded-[0.5rem] p-[12px] border-b-2 border-gray-500"
						></input>
					</div>

					<div className="flex flex-col w-full">
						<label className="text-[0.875rem] mt-2 text-gray-300 mb-1 leading-[1.375rem] font-semibold">
							Last Name
						</label>
						<input
							type="text"
							id="last"
							name="last"
							value={info.last}
							onChange={ChangeHandler}
							placeholder="Enter Here..."
							className="bg-gray-800 rounded-[0.5rem] p-[12px] border-b-2 border-gray-500"
						></input>
					</div>
				</div>
				<div className="flex flex-col w-full ">
					<label className="text-[0.875rem] mt-4 text-gray-300 mb-1 leading-[1.375rem] font-semibold">
						Email Address<sup className="text-red-600">*</sup>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={info.email}
						onChange={ChangeHandler}
						placeholder="Enter Here..."
						className="bg-gray-800 rounded-[0.5rem] p-[12px] border-b-2 border-gray-500"
					></input>
				</div>
				<div className="flex gap-4 mt-1">
					<div className="flex flex-col w-full">
						<label className="text-[0.875rem] mt-3 text-gray-300 mb-1 leading-[1.375rem] font-semibold">
							Create Password<sup className="text-red-600">*</sup>
						</label>
						<div className="w-full relative">
							<input
								type={pass ? "text" : "password"}
								id="pass"
								name="pass"
								value={info.pass}
								onChange={ChangeHandler}
								placeholder="Enter Here..."
								required
								className="bg-gray-800 rounded-[0.5rem] p-[12px] border-b-2 w-full border-gray-500"
							></input>
							<span
								onClick={ShowHandler}
								className="absolute z-10 top-3.5 right-3.5 text-2xl cursor-pointer"
							>
								{pass ? <BiHide></BiHide> : <BiShow></BiShow>}
							</span>
						</div>
					</div>

					<div className="flex flex-col w-full">
						<label className="text-[0.875rem] mt-3 text-gray-300 mb-1 leading-[1.375rem] font-semibold">
							Confirm Password
							<sup className="text-red-600">*</sup>
						</label>
						<div className="w-full relative">
							<input
								type={pass2 ? "text" : "password"}
								id="repass"
								name="repass"
								value={info.repass}
								onChange={ChangeHandler}
								placeholder="Enter Here..."
								required
								className="bg-gray-800 rounded-[0.5rem] p-[12px] border-b-2 border-gray-500 w-full"
							></input>
							<span
								onClick={ShowHandler2}
								className="absolute z-10 top-3.5 right-3.5 text-2xl cursor-pointer"
							>
								{pass2 ? <BiHide></BiHide> : <BiShow></BiShow>}
							</span>
						</div>
					</div>
				</div>
				<input
					type="submit"
					value="Create Account"
					className="bg-yellow-400 
					rounded-[8px] font-semibold text-gray-800 py-[8px] mt-6 w-full"
				></input>
			</form>
		</div>
	);
};

export default SignupF;
