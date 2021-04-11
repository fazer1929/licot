import React from "react";
import classes from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
export default function Footer() {
	return (
		<div className={classes.footer}>
			<div className={classes.footerTop}>
				<div className={classes.left}>
					<Link> Sand and Sea </Link>
				</div>
				<div className={classes.center}>
					<input type="email" placeholder="Email" />
				</div>

				{/* Social Media Icons */}
				<div className={classes.right}>
					<span>
						<a href="https://api.whatsapp.com/send?phone=whatsappphonenumber&text=urlencodedtext">
							<IoLogoWhatsapp size={25} />
						</a>
					</span>
					<span>
						<a href="https://api.instagram.com/v1/users/userID?client_id=YourClientID">
							<AiOutlineInstagram size={25} />
						</a>
					</span>
					<span>
						<a href="http://twitter.com/IsabelleOC/statuses/">
							<FiTwitter size={25} />
						</a>
					</span>
					<span>
						<a href="https://linkedin.com/your/profile/url">
							<AiOutlineLinkedin size={25} />
						</a>
					</span>
				</div>
			</div>
			<hr />

			{/* Footer Middle Start */}
			<div className={classes.footerMiddle}>
				<div className={classes.left}>
					<h3>Information</h3>
					<ul>
						<li>
							<a href="#about">ABOUT US</a>
						</li>
						<li>
							<a href="#term">TERMS & CONDITIONS</a>
						</li>
						<li>
							<a href="#faq">FAQ</a>
						</li>
						<li>
							<a href="#sitemap">SITE MAP</a>
						</li>
						<li>
							<a href="#caution">CAUTION NOTICE</a>
						</li>
					</ul>
				</div>
				<div className={classes.center}>
					<h3>Categories</h3>
					<ul>
						<li>NATURAL HEALTH CARE</li>
						<li>AYURVEDIC MEDICINE</li>
						<li>HERBAL HOME CARE</li>
						<li>NATURAL PERSONAL CARE</li>
						<li>FIT INDIA CATEGORY</li>
					</ul>
				</div>
				<div className={classes.right}>
					<h3>Get In Touch</h3>
					<p>
						<a href="mailto:sandsea@gmail.com">Email : sand&sea@gmail.com</a>{" "}
					</p>
					<p>
						Sand & Sea Limited
						<br />
						New Delhi, India - 110001
						<br />
						Helpline number - 1800 180 180
					</p>
				</div>
			</div>
			<hr />
			<div className={classes.footerBottom}>
				<p>Copyright © 2021 Internship</p>
			</div>
		</div>
	);
}
