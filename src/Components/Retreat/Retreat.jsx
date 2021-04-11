import React from "react";
import classes from "./Retreat.module.scss";
export default function Retreat({ expType, venue, price, date, image, title }) {
	return (
		<div className={classes.retreat}>
			<div className={classes.rtHeader}>
				<img src={image} className={classes.rtImage} />
				<div className={classes.rtDetails}>
					<div className={classes.rtVenue}>
						<p>{expType} Experience</p>
						<p>{venue}</p>
					</div>
					<div className={classes.rtPrice}>Rs.{price.toString()}/-</div>
					<div className={classes.rtDate}>{date}</div>
					<div className={classes.rtBook}>
						<button className={classes.rtBookBtn}>Book Your Seat</button>
					</div>
				</div>
			</div>
			<div className={classes.rtFooter}>{title || "Yoga Retreat"}</div>
		</div>
	);
}
