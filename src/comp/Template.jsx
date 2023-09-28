import React from "react";
import frame from "../asset/frame.png";
import LoginF from "./LoginF";
import SignupF from "./SignupF";
import { FcGoogle } from "react-icons/fc";

const Template = (props) => {
	return (
		<div className="flex w-11/12 max-w-[1160px] mx-auto py-6 justify-between overflow-x-hidden px-3">
			<div className="w-11/12 max-w-[450px] ">
				<h1 className="font-semibold text-[1.875rem] leading-[2.375rem]">
					{props.title}
				</h1>
				<div className="text-[1.2rem] leading-[1.625rem] mt-3 opacity-70">
					<p>{props.d1}</p>
					<p className="text-blue-400 italic mb-6">{props.d2}</p>
				</div>

				{props.FormType === "login" ? (
					<LoginF set={props.setLoggedin}></LoginF>
				) : (
					<SignupF set={props.setLoggedin}></SignupF>
				)}

				<div className="flex w-full items-center mt-3 gap-3">
					<div className="h-[1px] bg-gray-700 flex-1"></div>
					<p
						className="font-medium text-[0.875rem] leading-[1.375rem]
					 text-gray-600"
					>
						OR
					</p>
					<div className="h-[1px] bg-gray-700 flex-1"></div>
				</div>

				<button className="flex gap-2 items-center justify-center w-full border border-gray-700 rounded-[8px] px-[12px] py-[8px] text-gray-300 mt-5">
					<FcGoogle className="text-xl"></FcGoogle>
					<span className="font-semibold">Sign Up with Google</span>
				</button>
			</div>
			<div className="relative w-11/12 max-w-[450px] ">
				<div className="absolute left-5 top-4 w-full h-full">
					{props.FormType === "login" ? (
						<img
							src={frame}
							loading="lazy"
							className="w-full"
						></img>
					) : null}
				</div>
				<div className="absolute max-w-[500px] ">
					<img src={props.img} loading="lazy" className="w-[500px]"></img>
				</div>
			</div>
		</div>
	);
};

export default Template;
