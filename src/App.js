import logo from "./logo.svg";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
function App() {
	return (
		<Router>
			<Switch>
				<PrivateRoute exact path="/" component={Dashboard} />
				<Route path="/signup" component={SignUp} />
				<Route path="/signin" component={SignIn} />
				<Route path="/forgot-password" component={ForgotPassword} />
			</Switch>
		</Router>
	);
}

export default App;
