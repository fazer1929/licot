import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import classes from "./SliderComponent.module.scss";
// import img1 from "../assets/main1.jpeg";
// import img2 from "../assets/main2.jpeg";
// import img3 from "../assets/main3.jpeg";

export default function SliderComponent() {
	return (
		// Acts as a slider Component for home
		<Carousel
			dynamicHeight={true}
			infiniteLoop={true}
			showStatus={false}
			showThumbs={false}
			className={classes.carousel}
		>
			<div>
				<img className={classes.image} src="https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
				<p className="legend">Free Your Body</p>
			</div>
			<div>
				<img className={classes.image} src="https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
				<p className="legend">Experience Nature</p>
			</div>
			<div>
				<img className={classes.image} src="https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
				<p className="legend">Live Freely</p>
			</div>
		</Carousel>
	);
}
