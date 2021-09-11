import React, { useState } from 'react';

import pepsi1 from '../images/pepsi001.png';
import pepsi2 from '../images/pepsi002.png';
import pepsi3 from '../images/pepsi003.png';

const pepsi1content = {
	heading: 'refreshing blue',
	sub: 'This is the best in class and most sold pepsi in the market,between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network, or may also	be sent via an Internet connection',
};

const pepsi2content = {
	heading: 'feel light',
	sub: 'If you are Health concises than this product can reduce your weight,between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network, or may also	be sent via an Internet connection ',
};

const pepsi3content = {
	heading: 'Less Sweet',
	sub: 'Zero sugar means no added any sweetness which means this product is Raw in Sweetness, between two or more users of mobile devices, desktops/laptops, or another type of compatible computer. Text messages may be sent over a cellular network, or may also	be sent via an Internet connection ',
};

const initialProps = {
	image: pepsi1,
	textContent: pepsi1content,
};

export default function Home() {
	const [image, setImage] = useState({ ...initialProps });

	return (
		<div className="home-container">
			<div className="hero-container">
				<div className="home-content">
					<div className="text-box">
						<h2>
							{image.textContent.heading}
							<br />
							<span>I like</span>
						</h2>
						<p>{image.textContent.sub}</p>
						<a href="/product">View all products</a>
					</div>
					<div className="img-box">
						<img src={image.image} className="pepsi" />
					</div>
					<ul className="thumb">
						<li
							className={`${
								image.textContent.heading === 'refreshing blue' && 'active-img'
							}`}
							onClick={() => setImage({ image: pepsi1, textContent: pepsi1content })}
						>
							<img src={pepsi1} />
						</li>
						<li
							className={`${
								image.textContent.heading === 'feel light' && 'active-img'
							}`}
							onClick={() => setImage({ image: pepsi2, textContent: pepsi2content })}
						>
							<img src={pepsi2} />
						</li>
						<li
							className={`${
								image.textContent.heading === 'Less Sweet' && 'active-img'
							}`}
							onClick={() => setImage({ image: pepsi3, textContent: pepsi3content })}
						>
							<img src={pepsi3} />
						</li>
					</ul>
					<ul className="sci">
						<li>
							<a href="https://www.facebook.com/" target="_blank">
								<i class="fa fa-facebook-official" aria-hidden="true"></i>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/" target="_blank">
								<i class="fa fa-twitter" aria-hidden="true"></i>
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/" target="_blank">
								<i class="fa fa-instagram" aria-hidden="true"></i>;
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="hero-text">main text goes here</div>
		</div>
	);
}
