import React, { useState, useRef } from "react";
import { useAuth } from "../../AuthContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
export default function ForgotPassword() {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const { resetpassword } = useAuth();
	const emailRef = useRef();
	const history = useHistory();
	function handleSubmit(e) {
		e.preventDefault();
		try {
			setLoading(true);
			resetpassword(emailRef.current.value);
			setError("Check Your Mail For Further Details");
			setLoading(false);
		} catch {
			setLoading(false);
			setError("Failed To Reset Password");
		}
	}
	return (
		<div>
			<div>Already Have An Account? Login.</div>
			{error}
			<form>
				<input type="email" placeholder="email" required ref={emailRef} />
				<button disabled={loading} onClick={handleSubmit}>
					Confirm Reset Password
				</button>
				<p>
					<Link to="/signin"> Sign In</Link>
				</p>
			</form>
		</div>
	);
}
