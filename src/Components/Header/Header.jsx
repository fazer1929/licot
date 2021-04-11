import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";
import { AiOutlineBars } from "react-icons/ai";

import {useAuth} from '../../AuthContext';

export default function Header() {
	const navRightRef = useRef();
	const {currentUser} = useAuth();
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
					Licot
				</div>
				<div ref={navRightRef} className={classes.navbarRight}>
					<Link to="/" className={classes.navLink}>
						Home
					</Link>
					<Link to="/contactus" className={classes.navLink}>
						Contact
					</Link>
					<Link to="/aboutus" className={classes.navLink}>
						About Us
					</Link>
					{currentUser != null ? (
        <Link to="/profile">
          <button className="headerBtn" outline>
            <span className="loginText"><i className="fa fa-user"></i>&nbsp;&nbsp;Profile</span>
          </button>
        </Link>
      ) : (
        <Link to="/signin">
          <button className="headerBtn" outline>
            <span className="loginText"><i className="fa fa-user"></i>&nbsp;&nbsp;Login / Sign Up</span> 
          </button>
        </Link>
      )}
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
