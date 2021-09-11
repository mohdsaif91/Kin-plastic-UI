import React, { useEffect, useState } from 'react';

import * as s from './Sidebar.styles';

export default function SideBar(props) {
	const {
		backgroundImage = '',
		sidebarHeader = { fullName: '', shortName: '' },
		menuItems = [],
		font = { header: '', menu: '' },
	} = props;
	const [selected, setSelected] = useState(menuItems[0].name);
	const [openSide, setOpenSide] = useState(true);

	const registerWidth = () => {
		console.log(window.innerWidth, ' > ', 1280);
		setOpenSide(window.innerWidth > 1100);
	};

	useEffect(() => {
		window.addEventListener('resize', () => registerWidth());
		return () => window.removeEventListener('resize', () => registerWidth());
	}, []);

	const menuItemJSX = menuItems.map((item, key) => {
		const isSelected = selected === item.name;

		return (
			<s.MenuItem
				key={key}
				onClick={() => handleMenuItemClick(item.name)}
				font={font.menu}
				isSelected={isSelected}
				openSide={openSide}
			>
				<s.Icon openSide={openSide} src={item.icon}></s.Icon>
				<s.Text openSide={openSide}>{item.name}</s.Text>
			</s.MenuItem>
		);
	});

	const handleMenuItemClick = (name) => {
		setSelected(name);
	};

	return (
		<s.SidBarContainer backgroundImage={backgroundImage} openSide={openSide}>
			<s.SideBarHeader font={font.header}>
				{openSide ? sidebarHeader.fullName : sidebarHeader.shortName}
			</s.SideBarHeader>
			<s.MenuItemContainer>{menuItemJSX}</s.MenuItemContainer>
			<s.TogglerContainer onClick={() => setOpenSide(!openSide)}>
				<s.Toggler />
			</s.TogglerContainer>
		</s.SidBarContainer>
	);
}
