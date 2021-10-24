import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="black-footer">
      <div className="footer-header">
        <div className="header-socialMedia">
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
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-main-text">Let's Talk ?</div>
        <NavLink to="/aboutUs">
          <a className="make-inquery" href="/#">
            Make an enquiry!
          </a>
        </NavLink>
      </div>
      <div className="address">
        <div className="city">Mumbai</div>
        <a className="phone" href="tele:+911234567890">
          +911234567890
        </a>
      </div>
      <div className="footer-address-link">
        <div className="links">
          <ul className="sci">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Home
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                Product
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // <div className="footer">
    // 	<div className="content">
    // 		<div className="link-boxes">
    // 			<ul className="box">
    // 				<li className="link_name">Links</li>
    // 				<li>
    // 					<a href="/#">Home</a>
    // 				</li>
    // 				<li>
    // 					<a href="/#">Contact</a>
    // 				</li>
    // 				<li>
    // 					<a href="/#">About Us</a>
    // 				</li>
    // 				<li>
    // 					<a href="/#">Get Started</a>
    // 				</li>
    // 			</ul>
    // 			<ul className="box">
    // 				<li className="link_name">Services</li>
    // 				<li>
    // 					<a href="/#">App Design</a>
    // 				</li>
    // 				<li>
    // 					<a href="/#">Web Design</a>
    // 				</li>
    // 				<li>
    // 					<a href="/#">Logo Design</a>
    // 				</li>
    // 				<li>
    // 					<a href="/#">Banner Design</a>
    // 				</li>
    // 			</ul>
    // 			<ul className="box">
    // 				<li className="link_name">Other services</li>
    // 				<li>
    // 					<a href="/#">SEO</a>
    // 				</li>
    // 				<li>
    // 					<a href="/#">Content Marketing</a>
    // 				</li>
    // 				<li>
    // 					<a href="/#">Prints</a>
    // 				</li>
    // 				<li>
    // 					<a href="/#">Social Media</a>
    // 				</li>
    // 			</ul>
    // 			<ul className="box">
    // 				<li className="link_name">Contact</li>
    // 				<li>
    // 					<a href="/#">+91 8879887262</a>
    // 				</li>
    // 				<li>
    // 					<a href="/#">+91 8879887262</a>
    // 				</li>
    // 				<li>
    // 					<a href="/#">contact@sitesoch.com</a>
    // 				</li>
    // 			</ul>
    // 		</div>
    // 	</div>
    // 	<div className="bottom-details">
    // 		<div className="bottom_text">
    // 			<span className="copyright_text">
    // 				Copyright © 2021 <a href="/#">Kin Plastic.</a>
    // 			</span>
    // 		</div>
    // 	</div>
    // </div>
  );
}
