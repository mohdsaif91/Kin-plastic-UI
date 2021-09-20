import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import pepsi1 from '../images/pepsi001.png';
import pepsi2 from '../images/pepsi002.png';
import pepsi3 from '../images/pepsi003.png';
import Rocket from '../images/rocket.svg';
import BarChart from '../images/barChart.svg';
import PieChart from '../images/pie-chart.svg';
import { getSettingHome } from '../Redux/Thunks/AdminHome';
import Loading from '../Component/Loading';

const heroData = [
	{
		id: 1,
		heading: 'refreshing blue',
		sub: 'This is the best in class and most sold pepsi in the market,between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network, or may also	be sent via an Internet connection',
		img: pepsi1,
	},
	{
		id: 2,
		heading: 'feel light',
		sub: 'If you are Health concises than this product can reduce your weight,between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network, or may also	be sent via an Internet connection ',
		img: pepsi2,
	},
	{
		id: 3,
		heading: 'Less Sweet',
		sub: 'Zero sugar means no added any sweetness which means this product is Raw in Sweetness, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network, or may also	be sent via an Internet connection ',
		img: pepsi3,
	},
];

let count = 0;

export default function Home() {
	const [hero, setHero] = useState(heroData[0]);
	const dispatch = useDispatch();

	const pageHomeData = useSelector((state) => state.AdminHomeSetting.setting);

	const changeHero = () => {
		if (count >= heroData.length) {
			count = 0;
		}
		setHero(heroData[count]);
		count = count + 1;
	};

	useEffect(() => {
		setInterval(changeHero, 5000);
	}, []);

	useEffect(() => {
		if (!pageHomeData) {
			dispatch(getSettingHome());
		}
	}, [pageHomeData]);

	console.log(pageHomeData);

	return (
		<div className="home-container">
			{!pageHomeData ? (
				// {true ? (
				<Loading />
			) : (
				<>
					<div
						className="hero-container"
						style={{ background: `${pageHomeData.homeHeroColor || '#22bda6'}` }}
					>
						<div className="home-content">
							<div className="text-box">
								<h2>
									{hero.heading}
									<br />
									<span>I like</span>
								</h2>
								<p>{hero.sub}</p>
								<a href="/product">View Products</a>
							</div>
							<div className="img-box">
								<img alt="" src={hero.img} className="pepsi" />
							</div>
							<ul className="thumb">
								{heroData.map((m, index) => (
									<li
										className={`${m.id === hero.id && 'active-img'}`}
										onClick={() => setHero(heroData[index])}
									>
										<img alt="" src={m.img} />
									</li>
								))}
							</ul>
							<ul className="sci">
								<li>
									<a
										href="https://www.facebook.com/"
										target="_blank"
										rel="noreferrer"
									>
										<i class="fa fa-facebook-official" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a href="https://twitter.com/" target="_blank" rel="noreferrer">
										<i class="fa fa-twitter" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a
										href="https://www.instagram.com/"
										target="_blank"
										rel="noreferrer"
									>
										<i class="fa fa-instagram" aria-hidden="true"></i>;
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="hero-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the
						1500s, when an unknown printer took a galley of type and scrambled it to
						make a type specimen book. It has survived not only five centuries, but also
						the leap into electronic typesetting, remaining essentially unchanged. It
						was popularised in the 1960s with the release of Letraset sheets containing
						Lorem Ipsum passages, and more recently with desktop publishing software
						like Aldus PageMaker including versions of Lorem Ipsum
					</div>
					<div className="home-cards">
						<div className="home-card selected">
							<div className="img-container">
								<img src={BarChart} />
							</div>
							<div className="card-header">
								Future Vision
								<div className="highlight"></div>
							</div>

							<p>
								It is a long established fact that a reader will be distracted by
								the readable content of a page.
							</p>
						</div>
						<div className="home-card">
							<div className="img-container">
								<img src={Rocket} />
							</div>
							<div className="card-header">
								Product Design
								<div className="highlight"></div>
							</div>
							<p>
								There are many variations of passages of available, but the majority
								alteration in some form.
							</p>
						</div>
						<div className="home-card">
							<div className="img-container">
								<img src={PieChart} />
							</div>
							<div className="card-header">
								Invoative Solutions
								<div className="highlight"></div>
							</div>
							<p>
								The generated Lorem Ipsum is therefore always free from repetition,
								injected humour.
							</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
