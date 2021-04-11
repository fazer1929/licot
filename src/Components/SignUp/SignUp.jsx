import React, { useRef, useState } from "react";
import classes from './SignUp.module.scss';
import { useAuth } from "../../AuthContext";
import { useHistory, Link } from "react-router-dom";
function SignUp() {
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const { signup } = useAuth();
	const emailRef = useRef();
	const passRef = useRef();
	const fullnameRef = useRef();
	const [id,setId] = useState('');
	const history = useHistory();


	const passConfirmRef = useRef();
	function handleSubmit(e) {
		e.preventDefault();
		if (passRef.current.value !== passConfirmRef.current.value) {
			return setError("Passwords Do Not Match");
		}
		try {
			setError("");
			setLoading(true);
			signup(emailRef.current.value, passRef.current.value, fullnameRef.current.value, id);
			setLoading(false);
			history.push("/");
		} catch {
			setLoading(false);
			setError("Failed To Create Account");
		}
	}
	return (
		<div className={classes.signup}>
			<div>
				Already Have An Account?<Link to="/signin"> Sign In.</Link>
			</div>
			{error}
			<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Full Name" required ref={fullnameRef} />
				<input type="email" placeholder="email" required ref={emailRef} />
				<input type="password" placeholder="password" required ref={passRef} />
				<input
					type="password"
					placeholder="password Confirm"
					required
					ref={passConfirmRef}
				/>
				<input type="radio" id="doctor" name="identity" value={1} onChange={(e)=>setId(e.target.value)} required/><label htmlFor="doctor">Doctor</label>
				<input type="radio" id="patient" name="identity" value={2} onChange={(e)=>setId(e.target.value)}/><label htmlFor="patient">Patient</label>
				<button disabled={loading} type="submit">
					SignUp
				</button>
			</form>
		</div>
	);
}

export default SignUp;
