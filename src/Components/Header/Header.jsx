import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import { AiOutlineBars } from "react-icons/ai";
import logo from "../assets/logo.jpg";
export default function Header() {
	const navRightRef = useRef();
	const [navOpen, setNavOpen] = useState(false);
	const toogleButton = () => {
		const ref = navRightRef.current;
		if (!navOpen) ref.style.display = "flex";
		else ref.style.display = "none";
		setNavOpen(!navOpen);
	};
	return (
		<div className={classes.header}>
			<nav className={classes.navbar}>
				<div className={classes.navbarLeft}>
					<img src={logo} alt="Sand&Sea" />
				</div>
				<div ref={navRightRef} className={classes.navbarRight}>
					<Link to="/" className={classes.navLink}>
						Home
					</Link>
					<Link to="/" className={classes.navLink}>
						Contact
					</Link>
					<Link to="/" className={classes.navLink}>
						About Us
					</Link>
				</div>
				<button
					href="/"
					onClick={toogleButton}
					className={classes.toggleButton}
				>
					<AiOutlineBars size={32} color="black" />
				</button>
			</nav>
		</div>
	);
}
