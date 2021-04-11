import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import classes from './Dashboard.module.scss';
import ProfileLogo from '../../assets/logo/user.png';
import {db} from '../../firebase'
;function Dashboard() {
	const { currentUser, signout } = useAuth();
	const [fullname,setFullname] = useState('');
	const [user,setUser] = useState(0);
	const history = useHistory();
	function logout() {
		try {
			signout();
			history.push("/");
		} catch {
			history.push("/");
		}
	}

	useEffect(() => {
if(currentUser){
	db.collection("profiles").doc(currentUser.uid).onSnapshot(function (doc){
		setFullname(doc?.data()?.fullname)
		doc?.data()?.id == 1 ? setUser(1) : setUser(2);
	})
}
	}, [currentUser])
	return (
		<div className={classes.dashboard}>

			<div className={classes.dashboardTop}>
				<div className={classes.dashboardTopLeft}>
					<img src={ProfileLogo} alt="profile logo"/>
				</div>
				<div className={classes.dashboardTopRight}>
					<p>Name : {fullname}</p>
				<p>Email: {currentUser.email}</p>
			<button onClick={logout}>LogOut</button>
				</div>

			</div>
			{
				
				user === 1 ? 			<div className={classes.dashboardBottom}>
				<div className={classes.dashboardBottomLeft}>
					<h3>Profile Setting</h3>
						<div>
							<p>Working Hours : 9 AM - 2 PM and 6 PM - 10 PM</p>
							<p>Qualification : MBBS</p>
							<p>Contact No. : 1234567890</p>
						</div>
				</div>
				<div className={classes.dashboardBottomRight}>
					<h4>Appointment list</h4>
						<ul>
							<li>9AM - 10AM <ul><li>Abhishek</li><li>Kuldeep</li><li>Virat</li></ul></li>
							<li>10AM - 11AM <ul><li>Abhishek</li><li>Kuldeep</li><li>Virat</li></ul></li>
							<li>11AM - 12PM <ul><li>Abhishek</li><li>Kuldeep</li><li>Virat</li></ul></li>
							<li>12PM - 1PM <ul><li>Abhishek</li><li>Kuldeep</li><li>Virat</li></ul></li>
							<li>1PM - 2PM <ul><li>Abhishek</li><li>Kuldeep</li><li>Virat</li></ul></li>
						</ul>
				</div>
			</div> : <div className={classes.dashboardBottom}>

			<div className={classes.dashboardBottomLeft}>
			<h4>Upcoming Appointment</h4>
		<p>10AM - 11AM : Dr. Agrawal</p>
				</div>
				<div className={classes.dashboardBottomRight}>
					<h4>Health card
				</h4>

				</div>
				</div>
				
			}

		</div>
	);
}

export default Dashboard;
