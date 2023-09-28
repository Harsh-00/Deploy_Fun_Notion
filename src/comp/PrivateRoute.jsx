import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ logged, children }) => {
	if (logged) return children;
	else return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;

// here children is simply the content in the PrivateRoute component (used in App.jsx)
