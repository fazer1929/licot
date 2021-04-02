import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../AuthContext";

function Dashboard() {
	const { currentUser, signout } = useAuth();
	const history = useHistory();
	function logout() {
		try {
			signout();
			history.push("/");
		} catch {
			history.push("/");
		}
	}
	return (
		<div>
			DashBoard
			<p>Email: {currentUser.email}</p>
			<button onClick={logout}>LogOut</button>
		</div>
	);
}

export default Dashboard;
