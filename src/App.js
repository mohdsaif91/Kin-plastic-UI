import React, { useEffect, useState } from 'react';
import { Switch, Route, withRouter } from 'react-router';
import { useSelector } from 'react-redux';

import Footer from './Component/Footer';
import Header from './Component/Header';
import Client from './Pages/Client';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Products from './Pages/Products';
import ReachUs from './Pages/ReachUs';
import Services from './Pages/Services';
import AboutUs from './Pages/AboutUs';

function App(props) {
	const admin = useSelector((state) => state.AdminReducer);
	const [footer, setFooter] = useState(true);
	const [showAdmin, setShowAdmin] = useState(admin.adminRights);

	useEffect(() => {
		setFooter(props.location.pathname !== '/login');
	}, [props.location.pathname]);

	useEffect(() => {
		setShowAdmin(admin.adminRights);
	}, [admin.adminRights]);

	return (
		<div className="app-container">
			{showAdmin ? (
				<h1>ADMIN</h1>
			) : (
				<>
					<Header hideRest={footer} />
					<div className="page-container">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/aboutUs" component={AboutUs} />
							<Route exact path="/product" component={Products} />
							<Route exact path="/service" component={Services} />
							<Route exact path="/reachUs" component={ReachUs} />
							<Route exact path="/login" component={LogIn} />
							<Route exact path="/clients" component={Client} />
						</Switch>
					</div>
					{footer && <Footer />}
				</>
			)}
		</div>
	);
}

export default withRouter(App);
