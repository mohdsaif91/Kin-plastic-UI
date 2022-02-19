import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getOrganisation } from "../Redux/Thunks/AdminAboutUs";

export default function Footer() {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.AdminAboutUs);

  useEffect(() => {
    if (!location.organisationData?.locationContact) {
      dispatch(getOrganisation());
    }
  }, [dispatch, location]);

  const getTheSocialLink = (data) => {
    console.log(data.platForm);
    switch (true) {
      case data.platForm === "Facebook":
        return (
          <a href={`https://${data.url}`} target="_blank" rel="noreferrer">
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
          </a>
        );
      case data.platForm === "Instagram":
        return (
          <a href={`https://${data.url}`} target="_blank" rel="noreferrer">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        );
      case data.platForm === "Youtube":
        return (
          <a href={`https://${data.url}`} target="_blank" rel="noreferrer">
            <i class="fa fa-youtube"></i>
          </a>
        );
      case data.platForm === "LinkedIn":
        return (
          <a href={`https://${data.url}`} target="_blank" rel="noreferrer">
            <i class="fa fa-linkedin" aria-hidden="true"></i>;
          </a>
        );
      case data.platForm === "Twitter":
        return (
          <a href={`https://${data.url}`} target="_blank" rel="noreferrer">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        );
      default:
        return <div></div>;
    }
  };

  return (
    <div className="black-footer">
      <div className="footer-header">
        <div className="header-socialMedia">
          <ul className="sci">
            {location?.organisationData?.social.map((m, index) => (
              <li key={index}>
                {getTheSocialLink(m)}
                {/* <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </a> */}
              </li>
            ))}
            {/* <li key="1">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
            </li>
            <li key="2">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li key="3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li key="4">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li key="5">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa fa-youtube"></i>
              </a>
            </li> */}
          </ul>
        </div>
        <div className="footer-main-text">Let's Talk ?</div>
        <NavLink to="/reachUs">
          <a className="make-inquery" href="/#">
            Make an enquiry!
          </a>
        </NavLink>
      </div>
      <div className="address">
        {location?.organisationData?.locationContact.map((m) => (
          <div key={m._id} className="phone-location">
            <div className="city">{m.location}</div>
            <a className="phone" href={`tel:+91${m.contact}`}>
              +91{m.contact}
            </a>
          </div>
        ))}
      </div>
      <div className="footer-address-link">
        <div className="links">
          <ul className="sci">
            <li key="1">
              <NavLink to="/">
                <a href="/#" target="_blank" rel="noreferrer">
                  Home
                </a>
              </NavLink>
            </li>
            <li key="2">
              <NavLink to="/product">
                <a href="/#" target="_blank" rel="noreferrer">
                  Product
                </a>
              </NavLink>
            </li>
            <li key="3">
              <NavLink to="/service">
                <a href="/#" target="_blank" rel="noreferrer">
                  Services
                </a>
              </NavLink>
            </li>
            <li key="4">
              <NavLink to="/aboutUs">
                <a href="/#" target="_blank" rel="noreferrer">
                  About us
                </a>
              </NavLink>
            </li>
            <li key="5">
              <NavLink to="/reachUs">
                <a href="/#" target="_blank" rel="noreferrer">
                  Reach us
                </a>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
