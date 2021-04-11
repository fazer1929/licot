import React, { useEffect, useState } from "react";
import classes from "./home.module.scss";
import SliderComponent from "../Slider/SliderComponent";
import Retreat from "../Retreat/Retreat";
// Example Data For The Retreats
const data = [
	{

		image:
			"https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		title: "Find Doctor Near You",
	},
	{

		image:
			"https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		title: "Find Medicine Details ",
	},
	{

		image:
			"https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		title: "Find Test Centers Near You",
	},
	{

		image:
			"https://images.pexels.com/photos/6787498/pexels-photo-6787498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		title: "Yoga and Meditation center near you",
	},
	{

		image:
			"https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		title: "Gym and Zen Meditation ",
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
				<div className={classes.upcoming}>
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
