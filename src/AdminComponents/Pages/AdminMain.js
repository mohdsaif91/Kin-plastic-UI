import React from 'react';
import { Route, Switch } from 'react-router';

import AdminHeader from '../Components/AdminHeader';
import AdminHome from './AdminHome';

export default function AdminMain() {
	return (
		<div>
			<AdminHeader />
			<div className="page-container">
				<Switch>
					<Route path="/" component={AdminHome} />
				</Switch>
			</div>
		</div>
	);
}
