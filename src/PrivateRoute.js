import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function PrivateRoute({ component: Component }, ...rest) {
	const { currentUser } = useAuth();
	return (
		<Route
			{...rest}
			render={(props) =>
				currentUser ? <Component {...props} /> : <Redirect to="/signin" />
			}
		></Route>
	);
}
