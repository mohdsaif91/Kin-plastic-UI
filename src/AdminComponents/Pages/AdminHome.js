import React, { useEffect, useState } from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import { useDispatch, useSelector } from 'react-redux';

import { getSettingHome, updateSettingHome } from '../../Redux/Thunks/AdminHome';

export default function AdminHome() {
	const [data, setData] = useState(null);

	const dispatch = useDispatch();

	const pageSetting = useSelector((state) => state.AdminHomeSetting.setting);

	useEffect(() => {
		dispatch(getSettingHome());
	}, [dispatch, data]);

	useEffect(() => {
		if (!data) {
			setData(pageSetting);
		}
	}, [pageSetting, data]);

	const saveSetting = () => {
		dispatch(updateSettingHome(data));
	};

	return (
		<div className="admin-home">
			<div className="page-heading">Home Page Setting</div>
			<div className="button-container">
				<button size="large" className="updateButton" onClick={() => saveSetting()}>
					Save Setting
				</button>
			</div>
			<div className="home-hero-setting">
				<div className="page-sub-heading">Home Page hero setting</div>
				<div className="color-container">
					<div className="react-colorfull">
						<HexColorPicker
							color={data?.homeHeroColor}
							onChange={(color) => setData({ ...data, homeHeroColor: color })}
						/>
						<HexColorInput
							className="HexColorInput"
							color={data?.homeHeroColor}
							onChange={(color) => setData({ ...data, homeHeroColor: color })}
							placeholder="Type a color"
							prefixed
							alpha
						/>
					</div>
					<div
						className="color-display"
						style={{ backgroundColor: data?.homeHeroColor }}
					></div>
				</div>
			</div>
		</div>
	);
}
