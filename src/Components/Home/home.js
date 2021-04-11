import React, { useEffect, useState } from "react";
import classes from "./home.module.scss";
import SliderComponent from "./SliderComponent";
import Header from "./Header";
import Retreat from "./Retreat";
// Example Data For The Retreats
const data = [
	{
		expType: "Online",
		venue: "Zoom",
		price: 5000,
		date: "27th May 2021",
		image:
			"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&dpr=1",
		title: "30 Days Online Yoga, Pranayama, and Meditation Retreat ",
	},
	{
		expType: "Online",
		venue: "Google Meet",
		price: 3000,
		date: "29th May 2021",
		image:
			"https://images.pexels.com/photos/4662447/pexels-photo-4662447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		title: "30 Days Online Yoga and Lecture ",
	},
	{
		expType: "Offline",
		venue: "Raipur, C.G.",
		price: 9000,
		date: "25th May 2021",
		image:
			"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&dpr=1",
		title: "25 Days Offline Yoga, Pranayama, and Transcendental Meditation ",
	},
	{
		expType: "Offline",
		venue: "Nagpur, M.P.",
		price: 8000,
		date: "20th June 2021",
		image:
			"https://images.pexels.com/photos/6787498/pexels-photo-6787498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		title: "25 Days Offline Yoga, Fitness, and Mindfulness Meditation ",
	},
	{
		expType: "Online",
		venue: "Skype",
		price: 4500,
		date: "10th June 2021",
		image:
			"https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		title: "45 Days Online Kundalini Yoga, Pranayama, and Zen Meditation ",
	},
];
const Home = () => {
	useEffect(() => {}, []);

	return (
		<>
			<div className={classes.content}>
				{/* Contains The Slider Component */}
				<div className={classes.slider}>
					<SliderComponent />
				</div>
				{/* Containes The Header(NavBar) Could Be put in App.js For differen Style */}
				<Header />
				<div className={classes.upcoming}>
					<h1 className={classes.upcomingHeading}>Upcoming Retreats</h1>
					<div className={classes.retreats}>
						{/* Maps Over the Data Elements to create a retreat block */}
						{data.map((elem, key) => (
							<Retreat
								key={key}
								expType={elem.expType}
								venue={elem.venue}
								price={elem.price}
								date={elem.date}
								image={elem.image}
								title={elem.title}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
