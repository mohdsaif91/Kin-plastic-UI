import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import DropDown from './DropDown';

const routes = [
	{ name: 'Home', to: '/', additionalClass: '', value: 'home' },
	{ name: 'Product', to: '/product', additionalClass: '', value: 'product' },
	{ name: 'Service', to: '/service', additionalClass: '', value: 'service' },
	{ name: 'About Us', to: '/aboutUs', additionalClass: '', value: 'abutUs' },
	{ name: 'Reach Us', to: '/reachUs', additionalClass: '', value: 'reachUs' },
	{ name: 'Login', to: '/login', additionalClass: 'side-menu', value: 'login' },
];

function Header(props) {
	const [openMenu, setOpenMenu] = useState(false);

	const [page, setPage] = useState('home');

	const setPageCloseNav = (data) => {
		setPage(data);
		setOpenMenu(false);
	};

	const change = () => {
		console.log('looki <>?');
		// setOpenMenu(!openMenu);
	};

	const openNav = () => {
		console.log('clicked on change the <>?');
		setOpenMenu(!openMenu);
	};

	console.log(openMenu, '<>? menu flag');

	return (
		<div className="main-header">
			<div className="left-container">
				<div className="logo">
					<NavLink to="/">
						<img src="//logo.clearbit.com/spotify.com" alt="" />
					</NavLink>
				</div>
				{!props.hideRest && window.innerWidth <= 759 && (
					<div className="logo-name-header">Kin Industries</div>
				)}
				<div className="logo-name">Kin Industries</div>
				{props.hideRest && (
					<div
						className="search-container"
						style={{ display: openMenu ? 'none' : 'inline-flex' }}
					>
						<div className="container">
							<div className="form-control">
								<form action="" autocomplete="off">
									<div className="search-wrapper">
										<label htmlfor="search">
											<i className="icon fa fa-search"></i>
											<input
												type="text"
												className="search-box"
												id="search"
												placeholder={
													window.innerWidth <= 768
														? 'Search on KIN Industries'
														: 'Search on KIN'
												}
											/>
										</label>
									</div>
								</form>
							</div>
						</div>
					</div>
				)}
			</div>
			{props.hideRest && (
				<>
					<input
						type="checkbox"
						value={openMenu}
						onChange={() => change()}
						className="menu-btn"
						id="menu-btn"
					/>
					<label for="menu-btn" onClick={() => openNav()} className="menu-icon">
						<span className="menu-icon__line"></span>
					</label>

					<ul className={`nav-links`}>
						{routes.map((m) => (
							<li
								className={`nav-link ${m.additionalClass} ${
									page === m.value && 'active'
								}`}
								onClick={() => setPageCloseNav(m.value)}
							>
								<NavLink to={m.to}>{m.name}</NavLink>
							</li>
						))}
					</ul>
				</>
			)}
			<div className="dropdown-container">
				<DropDown />
			</div>
		</div>
	);
}

export default withRouter(Header);