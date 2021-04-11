import React, { useRef, useState } from "react";
import classes from './SignIn.module.scss';

import { useAuth } from "../../AuthContext";
import { useHistory, Link } from "react-router-dom";
export default function SignIn() {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const { signin } = useAuth();
	const emailRef = useRef();
	const passRef = useRef();
	const history = useHistory();
	function handleSubmit(e) {
		e.preventDefault();
		try {
			setError("");
			setLoading(true);
			signin(emailRef.current.value, passRef.current.value);
			setLoading(false);
			history.push("/");
		} catch (e) {
			setLoading(false);
			setError("Failed To Login");
		}
	}
	return (
		<div>
			<div>
				Dont Have An Account. <Link to="/signup">Sign Up</Link>
			</div>
			{error}
			<form>
				<input type="email" placeholder="email" required ref={emailRef} />
				<input type="password" placeholder="password" required ref={passRef} />
				<button disabled={loading} onClick={handleSubmit}>
					SignIn
				</button>
				<p>
					<Link to="/forgot-password"> Forgot Password</Link>
				</p>
			</form>
		</div>
	);
}
