import React from 'react';

import * as s from './App.styles';
import Sidebar from './components/sidebar/SideBar';
import Mainview from './components/MainMenuView/MainView';

function AdminApp() {
	const backgroundImage = 'images/mountains.jpeg';
	const sidebarHeader = { fullName: 'Yo yo Travel', shortName: 'Yo' };
	const menuItems = [
		{ name: 'Home', to: '/', icon: 'icons/home.svg', subMenuItems: [] },
		{ name: 'About', to: '/about', icon: 'icons/about-us.svg', subMenuItems: [] },
		{
			name: 'Destination',
			to: '/destination',
			icon: 'icons/location-warning.svg',
			subMenuItems: [
				{ name: 'Canada', to: '/canada' },
				{ name: 'Brazil', to: '/brazil' },
				{ name: 'India', to: '/india' },
				{ name: 'Austrial', to: '/austrial' },
				{ name: 'Kenya', to: '/kenya' },
				{ name: 'Moldova', to: '/moldova' },
			],
		},
		{ name: 'Blog', to: '/blog', icon: 'icons/comment-blog.svg', subMenuItems: [] },
		{ name: 'Service', to: '/service', icon: 'icons/services.svg', subMenuItems: [] },
		{ name: 'Contacts', to: '/contacts', icon: 'icons/contact-us.svg', subMenuItems: [] },
	];
	const fonts = { header: 'ZCOOL Kuaile', menu: 'Poppins sans-serif' };

	return (
		<s.App>
			<Sidebar
				menuItems={menuItems}
				sidebarHeader={sidebarHeader}
				backgroundImage={backgroundImage}
				font={fonts}
			/>
			<Mainview />
		</s.App>
	);
}

export default AdminApp;
