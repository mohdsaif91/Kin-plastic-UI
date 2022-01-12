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
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
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
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                Home
              </a>
            </li>
            <li key="2">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                Product
              </a>
            </li>
            <li key="3">
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
  );
}
